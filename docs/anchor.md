# Anchor

An anchor is a primitive for building custom links.

---

## Installation

Anchor is a primitive for building custom links with Atlassian Design System styling, routing support, and built-in event tracking. It renders an anchor <a> element. 

<table><caption style="margin: 0px;"><span class="_ca0qidpf _u5f3idpf _n3tdidpf _19bvidpf _19itidpf _1reo15vq _18m915vq _1bsbt94y _4t3it94y _kqswstnw _ogto7mnp _uiztglyw _o5721q9c">Package installation information</span></caption><tbody class="css-11tgl7t"><tr><th scope="row" class="css-1rivm23"><span class="css-1ug5j0u">Install</span></th><td><code class="_ca0qyh40 _u5f3m5ip _n3tdyh40 _19bvm5ip _2rko1sit _11c81u0j _1reo1wug _18m91wug _1dqoglyw _1e0c1nu9 _bfhktkvp _16d9qvcn _syaz1fxt _vwz41kw7 _1i4q1hna _o5721jtm">yarn add @atlaskit/primitives</code></td></tr><tr><th scope="row" class="css-1rivm23"><span class="css-1ug5j0u">Source</span></th><td><span class="css-9tsi9z"><a href="https://bitbucket.org/atlassian/atlassian-frontend-mirror/src/master/design-system/primitives" target="_blank" class="_mizu194a _1ah31bk5 _ra3xnqa1 _128m1bk5 _1cvmnqa1 _4davt94y _4bfu1r31 _1hms8stv _ajmmnqa1 _vchhusvi _syaz14q2 _ect41gqc _1a3b1r31 _4fpr8stv _5goinqa1 _f8pj14q2 _9oik1r31 _1bnxglyw _jf4cnqa1 _30l314q2 _1nrm1r31 _c2waglyw _1iohnqa1 _9h8h16c2 _1053w7te _1ienw7te _n0fxw7te _1vhvg3x0">Bitbucket.org<span class="_19itglyw _vchhusvi _r06hglyw _1e0c1nu9 _o5721q9c _s7n4jp4b _kqswh2mm _152ttb3r">﻿<svg width="12" height="12" viewBox="0 0 12 12" fill="none" class="_1bsbgm0b _4t3igm0b _ahbqzjw7"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.82609C0 0.817938 0.817938 0 1.82609 0H3.91304V1.04348H1.82609C1.39424 1.04348 1.04348 1.39424 1.04348 1.82609V10.1739C1.04348 10.6058 1.39424 10.9565 1.82609 10.9565H10.1739C10.6058 10.9565 10.9565 10.6058 10.9565 10.1739V8.08696H12V10.1739C12 11.1821 11.1821 12 10.1739 12H1.82609C0.817938 12 0 11.1821 0 10.1739V1.82609ZM7.04348 0H12V4.95652H10.9565V1.78133L6.36893 6.36893L5.63107 5.63107L10.2187 1.04348H7.04348V0Z" fill="currentColor"></path></svg></span><span id="uid255" class="_ca0qidpf _u5f3idpf _n3tdidpf _19bvidpf _19itidpf _1reo15vq _18m915vq _1bsbt94y _4t3it94y _kqswstnw _ogto7mnp _uiztglyw _o5721q9c">, (opens new window)</span></a></span></td></tr><tr><th scope="row" class="css-1rivm23"><span class="css-1ug5j0u">npm</span></th><td><span class="css-9tsi9z"><a href="https://www.npmjs.com/package/@atlaskit/primitives" target="_blank" class="_mizu194a _1ah31bk5 _ra3xnqa1 _128m1bk5 _1cvmnqa1 _4davt94y _4bfu1r31 _1hms8stv _ajmmnqa1 _vchhusvi _syaz14q2 _ect41gqc _1a3b1r31 _4fpr8stv _5goinqa1 _f8pj14q2 _9oik1r31 _1bnxglyw _jf4cnqa1 _30l314q2 _1nrm1r31 _c2waglyw _1iohnqa1 _9h8h16c2 _1053w7te _1ienw7te _n0fxw7te _1vhvg3x0">@atlaskit/primitives<span class="_19itglyw _vchhusvi _r06hglyw _1e0c1nu9 _o5721q9c _s7n4jp4b _kqswh2mm _152ttb3r">﻿<svg width="12" height="12" viewBox="0 0 12 12" fill="none" class="_1bsbgm0b _4t3igm0b _ahbqzjw7"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.82609C0 0.817938 0.817938 0 1.82609 0H3.91304V1.04348H1.82609C1.39424 1.04348 1.04348 1.39424 1.04348 1.82609V10.1739C1.04348 10.6058 1.39424 10.9565 1.82609 10.9565H10.1739C10.6058 10.9565 10.9565 10.6058 10.9565 10.1739V8.08696H12V10.1739C12 11.1821 11.1821 12 10.1739 12H1.82609C0.817938 12 0 11.1821 0 10.1739V1.82609ZM7.04348 0H12V4.95652H10.9565V1.78133L6.36893 6.36893L5.63107 5.63107L10.2187 1.04348H7.04348V0Z" fill="currentColor"></path></svg></span><span id="uid256" class="_ca0qidpf _u5f3idpf _n3tdidpf _19bvidpf _19itidpf _1reo15vq _18m915vq _1bsbt94y _4t3it94y _kqswstnw _ogto7mnp _uiztglyw _o5721q9c">, (opens new window)</span></a></span></td></tr><tr><th scope="row" class="css-1rivm23"><span class="css-1ug5j0u">Bundle</span></th><td><span class="css-9tsi9z"><a href="https://unpkg.com/@atlaskit/primitives/dist/" target="_blank" class="_mizu194a _1ah31bk5 _ra3xnqa1 _128m1bk5 _1cvmnqa1 _4davt94y _4bfu1r31 _1hms8stv _ajmmnqa1 _vchhusvi _syaz14q2 _ect41gqc _1a3b1r31 _4fpr8stv _5goinqa1 _f8pj14q2 _9oik1r31 _1bnxglyw _jf4cnqa1 _30l314q2 _1nrm1r31 _c2waglyw _1iohnqa1 _9h8h16c2 _1053w7te _1ienw7te _n0fxw7te _1vhvg3x0">unpkg.com<span class="_19itglyw _vchhusvi _r06hglyw _1e0c1nu9 _o5721q9c _s7n4jp4b _kqswh2mm _152ttb3r">﻿<svg width="12" height="12" viewBox="0 0 12 12" fill="none" class="_1bsbgm0b _4t3igm0b _ahbqzjw7"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.82609C0 0.817938 0.817938 0 1.82609 0H3.91304V1.04348H1.82609C1.39424 1.04348 1.04348 1.39424 1.04348 1.82609V10.1739C1.04348 10.6058 1.39424 10.9565 1.82609 10.9565H10.1739C10.6058 10.9565 10.9565 10.6058 10.9565 10.1739V8.08696H12V10.1739C12 11.1821 11.1821 12 10.1739 12H1.82609C0.817938 12 0 11.1821 0 10.1739V1.82609ZM7.04348 0H12V4.95652H10.9565V1.78133L6.36893 6.36893L5.63107 5.63107L10.2187 1.04348H7.04348V0Z" fill="currentColor"></path></svg></span><span id="uid257" class="_ca0qidpf _u5f3idpf _n3tdidpf _19bvidpf _19itidpf _1reo15vq _18m915vq _1bsbt94y _4t3it94y _kqswstnw _ogto7mnp _uiztglyw _o5721q9c">, (opens new window)</span></a></span></td></tr></tbody></table>

## Default

Anchor is unstyled besides a default underline and consistent Atlassian Design System focus styles. If you are using the CSS reset, anchor will also inherit some global styles. 

```jsx
import React from 'react';



import Anchor from '@atlaskit/primitives/anchor';



export default function Default() {

	return <Anchor href="/components/primitives/overview">Anchor</Anchor>;

}
```

## Basic styling with XCSS

Anchor can be styled further using the design system styling API, XCSS. 

```jsx
import React from 'react';



import Image from '@atlaskit/image';

import Lozenge from '@atlaskit/lozenge';

import { Anchor, Box, xcss } from '@atlaskit/primitives';



import ButtonIcon from '../../images/button.png';



const anchorStyles = xcss({

	color: 'color.link',

	backgroundColor: 'elevation.surface',

	textDecoration: 'none',

	borderWidth: 'border.width',

	borderStyle: 'solid',

	borderColor: 'color.border',

	borderRadius: '3px',

	display: 'inline-flex',

	alignItems: 'center',

	gap: 'space.100',

	paddingInline: 'space.050',

	paddingBlock: 'space.025',



	':hover': {

		backgroundColor: 'elevation.surface.hovered',

		textDecoration: 'none',

	},

	':active': {

		color: 'color.link.pressed',

		backgroundColor: 'elevation.surface.pressed',

	},

	':visited': {

		color: 'color.link.visited',

	},

	':visited:active': {

		color: 'color.link.visited.pressed',

	},

});



const iconContainerStyles = xcss({

	width: '16px',

	display: 'flex',

});



export default function Basic() {

	return (

		<Anchor

			href="https://www.atlassian.com/software/atlas"

			interactionName="atlas-link"

			xcss={anchorStyles}

			target="_blank"

			rel="noopener noreferrer"

		>

			<Box xcss={iconContainerStyles}>

				<Image src={ButtonIcon} alt="" />

			</Box>

			Evolving Button: Open beta to GA

			<Lozenge appearance="success">On track</Lozenge>

		</Anchor>

	);

}
```

## Advanced styling

Use a combination of XCSS and other primitives for more complex designs. 

## Pick up where you left off

### Anchor primitive is now in beta!

### Impact & release planning

### How to implement dark mode

### New Bitbucket pull requests

```jsx
import React from 'react';



import Heading from '@atlaskit/heading';

import { type IconProps } from '@atlaskit/icon';

import Blog24Icon from '@atlaskit/icon-object/glyph/blog/24';

import Improvement24Icon from '@atlaskit/icon-object/glyph/improvement/24';

import Page24Icon from '@atlaskit/icon-object/glyph/page/24';

import { Anchor, Box, Grid, Inline, Stack, Text, xcss } from '@atlaskit/primitives';

import { media } from '@atlaskit/primitives/responsive';



const anchorStyles = xcss({

	color: 'color.text',

	backgroundColor: 'elevation.surface',

	padding: 'space.200',

	textDecoration: 'none',

	borderColor: 'color.border',

	borderStyle: 'solid',

	borderWidth: 'border.width',

	borderRadius: '3px',



	':hover': {

		backgroundColor: 'elevation.surface.hovered',

		textDecoration: 'none',

	},

	':active': {

		backgroundColor: 'elevation.surface.pressed',

	},

});



const iconContainerStyles = xcss({

	width: '24px',

	display: 'flex',

});



const gridStyles = xcss({

	[media.above.sm]: {

		gridTemplateColumns: '1fr 1fr',

	},

});



type PageLinkProps = {

	href: string;

	title: string;

	space: string;

	lastVisited: string;

	icon: React.ComponentType<IconProps>;

};



const PageLink = ({ href, title, space, lastVisited, icon: Icon }: PageLinkProps) => {

	return (

		<Anchor href={href} xcss={anchorStyles}>

			<Stack space="space.100">

				<Inline space="space.150" alignBlock="center">

					<Box xcss={iconContainerStyles}>

						<Icon label="" />

					</Box>

					<Stack>

						<Heading as="h3" size="small">

							{title}

						</Heading>

						<Text color="color.text.subtle" size="small">

							{space}

						</Text>

					</Stack>

				</Inline>

				<Text color="color.text.subtle" size="small">

					Visited {lastVisited}

				</Text>

			</Stack>

		</Anchor>

	);

};



export default function Styled() {

	return (

		<Stack space="space.200">

			<Heading as="h2" size="small">

				Pick up where you left off

			</Heading>

			<Grid rowGap="space.100" columnGap="space.100" templateColumns="1fr" xcss={gridStyles}>

				<PageLink

					href="/components/primitives/overview"

					icon={Blog24Icon}

					title="Anchor primitive is now in beta!"

					space="Design System Team"

					lastVisited="1 hour ago"

				/>

				<PageLink

					href="/components/primitives/overview"

					icon={Page24Icon}

					title="Impact & release planning"

					space="Design System Team"

					lastVisited="1 day ago"

				/>

				<PageLink

					href="/components/primitives/overview"

					icon={Page24Icon}

					title="How to implement dark mode"

					space="Design System Team"

					lastVisited="12 May 2024"

				/>

				<PageLink

					href="/components/primitives/overview"

					icon={Improvement24Icon}

					title="New Bitbucket pull requests"

					space="Bitbucket Cloud"

					lastVisited="10 May 2024"

				/>

			</Grid>

		</Stack>

	);

}
```

## HTML attributes

Anchor can pass all valid anchor HTML attributes, such as rel or download, to the underlying <a> element. 

```jsx
import React from 'react';



import Anchor from '@atlaskit/primitives/anchor';



export default function AnchorHTMLAttributes() {

	return (

		<Anchor href="https://www.atlassian.com/" target="_blank" rel="noopener noreferrer">

			Visit the Atlassian website

		</Anchor>

	);

}
```

## Router links

Routing libraries often supply link components enhanced with routing support. You can configure this in the AppProvider context, and anchor will automatically use it. This example shows a configuration for React Resource Router, however any routing library can be used. Using this method, anchor accepts href as a string for standard usage. For advanced usage, an object can be passed. Anchor will only render a router link if: 

```jsx
import React, { forwardRef, type Ref } from 'react';



import { Link, type LinkProps, RouteComponent, Router } from 'react-resource-router';



import AppProvider, { type RouterLinkComponentProps } from '@atlaskit/app-provider';

import Anchor from '@atlaskit/primitives/anchor';



export type ReactResourceRouterLinkConfig = Pick<LinkProps, 'to' | 'href' | 'replace'>;



const HomePage = () => {

	return (

		<>

			{/* Internal link: Will render a router link */}

			<Anchor href="/about">Internal link</Anchor>

			{/* Advanced usage */}

			<Anchor<ReactResourceRouterLinkConfig>

				href={{

					to: '/about',

					replace: true,

				}}

			>

				Advanced link

			</Anchor>

			{/* External link: Will not render a router link */}

			<Anchor href="https://www.atlassian.com">External link</Anchor>

			{/* Non-HTTP-based: Will not render a router link */}

			<Anchor href="mailto:test@example.com">Email link</Anchor>

		</>

	);

};



/**

 * Configures a router link for the app provider.

 */

const MyRouterLinkComponent = forwardRef(

	(

		{ href, children, ...rest }: RouterLinkComponentProps<ReactResourceRouterLinkConfig>,

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

			<Link ref={ref} href={href.href} to={href.to} replace={href.replace} {...rest}>

				{children}

			</Link>

		);

	},

);



export default function RouterLinkConfiguration() {

	return (

		<AppProvider routerLinkComponent={MyRouterLinkComponent}>

			<Router

				routes={[

					{

						name: 'home',

						path: '',

						exact: true,

						component: HomePage,

					},

				]}

			>

				<RouteComponent />

			</Router>

		</AppProvider>

	);

}
```

## Event tracking

Anchor has utilities to make tracking events easier. Events won't be captured unless listeners are set up to handle them. 

### Track events for any analytics provider

Anchor comes with built-in Atlaskit analytics support using the Analytics next package, and fires events for available listeners. Currently this is only available for onClick. Events always fire on the atlaskit channel. To fire events on other channels as well, use the provided analyticsEvent in onClick. To configure event data, use componentName (defaults to 'Anchor') and use analyticsContext to pass other metadata. See the event data in the console. 

```jsx
import React, { useCallback } from 'react';



import { AnalyticsListener, type UIAnalyticsEvent } from '@atlaskit/analytics-next';

import { Inline } from '@atlaskit/primitives';

import Anchor from '@atlaskit/primitives/anchor';



export default function Analytics() {

	const handleEvent = useCallback((event: UIAnalyticsEvent, channel?: string) => {

		console.log(`Channel: '${channel}'`, event);

	}, []);



	return (

		<AnalyticsListener channel="*" onEvent={handleEvent}>

			<Inline space="space.100">

				<Anchor href="/components/primitives/overview" target="_blank">

					Default

				</Anchor>

				<Anchor

					href="/components/primitives/overview"

					target="_blank"

					onClick={(_, analyticsEvent) => {

						analyticsEvent.fire('my-channel');

					}}

				>

					Fires on "my-channel"

				</Anchor>

				<Anchor

					href="/components/primitives/overview"

					target="_blank"

					componentName="MyButton"

					analyticsContext={{

						color: 'blue',

						someId: 937458,

					}}

				>

					Customized event data

				</Anchor>

			</Inline>

		</AnalyticsListener>

	);

}
```

### Track events for Atlassian internal services

The Atlassian analytics bridge makes Atlaskit analytics events compatible with GASv3 (Global Analytics Service). This can also inject an actionSubjectId to the event if required. See the event data in the console. By default, anchor fires React UFO (Unified Frontend Observability) press interactions for available listeners. This helps Atlassian measure performance and reliability. You can provide more detail using the interactionName prop. 

```jsx
import React, { useCallback } from 'react';



import { AnalyticsListener, type UIAnalyticsEvent } from '@atlaskit/analytics-next';

import Anchor from '@atlaskit/primitives/anchor';

import {

	ANALYTICS_BRIDGE_CHANNEL,

	extractAWCDataFromEvent,

	fireUIAnalytics,

} from '@atlassian/analytics-bridge';



export default function AnalyticsGASv3() {

	const handleEvent = useCallback((event: UIAnalyticsEvent, channel?: string) => {

		console.log(`Channel: '${channel}'`, extractAWCDataFromEvent(event));

	}, []);



	const handleClick = useCallback(

		(_: React.MouseEvent<HTMLAnchorElement, MouseEvent>, analyticsEvent: UIAnalyticsEvent) => {

			fireUIAnalytics(analyticsEvent, 'theActionSubjectId');

		},

		[],

	);



	return (

		<AnalyticsListener channel={ANALYTICS_BRIDGE_CHANNEL} onEvent={handleEvent}>

			<Anchor

				href="/components/primitives/overview"

				target="_blank"

				onClick={handleClick}

				analyticsContext={{

					attributes: {

						color: 'blue',

						someId: 937458,

					},

				}}

			>

				Fire GASv3 compatible event

			</Anchor>

		</AnalyticsListener>

	);

}
```

## Your projects

```jsx
import React from 'react';



import __noop from '@atlaskit/ds-lib/noop';

import { FlagsProvider, useFlags } from '@atlaskit/flag';

import Heading from '@atlaskit/heading';

import InformationIcon from '@atlaskit/icon/glyph/info';

import Image from '@atlaskit/image';

import InteractionContext from '@atlaskit/interaction-context';

import { Anchor, Box, Inline, Stack, xcss } from '@atlaskit/primitives';

import { token } from '@atlaskit/tokens';



import ButtonIcon from '../../images/button.png';

import ThemesIcon from '../../images/themes.png';

import WatermelonIcon from '../../images/watermelon.png';



const anchorStyles = xcss({

	color: 'color.text',

	textDecoration: 'none',



	':hover': {

		color: 'color.text',

		textDecoration: 'underline',

	},

	':active': {

		textDecoration: 'none',

	},

	':visited': {

		color: 'color.link.visited',

	},

	':visited:active': {

		color: 'color.link.visited.pressed',

	},

});



const iconContainerStyles = xcss({

	width: '24px',

	display: 'flex',

});



type ProjectLinkProps = {

	children: string;

	icon: string;

	id: string;

};



const ProjectLink = ({ children, icon, id }: ProjectLinkProps) => {

	return (

		<Anchor href="#" xcss={anchorStyles} interactionName={`anchor-${id}`}>

			<Inline space="space.150" alignBlock="center">

				<Box xcss={iconContainerStyles}>

					<Image src={icon} alt="" />

				</Box>

				{children}

			</Inline>

		</Anchor>

	);

};



const Projects = () => {

	const { showFlag } = useFlags();



	return (

		<InteractionContext.Provider

			value={{

				hold: __noop,

				tracePress: (name) => {

					console.log('Traced a press!', name);

					showFlag({

						title: `Traced a press!`,

						description: name,

						icon: (

							<InformationIcon

								label="Info"

								primaryColor={token('color.icon.information')}

							/>

						),

						isAutoDismiss: true,

					});

				},

			}}

		>

			<Stack space="space.200">

				<Heading as="h2" size="small">

					Your projects

				</Heading>

				<Stack space="space.100">

					<ProjectLink icon={ButtonIcon} id="evolving-button">

						Evolving Button: Open beta to GA

					</ProjectLink>

					<ProjectLink icon={ThemesIcon} id="increased-contrast-themes">

						Increased contrast themes

					</ProjectLink>

					<ProjectLink icon={WatermelonIcon} id="typography">

						ADS Typography

					</ProjectLink>

				</Stack>

			</Stack>

		</InteractionContext.Provider>

	);

};



export default function PressTracing() {

	return (

		<FlagsProvider>

			<Projects />

		</FlagsProvider>

	);

}
```

---

[View Original Documentation](https://atlassian.design/components/primitives/anchor/examples)
