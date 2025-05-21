# Grid

A grid uses the CSS grid API to create consistent layouts.

---

## Installation

<table><caption style="margin: 0px;"><span class="_ca0qidpf _u5f3idpf _n3tdidpf _19bvidpf _19itidpf _1reo15vq _18m915vq _1bsbt94y _4t3it94y _kqswstnw _ogto7mnp _uiztglyw _o5721q9c">Package installation information</span></caption><tbody class="css-11tgl7t"><tr><th scope="row" class="css-1rivm23"><span class="css-1ug5j0u">Install</span></th><td><code class="_ca0qyh40 _u5f3m5ip _n3tdyh40 _19bvm5ip _2rko1sit _11c81u0j _1reo1wug _18m91wug _1dqoglyw _1e0c1nu9 _bfhktkvp _16d9qvcn _syaz1fxt _vwz41kw7 _1i4q1hna _o5721jtm">yarn add @atlaskit/primitives</code></td></tr><tr><th scope="row" class="css-1rivm23"><span class="css-1ug5j0u">Source</span></th><td><span class="css-9tsi9z"><a href="https://bitbucket.org/atlassian/atlassian-frontend-mirror/src/master/design-system/primitives" target="_blank" class="_mizu194a _1ah31bk5 _ra3xnqa1 _128m1bk5 _1cvmnqa1 _4davt94y _4bfu1r31 _1hms8stv _ajmmnqa1 _vchhusvi _syaz14q2 _ect41gqc _1a3b1r31 _4fpr8stv _5goinqa1 _f8pj14q2 _9oik1r31 _1bnxglyw _jf4cnqa1 _30l314q2 _1nrm1r31 _c2waglyw _1iohnqa1 _9h8h16c2 _1053w7te _1ienw7te _n0fxw7te _1vhvg3x0">Bitbucket.org<span class="_19itglyw _vchhusvi _r06hglyw _1e0c1nu9 _o5721q9c _s7n4jp4b _kqswh2mm _152ttb3r">﻿<svg width="12" height="12" viewBox="0 0 12 12" fill="none" class="_1bsbgm0b _4t3igm0b _ahbqzjw7"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.82609C0 0.817938 0.817938 0 1.82609 0H3.91304V1.04348H1.82609C1.39424 1.04348 1.04348 1.39424 1.04348 1.82609V10.1739C1.04348 10.6058 1.39424 10.9565 1.82609 10.9565H10.1739C10.6058 10.9565 10.9565 10.6058 10.9565 10.1739V8.08696H12V10.1739C12 11.1821 11.1821 12 10.1739 12H1.82609C0.817938 12 0 11.1821 0 10.1739V1.82609ZM7.04348 0H12V4.95652H10.9565V1.78133L6.36893 6.36893L5.63107 5.63107L10.2187 1.04348H7.04348V0Z" fill="currentColor"></path></svg></span><span id="uid253" class="_ca0qidpf _u5f3idpf _n3tdidpf _19bvidpf _19itidpf _1reo15vq _18m915vq _1bsbt94y _4t3it94y _kqswstnw _ogto7mnp _uiztglyw _o5721q9c">, (opens new window)</span></a></span></td></tr><tr><th scope="row" class="css-1rivm23"><span class="css-1ug5j0u">npm</span></th><td><span class="css-9tsi9z"><a href="https://www.npmjs.com/package/@atlaskit/primitives" target="_blank" class="_mizu194a _1ah31bk5 _ra3xnqa1 _128m1bk5 _1cvmnqa1 _4davt94y _4bfu1r31 _1hms8stv _ajmmnqa1 _vchhusvi _syaz14q2 _ect41gqc _1a3b1r31 _4fpr8stv _5goinqa1 _f8pj14q2 _9oik1r31 _1bnxglyw _jf4cnqa1 _30l314q2 _1nrm1r31 _c2waglyw _1iohnqa1 _9h8h16c2 _1053w7te _1ienw7te _n0fxw7te _1vhvg3x0">@atlaskit/primitives<span class="_19itglyw _vchhusvi _r06hglyw _1e0c1nu9 _o5721q9c _s7n4jp4b _kqswh2mm _152ttb3r">﻿<svg width="12" height="12" viewBox="0 0 12 12" fill="none" class="_1bsbgm0b _4t3igm0b _ahbqzjw7"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.82609C0 0.817938 0.817938 0 1.82609 0H3.91304V1.04348H1.82609C1.39424 1.04348 1.04348 1.39424 1.04348 1.82609V10.1739C1.04348 10.6058 1.39424 10.9565 1.82609 10.9565H10.1739C10.6058 10.9565 10.9565 10.6058 10.9565 10.1739V8.08696H12V10.1739C12 11.1821 11.1821 12 10.1739 12H1.82609C0.817938 12 0 11.1821 0 10.1739V1.82609ZM7.04348 0H12V4.95652H10.9565V1.78133L6.36893 6.36893L5.63107 5.63107L10.2187 1.04348H7.04348V0Z" fill="currentColor"></path></svg></span><span id="uid254" class="_ca0qidpf _u5f3idpf _n3tdidpf _19bvidpf _19itidpf _1reo15vq _18m915vq _1bsbt94y _4t3it94y _kqswstnw _ogto7mnp _uiztglyw _o5721q9c">, (opens new window)</span></a></span></td></tr><tr><th scope="row" class="css-1rivm23"><span class="css-1ug5j0u">Bundle</span></th><td><span class="css-9tsi9z"><a href="https://unpkg.com/@atlaskit/primitives/dist/" target="_blank" class="_mizu194a _1ah31bk5 _ra3xnqa1 _128m1bk5 _1cvmnqa1 _4davt94y _4bfu1r31 _1hms8stv _ajmmnqa1 _vchhusvi _syaz14q2 _ect41gqc _1a3b1r31 _4fpr8stv _5goinqa1 _f8pj14q2 _9oik1r31 _1bnxglyw _jf4cnqa1 _30l314q2 _1nrm1r31 _c2waglyw _1iohnqa1 _9h8h16c2 _1053w7te _1ienw7te _n0fxw7te _1vhvg3x0">unpkg.com<span class="_19itglyw _vchhusvi _r06hglyw _1e0c1nu9 _o5721q9c _s7n4jp4b _kqswh2mm _152ttb3r">﻿<svg width="12" height="12" viewBox="0 0 12 12" fill="none" class="_1bsbgm0b _4t3igm0b _ahbqzjw7"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.82609C0 0.817938 0.817938 0 1.82609 0H3.91304V1.04348H1.82609C1.39424 1.04348 1.04348 1.39424 1.04348 1.82609V10.1739C1.04348 10.6058 1.39424 10.9565 1.82609 10.9565H10.1739C10.6058 10.9565 10.9565 10.6058 10.9565 10.1739V8.08696H12V10.1739C12 11.1821 11.1821 12 10.1739 12H1.82609C0.817938 12 0 11.1821 0 10.1739V1.82609ZM7.04348 0H12V4.95652H10.9565V1.78133L6.36893 6.36893L5.63107 5.63107L10.2187 1.04348H7.04348V0Z" fill="currentColor"></path></svg></span><span id="uid255" class="_ca0qidpf _u5f3idpf _n3tdidpf _19bvidpf _19itidpf _1reo15vq _18m915vq _1bsbt94y _4t3it94y _kqswstnw _ogto7mnp _uiztglyw _o5721q9c">, (opens new window)</span></a></span></td></tr></tbody></table>

## Basic

The Grid component is designed as a very basic mapping to the CSS Grid API. It can be used as an alternative to Flex, Inline or Stack. 

```jsx
import React from 'react';



import { Grid } from '@atlaskit/primitives';



import ExampleBox from '../shared/example-box';



export default function Basic() {

	return (

		<Grid gap="space.200" alignItems="center">

			<ExampleBox />

			<ExampleBox />

			<ExampleBox />

		</Grid>

	);

}
```

## Gap properties

Gap properties rowGap, columnGap and gap only allow token-backed values. This is to aid ergonomics and keep the whitespace of the grid harmonious with the spacing system. 

```jsx
import React from 'react';



import { Grid } from '@atlaskit/primitives';



import ExampleBox from '../shared/example-box';



export default function Basic() {

	return (

		<Grid gap="space.200" alignItems="center">

			<Grid templateColumns="1fr 1fr" testId="grid-basic" gap="space.100">

				<ExampleBox />

				<ExampleBox />

				<ExampleBox />

				<ExampleBox />

			</Grid>

			<Grid templateColumns="1fr 1fr" testId="grid-basic" gap="space.200">

				<ExampleBox />

				<ExampleBox />

				<ExampleBox />

				<ExampleBox />

			</Grid>

			<Grid templateColumns="1fr 1fr" testId="grid-basic" gap="space.400">

				<ExampleBox />

				<ExampleBox />

				<ExampleBox />

				<ExampleBox />

			</Grid>

		</Grid>

	);

}
```

## Template syntax

Grid-prefixed template properties in CSS do not have this prefix in the component API. For example grid-template-* are instead applied as templateColumns, templateRows and templateArea properties. 

### Template columns

Template columns enables grid to declare the way columns are applied in the template. 

```jsx
import React from 'react';



import { Grid } from '@atlaskit/primitives';



import ExampleBox from '../shared/example-box';



export default function Basic() {

	return (

		<Grid

			testId="grid-basic"

			rowGap="space.200"

			columnGap="space.400"

			templateColumns="1fr 100px 1fr"

		>

			<ExampleBox />

			<ExampleBox />

			<ExampleBox />

			<ExampleBox />

			<ExampleBox />

			<ExampleBox />

		</Grid>

	);

}
```

### Template rows

Template rows enables grid to declare the way row are applied in the template. 

```jsx
import React from 'react';



import { Grid } from '@atlaskit/primitives';



import ExampleBox from '../shared/example-box';



export default function Basic() {

	return (

		<Grid testId="grid-basic" rowGap="space.200" columnGap="space.400" templateRows="3rem 2rem">

			<ExampleBox />

			<ExampleBox />

		</Grid>

	);

}
```

### Template areas

Template areas enables grid to declare the grid areas are applied in the template. 

```jsx
import React from 'react';



import { Grid } from '@atlaskit/primitives';



import ExampleBox from '../shared/example-box';



export default function Basic() {

	return (

		<Grid

			testId="grid-basic"

			gap="space.200"

			templateAreas={[

				'navigation navigation navigation',

				'sidenav content content',

				'footer footer footer',

			]}

		>

			{/* eslint-disable-next-line @atlaskit/ui-styling-standard/enforce-style-prop -- Ignored via go/DSP-18766 */}

			<ExampleBox style={{ gridArea: 'navigation' }} />

			{/* eslint-disable-next-line @atlaskit/ui-styling-standard/enforce-style-prop -- Ignored via go/DSP-18766 */}

			<ExampleBox style={{ gridArea: 'sidenav' }} />

			{/* eslint-disable-next-line @atlaskit/ui-styling-standard/enforce-style-prop -- Ignored via go/DSP-18766 */}

			<ExampleBox style={{ gridArea: 'content' }} />

			{/* eslint-disable-next-line @atlaskit/ui-styling-standard/enforce-style-prop -- Ignored via go/DSP-18766 */}

			<ExampleBox style={{ gridArea: 'footer' }} />

		</Grid>

	);

}
```

## Autoflow syntax

Grid-prefixed properties in CSS do not have this prefix in the component API. grid-auto-flow is instead applied via autoFlow. 

```jsx
import React from 'react';



import { Grid } from '@atlaskit/primitives';



import ExampleBox from '../shared/example-box';



export default function Basic() {

	return (

		<Grid autoFlow="column" gap="space.200">

			<ExampleBox />

			<ExampleBox />

			<ExampleBox />

		</Grid>

	);

}
```

## Responsive grid

Here, we construct a grid layout that adapts from a single column to a four-column layout depending on the viewport size. You may also be looking for: 

```jsx
import React from 'react';



import { Grid, xcss } from '@atlaskit/primitives';

import { media } from '@atlaskit/primitives/responsive';



import ExampleBox from '../shared/example-box';



const responsiveStyles = xcss({

	[media.above.xxs]: { gridTemplateColumns: 'repeat(1, 1fr)' },

	[media.above.xs]: {

		gridTemplateColumns: 'repeat(2, 1fr)',

	},

	[media.above.sm]: {

		gridTemplateColumns: 'repeat(3, 1fr)',

	},

	[media.above.lg]: {

		gridTemplateColumns: 'repeat(4, 1fr)',

	},

});



const ResponsiveGrid = () => {

	return (

		<Grid xcss={responsiveStyles} gap="space.200" alignItems="center">

			<ExampleBox />

			<ExampleBox />

			<ExampleBox />

			<ExampleBox />

		</Grid>

	);

};



export default ResponsiveGrid;
```

---

[View Original Documentation](https://atlassian.design/components/primitives/grid/examples)
