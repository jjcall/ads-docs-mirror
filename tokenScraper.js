const puppeteer = require('puppeteer');
const fs = require('fs-extra');
const path = require('path');
const cheerio = require('cheerio');

/**
 * Scrape the Atlassian Design System tokens page and convert to structured markdown
 * @param {string} url - The URL of the tokens page
 * @param {string} filename - The output filename
 * @param {Object} options - Scraper options
 */
async function scrapeTokensPage(url, filename, options = {}) {
  // Default options
  const scrapeOptions = {
    rewriteExisting: false,
    useLocalFile: true, // Use the local HTML file if available
    ...options
  };

  // Define output paths
  const outputDir = path.join(__dirname, 'docs');
  const outputPath = path.join(outputDir, filename);

  // For backward compatibility, check if filename is still using the old naming scheme
  if (filename === 'designTokens.md') {
    // Use the new naming convention
    if (url.includes('tokens/all-tokens')) {
      const newFilename = 'tokens_all-tokens.md';
      console.log(`Updating filename from ${filename} to ${newFilename} to match new naming convention`);
      filename = newFilename;
    } else if (url.includes('design-tokens')) {
      const newFilename = 'design-tokens.md';
      console.log(`Updating filename from ${filename} to ${newFilename} to match new naming convention`);
      filename = newFilename;
    }
  }

  // Update outputPath with potentially new filename
  const updatedOutputPath = path.join(outputDir, filename);

  const htmlFilePath = path.join(outputDir, 'tokens-page.html');

  // Skip if file exists and we're not rewriting
  if (!scrapeOptions.rewriteExisting && await fs.pathExists(updatedOutputPath)) {
    console.log(`Skipping: ${filename} (file already exists)`);
    return;
  }

  console.log(`Processing tokens from: ${url}`);

  let html = '';

  // Try to use the local HTML file if available, otherwise scrape the web
  if (scrapeOptions.useLocalFile && await fs.pathExists(htmlFilePath)) {
    console.log(`Using local HTML file: ${htmlFilePath}`);
    html = await fs.readFile(htmlFilePath, 'utf8');
  } else {
    console.log(`Fetching HTML from: ${url}`);
    const browser = await puppeteer.launch({
      headless: "new",
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-web-security']
    });

    const page = await browser.newPage();
    await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36');
    await page.setViewport({ width: 1280, height: 900 });

    try {
      await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });
      await page.waitForSelector('.tabs-container', { timeout: 30000 });
      await new Promise(resolve => setTimeout(resolve, 8000)); // Wait for content to fully load

      html = await page.content();

      // Save the HTML for future use
      await fs.writeFile(htmlFilePath, html);
      console.log(`Saved HTML to: ${htmlFilePath}`);

    } catch (error) {
      console.error(`Error fetching page: ${error.message}`);
      throw error;
    } finally {
      await browser.close();
    }
  }

  // Parse HTML with cheerio
  console.log("Parsing HTML and extracting tokens...");
  const $ = cheerio.load(html);

  // Create sections map for organizing tokens
  const sections = new Map();

  // Section/subsection mapping
  const sectionOrder = [
    'Color', 'Elevation', 'Font', 'Opacity', 'Space', 'Utility'
  ];

  const subsectionMapping = {
    'Color': ['Text', 'Link', 'Icon', 'Border', 'Background', 'Blanket', 'Interaction', 'Skeleton', 'Chart'],
    'Elevation': ['Surface', 'Shadow'],
    'Font': ['Heading', 'Body', 'Code', 'Weight', 'Family'],
    'Opacity': [],
    'Space': [],
    'Utility': []
  };

  // Initialize the sections map with the correct structure
  sectionOrder.forEach(section => {
    const subsections = subsectionMapping[section] || [];
    const sectionData = {
      title: section,
      subsections: {}
    };

    subsections.forEach(subsection => {
      sectionData.subsections[subsection] = [];
    });

    sections.set(section, sectionData);
  });

  // Find all token tables
  $('.tabs-container table').each((i, tableElement) => {
    // Find the closest h3 (subsection) and h2 (section)
    const h3 = $(tableElement).prev('h3');
    const subsectionTitle = h3.text().trim();

    let sectionTitle = '';
    let currentElement = h3[0];

    // Go up the DOM to find the closest h2
    while (currentElement) {
      currentElement = $(currentElement).prev()[0];
      if (currentElement && $(currentElement).is('h2')) {
        sectionTitle = $(currentElement).text().trim();
        break;
      }
    }

    // Skip if we can't identify the section/subsection
    if (!sectionTitle || !subsectionTitle || sectionTitle === 'All tokens') {
      return;
    }

    // Get or create the section
    if (!sections.has(sectionTitle)) {
      sections.set(sectionTitle, {
        title: sectionTitle,
        subsections: {}
      });
    }

    const section = sections.get(sectionTitle);

    // Create the subsection if it doesn't exist
    if (!section.subsections[subsectionTitle]) {
      section.subsections[subsectionTitle] = [];
    }

    // Extract tokens from this table
    $(tableElement).find('tbody tr').each((j, row) => {
      if ($(row).hasClass('css-2czrm6')) {
        // This is a header row, skip it
        return;
      }

      const cells = $(row).find('td');

      if (cells.length >= 3) {
        // First cell contains token name and description
        const tokenNameElement = $(cells[0]).find('span.css-1v3osgx');
        const descriptionElement = $(cells[0]).find('p.css-jekazg');

        // Second cell is light mode value
        const lightValueElement = $(cells[1]).find('span.css-11kanzd');

        // Third cell is dark mode value
        const darkValueElement = $(cells[2]).find('span.css-11kanzd');

        if (tokenNameElement.length) {
          const token = {
            name: tokenNameElement.text().trim(),
            description: descriptionElement.length ? descriptionElement.text().trim() : '',
            lightValue: lightValueElement.length ? lightValueElement.text().trim() : '',
            darkValue: darkValueElement.length ? darkValueElement.text().trim() : ''
          };

          section.subsections[subsectionTitle].push(token);
        }
      }
    });
  });

  // Generate markdown
  console.log("Generating markdown from extracted tokens...");
  let markdown = `# Atlassian Design System Tokens\n\n`;

  // Function to generate token list markdown
  const generateTokenMarkdown = (tokens) => {
    let result = '';

    tokens.forEach(token => {
      result += `- \`${token.name}\`\n`;

      // Add description if available
      if (token.description) {
        result += `  - Description: ${token.description}\n`;
      }

      // Add light/dark values
      if (token.lightValue) {
        result += `  - Light: ${token.lightValue}\n`;
      }

      if (token.darkValue) {
        result += `  - Dark: ${token.darkValue}\n`;
      }

      result += '\n';
    });

    return result;
  };

  // Process sections in the specified order
  for (const sectionTitle of sectionOrder) {
    const section = sections.get(sectionTitle);

    if (!section) {
      console.warn(`Section "${sectionTitle}" not found in the HTML.`);
      continue;
    }

    markdown += `## ${section.title}\n\n`;

    // Special handling for Space section as a table
    if (section.title === 'Space') {
      markdown += `| Token | Value | Description |\n|-------|-------|-------------|\n`;

      // Find all space tokens in the HTML
      const spaceTokens = [];
      $('span.css-1v3osgx').each((i, element) => {
        const tokenName = $(element).text().trim();
        if (tokenName.startsWith('space.')) {
          const row = $(element).closest('tr');
          if (row.length) {
            const cells = row.find('td');
            if (cells.length >= 2) {
              // For space tokens, the values use a different CSS class
              const valueElement = $(cells[1]).find('span.css-ee9th0');
              const description = row.find('p.css-jekazg').text().trim();

              if (valueElement.length) {
                spaceTokens.push({
                  name: tokenName,
                  value: valueElement.text().trim(),
                  description: description
                });
              }
            }
          }
        }
      });

      // Sort space tokens numerically
      spaceTokens.sort((a, b) => {
        // Extract numeric part from token name
        const numA = parseFloat(a.name.match(/\d+(\.\d+)?/)?.[0] || 0);
        const numB = parseFloat(b.name.match(/\d+(\.\d+)?/)?.[0] || 0);

        // Handle "negative" tokens to come after positive ones
        if (a.name.includes('negative') && !b.name.includes('negative')) return 1;
        if (!a.name.includes('negative') && b.name.includes('negative')) return -1;

        // Sort by numeric value
        return numA - numB;
      });

      // Add each token to the table
      spaceTokens.forEach(token => {
        markdown += `| \`${token.name}\` | ${token.value} | ${token.description} |\n`;
      });

      markdown += '\n';
    } else {
      // Process subsections
      const subsections = subsectionMapping[section.title] || [];

      for (const subsectionTitle of subsections) {
        const tokens = section.subsections[subsectionTitle] || [];

        if (tokens.length > 0) {
          markdown += `### ${subsectionTitle}\n\n`;
          markdown += generateTokenMarkdown(tokens);
        }
      }
    }
  }

  // Fallback approach: directly search for token elements
  if (!markdown.includes('`color.text`')) {
    console.log("Using fallback token extraction method...");

    // Find all tokens by their CSS class
    const tokenEntries = [];

    $('span.css-1v3osgx').each((i, element) => {
      const tokenName = $(element).text().trim();

      // Find closest row
      const row = $(element).closest('tr');

      if (row.length) {
        const cells = row.find('td');

        if (cells.length >= 3) {
          const descriptionElement = row.find('p.css-jekazg');
          const lightValueElement = $(cells[1]).find('span.css-11kanzd');
          const darkValueElement = $(cells[2]).find('span.css-11kanzd');

          const entry = {
            name: tokenName,
            description: descriptionElement.length ? descriptionElement.text().trim() : '',
            lightValue: lightValueElement.length ? lightValueElement.text().trim() : '',
            darkValue: darkValueElement.length ? darkValueElement.text().trim() : ''
          };

          // Determine section and subsection from token name
          let section, subsection;

          if (tokenName.startsWith('color.')) {
            section = 'Color';

            if (tokenName.startsWith('color.text')) subsection = 'Text';
            else if (tokenName.startsWith('color.link')) subsection = 'Link';
            else if (tokenName.startsWith('color.icon')) subsection = 'Icon';
            else if (tokenName.startsWith('color.border')) subsection = 'Border';
            else if (tokenName.startsWith('color.background')) subsection = 'Background';
            else if (tokenName.startsWith('color.blanket')) subsection = 'Blanket';
            else if (tokenName.startsWith('color.interaction')) subsection = 'Interaction';
            else if (tokenName.startsWith('color.skeleton')) subsection = 'Skeleton';
            else if (tokenName.startsWith('color.chart')) subsection = 'Chart';
            else subsection = 'Other';
          }
          else if (tokenName.startsWith('elevation.')) {
            section = 'Elevation';

            if (tokenName.startsWith('elevation.surface')) subsection = 'Surface';
            else if (tokenName.startsWith('elevation.shadow')) subsection = 'Shadow';
            else subsection = 'Other';
          }
          else if (tokenName.startsWith('font.')) {
            section = 'Font';

            if (tokenName.includes('.heading')) subsection = 'Heading';
            else if (tokenName.includes('.body')) subsection = 'Body';
            else if (tokenName.includes('.code')) subsection = 'Code';
            else if (tokenName.includes('.weight')) subsection = 'Weight';
            else if (tokenName.includes('.family')) subsection = 'Family';
            else subsection = 'Other';
          }
          else if (tokenName.startsWith('opacity.')) {
            section = 'Opacity';
            subsection = 'General';
          }
          else if (tokenName.startsWith('space.')) {
            section = 'Space';
            subsection = 'General';
          }
          else if (tokenName.startsWith('utility.')) {
            section = 'Utility';
            subsection = 'General';
          }
          else {
            section = 'Utility';
            subsection = 'General';
          }

          entry.section = section;
          entry.subsection = subsection;

          tokenEntries.push(entry);
        }
      }
    });

    // Rebuild the markdown using the fallback data
    markdown = `# Atlassian Design System Tokens\n\n`;

    // Group tokens by section and subsection
    const groupedTokens = {};

    tokenEntries.forEach(token => {
      if (!groupedTokens[token.section]) {
        groupedTokens[token.section] = {};
      }

      if (!groupedTokens[token.section][token.subsection]) {
        groupedTokens[token.section][token.subsection] = [];
      }

      groupedTokens[token.section][token.subsection].push(token);
    });

    // Generate markdown from grouped tokens
    for (const sectionTitle of sectionOrder) {
      if (!groupedTokens[sectionTitle] && sectionTitle !== 'Space') continue;

      markdown += `## ${sectionTitle}\n\n`;

      // Special handling for Space section
      if (sectionTitle === 'Space') {
        markdown += `| Token | Value | Description |\n|-------|-------|-------------|\n`;

        // Find all space tokens in the HTML
        const spaceTokens = [];
        $('span.css-1v3osgx').each((i, element) => {
          const tokenName = $(element).text().trim();
          if (tokenName.startsWith('space.')) {
            const row = $(element).closest('tr');
            if (row.length) {
              const cells = row.find('td');
              if (cells.length >= 2) {
                // For space tokens, the values use a different CSS class
                const valueElement = $(cells[1]).find('span.css-ee9th0');
                const description = row.find('p.css-jekazg').text().trim();

                if (valueElement.length) {
                  spaceTokens.push({
                    name: tokenName,
                    value: valueElement.text().trim(),
                    description: description
                  });
                }
              }
            }
          }
        });

        // Sort space tokens numerically
        spaceTokens.sort((a, b) => {
          // Extract numeric part from token name
          const numA = parseFloat(a.name.match(/\d+(\.\d+)?/)?.[0] || 0);
          const numB = parseFloat(b.name.match(/\d+(\.\d+)?/)?.[0] || 0);

          // Handle "negative" tokens to come after positive ones
          if (a.name.includes('negative') && !b.name.includes('negative')) return 1;
          if (!a.name.includes('negative') && b.name.includes('negative')) return -1;

          // Sort by numeric value
          return numA - numB;
        });

        // Add each token to the table
        spaceTokens.forEach(token => {
          markdown += `| \`${token.name}\` | ${token.value} | ${token.description} |\n`;
        });

        markdown += '\n';
      } else if (sectionTitle === 'Opacity') {
        // Special handling for Opacity section
        const opacityTokens = [];
        $('span.css-1v3osgx').each((i, element) => {
          const tokenName = $(element).text().trim();
          if (tokenName.startsWith('opacity.')) {
            const row = $(element).closest('tr');
            if (row.length) {
              const cells = row.find('td');
              if (cells.length >= 3) {
                const descriptionElement = row.find('p.css-jekazg');
                const lightValueElement = $(cells[1]).find('.css-11kanzd, .css-ee9th0');
                const darkValueElement = $(cells[2]).find('.css-11kanzd, .css-ee9th0');

                opacityTokens.push({
                  name: tokenName,
                  description: descriptionElement.length ? descriptionElement.text().trim() : '',
                  lightValue: lightValueElement.length ? lightValueElement.text().trim() : '',
                  darkValue: darkValueElement.length ? darkValueElement.text().trim() : ''
                });
              }
            }
          }
        });

        if (opacityTokens.length > 0) {
          markdown += generateTokenMarkdown(opacityTokens);
        }
      } else if (sectionTitle === 'Utility') {
        // Special handling for Utility section
        const utilityTokens = [];
        $('span.css-1v3osgx').each((i, element) => {
          const tokenName = $(element).text().trim();
          if (tokenName.startsWith('utility.')) {
            const row = $(element).closest('tr');
            if (row.length) {
              const cells = row.find('td');
              if (cells.length >= 3) {
                const descriptionElement = row.find('p.css-jekazg');
                const lightValueElement = $(cells[1]).find('.css-11kanzd, .css-ee9th0');
                const darkValueElement = $(cells[2]).find('.css-11kanzd, .css-ee9th0');

                utilityTokens.push({
                  name: tokenName,
                  description: descriptionElement.length ? descriptionElement.text().trim() : '',
                  lightValue: lightValueElement.length ? lightValueElement.text().trim() : '',
                  darkValue: darkValueElement.length ? darkValueElement.text().trim() : ''
                });
              }
            }
          }
        });

        if (utilityTokens.length > 0) {
          markdown += generateTokenMarkdown(utilityTokens);
        }
      } else if (groupedTokens[sectionTitle]) {
        // Process subsections
        const subsections = subsectionMapping[sectionTitle] || ['General'];

        for (const subsectionTitle of subsections) {
          const tokens = groupedTokens[sectionTitle][subsectionTitle] || [];

          if (tokens.length > 0) {
            markdown += `### ${subsectionTitle}\n\n`;
            markdown += generateTokenMarkdown(tokens);
          } else if (subsectionTitle === 'Weight' || subsectionTitle === 'Family') {
            // Special handling for Font Weight and Font Family subsections
            const fontTokens = [];
            $('span.css-1v3osgx').each((i, element) => {
              const tokenName = $(element).text().trim();
              if ((subsectionTitle === 'Weight' && tokenName.startsWith('font.weight.')) ||
                  (subsectionTitle === 'Family' && tokenName.startsWith('font.family.'))) {
                const row = $(element).closest('tr');
                if (row.length) {
                  const cells = row.find('td');
                  if (cells.length >= 2) {
                    const descriptionElement = row.find('p.css-jekazg');
                    const previewElement = $(cells[1]);

                    fontTokens.push({
                      name: tokenName,
                      description: descriptionElement.length ? descriptionElement.text().trim() : '',
                      // For font tokens, display is different - may not have light/dark values
                      lightValue: '',
                      darkValue: ''
                    });
                  }
                }
              }
            });

            if (fontTokens.length > 0) {
              markdown += `### ${subsectionTitle}\n\n`;
              markdown += generateTokenMarkdown(fontTokens);
            }
          }
        }
      }
    }
  }

  // Add a timestamp at the end of the markdown
  const date = new Date();
  markdown += `\n\n---\n\n*This documentation was generated on ${date.toLocaleDateString()} at ${date.toLocaleTimeString()} using the Atlassian Design System token information.*`;

  // Clean up any double blank lines
  markdown = markdown.replace(/\n\n\n+/g, '\n\n');

  // Ensure the output directory exists
  await fs.ensureDir(outputDir);

  // Write the markdown file
  await fs.writeFile(updatedOutputPath, markdown);

  console.log(`Token data saved to: ${updatedOutputPath}`);

  return updatedOutputPath;
}

module.exports = {
  scrapeTokensPage
};
