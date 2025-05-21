# Atlassian Design System Token Scraper

This project extracts and mirrors the Atlassian Design System (ADS) design tokens into a structured Markdown file for use with Context7 and other AI documentation tools.

## Purpose

The goal is to create a high-fidelity, up-to-date mirror of the ADS token documentation, making it easily indexable and referenceable for AI development workflows (e.g., Context7, AI code assistants, or documentation search).

## How It Works

- Scrapes the ADS "All Tokens" reference page (or uses a local HTML snapshot)
- Extracts all design tokens, organized by section and subsection
- Outputs a clean, structured `docs/designTokens.md` file suitable for AI indexing and documentation

## Usage

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Run the scraper:**
   ```sh
   node adsScrape.js --rewrite-all
   ```
   - This will generate or update `docs/{{component}}.md`.
   - You can optionally run a specific component by passing it the url.
   ```
   node adsScrape.js https://atlassian.design/components/button/examples
   ```

3. **Result:**
   - The Markdown files will contain all component code examples, values, and descriptions, organized to mirror the ADS UI.

## Generating the LLM Manifest for Context7

To generate a manifest file (`llms.txt`) containing raw GitHub URLs for all markdown docs (for Context7 or similar tools):

1. **Ensure your docs are up to date (run the scraper first).**
2. **Run the manifest generator:**
   ```sh
   node generateLLMManifest.js
   ```
   - This will create or update `llms.txt` in the project root, listing all markdown files in `docs/` as raw GitHub URLs (edit the script to match your repo if needed).
   - This step is **separate** from running the scraper.

## Notes
- The script prefers a local HTML snapshot for speed and reliability. To update, delete `docs/tokens-page.html` and rerun.
- Designed for easy integration with Context7 and similar AI documentation/indexing tools.

---

*For questions or improvements, open an issue or PR.*