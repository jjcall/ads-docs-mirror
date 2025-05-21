# Inline

An inline manages the horizontal layout of direct children using flexbox.

---

## Installation

<table><caption style="margin: 0px;"><span class="_ca0qidpf _u5f3idpf _n3tdidpf _19bvidpf _19itidpf _1reo15vq _18m915vq _1bsbt94y _4t3it94y _kqswstnw _ogto7mnp _uiztglyw _o5721q9c">Package installation information</span></caption><tbody class="css-11tgl7t"><tr><th scope="row" class="css-1rivm23"><span class="css-1ug5j0u">Install</span></th><td><code class="_ca0qyh40 _u5f3m5ip _n3tdyh40 _19bvm5ip _2rko1sit _11c81u0j _1reo1wug _18m91wug _1dqoglyw _1e0c1nu9 _bfhktkvp _16d9qvcn _syaz1fxt _vwz41kw7 _1i4q1hna _o5721jtm">yarn add @atlaskit/primitives</code></td></tr><tr><th scope="row" class="css-1rivm23"><span class="css-1ug5j0u">Source</span></th><td><span class="css-9tsi9z"><a href="https://bitbucket.org/atlassian/atlassian-frontend-mirror/src/master/design-system/primitives" target="_blank" class="_mizu194a _1ah31bk5 _ra3xnqa1 _128m1bk5 _1cvmnqa1 _4davt94y _4bfu1r31 _1hms8stv _ajmmnqa1 _vchhusvi _syaz14q2 _ect41gqc _1a3b1r31 _4fpr8stv _5goinqa1 _f8pj14q2 _9oik1r31 _1bnxglyw _jf4cnqa1 _30l314q2 _1nrm1r31 _c2waglyw _1iohnqa1 _9h8h16c2 _1053w7te _1ienw7te _n0fxw7te _1vhvg3x0">Bitbucket.org<span class="_19itglyw _vchhusvi _r06hglyw _1e0c1nu9 _o5721q9c _s7n4jp4b _kqswh2mm _152ttb3r">﻿<svg width="12" height="12" viewBox="0 0 12 12" fill="none" class="_1bsbgm0b _4t3igm0b _ahbqzjw7"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.82609C0 0.817938 0.817938 0 1.82609 0H3.91304V1.04348H1.82609C1.39424 1.04348 1.04348 1.39424 1.04348 1.82609V10.1739C1.04348 10.6058 1.39424 10.9565 1.82609 10.9565H10.1739C10.6058 10.9565 10.9565 10.6058 10.9565 10.1739V8.08696H12V10.1739C12 11.1821 11.1821 12 10.1739 12H1.82609C0.817938 12 0 11.1821 0 10.1739V1.82609ZM7.04348 0H12V4.95652H10.9565V1.78133L6.36893 6.36893L5.63107 5.63107L10.2187 1.04348H7.04348V0Z" fill="currentColor"></path></svg></span><span id="uid253" class="_ca0qidpf _u5f3idpf _n3tdidpf _19bvidpf _19itidpf _1reo15vq _18m915vq _1bsbt94y _4t3it94y _kqswstnw _ogto7mnp _uiztglyw _o5721q9c">, (opens new window)</span></a></span></td></tr><tr><th scope="row" class="css-1rivm23"><span class="css-1ug5j0u">npm</span></th><td><span class="css-9tsi9z"><a href="https://www.npmjs.com/package/@atlaskit/primitives" target="_blank" class="_mizu194a _1ah31bk5 _ra3xnqa1 _128m1bk5 _1cvmnqa1 _4davt94y _4bfu1r31 _1hms8stv _ajmmnqa1 _vchhusvi _syaz14q2 _ect41gqc _1a3b1r31 _4fpr8stv _5goinqa1 _f8pj14q2 _9oik1r31 _1bnxglyw _jf4cnqa1 _30l314q2 _1nrm1r31 _c2waglyw _1iohnqa1 _9h8h16c2 _1053w7te _1ienw7te _n0fxw7te _1vhvg3x0">@atlaskit/primitives<span class="_19itglyw _vchhusvi _r06hglyw _1e0c1nu9 _o5721q9c _s7n4jp4b _kqswh2mm _152ttb3r">﻿<svg width="12" height="12" viewBox="0 0 12 12" fill="none" class="_1bsbgm0b _4t3igm0b _ahbqzjw7"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.82609C0 0.817938 0.817938 0 1.82609 0H3.91304V1.04348H1.82609C1.39424 1.04348 1.04348 1.39424 1.04348 1.82609V10.1739C1.04348 10.6058 1.39424 10.9565 1.82609 10.9565H10.1739C10.6058 10.9565 10.9565 10.6058 10.9565 10.1739V8.08696H12V10.1739C12 11.1821 11.1821 12 10.1739 12H1.82609C0.817938 12 0 11.1821 0 10.1739V1.82609ZM7.04348 0H12V4.95652H10.9565V1.78133L6.36893 6.36893L5.63107 5.63107L10.2187 1.04348H7.04348V0Z" fill="currentColor"></path></svg></span><span id="uid254" class="_ca0qidpf _u5f3idpf _n3tdidpf _19bvidpf _19itidpf _1reo15vq _18m915vq _1bsbt94y _4t3it94y _kqswstnw _ogto7mnp _uiztglyw _o5721q9c">, (opens new window)</span></a></span></td></tr><tr><th scope="row" class="css-1rivm23"><span class="css-1ug5j0u">Bundle</span></th><td><span class="css-9tsi9z"><a href="https://unpkg.com/@atlaskit/primitives/dist/" target="_blank" class="_mizu194a _1ah31bk5 _ra3xnqa1 _128m1bk5 _1cvmnqa1 _4davt94y _4bfu1r31 _1hms8stv _ajmmnqa1 _vchhusvi _syaz14q2 _ect41gqc _1a3b1r31 _4fpr8stv _5goinqa1 _f8pj14q2 _9oik1r31 _1bnxglyw _jf4cnqa1 _30l314q2 _1nrm1r31 _c2waglyw _1iohnqa1 _9h8h16c2 _1053w7te _1ienw7te _n0fxw7te _1vhvg3x0">unpkg.com<span class="_19itglyw _vchhusvi _r06hglyw _1e0c1nu9 _o5721q9c _s7n4jp4b _kqswh2mm _152ttb3r">﻿<svg width="12" height="12" viewBox="0 0 12 12" fill="none" class="_1bsbgm0b _4t3igm0b _ahbqzjw7"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.82609C0 0.817938 0.817938 0 1.82609 0H3.91304V1.04348H1.82609C1.39424 1.04348 1.04348 1.39424 1.04348 1.82609V10.1739C1.04348 10.6058 1.39424 10.9565 1.82609 10.9565H10.1739C10.6058 10.9565 10.9565 10.6058 10.9565 10.1739V8.08696H12V10.1739C12 11.1821 11.1821 12 10.1739 12H1.82609C0.817938 12 0 11.1821 0 10.1739V1.82609ZM7.04348 0H12V4.95652H10.9565V1.78133L6.36893 6.36893L5.63107 5.63107L10.2187 1.04348H7.04348V0Z" fill="currentColor"></path></svg></span><span id="uid255" class="_ca0qidpf _u5f3idpf _n3tdidpf _19bvidpf _19itidpf _1reo15vq _18m915vq _1bsbt94y _4t3it94y _kqswstnw _ogto7mnp _uiztglyw _o5721q9c">, (opens new window)</span></a></span></td></tr></tbody></table>

## Basic

Use an inline component to configure the layout of a group of elements horizontally. Use the given props to configure display behavior using design tokens, as shown in the more complex examples below. 

```jsx
import React from 'react';



import { Inline } from '@atlaskit/primitives';



import ExampleBox from '../shared/example-box';



export default function Example() {

	return (

		<Inline>

			<ExampleBox />

			<ExampleBox />

			<ExampleBox />

		</Inline>

	);

}
```

## Space

Control the spacing between items with the space prop. When content is set to wrap, the space prop applies equal spacing between rows. For a different space value between rows use the rowSpace prop. 

```jsx
import React from 'react';



import { Inline, Stack } from '@atlaskit/primitives';



import ExampleBox from '../shared/example-box';



export default function Example() {

	return (

		<Stack space="space.500">

			{(['space.100', 'space.200'] as const).map((space) => (

				<Inline key={space} space={space}>

					<ExampleBox />

					<ExampleBox />

					<ExampleBox />

				</Inline>

			))}

		</Stack>

	);

}
```

```jsx
import React, { useState } from 'react';



import { Label } from '@atlaskit/form';

import { Inline, Stack } from '@atlaskit/primitives';

import Toggle from '@atlaskit/toggle';



import ExampleBox from '../shared/example-box';



export default function Example() {

	const [rowSpace, setRowSpace] = useState<'space.300' | undefined>(undefined);

	const toggleSpace = () => {

		setRowSpace(rowSpace === 'space.300' ? undefined : 'space.300');

	};



	return (

		<Stack alignInline="start" space="space.500">

			<Inline alignBlock="center">

				<Label htmlFor="toggle-space">Toggle space between rows</Label>

				<Toggle id="toggle-space" onChange={toggleSpace} />

			</Inline>

			<Inline space="space.200" rowSpace={rowSpace} shouldWrap>

				{[...Array(24).keys()].map((i) => (

					<ExampleBox />

				))}

			</Inline>

		</Stack>

	);

}
```

## Reverse content

flex-direction: row-reverse` is a pattern that has accessibility concerns so inline doesn't support it. If reversing content is required, we generally recommend to use JavaScript to reverse the JSX content thereby preserving the tabbing order. In situations where tabbing order changes based on different breakpoints, then we have show and hide components that enable switching between different orderings of content. For non-tabbable content that needs to be reversed, flex-direction: row-reverse is supported in XCSS. However, please be aware that we may lint against this in the future. 

## Alignment

To control the alignment of items you can use the alignBlock and alignInline props which control alignment in the vertical and horizontal axis respectively. 

### Block alignment

```jsx
import React, { type ReactNode } from 'react';



import { Box, Flex, Inline, media, Stack, xcss } from '@atlaskit/primitives';



import ExampleBox from '../shared/example-box';



const flexStyles = xcss({

	flexDirection: 'column',

	[media.above.lg]: {

		flexDirection: 'row',

	},

});



const visualContainerStyles = xcss({

	display: 'flex',

	borderRadius: '2px',

	height: 'size.600',

});



export default function Example() {

	return (

		<Flex xcss={flexStyles} justifyContent="space-between">

			<Stack alignInline="center">

				"start" (default)

				<VisualContainer>

					<Inline space="space.050" alignBlock="start">

						<ExampleBox />

						<ExampleBox />

						<ExampleBox padding="space.300" />

					</Inline>

				</VisualContainer>

			</Stack>

			<Stack alignInline="center">

				"center"

				<VisualContainer>

					<Inline space="space.050" alignBlock="center">

						<ExampleBox />

						<ExampleBox />

						<ExampleBox padding="space.300" />

					</Inline>

				</VisualContainer>

			</Stack>

			<Stack alignInline="center">

				"end"

				<VisualContainer>

					<Inline space="space.050" alignBlock="end">

						<ExampleBox />

						<ExampleBox />

						<ExampleBox padding="space.300" />

					</Inline>

				</VisualContainer>

			</Stack>

			<Stack alignInline="center">

				"baseline"

				<VisualContainer>

					<Inline space="space.050" alignBlock="baseline">

						<ExampleBox />

						<ExampleBox />

						<ExampleBox padding="space.300" />

					</Inline>

				</VisualContainer>

			</Stack>

			<Stack alignInline="center">

				"stretch"

				<VisualContainer>

					<Inline space="space.050" alignBlock="stretch">

						<ExampleBox />

						<ExampleBox />

						<ExampleBox padding="space.300" />

					</Inline>

				</VisualContainer>

			</Stack>

		</Flex>

	);

}



const VisualContainer = ({ children }: { children: ReactNode }) => (

	<Box backgroundColor="color.background.neutral" padding="space.050" xcss={visualContainerStyles}>

		{children}

	</Box>

);
```

### Inline alignment

```jsx
import React, { useCallback, useState } from 'react';



import Button from '@atlaskit/button/new';

import Heading from '@atlaskit/heading';

import { Box, Inline, Stack } from '@atlaskit/primitives';



import ExampleBox from '../shared/example-box';



const alignmentValues = ['start', 'center', 'end'] as const;



export default function Example() {

	const [alignmentIndex, setAlignmentIndex] = useState<0 | 1 | 2>(0);

	const nextIndex = ((alignmentIndex + 1) % alignmentValues.length) as 0 | 1 | 2;

	const changeAlignment = useCallback(() => {

		setAlignmentIndex(nextIndex);

	}, [nextIndex]);

	return (

		<Stack space="space.300">

			<Heading size="small">Inline alignment</Heading>

			<Box>

				<Button appearance="primary" onClick={changeAlignment}>

					Change alignment to "{alignmentValues[nextIndex]}"

				</Button>

			</Box>

			<Stack space="space.100">

				<Inline space="space.100" alignInline={alignmentValues[alignmentIndex]}>

					<ExampleBox />

					<ExampleBox />

					<ExampleBox />

				</Inline>

			</Stack>

		</Stack>

	);

}
```

## Spread

Elements can be set to stay together, spaced at the given value (default behavior) or spread equally in the space available. 

```jsx
import React, { useCallback, useState } from 'react';



import { Label } from '@atlaskit/form';

import { Inline, Stack } from '@atlaskit/primitives';

import Toggle from '@atlaskit/toggle';



import ExampleBox from '../shared/example-box';



export default function Example() {

	const [spread, setSpread] = useState<'space-between' | undefined>(undefined);

	const toggleSpread = useCallback(() => {

		setSpread(spread === 'space-between' ? undefined : 'space-between');

	}, [spread]);



	return (

		<Stack alignInline="start" space="space.500">

			<Inline alignBlock="center">

				<Label htmlFor="inline-toggle-spread">Toggle spread</Label>

				<Toggle id="inline-toggle-spread" onChange={toggleSpread} />

			</Inline>

			<Inline space="space.100" grow="fill" spread={spread}>

				<ExampleBox />

				<ExampleBox />

				<ExampleBox />

			</Inline>

		</Stack>

	);

}
```

## Wrap

When the number of items goes beyond the available space, use shouldWrap to create new rows of content. 

```jsx
import React from 'react';



import { Inline } from '@atlaskit/primitives';



import ExampleBox from '../shared/example-box';



export default function Example() {

	return (

		<Inline space="space.100" shouldWrap>

			{[...Array(42).keys()].map((i) => (

				<ExampleBox key={i}>{i + 1}</ExampleBox>

			))}

		</Inline>

	);

}
```

## Separator

For logically related elements it's possible to specify a separator character value. Avoid using separator="•" with as="ul" | "ol" | "dl" to maintain correct list semantics. 

```jsx
import React from 'react';



import { Code } from '@atlaskit/code';

import Heading from '@atlaskit/heading';

import { Inline, Stack } from '@atlaskit/primitives';



export default function Example() {

	return (

		<Stack space="space.100">

			<Heading size="xsmall">Common folders</Heading>

			<Inline space="space.100" separator="|">

				{['bin', 'etc', 'home', 'tmp', 'usr'].map((folder) => (

					<Code key="folder">{folder}</Code>

				))}

			</Inline>

		</Stack>

	);

}
```

## Width control

By default an Inline will have its width influenced by the context where it appears. To control the width, use the grow prop with the values: 

```jsx
import React from 'react';



import { Code } from '@atlaskit/code';

import { Inline, Stack } from '@atlaskit/primitives';



import ExampleBox from '../shared/example-box';



export default function Example() {

	return (

		<Stack alignInline="start" space="space.100">

			<Inline grow="hug">

				{/* eslint-disable-next-line @atlaskit/ui-styling-standard/enforce-style-prop -- Ignored via go/DSP-18766 */}

				<ExampleBox style={{ display: 'block', flexGrow: 1 }}>

					Wrapping <Code>Inline</Code> is set to <Code>grow="hug"</Code>

				</ExampleBox>

			</Inline>

			<Inline grow="fill">

				{/* eslint-disable-next-line @atlaskit/ui-styling-standard/enforce-style-prop -- Ignored via go/DSP-18766 */}

				<ExampleBox style={{ display: 'block', flexGrow: 1 }}>

					Wrapping <Code>Inline</Code> is set to <Code>grow="fill"</Code>

				</ExampleBox>

			</Inline>

		</Stack>

	);

}
```

## Output element

It's possible to control the rendered HTML element with the as prop. 

```jsx
import React, { type ReactNode } from 'react';



import { Checkbox } from '@atlaskit/checkbox';

import { Code } from '@atlaskit/code';

import { Box, Inline, Stack, xcss } from '@atlaskit/primitives';



const listStyles = xcss({ padding: 'space.0' });

// Disabling the typography rule because this is a valid use case

// to ensure the semantics of the list are preserved in Safari.

// eslint-disable-next-line @atlaskit/design-system/use-latest-xcss-syntax-typography

const listItemStyles = xcss({ '::marker': { fontSize: 0 } });

const definitionListStyles = xcss({ paddingInlineStart: 'space.0' });

const definitionListItemStyles = xcss({ margin: 'space.0' });



const InlineListItem = ({ children }: { children: ReactNode }) => (

	<Box as="li" xcss={listItemStyles}>

		{children}

	</Box>

);



const Term = ({ children }: { children: ReactNode }) => (

	<Box as="dt" xcss={definitionListItemStyles}>

		{children}:

	</Box>

);



const Definition = ({ children }: { children: ReactNode }) => (

	<Box as="dd" xcss={definitionListItemStyles}>

		{children}.

	</Box>

);



export default function Example() {

	return (

		<Stack space="space.200">

			<Box>

				<Code>Inline</Code> rendering as <Code>div</Code>:

				<Inline space="space.200">

					<Checkbox label="Option 1" />

					<Checkbox label="Option 2" />

					<Checkbox label="Option 3" />

					<Checkbox label="Option 4" />

				</Inline>

			</Box>

			<Box>

				<Code>Inline</Code> rendering as <Code>span</Code>:

				<Inline as="span" space="space.200">

					<Checkbox label="Option 1" />

					<Checkbox label="Option 2" />

					<Checkbox label="Option 3" />

					<Checkbox label="Option 4" />

				</Inline>

			</Box>

			<Box>

				<Code>Inline</Code> rendering as <Code>ul</Code>:

				<Inline as="ul" xcss={listStyles} space="space.100">

					<InlineListItem>Jira</InlineListItem>

					<InlineListItem>Confluence</InlineListItem>

					<InlineListItem>BitBucket</InlineListItem>

					<InlineListItem>Trello</InlineListItem>

				</Inline>

			</Box>

			<Box>

				<Code>Inline</Code> rendering as <Code>ol</Code>:

				<Inline as="ol" xcss={listStyles} space="space.100">

					<InlineListItem>Jira</InlineListItem>

					<InlineListItem>Confluence</InlineListItem>

					<InlineListItem>BitBucket</InlineListItem>

					<InlineListItem>Trello</InlineListItem>

				</Inline>

			</Box>

			<Box>

				<Code>Inline</Code> rendering as <Code>dl</Code>:

				<Inline as="dl" space="space.100" xcss={definitionListStyles}>

					<Term>JSW</Term>

					<Definition>Jira Software</Definition>

					<Term>JSM</Term>

					<Definition>Jira Service Management</Definition>

					<Term>BBC</Term>

					<Definition>BitBucket Cloud</Definition>

				</Inline>

			</Box>

		</Stack>

	);

}
```

## Practical use case

An example of how an inline component might be used in product, using Atlassian Design System components. 

## Create a backlog

```jsx
import React from 'react';



import { IconButton } from '@atlaskit/button/new';

import DropdownMenu, { DropdownItem, DropdownItemGroup } from '@atlaskit/dropdown-menu';

import Heading from '@atlaskit/heading';

import StoryIcon from '@atlaskit/icon-object/glyph/story/16';

import StarStarredIcon from '@atlaskit/icon/glyph/star-filled';

import { Inline } from '@atlaskit/primitives';



const ActionsMenu = () => (

	<DropdownMenu shouldRenderToParent trigger="Actions">

		<DropdownItemGroup>

			<DropdownItem>Edit</DropdownItem>

			<DropdownItem>Clone issue</DropdownItem>

		</DropdownItemGroup>

	</DropdownMenu>

);



export default function Example() {

	return (

		<Inline alignBlock="center" spread="space-between">

			<Inline space="space.100" alignBlock="center">

				<StoryIcon label="Issue type: Story" />

				<Heading size="large">Create a backlog</Heading>

			</Inline>

			<Inline alignBlock="center" space="space.050">

				<IconButton icon={StarStarredIcon} appearance="subtle" label="Add as favorite" />

				<ActionsMenu />

			</Inline>

		</Inline>

	);

}
```

---

[View Original Documentation](https://atlassian.design/components/primitives/inline/examples)
