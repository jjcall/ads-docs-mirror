# Stack

A stack manages the vertical layout of direct children using flexbox.

---

## Installation

<table><caption style="margin: 0px;"><span class="_ca0qidpf _u5f3idpf _n3tdidpf _19bvidpf _19itidpf _1reo15vq _18m915vq _1bsbt94y _4t3it94y _kqswstnw _ogto7mnp _uiztglyw _o5721q9c">Package installation information</span></caption><tbody class="css-11tgl7t"><tr><th scope="row" class="css-1rivm23"><span class="css-1ug5j0u">Install</span></th><td><code class="_ca0qyh40 _u5f3m5ip _n3tdyh40 _19bvm5ip _2rko1sit _11c81u0j _1reo1wug _18m91wug _1dqoglyw _1e0c1nu9 _bfhktkvp _16d9qvcn _syaz1fxt _vwz41kw7 _1i4q1hna _o5721jtm">yarn add @atlaskit/primitives</code></td></tr><tr><th scope="row" class="css-1rivm23"><span class="css-1ug5j0u">Source</span></th><td><span class="css-9tsi9z"><a href="https://bitbucket.org/atlassian/atlassian-frontend-mirror/src/master/design-system/primitives" target="_blank" class="_mizu194a _1ah31bk5 _ra3xnqa1 _128m1bk5 _1cvmnqa1 _4davt94y _4bfu1r31 _1hms8stv _ajmmnqa1 _vchhusvi _syaz14q2 _ect41gqc _1a3b1r31 _4fpr8stv _5goinqa1 _f8pj14q2 _9oik1r31 _1bnxglyw _jf4cnqa1 _30l314q2 _1nrm1r31 _c2waglyw _1iohnqa1 _9h8h16c2 _1053w7te _1ienw7te _n0fxw7te _1vhvg3x0">Bitbucket.org<span class="_19itglyw _vchhusvi _r06hglyw _1e0c1nu9 _o5721q9c _s7n4jp4b _kqswh2mm _152ttb3r">﻿<svg width="12" height="12" viewBox="0 0 12 12" fill="none" class="_1bsbgm0b _4t3igm0b _ahbqzjw7"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.82609C0 0.817938 0.817938 0 1.82609 0H3.91304V1.04348H1.82609C1.39424 1.04348 1.04348 1.39424 1.04348 1.82609V10.1739C1.04348 10.6058 1.39424 10.9565 1.82609 10.9565H10.1739C10.6058 10.9565 10.9565 10.6058 10.9565 10.1739V8.08696H12V10.1739C12 11.1821 11.1821 12 10.1739 12H1.82609C0.817938 12 0 11.1821 0 10.1739V1.82609ZM7.04348 0H12V4.95652H10.9565V1.78133L6.36893 6.36893L5.63107 5.63107L10.2187 1.04348H7.04348V0Z" fill="currentColor"></path></svg></span><span id="uid253" class="_ca0qidpf _u5f3idpf _n3tdidpf _19bvidpf _19itidpf _1reo15vq _18m915vq _1bsbt94y _4t3it94y _kqswstnw _ogto7mnp _uiztglyw _o5721q9c">, (opens new window)</span></a></span></td></tr><tr><th scope="row" class="css-1rivm23"><span class="css-1ug5j0u">npm</span></th><td><span class="css-9tsi9z"><a href="https://www.npmjs.com/package/@atlaskit/primitives" target="_blank" class="_mizu194a _1ah31bk5 _ra3xnqa1 _128m1bk5 _1cvmnqa1 _4davt94y _4bfu1r31 _1hms8stv _ajmmnqa1 _vchhusvi _syaz14q2 _ect41gqc _1a3b1r31 _4fpr8stv _5goinqa1 _f8pj14q2 _9oik1r31 _1bnxglyw _jf4cnqa1 _30l314q2 _1nrm1r31 _c2waglyw _1iohnqa1 _9h8h16c2 _1053w7te _1ienw7te _n0fxw7te _1vhvg3x0">@atlaskit/primitives<span class="_19itglyw _vchhusvi _r06hglyw _1e0c1nu9 _o5721q9c _s7n4jp4b _kqswh2mm _152ttb3r">﻿<svg width="12" height="12" viewBox="0 0 12 12" fill="none" class="_1bsbgm0b _4t3igm0b _ahbqzjw7"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.82609C0 0.817938 0.817938 0 1.82609 0H3.91304V1.04348H1.82609C1.39424 1.04348 1.04348 1.39424 1.04348 1.82609V10.1739C1.04348 10.6058 1.39424 10.9565 1.82609 10.9565H10.1739C10.6058 10.9565 10.9565 10.6058 10.9565 10.1739V8.08696H12V10.1739C12 11.1821 11.1821 12 10.1739 12H1.82609C0.817938 12 0 11.1821 0 10.1739V1.82609ZM7.04348 0H12V4.95652H10.9565V1.78133L6.36893 6.36893L5.63107 5.63107L10.2187 1.04348H7.04348V0Z" fill="currentColor"></path></svg></span><span id="uid254" class="_ca0qidpf _u5f3idpf _n3tdidpf _19bvidpf _19itidpf _1reo15vq _18m915vq _1bsbt94y _4t3it94y _kqswstnw _ogto7mnp _uiztglyw _o5721q9c">, (opens new window)</span></a></span></td></tr><tr><th scope="row" class="css-1rivm23"><span class="css-1ug5j0u">Bundle</span></th><td><span class="css-9tsi9z"><a href="https://unpkg.com/@atlaskit/primitives/dist/" target="_blank" class="_mizu194a _1ah31bk5 _ra3xnqa1 _128m1bk5 _1cvmnqa1 _4davt94y _4bfu1r31 _1hms8stv _ajmmnqa1 _vchhusvi _syaz14q2 _ect41gqc _1a3b1r31 _4fpr8stv _5goinqa1 _f8pj14q2 _9oik1r31 _1bnxglyw _jf4cnqa1 _30l314q2 _1nrm1r31 _c2waglyw _1iohnqa1 _9h8h16c2 _1053w7te _1ienw7te _n0fxw7te _1vhvg3x0">unpkg.com<span class="_19itglyw _vchhusvi _r06hglyw _1e0c1nu9 _o5721q9c _s7n4jp4b _kqswh2mm _152ttb3r">﻿<svg width="12" height="12" viewBox="0 0 12 12" fill="none" class="_1bsbgm0b _4t3igm0b _ahbqzjw7"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.82609C0 0.817938 0.817938 0 1.82609 0H3.91304V1.04348H1.82609C1.39424 1.04348 1.04348 1.39424 1.04348 1.82609V10.1739C1.04348 10.6058 1.39424 10.9565 1.82609 10.9565H10.1739C10.6058 10.9565 10.9565 10.6058 10.9565 10.1739V8.08696H12V10.1739C12 11.1821 11.1821 12 10.1739 12H1.82609C0.817938 12 0 11.1821 0 10.1739V1.82609ZM7.04348 0H12V4.95652H10.9565V1.78133L6.36893 6.36893L5.63107 5.63107L10.2187 1.04348H7.04348V0Z" fill="currentColor"></path></svg></span><span id="uid255" class="_ca0qidpf _u5f3idpf _n3tdidpf _19bvidpf _19itidpf _1reo15vq _18m915vq _1bsbt94y _4t3it94y _kqswstnw _ogto7mnp _uiztglyw _o5721q9c">, (opens new window)</span></a></span></td></tr></tbody></table>

## Basic

Use a stack component to efficiently lay-out a group of elements vertically. Use the given props to configure display behavior using designs tokens, as shown in the more complex examples below. 

```jsx
import React from 'react';



import { Stack } from '@atlaskit/primitives';



import ExampleBox from '../shared/example-box';



export default function Example() {

	return (

		<Stack>

			<ExampleBox />

			<ExampleBox />

			<ExampleBox />

		</Stack>

	);

}
```

## Space

Control spacing between items with the space prop. 

```jsx
import React from 'react';



import { Inline, Stack } from '@atlaskit/primitives';



import ExampleBox from '../shared/example-box';



export default function Example() {

	return (

		<Inline space="space.500">

			{(['space.100', 'space.200'] as const).map((space) => (

				<Stack key={space} space={space}>

					<ExampleBox />

					<ExampleBox />

					<ExampleBox />

				</Stack>

			))}

		</Inline>

	);

}
```

## Reverse content

flex-direction: column-reverse` is a pattern that has accessibility concerns so stack doesn't support it. If reversing content is required, we generally recommend to use JavaScript to reverse the JSX content thereby preserving the tabbing order. In situations where tabbing order changes based on different breakpoints, then we have show and hide components that enable switching between different orderings of content. For non-tabbable content that needs to be reversed, flex-direction: column-reverse is supported in XCSS. However, please be aware that we may lint against this in the future. 

## Alignment

Control the alignment of items using the alignBlock and alignInline props which control alignment in the vertical and horizontal axis respectively. 

### Block alignment

```jsx
import React from 'react';



import Heading from '@atlaskit/heading';

import { Box, Inline, Stack, xcss } from '@atlaskit/primitives';



import ExampleBox from '../shared/example-box';



const containerStyles = xcss({

	display: 'flex',

});



export default function Example() {

	return (

		<Box testId="stack-example" padding="space.100">

			<Inline space="space.200" spread="space-between">

				<Stack alignInline="center" space="space.200">

					<Heading size="xsmall">Start alignment</Heading>

					<Box

						xcss={containerStyles}

						style={{

							// eslint-disable-next-line @atlaskit/ui-styling-standard/enforce-style-prop -- Ignored via go/DSP-18766

							height: '200px',

						}}

					>

						<Stack space="space.050" alignBlock="start">

							<ExampleBox />

							<ExampleBox />

							<ExampleBox />

						</Stack>

					</Box>

				</Stack>

				<Stack alignInline="center">

					<Heading size="xsmall">Center alignment</Heading>

					<Box

						xcss={containerStyles}

						style={{

							// eslint-disable-next-line @atlaskit/ui-styling-standard/enforce-style-prop -- Ignored via go/DSP-18766

							height: '200px',

						}}

					>

						<Stack space="space.050" alignBlock="center">

							<ExampleBox />

							<ExampleBox />

							<ExampleBox />

						</Stack>

					</Box>

				</Stack>

				<Stack alignInline="center">

					<Heading size="xsmall">End alignment</Heading>

					<Box

						xcss={containerStyles}

						style={{

							// eslint-disable-next-line @atlaskit/ui-styling-standard/enforce-style-prop -- Ignored via go/DSP-18766

							height: '200px',

						}}

					>

						<Stack space="space.050" alignBlock="end">

							<ExampleBox />

							<ExampleBox />

							<ExampleBox />

						</Stack>

					</Box>

				</Stack>

			</Inline>

		</Box>

	);

}
```

### Inline alignment

```jsx
import React, { useCallback, useState } from 'react';



import Button from '@atlaskit/button/new';

import Heading from '@atlaskit/heading';

import { Box, Stack } from '@atlaskit/primitives';



import ExampleBox from '../shared/example-box';



const alignmentValues = ['start', 'center', 'end'] as const;



export default function Example() {

	const [alignmentIndex, setAlignmentIndex] = useState<0 | 1 | 2>(0);

	const nextIndex = ((alignmentIndex + 1) % alignmentValues.length) as 0 | 1 | 2;

	const changeAlignment = useCallback(() => {

		setAlignmentIndex(nextIndex);

	}, [nextIndex]);

	return (

		<Stack space="space.500">

			<Box>

				<Button appearance="primary" onClick={changeAlignment}>

					Change alignment to "{alignmentValues[nextIndex]}"

				</Button>

			</Box>

			<Stack space="space.100">

				<Heading size="xsmall">Inline alignment</Heading>

				<Stack space="space.100" grow="fill" alignInline={alignmentValues[alignmentIndex]}>

					<ExampleBox />

					<ExampleBox />

					<ExampleBox />

				</Stack>

			</Stack>

		</Stack>

	);

}
```

## Spread

Use the spread prop to set elements to stay together, spaced at the given value (default behavior) or spread equally in the space available. 

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

				<Label htmlFor="stack-toggle-spread">Toggle spread</Label>

				<Toggle id="stack-toggle-spread" onChange={toggleSpread} />

			</Inline>

			<Inline space="space.100" alignBlock="stretch">

				<Stack space="space.1000">

					<ExampleBox />

					<ExampleBox />

					<ExampleBox />

				</Stack>



				<Stack space="space.100" spread={spread}>

					<ExampleBox />

					<ExampleBox />

					<ExampleBox />

				</Stack>

			</Inline>

		</Stack>

	);

}
```

## Width control

By default a Stack will have its width influenced by the context where it appears. To control the width use the grow prop with the values: 

```jsx
import React from 'react';



import { Inline, Stack } from '@atlaskit/primitives';



import ExampleBox from '../shared/example-box';



export default function Example() {

	return (

		<Inline space="space.200">

			<Stack space="space.100" grow="hug">

				<ExampleBox>This content is hugged</ExampleBox>

			</Stack>

			<Stack space="space.100" grow="fill">

				<ExampleBox>Available space is filled</ExampleBox>

			</Stack>

		</Inline>

	);

}
```

## Output element

It's possible to control the rendered HTML element with the as prop. 

```jsx
import React from 'react';



import Heading from '@atlaskit/heading';

import { Box, Inline, Stack } from '@atlaskit/primitives';



export default function Example() {

	return (

		<Inline spread="space-between">

			<Stack space="space.150">

				<Heading size="small">Stack as 'div'</Heading>

				<Stack space="space.200">

					<Box>First child</Box>

					<Box>Second child</Box>

					<Box>Third child</Box>

					<Box>Fourth child</Box>

				</Stack>

			</Stack>

			<Stack space="space.150">

				<Heading size="small">Stack as 'span'</Heading>

				<Stack as="span" space="space.200">

					<Box>First child</Box>

					<Box>Second child</Box>

					<Box>Third child</Box>

					<Box>Fourth child</Box>

				</Stack>

			</Stack>

			<Box>

				<Heading size="small">Stack as 'ul'</Heading>

				<Stack as="ul" space="space.200">

					<li>Unordered List Item</li>

					<li>Unordered List Item</li>

					<li>Unordered List Item</li>

					<li>Unordered List Item</li>

				</Stack>

			</Box>

			<Box>

				<Heading size="small">Stack as 'ol'</Heading>

				<Stack as="ol" space="space.200">

					<li>Ordered List Item</li>

					<li>Ordered List Item</li>

					<li>Ordered List Item</li>

					<li>Ordered List Item</li>

				</Stack>

			</Box>

			<Box>

				<Heading size="small">Stack as 'dl'</Heading>

				<Stack as="dl" space="space.200">

					<Box as="dt">Jira</Box>

					<Box as="dd">Flexible project management</Box>

					<Box as="dt">Confluence</Box>

					<Box as="dd">Knowledge, all in one place</Box>

					<Box as="dt">BitBucket</Box>

					<Box as="dd">Collaborative code repos</Box>

				</Stack>

			</Box>

		</Inline>

	);

}
```

## Practical use case

An example of how a stack component might be used in product, using Atlassian Design System components. 

```jsx
import React from 'react';



import Heading from '@atlaskit/heading';

import Story16Icon from '@atlaskit/icon-object/glyph/story/16';

import ComponentIcon from '@atlaskit/icon/glyph/component';

import EmojiAddIcon from '@atlaskit/icon/glyph/emoji-add';

import FeedbackIcon from '@atlaskit/icon/glyph/feedback';

import Lozenge from '@atlaskit/lozenge';

import { Box, Inline, Stack } from '@atlaskit/primitives';



export default function Example() {

	return (

		<Box backgroundColor="elevation.surface" padding="space.150">

			<Stack space="space.150">

				<Stack space="space.050">

					<Inline alignBlock="center" space="space.100">

						<Story16Icon label="" />

						<Heading size="small">What we learned reviewing Atlas end to end</Heading>

					</Inline>

					<Inline separator="•" space="space.100">

						<Box>Created by Bradley Rogers</Box>

						<Box>5 hours ago</Box>

						<Box>Atlas</Box>

					</Inline>

				</Stack>

				What did we do? As a team, Atlas just completed our first full round of reviewing our end

				user experience from end to end. We started by identifying 12 top tasks…

				<Inline space="space.050">

					<Lozenge>

						<ComponentIcon label="" />

					</Lozenge>

					<Lozenge>

						<FeedbackIcon label="" />

					</Lozenge>

					<Lozenge>

						<EmojiAddIcon label="" />

					</Lozenge>

				</Inline>

			</Stack>

		</Box>

	);

}
```

---

[View Original Documentation](https://atlassian.design/components/primitives/stack/examples)
