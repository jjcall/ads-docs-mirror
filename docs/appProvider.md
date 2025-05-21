# App provider

A top level provider for the Design System.

---

## Theming

App provider sets up theming for an app, enabling design tokens to be used. 

### Theming with design tokens

```jsx
import React from 'react';

import { Box } from '@atlaskit/primitives';

import AppProvider from '@atlaskit/app-provider';



function ThemedComponent() {

  return (

    <Box backgroundColor="elevation.surface" padding="space.200">

      <Box as="h3">

        Theming with design tokens

      </Box>

    </Box>

  );

}



function AppProviderTheme() {

  return (

    <AppProvider>

      <ThemedComponent />

    </AppProvider>

  );

}
```

## Color mode and theme switching

The useColorMode hook can be used to get the active color mode. When the color mode is set to auto, the active color mode will be determined by the user's system preference. The useTheme hook can be used to get the active themes. The useSetTheme hook can be used to change themes. 

### Current color mode: dark

### Current light theme: light

```jsx
import React from 'react';

import { Box } from '@atlaskit/primitives';

import AppProvider from '@atlaskit/app-provider';



function ColorModeSwitcher() {

  const colorMode = useColorMode();

  const setColorMode = useSetColorMode();



  return (

    <Box backgroundColor="elevation.surface" padding="space.200">

      <Box as="h3" paddingBlockEnd="space.200">

        Current color mode: {colorMode}

      </Box>

      <DropdownMenu trigger="Change color mode">

        <DropdownItemGroup>

          <DropdownItem onClick={() => setColorMode('light')}>

            Light

          </DropdownItem>

          <DropdownItem onClick={() => setColorMode('dark')}>Dark</DropdownItem>

          <DropdownItem onClick={() => setColorMode('auto')}>Auto</DropdownItem>

        </DropdownItemGroup>

      </DropdownMenu>

    </Box>

  );

}



function ThemeSwitcher() {

  const theme = useTheme();

  const setTheme = useSetTheme();



  return (

    <Box backgroundColor="elevation.surface" padding="space.200">

      <Box as="h3" paddingBlockEnd="space.200">

        Current light theme: {theme.light}

      </Box>

      <DropdownMenu trigger="Change light theme">

        <DropdownItemGroup>

          <DropdownItem onClick={() => setTheme({ light: 'legacy-light' })}>

            Legacy light theme

          </DropdownItem>

          <DropdownItem onClick={() => setTheme({ light: 'light' })}>

            Light theme

          </DropdownItem>

        </DropdownItemGroup>

      </DropdownMenu>

    </Box>

  );

}



function AppProviderTheme() {

  return (

    <AppProvider defaultColorMode="auto">

      <ColorModeSwitcher />

      <ThemeSwitcher />

    </AppProvider>

  );

}
```

## Router links

The routerLinkComponent prop provides support for configuring router links within Design System components. Support for this is limited as Design System components are being updated, starting with: This example shows how links can be configured to utilize the router link component supplied by React Resource Router, however any routing library can be used. 

```jsx
import React, { forwardRef, type Ref } from 'react';

import {

  Link,

  type LinkProps,

  RouteComponent,

  Router,

} from 'react-resource-router';

import AppProvider, { type RouterLinkComponentProps } from '@atlaskit/app-provider';



type ReactResourceRouterLinkConfig = Pick<LinkProps, 'to' | 'href' | 'replace'>;



const MyRouterLinkComponent = forwardRef(

  (

    {

      href,

      children,

      ...rest

    }: RouterLinkComponentProps<ReactResourceRouterLinkConfig>,

    ref: Ref<HTMLAnchorElement>,

  ) => {

    // A basic link by passing a string as the component's `href` prop.

    if (typeof href === 'string') {

      return (

        <Link ref={ref} href={href} {...rest}>

          {children}

        </Link>

      );

    }



    // Advanced link configuration by passing an object as the

    // component's `href` prop

    return (

      <Link

        ref={ref}

        href={href.href}

        to={href.to}

        replace={href.replace}

        {...rest}

      >

        {children}

      </Link>

    );

  },

);



const routes = [

  {

    name: 'home',

    path: '',

    exact: true,

    component: () => <div>Home page component</div>,

  },

];



function App() {

  return (

    <AppProvider routerLinkComponent={MyRouterLinkComponent}>

      <Router routes={routes}>

        <RouteComponent />

      </Router>

    </AppProvider>

  );

}
```

---

[View Original Documentation](https://atlassian.design/components/app-provider/examples)
