const puppeteer = require('puppeteer');
const fs = require('fs-extra');
const path = require('path');

// Cross-compatible sleep function
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Default scraper options
const defaultOptions = {
  rewriteExisting: false, // By default, skip existing files
};

// Navigation items to exclude from the scraped content
const navItemsToExclude = [
  'Forms and input',
  'Images and icons',
  'Layout and structure',
  'Loading',
  'Messaging',
  'Navigation',
  'Overlays and layering',
  'Primitives',
  'Status indicators',
  'Text and data display',
  'Libraries',
  'Tooling',
];

const urlsToScrape = [
  {
    url: 'https://atlassian.design/components/button/examples',
    filename: 'button.md',
  },
  {
    url: 'https://atlassian.design/components/checkbox/examples',
    filename: 'checkbox.md',
  },
  {
    url: 'https://atlassian.design/components/button/icon-button/examples',
    filename: 'iconButton.md',
  },
  {
    url: 'https://atlassian.design/components/button/link-button/examples',
    filename: 'linkButton.md',
  },
  {
    url: 'https://atlassian.design/components/button/link-icon-button/examples',
    filename: 'linkIconButton.md',
  },
  {
    url: 'https://atlassian.design/components/button/split-button/examples',
    filename: 'splitButton.md',
  },
  {
    url: 'https://atlassian.design/components/button/button-group/examples',
    filename: 'buttonGroup.md',
  },
  {
    url: 'https://atlassian.design/components/calendar/examples',
    filename: 'calendar.md',
  },
  {
    url: 'https://atlassian.design/components/comment/examples',
    filename: 'comment.md',
  },
  {
    url: 'https://atlassian.design/components/datetime-picker/examples',
    filename: 'datetimePicker.md',
  },
  {
    url: 'https://atlassian.design/components/datetime-picker/date-picker/examples',
    filename: 'datePicker.md',
  },
  {
    url: 'https://atlassian.design/components/datetime-picker/time-picker/examples',
    filename: 'timePicker.md',
  },
  {
    url: 'https://atlassian.design/components/dropdown-menu/examples',
    filename: 'dropdownMenu.md',
  },
  {
    url: 'https://atlassian.design/components/dropdown-menu/dropdown-item/examples',
    filename: 'dropdownItem.md',
  },
  {
    url: 'https://atlassian.design/components/dropdown-menu/dropdown-item-checkbox/examples',
    filename: 'dropdownItemCheckbox.md',
  },
  {
    url: 'https://atlassian.design/components/dropdown-menu/dropdown-item-radio/examples',
    filename: 'dropdownItemRadio.md',
  },
  {
    url: 'https://atlassian.design/components/focus-ring/examples',
    filename: 'focusRing.md',
  },
  {
    url: 'https://atlassian.design/components/form/examples',
    filename: 'form.md',
  },
  {
    url: 'https://atlassian.design/components/radio/examples',
    filename: 'radio.md',
  },
  {
    url: 'https://atlassian.design/components/radio/radio-group/examples',
    filename: 'radioGroup.md',
  },
  {
    url: 'https://atlassian.design/components/range/examples',
    filename: 'range.md',
  },
  {
    url: 'https://atlassian.design/components/select/examples',
    filename: 'select.md',
  },
  {
    url: 'https://atlassian.design/components/select/async-creatable-select/examples',
    filename: 'asyncCreatableSelect.md',
  },
  {
    url: 'https://atlassian.design/components/select/async-select/examples',
    filename: 'asyncSelect.md',
  },
  {
    url: 'https://atlassian.design/components/select/checkbox-select/examples',
    filename: 'checkboxSelect.md',
  },
  {
    url: 'https://atlassian.design/components/select/country-select/examples',
    filename: 'countrySelect.md',
  },
  {
    url: 'https://atlassian.design/components/select/creatable-select/examples',
    filename: 'creatableSelect.md',
  },
  {
    url: 'https://atlassian.design/components/select/popup-select/examples',
    filename: 'popupSelect.md',
  },
  {
    url: 'https://atlassian.design/components/select/radio-select/examples',
    filename: 'radioSelect.md',
  },
  {
    url: 'https://atlassian.design/components/textarea/examples',
    filename: 'textArea.md',
  },
  {
    url: 'https://atlassian.design/components/textfield/examples',
    filename: 'textField.md',
  },
  {
    url: 'https://atlassian.design/components/toggle/examples',
    filename: 'toggle.md',
  },
  {
    url: 'https://atlassian.design/components/avatar/examples',
    filename: 'avatar.md',
  },
  {
    url: 'https://atlassian.design/components/avatar/avatar-content/examples',
    filename: 'avatarContent.md',
  },
  {
    url: 'https://atlassian.design/components/avatar/avatar-item/examples',
    filename: 'avatarItem.md',
  },
  {
    url: 'https://atlassian.design/components/avatar/avatar-skeleton/examples',
    filename: 'avatarSkeleton.md',
  },
  {
    url: 'https://atlassian.design/components/avatar-group/examples',
    filename: 'avatarGroup.md',
  },

  // Icon and related components
  {
    url: 'https://atlassian.design/components/icon/examples',
    filename: 'icon.md',
  },
  {
    url: 'https://atlassian.design/components/icon/icon-legacy/examples',
    filename: 'iconLegacy.md',
  },
  {
    url: 'https://atlassian.design/components/icon/icon-tile/examples',
    filename: 'iconTile.md',
  },
  {
    url: 'https://atlassian.design/components/icon/custom-icon-legacy/examples',
    filename: 'customIconLegacy.md',
  },
  {
    url: 'https://atlassian.design/components/icon/custom-svg/examples',
    filename: 'customSvg.md',
  },
  {
    url: 'https://atlassian.design/components/icon-object/examples',
    filename: 'iconObject.md',
  },
  {
    url: 'https://atlassian.design/components/image/examples',
    filename: 'image.md',
  },
  {
    url: 'https://atlassian.design/components/logo/examples',
    filename: 'logo.md',
  },

  // Layout components
  {
    url: 'https://atlassian.design/components/grid/examples',
    filename: 'layoutGrid.md',
  },
  {
    url: 'https://atlassian.design/components/page/examples',
    filename: 'page.md',
  },
  {
    url: 'https://atlassian.design/components/page/grid/examples',
    filename: 'grid.md',
  },
  {
    url: 'https://atlassian.design/components/page/grid-column/examples',
    filename: 'gridColumn.md',
  },
  {
    url: 'https://atlassian.design/components/page-header/examples',
    filename: 'pageHeader.md',
  },
  {
    url: 'https://atlassian.design/components/page-layout/examples',
    filename: 'pageLayout.md',
  },

  // Loading components
  {
    url: 'https://atlassian.design/components/progress-bar/examples',
    filename: 'progressBar.md',
  },
  {
    url: 'https://atlassian.design/components/progress-bar/success-progress-bar/examples',
    filename: 'successProgressBar.md',
  },
  {
    url: 'https://atlassian.design/components/progress-bar/transparent-progress-bar/examples',
    filename: 'transparentProgressBar.md',
  },
  {
    url: 'https://atlassian.design/components/skeleton/examples',
    filename: 'skeleton.md',
  },
  {
    url: 'https://atlassian.design/components/spinner/examples',
    filename: 'spinner.md',
  },

  // Messaging components
  {
    url: 'https://atlassian.design/components/banner/examples',
    filename: 'banner.md',
  },
  {
    url: 'https://atlassian.design/components/flag/examples',
    filename: 'flag.md',
  },
  {
    url: 'https://atlassian.design/components/flag/auto-dismiss-flag/examples',
    filename: 'autoDismissFlag.md',
  },
  {
    url: 'https://atlassian.design/components/flag/flag-group/examples',
    filename: 'flagGroup.md',
  },
  {
    url: 'https://atlassian.design/components/flag/flags-provider/examples',
    filename: 'flagsProvider.md',
  },
  {
    url: 'https://atlassian.design/components/inline-message/examples',
    filename: 'inlineMessage.md',
  },
  {
    url: 'https://atlassian.design/components/modal-dialog/examples',
    filename: 'modalDialog.md',
  },
  {
    url: 'https://atlassian.design/components/onboarding/examples',
    filename: 'onboardingSpotlight.md',
  },
  {
    url: 'https://atlassian.design/components/onboarding/benefits-modal/examples',
    filename: 'benefitsModal.md',
  },
  {
    url: 'https://atlassian.design/components/onboarding/spotlight-card/examples',
    filename: 'spotlightCard.md',
  },
  {
    url: 'https://atlassian.design/components/section-message/examples',
    filename: 'sectionMessage.md',
  },

  // Navigation components
  {
    url: 'https://atlassian.design/components/atlassian-navigation/examples',
    filename: 'atlassianNavigation.md',
  },
  {
    url: 'https://atlassian.design/components/breadcrumbs/examples',
    filename: 'breadcrumbs.md',
  },
  {
    url: 'https://atlassian.design/components/link/examples',
    filename: 'link.md',
  },
  {
    url: 'https://atlassian.design/components/menu/examples',
    filename: 'menu.md',
  },

  // Navigation system components
  {
    url: 'https://atlassian.design/components/navigation-system/examples',
    filename: 'navigationSystem.md',
  },
  {
    url: 'https://atlassian.design/components/navigation-system/layout/examples',
    filename: 'layout.md',
  },
  {
    url: 'https://atlassian.design/components/navigation-system/side-navigation/examples',
    filename: 'sideNavigation.md',
  },
  {
    url: 'https://atlassian.design/components/navigation-system/top-navigation/examples',
    filename: 'topNavigation.md',
  },
  {
    url: 'https://atlassian.design/components/pagination/examples',
    filename: 'pagination.md',
  },
  {
    url: 'https://atlassian.design/components/tabs/examples',
    filename: 'tabs.md',
  },

  // Overlays and layering components
  {
    url: 'https://atlassian.design/components/blanket/examples',
    filename: 'blanket.md',
  },
  {
    url: 'https://atlassian.design/components/drawer/examples',
    filename: 'drawer.md',
  },
  {
    url: 'https://atlassian.design/components/drawer/drawer-legacy/examples',
    filename: 'drawerLegacy.md',
  },
  {
    url: 'https://atlassian.design/components/inline-dialog/examples',
    filename: 'inlineDialog.md',
  },
  {
    url: 'https://atlassian.design/components/popup/examples',
    filename: 'popup.md',
  },
  {
    url: 'https://atlassian.design/components/tooltip/examples',
    filename: 'tooltip.md',
  },

  // Primitives
  {
    url: 'https://atlassian.design/components/primitives/overview/examples',
    filename: 'primitivesOverview.md',
  },
  {
    url: 'https://atlassian.design/components/primitives/box/examples',
    filename: 'box.md',
  },
  {
    url: 'https://atlassian.design/components/primitives/inline/examples',
    filename: 'inline.md',
  },
  {
    url: 'https://atlassian.design/components/primitives/stack/examples',
    filename: 'stack.md',
  },
  {
    url: 'https://atlassian.design/components/primitives/flex/examples',
    filename: 'flex.md',
  },
  {
    url: 'https://atlassian.design/components/primitives/grid/examples',
    filename: 'designGrid.md',
  },
  {
    url: 'https://atlassian.design/components/primitives/bleed/examples',
    filename: 'bleed.md',
  },
  {
    url: 'https://atlassian.design/components/primitives/xcss/examples',
    filename: 'xcss.md',
  },

  // Responsive components
  {
    url: 'https://atlassian.design/components/primitives/responsive/examples',
    filename: 'responsive.md',
  },
  {
    url: 'https://atlassian.design/components/primitives/responsive/show/examples',
    filename: 'responsiveShow.md',
  },
  {
    url: 'https://atlassian.design/components/primitives/responsive/hide/examples',
    filename: 'responsiveHide.md',
  },
  {
    url: 'https://atlassian.design/components/primitives/responsive/breakpoints/examples',
    filename: 'responsiveBreakpoints.md',
  },

  // Text and interaction components
  {
    url: 'https://atlassian.design/components/primitives/text/examples',
    filename: 'text.md',
  },
  {
    url: 'https://atlassian.design/components/primitives/pressable/examples',
    filename: 'pressable.md',
  },
  {
    url: 'https://atlassian.design/components/primitives/anchor/examples',
    filename: 'anchor.md',
  },

  // Status indicator components
  {
    url: 'https://atlassian.design/components/badge/examples',
    filename: 'badge.md',
  },
  {
    url: 'https://atlassian.design/components/empty-state/examples',
    filename: 'emptyState.md',
  },
  {
    url: 'https://atlassian.design/components/lozenge/examples',
    filename: 'lozenge.md',
  },
  {
    url: 'https://atlassian.design/components/progress-indicator/examples',
    filename: 'progressIndicator.md',
  },
  {
    url: 'https://atlassian.design/components/progress-tracker/examples',
    filename: 'progressTracker.md',
  },
  {
    url: 'https://atlassian.design/components/tag/examples',
    filename: 'tag.md',
  },
  {
    url: 'https://atlassian.design/components/tag-group/examples',
    filename: 'tagGroup.md',
  },

  // Code components
  {
    url: 'https://atlassian.design/components/code/examples',
    filename: 'code.md',
  },
  {
    url: 'https://atlassian.design/components/code/code-block/examples',
    filename: 'codeBlock.md',
  },
  {
    url: 'https://atlassian.design/components/dynamic-table/examples',
    filename: 'dynamicTable.md',
  },
  {
    url: 'https://atlassian.design/components/heading/examples',
    filename: 'heading.md',
  },

  // Inline edit components
  {
    url: 'https://atlassian.design/components/inline-edit/examples',
    filename: 'inlineEdit.md',
  },
  {
    url: 'https://atlassian.design/components/inline-edit/inline-editable-textfield/examples',
    filename: 'inlineEditableTextfield.md',
  },
  {
    url: 'https://atlassian.design/components/table/examples',
    filename: 'table.md',
  },
  {
    url: 'https://atlassian.design/components/table-tree/examples',
    filename: 'tableTree.md',
  },
  {
    url: 'https://atlassian.design/components/visually-hidden/examples',
    filename: 'visuallyHidden.md',
  },

  // Libraries
  {
    url: 'https://atlassian.design/components/css/examples',
    filename: 'css.md',
  },
  {
    url: 'https://atlassian.design/components/css-reset/examples',
    filename: 'cssReset.md',
  },
  {
    url: 'https://atlassian.design/components/design-tokens/examples',
    filename: 'designTokens.md',
  },

  // Popper and Portal
  {
    url: 'https://atlassian.design/components/popper/examples',
    filename: 'popper.md',
  },
  {
    url: 'https://atlassian.design/components/portal/examples',
    filename: 'portal.md',
  },
];

// Parse command line arguments - add before the existing args parsing
const args = process.argv.slice(2);
const commandLineOptions = {
  rewriteAll: args.includes('--rewrite-all') || args.includes('-r'),
  help: args.includes('--help') || args.includes('-h'),
  // New: Look for a URL parameter
  url: args.find(arg => arg.startsWith('http'))
};

// Show help if requested - update the help text
if (commandLineOptions.help) {
  console.log(`
Atlassian Design System Scraper

Usage:
  node adsScrape.js [options] [url]

Options:
  -r, --rewrite-all   Rewrite all documentation files, even if they already exist
  -h, --help          Show this help message

Examples:
  node adsScrape.js                                                 # Scrape all predefined URLs
  node adsScrape.js -r                                              # Scrape all URLs and rewrite existing files
  node adsScrape.js https://atlassian.design/components/radio/examples  # Scrape only this specific URL
  `);
  process.exit(0);
}

// Function to extract a filename from a URL - add this after the help section
function getFilenameFromUrl(url) {
  const urlObj = new URL(url);
  const pathParts = urlObj.pathname.split('/');

  // Special case for tokens
  if (url.includes('tokens/all-tokens') || url.includes('design-tokens')) {
    return 'designTokens.md';
  }

  // Remove 'examples' from the end if present
  if (pathParts[pathParts.length - 1] === 'examples') {
    pathParts.pop();
  }

  // Get the last meaningful part of the path (component name)
  const componentName = pathParts[pathParts.length - 1];

  // Convert kebab-case to camelCase
  const camelCaseName = componentName.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());

  return camelCaseName + '.md';
}

async function scrapePage(url, filename, options = {}) {
  // Merge with default options
  const scrapeOptions = { ...defaultOptions, ...options };

  // Check if file exists and whether to skip
  const outputDir = path.join(__dirname, 'docs');
  const outputPath = path.join(outputDir, filename);

  if (!scrapeOptions.rewriteExisting && await fs.pathExists(outputPath)) {
    console.log(`Skipping: ${filename} (file already exists)`);
    return;
  }

  console.log(`Scraping: ${url}`);
  const browser = await puppeteer.launch({
    headless: "new",
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-web-security']
  });

  const page = await browser.newPage();

  // Set a realistic user agent
  await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36');

  // Set viewport to ensure we capture everything
  await page.setViewport({ width: 1280, height: 800 });

  try {
    // Navigate to the page with extended timeout
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });

    // Wait for page content to be available
    await page.waitForSelector('body', { timeout: 30000 });
    await sleep(5000);

    console.log("Page loaded, extracting content...");

    // Extract content based on DOM hierarchy
    const content = await page.evaluate((navItemsToExclude) => {
      // Find the main content container - use more specific selectors for content areas
      let mainContent = document.querySelector('[role="tabpanel"]') ||  // Target the active tab panel
                        document.querySelector('.tabs-container') ||
                        document.querySelector('[class*="content-"] div') || // Target any content- class
                        document.querySelector('[id*="content-"]') ||
                        document.querySelector('main') ||
                        document.querySelector('#__next main') ||
                        document.querySelector('.ds-content') ||
                        document.querySelector('.content-area') ||
                        document.body; // Fallback if specific selectors don't match

      // Get the component title
      const title = document.querySelector('h1')?.innerText?.trim() ||
                    document.title?.split(' - ')?.[0]?.trim() ||
                    'Component';

      // Get component description (if available)
      let componentDescription = '';

      // Look for span under the title - this is usually the top-level component description
      const descriptionSpan = document.querySelector('h1 + span') ||
                             document.querySelector('[class*="css-"]:has(h1) + span') ||
                             document.querySelector('h1 ~ span') ||
                             document.querySelector('.ds-title + span') ||
                             document.querySelector('span[class*="subtitle"]') ||
                             document.querySelector('span[class*="description"]') ||
                             document.querySelector('.css-p2dejx') ||
                             document.querySelector('[class*="cs-"]'); // Last resort - the specific class shown in screenshot

      if (descriptionSpan) {
        componentDescription = descriptionSpan.innerText.trim();
      }

      // If no span is found, look at static HTML structure in page
      if (!componentDescription) {
        // Try to find description right after h1 in common HTML structures
        const descriptionInHTML = Array.from(document.querySelectorAll('span')).find(span => {
          const text = span.innerText.trim();
          return text.includes('allows users') ||
                 text.includes('provides') ||
                 text.includes('enables') ||
                 text.includes('lets you') ||
                 text.length > 40; // Longer spans are likely descriptions
        });

        if (descriptionInHTML) {
          componentDescription = descriptionInHTML.innerText.trim();
        }
      }

      // If no span is found, look for paragraph descriptions after h1
      if (!componentDescription) {
        const h1Element = document.querySelector('h1');
        if (h1Element) {
          let nextElement = h1Element.nextElementSibling;
          while (nextElement && nextElement.tagName !== 'H2') {
            if (nextElement.tagName === 'P') {
              componentDescription += nextElement.innerText.trim() + ' ';
            }
            nextElement = nextElement.nextElementSibling;
          }
        }
      }

      // Also look for descriptions in the tabs container for pages without section headers
      if (!componentDescription) {
        // Try to find descriptions in tabs container
        const tabsContainer = document.querySelector('.tabs-container') ||
                             document.querySelector('[role="tabpanel"]');

        if (tabsContainer) {
          // Look for direct paragraph descriptions before any headers
          const paragraphs = tabsContainer.querySelectorAll('p');
          for (const p of paragraphs) {
            // Make sure it's not inside a section (no h2/h3 parent)
            let isInsideSection = false;
            let parent = p.parentElement;
            while (parent && parent !== tabsContainer) {
              if (parent.tagName === 'H2' || parent.tagName === 'H3' ||
                  parent.querySelector('h2') || parent.querySelector('h3')) {
                isInsideSection = true;
                break;
              }
              parent = parent.parentElement;
            }

            if (!isInsideSection) {
              const text = p.innerText.trim();
              if (text && !text.includes('import ') && !text.includes('export ')) {
                componentDescription += text + ' ';
              }
            }
          }
        }
      }

      // Also look for descriptions right after tab navigation elements
      if (!componentDescription) {
        const tabNav = document.querySelector('[role="tablist"]');
        if (tabNav) {
          // Look for paragraphs that come right after the tab navigation
          let sibling = tabNav.nextElementSibling;

          // Skip header elements if they exist
          while (sibling && (sibling.tagName === 'H1' || sibling.tagName === 'H2' || sibling.tagName === 'H3')) {
            sibling = sibling.nextElementSibling;
          }

          // Look for paragraphs before we hit code blocks
          while (sibling &&
                 !sibling.tagName.match(/^(PRE|CODE)$/) &&
                 !sibling.classList.contains('code-block') &&
                 !sibling.classList.contains('syntax-highlighter')) {

            if (sibling.tagName === 'P') {
              const text = sibling.innerText.trim();
              if (text && !text.includes('import ') && !text.includes('export ')) {
                componentDescription += text + ' ';
              }
            }
            sibling = sibling.nextElementSibling;
          }
        }
      }

      // Find all elements in the main content area
      const allElements = Array.from(mainContent.querySelectorAll('*'));

      // Prepare structure for content
      const sections = [];
      let currentH2 = null;
      let currentH3 = null;
      let currentDescription = null;
      let hasH2Sections = false;

      // Process elements sequentially
      for (let i = 0; i < allElements.length; i++) {
        const element = allElements[i];

        // Handle different element types
        if (element.tagName === 'H2') {
          const title = element.innerText.trim();

          // Skip navigation items that we want to exclude
          if (navItemsToExclude.includes(title)) {
            continue;
          }

          // New top-level section
          currentH2 = {
            title: title,
            description: '',
            examples: [],
            subsections: []
          };
          sections.push(currentH2);
          currentH3 = null;
          currentDescription = 'h2';
          hasH2Sections = true;
        }
        else if (element.tagName === 'H3' && currentH2) {
          // New subsection under the current H2
          const title = element.innerText.trim();

          // Skip navigation items that we want to exclude
          if (navItemsToExclude.includes(title)) {
            continue;
          }

          currentH3 = {
            title: title,
            description: '',
            examples: []
          };
          currentH2.subsections.push(currentH3);
          currentDescription = 'h3';
        }
        else if (element.tagName === 'P') {
          // Description paragraph
          const text = element.innerText.trim();
          if (text && !text.includes('import ') && !text.includes('export ')) {
            if (currentDescription === 'h2' && currentH2) {
              currentH2.description += text + ' ';
            } else if (currentDescription === 'h3' && currentH3) {
              currentH3.description += text + ' ';
            }
          }
        }
        else if ((element.tagName === 'PRE' || element.tagName === 'CODE' ||
                  element.classList.contains('code-block') ||
                  element.classList.contains('syntax-highlighter')) &&
                  element.innerText.trim().length > 10) {
          // Code example
          const code = element.innerText.trim();
          // Only include actual code blocks (with imports or JSX)
          if (code.includes('import ') || code.includes('export ') ||
              code.includes('function') || code.includes('const ') ||
              code.includes('return <')) {
            if (currentH3) {
              currentH3.examples.push(code);
            } else if (currentH2) {
              currentH2.examples.push(code);
            }
          }
        }
        // Add handling for tables
        else if (element.tagName === 'TABLE') {
          // Extract table content
          const tableHTML = element.outerHTML;
          const tableText = element.innerText.trim();

          if (tableText.length > 10) { // Ensure the table has meaningful content
            // Check if this is a simple table without rowspans or colspans
            const hasComplexStructure = element.querySelector('th[rowspan], th[colspan], td[rowspan], td[colspan]');

            if (!hasComplexStructure) {
              // Extract table data for markdown formatting
              const headerCells = Array.from(element.querySelectorAll('thead th')).map(th => th.textContent.trim());
              const rows = Array.from(element.querySelectorAll('tbody tr'));

              const tableData = {
                type: 'table',
                isSimple: true,
                html: tableHTML, // Keep original HTML as backup
                text: tableText,
                headers: headerCells,
                rows: rows.map(row => Array.from(row.querySelectorAll('td')).map(td => td.textContent.trim()))
              };

              if (currentH3) {
                if (!currentH3.tables) {
                  currentH3.tables = [];
                }
                currentH3.tables.push(tableData);
              } else if (currentH2) {
                if (!currentH2.tables) {
                  currentH2.tables = [];
                }
                currentH2.tables.push(tableData);
              }
            } else {
              // This is a complex table with rowspans or colspans
              // Store it as HTML for now
              const tableData = {
                type: 'table',
                isSimple: false,
                html: tableHTML,
                text: tableText
              };

              if (currentH3) {
                if (!currentH3.tables) {
                  currentH3.tables = [];
                }
                currentH3.tables.push(tableData);
              } else if (currentH2) {
                if (!currentH2.tables) {
                  currentH2.tables = [];
                }
                currentH2.tables.push(tableData);
              }
            }
          }
        }
      }

      // If no H2 sections were found but we have code examples, create a default section
      if (!hasH2Sections) {
        // Find all code blocks without a parent section
        const codeExamples = [];
        for (let i = 0; i < allElements.length; i++) {
          const element = allElements[i];
          if ((element.tagName === 'PRE' || element.tagName === 'CODE' ||
               element.classList.contains('code-block') ||
               element.classList.contains('syntax-highlighter')) &&
               element.innerText.trim().length > 10) {

            const code = element.innerText.trim();
            // Only include actual code blocks (with imports or JSX)
            if (code.includes('import ') || code.includes('export ') ||
                code.includes('function') || code.includes('const ') ||
                code.includes('return <')) {
              codeExamples.push(code);
            }
          }
        }

        // If we have code examples but no sections, create a default "Examples" section
        if (codeExamples.length > 0) {
          // Find any description text that might be present before code examples
          let sectionDescription = '';

          // Look for paragraphs directly in the content container
          const contentParagraphs = Array.from(mainContent.querySelectorAll('p'));
          const relevantParagraphs = contentParagraphs.filter(p => {
            const text = p.innerText.trim();
            return text &&
                  !text.includes('import ') &&
                  !text.includes('export ') &&
                  !text.includes('function') &&
                  !text.includes('return <');
          });

          // Add paragraphs content to section description
          if (relevantParagraphs.length > 0) {
            sectionDescription = relevantParagraphs
              .map(p => p.innerText.trim())
              .join(' ');

            // Avoid duplication with the main component description
            if (sectionDescription.trim() === componentDescription.trim()) {
              sectionDescription = '';
            }
          }

          // Add a default section for the examples
          sections.push({
            title: "Examples",
            description: sectionDescription,
            examples: codeExamples,
            subsections: []
          });
        }
      }

      // Look for the "Examples" tab which should be active to find relevant content
      const examplesTab = Array.from(document.querySelectorAll('button[role="tab"]')).find(
        tab => tab.textContent.includes('Examples')
      );

      // If we found the Examples tab, look for its associated tabpanel
      if (examplesTab) {
        const tabPanelId = examplesTab.getAttribute('aria-controls');
        const tabPanel = document.getElementById(tabPanelId);
        if (tabPanel) {
          mainContent = tabPanel;
          console.log('Found Examples tab panel, using it as content source');
        }
      }

      // Save the structure info for debugging
      console.log(`Content container found: ${mainContent ? 'yes' : 'no'}`);
      if (mainContent) {
        console.log(`Container tag: ${mainContent.tagName}`);
        console.log(`Container classes: ${mainContent.className}`);
        console.log(`Found ${mainContent.querySelectorAll('h1,h2,h3').length} headings`);
        console.log(`Found ${mainContent.querySelectorAll('pre,code').length} code blocks`);
      }

      // If no structured content was found, extract direct HTML from main components
      if (sections.length === 0) {
        // Find sections by looking for h2 or other layout patterns
        const headings = Array.from(mainContent.querySelectorAll('h2'));

        if (headings.length > 0) {
          // Process each h2 as a section
          headings.forEach(heading => {
            // ... similar to existing logic
          });
        } else {
          // If no h2 elements found, check for examples and code blocks
          const codeBlocks = Array.from(mainContent.querySelectorAll('pre, code, [class*="code-block"]'));
          const examples = codeBlocks.map(block => block.innerText.trim()).filter(code =>
            code.includes('import ') || code.includes('export ') ||
            code.includes('function') || code.includes('const ') ||
            code.includes('return <')
          );

          if (examples.length > 0) {
            // Find any description text that might be present before code examples
            let sectionDescription = '';

            // Look for paragraphs directly in the content container
           const contentParagraphs = Array.from(mainContent.querySelectorAll('p'));
           const relevantParagraphs = contentParagraphs.filter(p => {
             const text = p.innerText.trim();
             return text &&
                   !text.includes('import ') &&
                   !text.includes('export ') &&
                   !text.includes('function') &&
                   !text.includes('return <');
           });

           // Add paragraphs content to section description
           if (relevantParagraphs.length > 0) {
             sectionDescription = relevantParagraphs
               .map(p => p.innerText.trim())
               .join(' ');

             // Avoid duplication with the main component description
             if (sectionDescription.trim() === componentDescription.trim()) {
               sectionDescription = '';
             }
           }

            // Add a default section for the examples
            sections.push({
              title: "Examples",
              description: sectionDescription,
              examples: examples,
              subsections: []
            });
          }
        }
      }

      // Try to identify content sections from the Contents navigation
      const contentsPanel = document.querySelector('[class*="contents-"]') ||
                           document.querySelector('[aria-label="Contents"]');

      if (contentsPanel && sections.length === 0) {
        const contentLinks = Array.from(contentsPanel.querySelectorAll('a'));

        // Extract section titles from Contents panel
        for (const link of contentLinks) {
          const title = link.textContent.trim();
          if (title && !navItemsToExclude.includes(title)) {
            sections.push({
              title: title,
              description: '',
              examples: [],
              subsections: []
            });
          }
        }
      }

      return {
        title,
        description: componentDescription.trim(),
        sections
      };
    }, navItemsToExclude);

    console.log(`Found ${content.sections.length} sections`);

    // Generate markdown
    let markdown = `# ${content.title}\n\n`;

    // Add component description if available
    if (content.description) {
      markdown += `${content.description}\n\n`;

      // Add horizontal rule between main description and content
      markdown += `---\n\n`;
    }

    // Process each section
    content.sections.forEach(section => {
      // Skip rendering "Examples" section title as it's just a tab title
      if (section.title !== "Examples" || section.subsections.length > 0) {
        // Add section heading and description
        markdown += `## ${section.title}\n\n`;
      }

      if (section.description) {
        markdown += `${section.description}\n\n`;
      }

      // Add section examples
      section.examples.forEach(example => {
        markdown += `\`\`\`jsx\n${example}\n\`\`\`\n\n`;
      });

      // Add section tables
      if (section.tables && section.tables.length > 0) {
        section.tables.forEach(table => {
          // Create markdown table if we have a simple table with headers and rows
          if (table.isSimple && table.headers && table.headers.length > 0 && table.rows && table.rows.length > 0) {
            // Table header
            markdown += `| ${table.headers.join(' | ')} |\n`;
            // Header separator
            markdown += `| ${table.headers.map(() => '---').join(' | ')} |\n`;
            // Table rows
            table.rows.forEach(row => {
              markdown += `| ${row.join(' | ')} |\n`;
            });
            markdown += '\n';
          } else {
            // Use HTML table for complex tables
            markdown += `${table.html}\n\n`;
          }
        });
      }

      // Process subsections
      section.subsections.forEach(subsection => {
        // Add subsection heading and description
        markdown += `### ${subsection.title}\n\n`;

        if (subsection.description) {
          markdown += `${subsection.description}\n\n`;
        }

        // Add subsection examples
        subsection.examples.forEach(example => {
          markdown += `\`\`\`jsx\n${example}\n\`\`\`\n\n`;
        });

        // Add subsection tables
        if (subsection.tables && subsection.tables.length > 0) {
          subsection.tables.forEach(table => {
            // Create markdown table if we have a simple table with headers and rows
            if (table.isSimple && table.headers && table.headers.length > 0 && table.rows && table.rows.length > 0) {
              // Table header
              markdown += `| ${table.headers.join(' | ')} |\n`;
              // Header separator
              markdown += `| ${table.headers.map(() => '---').join(' | ')} |\n`;
              // Table rows
              table.rows.forEach(row => {
                markdown += `| ${row.join(' | ')} |\n`;
              });
              markdown += '\n';
            } else {
              // Use HTML table for complex tables
              markdown += `${table.html}\n\n`;
            }
          });
        }
      });
    });

    // Add original documentation link
    markdown += `---\n\n[View Original Documentation](${url})\n`;

    // Filter out navigation items from markdown
    const navLines = navItemsToExclude.map(item => `### ${item}`);
    const markdownLines = markdown.split('\n');
    // More aggressive filtering - remove any line that starts with "### " and matches our excluded items
    const filteredMarkdown = markdownLines.filter(line => {
      const trimmedLine = line.trim();
      return !navLines.some(navLine => trimmedLine === navLine);
    }).join('\n');

    // Write the markdown file
  await fs.ensureDir(outputDir);
    await fs.writeFile(outputPath, filteredMarkdown);

  console.log(`Saved: ${filename}`);
  } catch (error) {
    console.error(`Error during processing: ${error.message}`);
    console.error(error.stack);

    // Take a screenshot on failure to see what the page looked like
    try {
      const errorScreenshotPath = path.join(outputDir, `error-${path.basename(filename, '.md')}.png`);
      await fs.ensureDir(outputDir);
      await page.screenshot({ path: errorScreenshotPath });
      console.log(`Error screenshot saved to ${errorScreenshotPath}`);
    } catch (screenshotError) {
      console.error("Failed to take error screenshot:", screenshotError.message);
    }
  } finally {
  await browser.close();
  }
}

// Modify the main execution function to handle the URL parameter - replace your existing main function
(async () => {
  if (commandLineOptions.url) {
    // If URL is provided, just scrape that one URL
    const url = commandLineOptions.url;
    const filename = getFilenameFromUrl(url);
    console.log(`Running scraper for single URL: ${url}`);

    try {
      // Check if this is a design tokens page
      if (url.includes('tokens/all-tokens') || url.includes('design-tokens')) {
        // Use the specialized token scraper
        const { scrapeTokensPage } = require('./tokenScraper');
        await scrapeTokensPage(url, filename, { rewriteExisting: true });
      } else {
        // Use the regular component scraper
        await scrapePage(url, filename, { rewriteExisting: true }); // Always rewrite for explicit URLs
      }
    } catch (error) {
      console.error(`Failed to scrape ${url}:`, error);
    }
  } else {
    // Otherwise, run through all predefined URLs
    console.log(`Running scraper with rewriteAll=${commandLineOptions.rewriteAll ? 'true' : 'false'}`);

    for (const { url, filename, options } of urlsToScrape) {
      try {
        // Check if this is a design tokens page
        if (url.includes('tokens/all-tokens') || url.includes('design-tokens')) {
          // Use the specialized token scraper
          const { scrapeTokensPage } = require('./tokenScraper');
          await scrapeTokensPage(url, filename, {
            ...options,
            rewriteExisting: commandLineOptions.rewriteAll
          });
        } else {
          // Use the regular component scraper
          await scrapePage(url, filename, {
            ...options,
            rewriteExisting: commandLineOptions.rewriteAll
          });
        }
      } catch (error) {
        console.error(`Failed to scrape ${url}:`, error);
      }
    }
  }
})();