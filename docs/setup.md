# Setup & develop with the Atlassian Design System

Guidance on environment configuration, tooling, and composition to effectively utilize the Atlassian Design System.

---

## Before You Begin

The Atlassian Design System is built with **React 18** and **TypeScript**. Ensure you have these installed before starting.

Install React and TypeScript:

```bash
yarn add react@^18.2.0 react-dom@^18.2.0
yarn add --dev @types/react@^18.2.0 @types/react-dom@^18.2.0 typescript@~5.4.0
```

Atlassian Design System packages are available on npm under the `@atlaskit` scope.

---

## Set Up Your Style Environment

Install the CSS reset and design tokens:

```bash
yarn add @atlaskit/css-reset @atlaskit/tokens
```

Import the stylesheets at the root of your application to ensure components render correctly in both light and dark modes:

```javascript
import '@atlaskit/css-reset';
```

---

## Configure Your Bundling Environment

The Atlassian Design System distributes CSS files via packages. Your bundler must support this. It's recommended to configure Babel along with Webpack or Parcel.

### Setting Up Babel

Install the necessary Babel plugins:

```bash
yarn add @atlaskit/tokens
yarn add --dev @compiled/babel-plugin @compiled/babel-plugin-strip-runtime
```

Configure Babel (`babel.config.js`) ensuring the plugin order is correct:

```javascript
module.exports = {
  plugins: [
    '@atlaskit/tokens/babel-plugin',
    ['@compiled/babel-plugin', { transformerBabelPlugins: ['@atlaskit/tokens/babel-plugin'] }],
    ['@compiled/babel-plugin-strip-runtime'],
  ],
};
```

## Compose Custom Components

When building custom components not directly supported by the Atlassian Design System:

1. **Use ADS components** wherever possible for ease and maintainability.
2. **Customize** using available props (e.g., `<Button appearance="primary" spacing="compact">`).
3. **Compose** with primitives like `Box` and `Stack` to add spacing and styles.
4. **Leverage design tokens** and foundations for consistent styling.

Example:

```jsx
<Box padding="space.200">
  <p>You have unread messages</p>
  <Button appearance="primary">View messages</Button>
</Box>
```
