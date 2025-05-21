// Test the filename generation logic with examples

// Import the getFilenameFromUrl function from adsScrape.js
const adsScrape = require('./adsScrape.js');
const getFilenameFromUrl = adsScrape.getFilenameFromUrl; // Note: We need to export this function first

// Example URLs from the request
const testUrls = [
  'https://atlassian.design/components/tokens/all-tokens',
  'https://atlassian.design/components/tag/examples',
  'https://atlassian.design/components/code/code-block/examples',
  'https://atlassian.design/components/primitives/responsive/show/examples',
  'https://atlassian.design/components/primitives/responsive/breakpoints/examples'
];

// Expected output filenames
const expectedFilenames = [
  'tokens_all-tokens.md',
  'tag.md',
  'code_code-block.md',
  'primitives_responsive-show.md',
  'primitives_responsive-breakpoints.md'
];

// Run tests
console.log('Testing filename generation logic:');
console.log('=================================');

testUrls.forEach((url, index) => {
  const generatedFilename = getFilenameFromUrl(url);
  const expectedFilename = expectedFilenames[index];
  const passed = generatedFilename === expectedFilename;

  console.log(`Test ${index + 1}: ${passed ? '✅ PASSED' : '❌ FAILED'}`);
  console.log(`URL: ${url}`);
  console.log(`Expected: ${expectedFilename}`);
  console.log(`Generated: ${generatedFilename}`);
  console.log('---------------------------------');
});

// Check if all tests passed
const allPassed = testUrls.every((url, index) =>
  getFilenameFromUrl(url) === expectedFilenames[index]
);

console.log(`\nOverall Result: ${allPassed ? '✅ All tests passed!' : '❌ Some tests failed!'}`);