const css = {
  intro: {
    definition: 'CSS (Cascading Style Sheets) is a styling language used to describe the presentation and visual layout of HTML documents.',
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: 'CSS uses rule sets consisting of a selector and declaration blocks. The selector targets HTML elements, and declarations inside curly braces define properties and values. Each declaration ends with a semicolon.',
    examples: [
      { title: 'Basic CSS Rule', code: `h1 {\n  color: blue;\n  font-size: 24px;\n}`, output: 'Targets all h1 elements and sets the text color to blue and font size to 24 pixels. The selector h1 matches the element, and the declarations define the styles.' },
      { title: 'Multiple Selectors', code: `h1, h2, h3 {\n  font-family: Arial, sans-serif;\n  margin: 0;\n}`, output: 'Applies the same styles to multiple elements using a comma-separated selector list. All headings get Arial font and zero margin.' },
      { title: 'CSS Comments', code: `/* This is a CSS comment */\nbody {\n  margin: 0;\n  /* padding: 10px; */\n}`, output: 'Comments in CSS use slash-asterisk syntax. They are ignored by the browser and are useful for explaining code or temporarily disabling styles.' },
      { title: 'Class and ID Selectors', code: `.button {\n  background-color: blue;\n  color: white;\n}\n\n#header {\n  background-color: navy;\n}`, output: 'Class selectors use a dot prefix and target elements with a class attribute. ID selectors use a hash prefix and target a unique element with an id attribute.' }
    ],
    keyPoints: [
      'CSS uses selectors to target HTML elements for styling.',
      'Declarations consist of property-value pairs separated by colons.',
      'Cascading rules determine which styles apply when conflicts exist.'
    ],
    commonMistakes: [
      'Forgetting semicolons after CSS declarations which breaks the rule.',
      'Confusing class selectors with ID selectors in specificity.'
    ],
    proTips: [
      'Use external stylesheets for better organization and caching.',
      'Follow a consistent naming convention like BEM for class names.'
    ]
  },
  selectors: {
    definition: 'CSS selectors are patterns used to target and select HTML elements for styling. They range from simple element selectors to complex combinations.',
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: 'Selectors can target elements by type, class, id, attribute, or relationship. Combinators like spaces, greater than signs, and plus signs create complex selection patterns based on element hierarchy and adjacency.',
    examples: [
      { title: 'Element and Class Selectors', code: `p {\n  line-height: 1.6;\n}\n\n.container {\n  max-width: 1200px;\n  margin: 0 auto;\n}`, output: 'The element selector targets all p elements. The class selector targets all elements with the container class. Class selectors are more specific and reusable.' },
      { title: 'ID and Attribute Selectors', code: `#main-header {\n  background-color: #333;\n}\n\ninput[type=\"email\"] {\n  border: 2px solid blue;\n}\n\n[data-status=\"active\"] {\n  color: green;\n}`, output: 'ID selectors target unique elements. Attribute selectors target elements with specific attributes or attribute values. Useful for styling form inputs and dynamic states.' },
      { title: 'Descendant and Child Selectors', code: `nav a {\n  color: white;\n  text-decoration: none;\n}\n\n.card > p {\n  margin-bottom: 1rem;\n}`, output: 'The space combinator selects all descendants. The greater than sign selects only direct children. This allows targeting nested elements with precision.' },
      { title: 'Pseudo-class Selectors', code: `a:hover {\n  color: red;\n}\n\ninput:focus {\n  outline: 2px solid blue;\n}\n\nli:first-child {\n  font-weight: bold;\n}`, output: 'Pseudo-classes select elements in specific states like hover, focus, or first-child. They do not require additional HTML attributes.' },
      { title: 'Sibling and Combined Selectors', code: `h2 + p {\n  margin-top: 0;\n}\n\nh2 ~ p {\n  color: gray;\n}\n\nul li:nth-child(even) {\n  background-color: #f0f0f0;\n}`, output: 'The plus combinator selects the immediately following sibling. The tilde selects all following siblings. Nth-child targets elements at specific positions in a group.' }
    ],
    keyPoints: [
      'Element selectors target all instances of a type like p or h1.',
      'Class selectors with dot are reusable across multiple elements.',
      'Pseudo-classes target elements in specific states without extra HTML.'
    ],
    commonMistakes: [
      'Overusing ID selectors which makes styles hard to override.',
      'Creating overly specific selectors that are hard to maintain.'
    ],
    proTips: [
      'Prefer class selectors over ID selectors for better reusability.',
      'Keep selectors as simple as possible while still being specific enough.'
    ]
  },
  specificity: {
    definition: 'CSS specificity determines which styles are applied when multiple rules target the same element. It is a weight system based on the types of selectors used.',
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: 'Specificity is calculated as a three-part value: IDs, classes, and elements. Inline styles have the highest specificity. The important declaration overrides all other specificity. When specificity is equal, the last rule wins.',
    examples: [
      { title: 'Specificity Hierarchy', code: `/* Specificity: 0,0,1 */\np { color: black; }\n\n/* Specificity: 0,1,0 */\n.text { color: blue; }\n\n/* Specificity: 1,0,0 */\n#intro { color: red; }`, output: 'ID selectors have higher specificity than class selectors, which have higher specificity than element selectors. The ID rule would win over the others.' },
      { title: 'Inline vs External', code: `/* External stylesheet */\n.button {\n  background-color: blue;\n}\n\n<!-- Inline style -->\n<button style=\"background-color: red;\">`, output: 'Inline styles have higher specificity than external stylesheet rules. The button will have a red background because the inline style wins.' },
      { title: 'Important Declaration', code: `/* Normal declaration */\np {\n  color: black !important;\n}\n\n/* This will be overridden */\np.special {\n  color: red;\n}`, output: 'The !important declaration overrides all other specificity rules. Use it sparingly as it makes debugging and maintenance difficult.' },
      { title: 'Equal Specificity', code: `.card {\n  background: white;\n}\n\n.card-content {\n  background: gray;\n}\n\n/* When specificity is equal, last rule wins */\n.card {\n  background: blue;\n}`, output: 'When two rules have equal specificity, the last rule in the stylesheet is applied. This is the cascade in action.' }
    ],
    keyPoints: [
      'Specificity is calculated as IDs, classes, and elements in that order.',
      'Inline styles have higher specificity than external stylesheet rules.',
      'The !important declaration overrides all other specificity rules.'
    ],
    commonMistakes: [
      'Using !important too often which creates a maintenance nightmare.',
      'Creating unnecessarily specific selectors that are hard to override.'
    ],
    proTips: [
      'Avoid using !important except as a last resort for utility classes.',
      'Keep your specificity low and consistent throughout your stylesheet.'
    ]
  },
  colors: {
    definition: 'CSS colors define the visual appearance of text, backgrounds, borders, and other elements. Colors can be specified using named colors, hex codes, RGB, RGBA, HSL, and HSLA values.',
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: 'CSS provides multiple color formats. Named colors use predefined names like red or blue. Hex codes use hash followed by six characters. RGB and HSL allow precise control over color values and transparency.',
    examples: [
      { title: 'Named Colors and Hex', code: `p {\n  color: navy;\n}\n\nh1 {\n  color: #ff6600;\n}\n\n.link {\n  color: #369; /* shorthand */\n}`, output: 'Named colors are human-readable. Hex codes provide precise color values. Short hex codes like #369 expand to #336699 for convenience.' },
      { title: 'RGB and RGBA', code: `body {\n  background-color: rgb(255, 255, 255);\n}\n\n.overlay {\n  background-color: rgba(0, 0, 0, 0.5);\n}`, output: 'RGB specifies red, green, and blue values from 0 to 255. RGBA adds an alpha channel for transparency from 0 fully transparent to 1 fully opaque.' },
      { title: 'HSL and HSLA', code: `.primary {\n  color: hsl(210, 100%, 50%);\n}\n\n.shadow {\n  background-color: hsla(120, 50%, 50%, 0.3);\n}`, output: 'HSL stands for hue, saturation, and lightness. Hue is the color angle on the color wheel. Saturation is the intensity. Lightness is how light or dark the color is.' },
      { title: 'Current Color Keyword', code: `.button {\n  color: white;\n  border: 2px solid currentColor;\n  background-color: blue;\n}\n\n.icon {\n  fill: currentColor;\n}`, output: 'The currentColor keyword inherits the computed value of the color property. It is useful for maintaining color consistency across related properties.' }
    ],
    keyPoints: [
      'Hex codes use six characters to represent red, green, and blue values.',
      'HSL provides an intuitive way to specify colors using hue, saturation, and lightness.',
      'The currentColor keyword inherits the element text color.'
    ],
    commonMistakes: [
      'Using hex codes without understanding the order of red, green, and blue.',
      'Using low contrast colors that fail accessibility standards.'
    ],
    proTips: [
      'Use CSS custom properties to define a color palette for your project.',
      'Test color contrast against WCAG guidelines for accessibility.'
    ]
  },
  text: {
    definition: 'CSS text properties control the appearance of text including font family, size, weight, alignment, spacing, decoration, and transformation.',
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: 'CSS text properties include font-family for typeface, font-size for size, font-weight for boldness, text-align for alignment, letter-spacing for character spacing, and text-transform for case transformations.',
    examples: [
      { title: 'Font Properties', code: `body {\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.6;\n}`, output: 'Font-family sets the typeface with fallbacks. Font-size sets the text size. Font-weight controls boldness. Line-height sets the spacing between lines of text.' },
      { title: 'Text Alignment and Spacing', code: `h1 {\n  text-align: center;\n  letter-spacing: 2px;\n}\n\np {\n  text-align: justify;\n  word-spacing: 4px;\n}`, output: 'Text-align controls horizontal alignment. Letter-spacing adds space between characters. Word-spacing adds space between words. Justify aligns text to both left and right edges.' },
      { title: 'Text Decoration and Transform', code: `a {\n  text-decoration: none;\n}\n\n.title {\n  text-transform: uppercase;\n}\n\n.date {\n  text-decoration: underline dotted;\n}`, output: 'Text-decoration adds lines like underline. Text-transform changes text case. Multiple decoration values can be combined like underline dotted.' },
      { title: 'Text Overflow', code: `.truncate {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.multi-line {\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}`, output: 'Text-overflow ellipsis shows three dots when text overflows. Combined with white-space nowrap and overflow hidden, it truncates single-line text.' },
      { title: 'Web Fonts', code: `@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');\n\nbody {\n  font-family: 'Roboto', sans-serif;\n}`, output: 'Custom web fonts can be imported from font services. The font-family declaration uses the font name with fallback fonts. The swap value ensures text remains visible during font loading.' }
    ],
    keyPoints: [
      'Always provide fallback fonts in font-family declarations.',
      'Line-height of 1.5 to 1.6 provides comfortable reading experience.',
      'Web fonts require importing the font file before using it in font-family.'
    ],
    commonMistakes: [
      'Using only one font without providing fallback options.',
      'Forgetting to set line-height which makes text hard to read.'
    ],
    proTips: [
      'Limit your design to two or three font families for visual consistency.',
      'Use font-display swap to prevent invisible text during font loading.'
    ]
  },
  units: {
    definition: 'CSS units specify sizes for properties like width, height, margin, padding, and font-size. There are absolute units like pixels and relative units like percentages and em.',
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: 'Absolute units like px are fixed and do not change. Relative units like rem, em, %, vw, and vh adapt based on context. Rem is relative to the root font-size, em is relative to the parent font-size, and viewport units are relative to the browser window.',
    examples: [
      { title: 'Pixel Units', code: `h1 {\n  font-size: 32px;\n  margin-bottom: 20px;\n  border-width: 2px;\n}`, output: 'Pixels are absolute units that do not change based on context. They provide precise control but do not scale with user preferences or screen size.' },
      { title: 'Em and Rem Units', code: `html {\n  font-size: 16px;\n}\n\nh1 {\n  font-size: 2rem; /* 32px */\n}\n\n.parent {\n  font-size: 20px;\n}\n\n.child {\n  font-size: 1.5em; /* 30px */\n}`, output: 'Rem is relative to the root html font-size. Em is relative to the parent element font-size. Rem is preferred for consistent sizing across components.' },
      { title: 'Percentage and Viewport Units', code: `.container {\n  width: 80%;\n  max-width: 1200px;\n}\n\n.hero {\n  height: 100vh;\n  width: 100vw;\n}`, output: 'Percentages are relative to the parent element dimensions. Viewport units vw and vh are relative to the browser window size. Useful for full-screen layouts.' },
      { title: 'Vmin and Vmax Units', code: `.mobile-hero {\n  font-size: 8vmin;\n}\n\n.square {\n  width: 50vmin;\n  height: 50vmin;\n}`, output: 'Vmin is relative to the smaller viewport dimension. Vmax is relative to the larger viewport dimension. Useful for sizing elements that should adapt to screen orientation.' },
      { title: 'Ch and Ex Units', code: `.code-block {\n  font-size: 14px;\n  width: 80ch;\n  line-height: 1.5ex;\n}`, output: 'Ch is relative to the width of the zero character. Ex is relative to the height of the lowercase x. Useful for sizing based on the current font metrics.' }
    ],
    keyPoints: [
      'Pixels are absolute units that provide fixed sizes.',
      'Rem is relative to the root font-size and is preferred for consistency.',
      'Viewport units vw vh vmin vmax are relative to the browser window.'
    ],
    commonMistakes: [
      'Using px for font-size which does not respect user zoom preferences.',
      'Not setting a base font-size on the html element for rem calculations.'
    ],
    proTips: [
      'Use rem for font-size and em for padding and margin in most cases.',
      'Use clamp function to set responsive font sizes with minimum and maximum bounds.'
    ]
  },
  boxmodel: {
    definition: 'The CSS box model describes how elements are sized and spaced. Every element is a rectangular box consisting of content, padding, border, and margin.',
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: 'The content area holds the actual content. Padding adds space inside the border. Border surrounds the padding. Margin adds space outside the border. The box-sizing property controls how width and height are calculated.',
    examples: [
      { title: 'Box Sizing', code: `* {\n  box-sizing: border-box;\n}\n\n.element {\n  width: 200px;\n  padding: 20px;\n  border: 2px solid black;\n  margin: 10px;\n}`, output: 'Box-sizing border-box means width includes padding and border. Without it, padding and border are added to the width, making the element wider than specified.' },
      { title: 'Padding Shorthand', code: `.card {\n  padding: 20px; /* all sides */\n  padding: 10px 20px; /* top/bottom left/right */\n  padding: 10px 20px 15px; /* top left/right bottom */\n  padding: 10px 20px 15px 5px; /* top right bottom left */\n}`, output: 'Padding shorthand sets spacing for all four sides. One value applies to all sides. Two values set vertical and horizontal. Three and four values set individual sides.' },
      { title: 'Margin Collapse', code: `.heading {\n  margin-bottom: 20px;\n}\n\n.paragraph {\n  margin-top: 30px;\n}\n\n/* Actual space between is 30px not 50px */`, output: 'Vertical margins between adjacent elements collapse to the larger value. This is called margin collapse and only applies to vertical margins in normal flow.' },
      { title: 'Negative Margins', code: `.pull-quote {\n  margin-left: -20px;\n  margin-right: -20px;\n  padding: 20px;\n  background: #f0f0f0;\n}`, output: 'Negative margins pull elements outside their normal position. This technique extends the element beyond its parent container boundaries.' }
    ],
    keyPoints: [
      'Box-sizing border-box makes width and height include padding and border.',
      'Padding adds space inside the element border.',
      'Vertical margins between adjacent elements collapse to the larger value.'
    ],
    commonMistakes: [
      'Not using box-sizing border-box which makes sizing calculations difficult.',
      'Confusing padding which is inside with margin which is outside.'
    ],
    proTips: [
      'Always use box-sizing border-box with the universal selector for predictable sizing.',
      'Use dev tools to visualize the box model when debugging layout issues.'
    ]
  },
  display: {
    definition: 'The CSS display property controls how an element is rendered in the document layout. It determines whether an element is block-level, inline, inline-block, or uses flexbox or grid.',
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: 'Block elements start on new lines and take full width. Inline elements flow with text. Inline-block combines both behaviors. Flex and grid provide modern layout systems with powerful alignment and distribution capabilities.',
    examples: [
      { title: 'Block and Inline', code: `div {\n  display: block;\n  width: 100%;\n}\n\nspan {\n  display: inline;\n  width: 100%; /* ignored */\n}`, output: 'Block elements take full width and start on new lines. Inline elements only take the width of their content and do not respect width and height properties.' },
      { title: 'Inline-Block', code: `.inline-block {\n  display: inline-block;\n  width: 150px;\n  height: 100px;\n  margin: 10px;\n}`, output: 'Inline-block elements flow like inline but respect width, height, and margin properties. Useful for creating horizontal layouts of block-like elements.' },
      { title: 'Flexbox Display', code: `.container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 20px;\n}`, output: 'Flex display creates a flex container. Children become flex items that can be aligned and distributed along the main and cross axes.' },
      { title: 'Grid Display', code: `.grid-container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n}`, output: 'Grid display creates a grid container. Grid items are placed in rows and columns defined by the grid-template properties.' },
      { title: 'None and Visibility', code: `.hidden {\n  display: none;\n}\n\n.invisible {\n  visibility: hidden;\n}`, output: 'Display none removes the element from the document completely. Visibility hidden hides the element but keeps its space in the layout.' }
    ],
    keyPoints: [
      'Block elements take full width and start on new lines.',
      'Inline elements only take the width of their content.',
      'Display none removes the element from the document flow entirely.'
    ],
    commonMistakes: [
      'Trying to set width and height on inline elements which are ignored.',
      'Confusing display none with visibility hidden which behave differently.'
    ],
    proTips: [
      'Use flexbox for one-dimensional layouts like rows or columns.',
      'Use grid for two-dimensional layouts with rows and columns.'
    ]
  },
  position: {
    definition: 'CSS position property controls how elements are positioned in the document. It determines whether an element follows the normal flow or is positioned relative to its container, the viewport, or other elements.',
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: 'Static follows normal flow. Relative positions relative to its normal position. Absolute positions relative to the nearest positioned ancestor. Fixed positions relative to the viewport. Sticky toggles between relative and fixed based on scroll position.',
    examples: [
      { title: 'Relative Positioning', code: `.relative {\n  position: relative;\n  top: 10px;\n  left: 20px;\n}`, output: 'Relative positioning moves the element from its normal position. The space it originally occupied is preserved. Other elements are not affected by the movement.' },
      { title: 'Absolute Positioning', code: `.parent {\n  position: relative;\n}\n\n.child {\n  position: absolute;\n  top: 0;\n  right: 0;\n}`, output: 'Absolute positioning removes the element from the document flow. It is positioned relative to the nearest positioned ancestor. The original space is not preserved.' },
      { title: 'Fixed Positioning', code: `.navbar {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 1000;\n}`, output: 'Fixed positioning is always relative to the viewport. The element stays in place even when the page scrolls. It is removed from the document flow.' },
      { title: 'Sticky Positioning', code: `.sticky-header {\n  position: sticky;\n  top: 0;\n  background: white;\n  z-index: 100;\n}`, output: 'Sticky positioning acts like relative until the scroll position reaches the threshold, then it acts like fixed. It alternates between the two states as you scroll.' },
      { title: 'Z-Index Layering', code: `.modal-overlay {\n  position: fixed;\n  z-index: 1000;\n}\n\n.modal {\n  position: fixed;\n  z-index: 1001;\n}\n\n.dropdown {\n  position: absolute;\n  z-index: 100;\n}`, output: 'Z-index controls the stacking order of positioned elements. Higher values appear in front of lower values. Only works on positioned elements with position other than static.' }
    ],
    keyPoints: [
      'Static is the default and follows normal document flow.',
      'Absolute positions relative to the nearest positioned ancestor.',
      'Z-index only works on elements with position other than static.'
    ],
    commonMistakes: [
      'Using absolute without a positioned ancestor which positions relative to the viewport.',
      'Forgetting that fixed and absolute elements are removed from document flow.'
    ],
    proTips: [
      'Always set position relative on a parent when using absolute children.',
      'Use sticky for headers that need to stay visible while scrolling.'
    ]
  },
  flexbox: {
    definition: 'Flexbox is a one-dimensional layout system that distributes space along a main axis. It provides powerful alignment, distribution, and ordering capabilities for laying out items in a row or column.',
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: 'Flexbox uses a container and items model. The container defines the layout direction and alignment. Items can grow, shrink, and align along the main and cross axes. The main axis can be horizontal or vertical.',
    examples: [
      { title: 'Flex Container Basics', code: `.container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  gap: 20px;\n}`, output: 'Flex-direction sets the main axis as row or column. Justify-content distributes items along the main axis. Align-items centers items along the cross axis. Gap adds consistent spacing.' },
      { title: 'Flex Item Properties', code: `.item {\n  flex-grow: 1;\n  flex-shrink: 0;\n  flex-basis: 200px;\n}\n\n.item-fixed {\n  flex: 0 0 100px;\n}\n\n.item-expand {\n  flex: 1;\n}`, output: 'Flex-grow controls how much an item grows to fill available space. Flex-shrink controls how much it shrinks. Flex-basis sets the initial size before growing or shrinking.' },
      { title: 'Centering with Flexbox', code: `.center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n}`, output: 'Flexbox provides the simplest way to center content both horizontally and vertically. The container must have a height to center vertically.' },
      { title: 'Flex Wrap', code: `.container {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n\n.item {\n  flex: 1 1 200px;\n}`, output: 'Flex-wrap allows items to wrap onto multiple lines when they exceed the container width. Combined with flex-basis, this creates responsive layouts.' },
      { title: 'Order and Alignment', code: `.container {\n  display: flex;\n  align-items: stretch;\n}\n\n.sidebar {\n  order: 2;\n  flex: 0 0 250px;\n}\n\n.main {\n  order: 1;\n  flex: 1;\n}`, output: 'Order property controls the visual order of flex items without changing the DOM order. Align-stretch makes items fill the cross axis height.' }
    ],
    keyPoints: [
      'Display flex creates a flex container and flex items become flex children.',
      'Justify-content distributes items along the main axis.',
      'Align-items aligns items along the cross axis.'
    ],
    commonMistakes: [
      'Forgetting that flex items stretch by default on the cross axis.',
      'Using margins for spacing when gap is cleaner and more consistent.'
    ],
    proTips: [
      'Use gap instead of margins for consistent spacing between flex items.',
      'Combine flex-wrap with flex-basis for responsive layouts without media queries.'
    ]
  },
  grid: {
    definition: 'CSS Grid is a two-dimensional layout system that handles both rows and columns simultaneously. It provides powerful control over complex layouts with precise placement of items.',
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: 'Grid uses a container with rows and columns defined by grid-template properties. Items are placed in grid cells using grid-column and grid-row properties. Grid lines define the boundaries of cells.',
    examples: [
      { title: 'Basic Grid Layout', code: `.container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n}`, output: 'Grid-template-columns creates three equal-width columns using the fr unit. The fr unit distributes available space proportionally. Gap adds consistent spacing between items.' },
      { title: 'Grid with Named Areas', code: `.layout {\n  display: grid;\n  grid-template-areas:\n    \"header header\"\n    \"sidebar main\"\n    \"footer footer\";\n  grid-template-columns: 250px 1fr;\n  grid-template-rows: auto 1fr auto;\n}\n\n.header { grid-area: header; }\n.sidebar { grid-area: sidebar; }\n.main { grid-area: main; }\n.footer { grid-area: footer; }`, output: 'Grid-template-areas defines a visual layout using named areas. Each area can span multiple rows and columns. Items are placed using grid-area property.' },
      { title: 'Responsive Grid', code: `.grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 20px;\n}`, output: 'Auto-fit with minmax creates a responsive grid that adjusts the number of columns based on available space. Each column is at least 300px wide.' },
      { title: 'Grid Item Placement', code: `.item {\n  grid-column: 1 / 3;\n  grid-row: 1 / 2;\n}\n\n.spanning {\n  grid-column: span 2;\n  grid-row: span 3;\n}`, output: 'Grid-column and grid-row define where items start and end. Using span makes items take multiple cells. This allows precise placement and sizing.' },
      { title: 'Implicit Grid', code: `.container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-auto-rows: 200px;\n  grid-auto-flow: dense;\n}`, output: 'Grid-auto-rows sets the height of implicitly created rows. Grid-auto-flow dense fills in gaps automatically. The implicit grid handles items not explicitly placed.' }
    ],
    keyPoints: [
      'Display grid creates a grid container with rows and columns.',
      'The fr unit distributes available space proportionally.',
      'Auto-fit and minmax create responsive grids without media queries.'
    ],
    commonMistakes: [
      'Using grid for simple one-dimensional layouts where flexbox would be simpler.',
      'Forgetting that grid items stretch to fill their grid area by default.'
    ],
    proTips: [
      'Use grid for two-dimensional layouts and flexbox for one-dimensional layouts.',
      'Combine grid with flexbox for maximum layout flexibility.'
    ]
  },
  margins: {
    definition: 'CSS margins create space outside an element border. Margins push other elements away and control the spacing between elements.',
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: 'Margins can be set individually for each side using margin-top, margin-right, margin-bottom, and margin-left. The margin shorthand property sets all four sides. Margins can be positive or negative values.',
    examples: [
      { title: 'Margin Shorthand', code: `.element {\n  margin: 20px; /* all sides */\n  margin: 10px 20px; /* top/bottom left/right */\n  margin: 10px 20px 15px; /* top left/right bottom */\n  margin: 10px 20px 15px 5px; /* top right bottom left */\n}`, output: 'Margin shorthand sets spacing for all four sides. One value applies to all sides. Two values set vertical and horizontal. Three and four values set individual sides.' },
      { title: 'Auto Margins', code: `.centered {\n  width: 800px;\n  margin: 0 auto;\n}\n\n.right {\n  margin-left: auto;\n}`, output: 'Auto margins distribute available space equally. Margin 0 auto centers a block element horizontally. Margin-left auto pushes the element to the right.' },
      { title: 'Negative Margins', code: `.pull-out {\n  margin-left: -30px;\n  margin-right: -30px;\n}\n\n.overlap {\n  margin-top: -20px;\n}`, output: 'Negative margins pull elements toward each other or extend them beyond their container. They can create overlapping effects and pull elements out of their normal position.' },
      { title: 'Margin Collapse', code: `.box1 {\n  margin-bottom: 40px;\n}\n\n.box2 {\n  margin-top: 20px;\n}\n\n/* Actual space is 40px not 60px */`, output: 'Vertical margins between adjacent elements collapse to the larger value. This is called margin collapse and only applies to vertical margins in normal document flow.' }
    ],
    keyPoints: [
      'Margins create transparent space outside element borders.',
      'Auto margins center block elements when used with a set width.',
      'Vertical margins between adjacent elements collapse to the larger value.'
    ],
    commonMistakes: [
      'Confusing margin which is outside with padding which is inside.',
      'Applying margins to inline elements which only accept horizontal margins.'
    ],
    proTips: [
      'Use a consistent spacing scale with rem units for margins throughout your project.',
      'Use the gap property in flexbox and grid for spacing without margin collapse.'
    ]
  },
  borders: {
    definition: 'CSS borders define the boundary around elements. They can be styled with width, style, and color properties. Borders are drawn between the margin and padding of an element.',
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: 'Borders have three properties: width, style, and color. The border shorthand sets all three at once. Individual sides can be styled differently. Border-radius creates rounded corners.',
    examples: [
      { title: 'Basic Border', code: `.card {\n  border: 1px solid #ccc;\n}\n\n.input {\n  border: 2px solid #333;\n  border-radius: 4px;\n}`, output: 'Border shorthand sets width, style, and color. Common styles include solid, dashed, dotted, and double. Border-radius creates rounded corners.' },
      { title: 'Individual Border Sides', code: `.bottom-border {\n  border-bottom: 2px solid #007bff;\n  padding-bottom: 10px;\n}\n\n.top-accent {\n  border-top: 3px solid #ff6600;\n}`, output: 'Individual border properties style specific sides. This is useful for bottom underlines, top accents, and partial borders for visual effects.' },
      { title: 'Border Radius', code: `.rounded {\n  border-radius: 10px;\n}\n\n.circle {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n}\n\n.pill {\n  border-radius: 9999px;\n}`, output: 'Border-radius creates rounded corners. A value of 50% on a square element creates a circle. Large values on rectangular elements create pill shapes.' },
      { title: 'Outline', code: `.focus-ring:focus {\n  outline: 2px solid #007bff;\n  outline-offset: 2px;\n}`, output: 'Outline is drawn outside the border without affecting layout. Outline-offset adds space between the border and outline. Essential for keyboard focus indicators.' },
      { title: 'Border Image', code: `.fancy-border {\n  border: 4px solid transparent;\n  border-image: linear-gradient(45deg, #ff6600, #007bff) 1;\n}`, output: 'Border-image replaces the border with an image or gradient. The value after the image defines how the image is sliced to fit the corners and edges.' }
    ],
    keyPoints: [
      'Border shorthand sets width, style, and color in one declaration.',
      'Border-radius creates rounded corners on elements.',
      'Use outline for focus states instead of border to avoid layout shifts.'
    ],
    commonMistakes: [
      'Not accounting for border width in element dimensions without box-sizing.',
      'Using border when outline would be more appropriate for focus states.'
    ],
    proTips: [
      'Use border-radius: 50% to create perfect circles from square elements.',
      'Consider using box-shadow instead of borders for more customizable effects.'
    ]
  },
  pseudo: {
    definition: 'CSS pseudo-classes and pseudo-elements select elements based on their state or position without requiring additional HTML.',
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: 'Pseudo-classes use a single colon and select elements in specific states like hover or focus. Pseudo-elements use double colons and select specific parts of an element like the first line or before content.',
    examples: [
      { title: 'Hover and Active States', code: `a:hover {\n  color: red;\n  text-decoration: underline;\n}\n\nbutton:active {\n  transform: scale(0.98);\n}\n\na:visited {\n  color: purple;\n}`, output: 'Hover applies when the mouse is over the element. Active applies when the element is being clicked. Visited applies to links that have been visited.' },
      { title: 'Form Validation', code: `input:valid {\n  border-color: green;\n}\n\ninput:invalid {\n  border-color: red;\n}\n\ninput:required {\n  border-left: 3px solid orange;\n}`, output: 'Valid and invalid pseudo-classes style form inputs based on their validation state. Required marks mandatory fields with a visual indicator.' },
      { title: 'First and Last Child', code: `li:first-child {\n  font-weight: bold;\n}\n\nli:last-child {\n  margin-bottom: 0;\n}\n\nli:nth-child(even) {\n  background-color: #f0f0f0;\n}`, output: 'First-child and last-child target the first and last elements in a group. Nth-child targets elements at specific positions using formulas like even, odd, or 3n+1.' },
      { title: 'Before and After', code: `.quote::before {\n  content: open-quote;\n  font-size: 2em;\n}\n\n.quote::after {\n  content: close-quote;\n  font-size: 2em;\n}\n\n.required::after {\n  content: \" *\";\n  color: red;\n}`, output: 'Before and after pseudo-elements insert content before or after an element content. The content property is required and can contain text, images, or counters.' },
      { title: 'Selection and Placeholder', code: `::selection {\n  background-color: #ff6600;\n  color: white;\n}\n\ninput::placeholder {\n  color: #999;\n  font-style: italic;\n}`, output: 'Selection styles the text when selected by the user. Placeholder styles the placeholder text in form inputs. Both use double colon syntax.' }
    ],
    keyPoints: [
      'Pseudo-classes use a single colon and target element states.',
      'Pseudo-elements use double colons and target parts of elements.',
      'Before and after require the content property to insert content.'
    ],
    commonMistakes: [
      'Confusing pseudo-classes single colon with pseudo-elements double colon.',
      'Not providing focus styles for keyboard accessibility.'
    ],
    proTips: [
      'Always provide visible focus styles for keyboard navigation accessibility.',
      'Use before and after for decorative content that does not affect screen readers.'
    ]
  },
  variables: {
    definition: 'CSS custom properties (CSS variables) allow you to store reusable values in a property. They are defined with a double dash prefix and can be used throughout a stylesheet.',
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: 'Variables are defined on a selector using double dash prefix and assigned a value. They are accessed using the var function. Variables inherit and can be overridden at any level in the cascade.',
    examples: [
      { title: 'Basic Variables', code: `:root {\n  --primary-color: #007bff;\n  --text-color: #333;\n  --spacing: 16px;\n}\n\n.button {\n  background-color: var(--primary-color);\n  padding: var(--spacing);\n  color: var(--text-color);\n}`, output: 'Variables are defined on the root selector for global access. They are accessed using the var function. This creates a consistent design system across the stylesheet.' },
      { title: 'Variable Fallbacks', code: `.element {\n  color: var(--text-color, #333);\n  font-size: var(--font-size, 16px);\n}`, output: 'The var function accepts a fallback value after the comma. If the variable is not defined, the fallback value is used. This provides graceful degradation.' },
      { title: 'Theme Variables', code: `:root {\n  --bg-color: white;\n  --text-color: #333;\n}\n\n[data-theme=\"dark\"] {\n  --bg-color: #1a1a1a;\n  --text-color: white;\n}\n\nbody {\n  background-color: var(--bg-color);\n  color: var(--text-color);\n}`, output: 'Variables can be overridden in different contexts. Changing the data-theme attribute switches all variables at once, creating an easy theming system.' },
      { title: 'Component Variables', code: `.card {\n  --card-padding: 20px;\n  --card-radius: 8px;\n  padding: var(--card-padding);\n  border-radius: var(--card-radius);\n}\n\n.card.featured {\n  --card-padding: 30px;\n}`, output: 'Variables can be scoped to specific components. Each component defines its own variables that can be customized in different states or variants.' },
      { title: 'JavaScript Integration', code: `document.documentElement.style.setProperty('--primary-color', '#ff6600');`, output: 'CSS variables can be changed dynamically using JavaScript. This enables theme switching, dynamic customization, and interactive design changes.' }
    ],
    keyPoints: [
      'Define variables on the root selector for global availability.',
      'Provide fallback values as the second argument to var.',
      'Use descriptive names with double dash prefix for variable names.'
    ],
    commonMistakes: [
      'Not defining a fallback value which can cause styles to break.',
      'Defining variables on the wrong selector scope.'
    ],
    proTips: [
      'Create a design system using CSS variables for all reusable values.',
      'Combine variables with JavaScript for dynamic theme switching.'
    ]
  },
  transforms: {
    definition: 'CSS transforms modify elements visually using 2D or 3D transformations. They can rotate, scale, skew, and translate elements without affecting document flow.',
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: 'The transform property applies transformations to elements. Multiple transforms can be combined in one declaration. The transform-origin property sets the center point for transformations.',
    examples: [
      { title: 'Basic Transforms', code: `.rotate {\n  transform: rotate(45deg);\n}\n\n.scale {\n  transform: scale(1.2);\n}\n\n.skew {\n  transform: skewX(10deg);\n}`, output: 'Rotate turns the element by degrees. Scale increases or decreases the element size. Skew distorts the element along an axis.' },
      { title: 'Translate', code: `.move-right {\n  transform: translateX(20px);\n}\n\n.move-up {\n  transform: translateY(-10px);\n}\n\n.diagonal {\n  transform: translate(20px, -10px);\n}`, output: 'Translate moves the element along the X or Y axis. It moves the element visually without affecting its position in the document flow.' },
      { title: 'Combined Transforms', code: `.interactive {\n  transform: rotate(5deg) scale(1.1) translateX(10px);\n}`, output: 'Multiple transforms are applied right to left. The order matters as each transform is applied in the sequence specified.' },
      { title: 'Transform Origin', code: `.pivot {\n  transform-origin: top left;\n  transform: rotate(45deg);\n}\n\n.center {\n  transform-origin: center center;\n  transform: scale(1.2);\n}`, output: 'Transform-origin defines the point around which transformations occur. Default is center center. Changing it affects how rotation and scaling behave.' },
      { title: '3D Transforms', code: `.perspective {\n  perspective: 1000px;\n}\n\n.rotate-y {\n  transform: rotateY(45deg);\n}\n\n.translate-z {\n  transform: translateZ(50px);\n}`, output: 'Perspective creates a 3D viewing context. RotateY and rotateZ rotate in 3D space. TranslateZ moves elements toward or away from the viewer.' }
    ],
    keyPoints: [
      'Transforms do not affect document flow or other element positions.',
      'Transform-origin sets the center point for rotation and scaling.',
      '3D transforms require perspective on a parent element to be visible.'
    ],
    commonMistakes: [
      'Not setting transform-origin which defaults to center and may cause unexpected behavior.',
      'Using transforms for layout instead of positioning or flexbox.'
    ],
    proTips: [
      'Use transforms for hover effects and animations as they are performant.',
      'Combine transforms with transitions for smooth animated effects.'
    ]
  },
  transitions: {
    definition: 'CSS transitions provide smooth animation between property values over a specified duration. They create gradual changes when element states change like hover, focus, or class toggling.',
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: 'The transition property specifies which properties to animate, the duration, timing function, and optional delay. Multiple properties can be transitioned simultaneously or with different timings.',
    examples: [
      { title: 'Basic Transition', code: `.button {\n  background-color: blue;\n  transition: background-color 0.3s ease;\n}\n\n.button:hover {\n  background-color: darkblue;\n}`, output: 'The transition property makes the background color change smoothly over 0.3 seconds. Without it, the change would be instant.' },
      { title: 'Multiple Properties', code: `.card {\n  transform: translateY(0);\n  box-shadow: 0 2px 4px rgba(0,0,0,0.1);\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n\n.card:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 8px 16px rgba(0,0,0,0.2);\n}`, output: 'Multiple properties can transition simultaneously. Each property has its own duration and timing function for coordinated animations.' },
      { title: 'Transition Delay', code: `.element {\n  opacity: 0;\n  transition: opacity 0.5s ease 0.2s;\n}\n\n.element.visible {\n  opacity: 1;\n}`, output: 'The delay value in transition shorthand specifies when the animation starts. A 0.2 second delay means the animation waits before beginning.' },
      { title: 'Timing Functions', code: `.linear {\n  transition: transform 0.3s linear;\n}\n\n.ease-in-out {\n  transition: transform 0.3s ease-in-out;\n}\n\n.custom {\n  transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n}`, output: 'Timing functions control the acceleration of the animation. Linear is constant speed. Ease-in-out starts and ends slowly. Cubic-bezier allows custom acceleration curves.' },
      { title: 'All Properties', code: `.element {\n  transition: all 0.3s ease;\n}\n\n/* Better performance */\n.optimized {\n  transition: transform 0.3s ease, opacity 0.3s ease;\n}`, output: 'Transition all animates every property that changes. Specifying individual properties is better for performance as the browser can optimize each animation.' }
    ],
    keyPoints: [
      'Duration determines how long the animation takes in seconds.',
      'Specify individual properties instead of all for better performance.',
      'Timing function controls the acceleration curve of the animation.'
    ],
    commonMistakes: [
      'Not specifying a duration which defaults to 0 and makes the transition instant.',
      'Transitioning layout properties like width which cause performance issues.'
    ],
    proTips: [
      'Only transition transform and opacity for the best performance.',
      'Use cubic-bezier for custom easing that matches your design personality.'
    ]
  },
  animations: {
    definition: 'CSS animations provide keyframe-based animations that can cycle through multiple states with full control over timing, direction, and repetition.',
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: 'Animations are defined using @keyframes rules that specify the states an element cycles through. The animation property applies the keyframe animation with duration, timing, and repetition settings.',
    examples: [
      { title: 'Basic Animation', code: `@keyframes pulse {\n  0% { transform: scale(1); }\n  50% { transform: scale(1.05); }\n  100% { transform: scale(1); }\n}\n\n.button {\n  animation: pulse 2s ease-in-out infinite;\n}`, output: 'Keyframes define the start, middle, and end states. The animation property applies it with a 2-second duration, ease-in-out timing, and infinite repetition.' },
      { title: 'Animation Properties', code: `.element {\n  animation-name: slideIn;\n  animation-duration: 0.5s;\n  animation-timing-function: ease-out;\n  animation-delay: 0.2s;\n  animation-iteration-count: 1;\n  animation-fill-mode: forwards;\n}`, output: 'Each animation property can be set individually. Fill-mode forwards keeps the element in its final animated state after completion.' },
      { title: 'Direction and Fill', code: `.element {\n  animation: fade 1s ease infinite alternate;\n}\n\n@keyframes fade {\n  from { opacity: 0; }\n  to { opacity: 1; }\n}`, output: 'Direction alternate makes the animation play forward then backward. Fill-mode can be forwards, backwards, or both to control element state before and after animation.' },
      { title: 'Complex Keyframes', code: `@keyframes complex {\n  0% { transform: translateX(0) rotate(0deg); }\n  25% { transform: translateX(100px) rotate(90deg); }\n  50% { transform: translateX(100px) translateY(100px) rotate(180deg); }\n  75% { transform: translateX(0) translateY(100px) rotate(270deg); }\n  100% { transform: translateX(0) rotate(360deg); }\n}`, output: 'Keyframes can include multiple properties and intermediate states. Each percentage point defines the element state at that moment in the animation.' },
      { title: 'Animation Play State', code: `.paused {\n  animation-play-state: paused;\n}\n\n.playing {\n  animation-play-state: running;\n}\n\n/* Pause on hover */\n.element:hover {\n  animation-play-state: paused;\n}`, output: 'Animation-play-state controls whether an animation is running or paused. This allows interactive control of animations based on user interaction.' }
    ],
    keyPoints: [
      'Keyframes define the states an element cycles through during animation.',
      'Direction alternate plays the animation forward then backward.',
      'Animation-play-state can pause and resume animations dynamically.'
    ],
    commonMistakes: [
      'Not specifying animation-fill-mode which causes the element to snap back after animation.',
      'Animating layout properties which causes performance issues.'
    ],
    proTips: [
      'Use will-change hint for elements that will be animated for better performance.',
      'Provide a reduced-motion media query to disable animations for accessibility.'
    ]
  },
  responsive: {
    definition: 'Responsive design uses CSS techniques to create layouts that adapt to different screen sizes and devices.',
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: 'Media queries check device characteristics like width, height, and orientation. They apply different styles based on breakpoints. Flexible units like percentages and viewport units create fluid layouts.',
    examples: [
      { title: 'Media Queries', code: `/* Mobile first */\n.container {\n  padding: 10px;\n}\n\n/* Tablet */\n@media (min-width: 768px) {\n  .container {\n    padding: 20px;\n  }\n}\n\n/* Desktop */\n@media (min-width: 1024px) {\n  .container {\n    padding: 40px;\n  }\n}`, output: 'Mobile-first design starts with base styles for mobile. Media queries add styles for larger screens. Min-width breakpoints are used for progressive enhancement.' },
      { title: 'Flexible Grid', code: `.grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 20px;\n}\n\n.responsive-columns {\n  column-count: 1;\n  column-gap: 20px;\n}\n\n@media (min-width: 768px) {\n  .responsive-columns {\n    column-count: 2;\n  }\n}`, output: 'Auto-fit with minmax creates a grid that adjusts column count based on available space. Media queries can change layout properties at specific breakpoints.' },
      { title: 'Responsive Typography', code: `html {\n  font-size: 16px;\n}\n\nh1 {\n  font-size: clamp(1.5rem, 4vw, 3rem);\n}\n\np {\n  font-size: clamp(1rem, 2vw, 1.25rem);\n}`, output: 'Clamp function sets a minimum, preferred, and maximum font size. The font scales smoothly between breakpoints without needing media queries.' },
      { title: 'Responsive Images', code: `img {\n  max-width: 100%;\n  height: auto;\n}\n\n.hero-image {\n  width: 100%;\n  aspect-ratio: 16/9;\n  object-fit: cover;\n}`, output: 'Max-width 100% makes images scale down with their container. Height auto maintains aspect ratio. Aspect-ratio sets the desired width-to-height ratio.' },
      { title: 'Container Queries', code: `.card-container {\n  container-type: inline-size;\n  container-name: card;\n}\n\n@container card (min-width: 400px) {\n  .card {\n    display: flex;\n  }\n}`, output: 'Container queries style elements based on their container size instead of viewport. This creates truly modular responsive components that work independently.' }
    ],
    keyPoints: [
      'Mobile-first design starts with base styles for small screens.',
      'Media queries apply styles at specific breakpoints using min-width or max-width.',
      'Container queries respond to parent container size instead of viewport.'
    ],
    commonMistakes: [
      'Using max-width instead of min-width for mobile-first approach.',
      'Setting fixed pixel widths that do not adapt to different screen sizes.'
    ],
    proTips: [
      'Start with mobile design and progressively enhance for larger screens.',
      'Use container queries for component-level responsiveness.'
    ]
  },
  calc: {
    definition: 'The CSS calc function performs mathematical calculations to compute property values. It allows mixing different units like pixels and percentages in a single calculation.',
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: 'The calc function takes a mathematical expression as its argument. It supports addition, subtraction, multiplication, and division. Spaces are required around the plus and minus operators.',
    examples: [
      { title: 'Mixing Units', code: `.sidebar {\n  width: calc(100% - 300px);\n}\n\n.content {\n  width: calc(100vw - 40px);\n  padding: calc(2rem + 10px);\n}`, output: 'Calc combines percentages with pixels and viewport units with pixels. This creates layouts that are partly fluid and partly fixed.' },
      { title: 'Dynamic Spacing', code: `.container {\n  padding: calc(50px - 2vw);\n}\n\n.grid-item {\n  margin: calc(1rem + 0.5vw);\n}`, output: 'Calc creates spacing that adjusts based on viewport size. The spacing decreases or increases proportionally as the screen changes.' },
      { title: 'Positioning', code: `.centered {\n  position: absolute;\n  left: calc(50% - 100px);\n  top: calc(50% - 50px);\n}\n\n.offset {\n  left: calc(100% - 200px);\n}`, output: 'Calc positions elements based on a percentage of the container minus a fixed offset. This creates centered or offset layouts that work with dynamic sizes.' },
      { title: 'Typography Calculations', code: `h1 {\n  font-size: calc(2rem + 1vw);\n  line-height: calc(1.2em + 0.5vw);\n  letter-spacing: calc(0.1em - 0.05vw);\n}`, output: 'Calc adjusts typography values based on viewport size. Font sizes, line heights, and letter spacing can all scale proportionally.' },
      { title: 'Nested Calc', code: `.element {\n  width: calc(calc(100% / 3) - 20px);\n  margin: calc(calc(100vh - 500px) / 2);\n}`, output: 'Calc functions can be nested for complex calculations. The inner calc is evaluated first, then the outer calc uses that result.' }
    ],
    keyPoints: [
      'Calc supports addition, subtraction, multiplication, and division.',
      'Spaces are required around plus and minus operators.',
      'Calc can mix different unit types in a single calculation.'
    ],
    commonMistakes: [
      'Forgetting spaces around plus and minus operators which breaks the calculation.',
      'Using calc for simple calculations where a static value would be clearer.'
    ],
    proTips: [
      'Use calc to create responsive layouts that combine fixed and fluid values.',
      'Combine calc with custom properties for dynamic design calculations.'
    ]
  },
  overflow: {
    definition: 'CSS overflow controls what happens when content exceeds the dimensions of its container.',
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: 'The overflow property accepts visible, hidden, scroll, and auto values. Overflow-x and overflow-y control horizontal and vertical overflow separately. Overflow-wrap controls how text wraps.',
    examples: [
      { title: 'Basic Overflow', code: `.visible {\n  overflow: visible;\n}\n\n.hidden {\n  overflow: hidden;\n}\n\n.scroll {\n  overflow: scroll;\n}\n\n.auto {\n  overflow: auto;\n}`, output: 'Visible is the default and content overflows. Hidden clips content. Scroll always shows scrollbars. Auto shows scrollbars only when needed.' },
      { title: 'Truncating Text', code: `.truncate {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 200px;\n}`, output: 'Combining white-space nowrap, overflow hidden, and text-overflow ellipsis creates single-line text truncation with three dots indicating more content.' },
      { title: 'Multi-Line Truncation', code: `.multi-line-truncate {\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}`, output: 'Webkit line clamp truncates text after a specified number of lines. This is useful for card layouts where descriptions should be limited.' },
      { title: 'Separate X and Y Overflow', code: `.container {\n  overflow-x: hidden;\n  overflow-y: auto;\n  height: 300px;\n}`, output: 'Overflow-x and overflow-y control horizontal and vertical overflow independently. This prevents horizontal scrolling while allowing vertical scrolling.' },
      { title: 'Scroll Behavior', code: `.scroll-container {\n  overflow-y: auto;\n  scroll-behavior: smooth;\n  scroll-snap-type: y mandatory;\n}\n\n.scroll-item {\n  scroll-snap-align: start;\n}`, output: 'Scroll-behavior smooth enables smooth scrolling animations. Scroll-snap creates snap points that align items when scrolling stops.' }
    ],
    keyPoints: [
      'Hidden clips content that exceeds the container boundaries.',
      'Auto shows scrollbars only when content actually overflows.',
      'Overflow-wrap controls how text breaks when it exceeds container width.'
    ],
    commonMistakes: [
      'Using overflow hidden when scroll would be more appropriate for user access.',
      'Not testing overflow behavior with long content like URLs or code.'
    ],
    proTips: [
      'Use overflow auto instead of overflow scroll to avoid unnecessary scrollbars.',
      'Use scroll-snap for creating carousel-like scrolling experiences.'
    ]
  },
  filters: {
    definition: 'CSS filters apply visual effects to elements like blur, brightness, contrast, and color manipulation.',
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: 'The filter property applies one or more filter functions to an element. Filters can be combined for complex effects. The backdrop-filter applies filters to the area behind an element.',
    examples: [
      { title: 'Basic Filters', code: `.blur {\n  filter: blur(5px);\n}\n\n.bright {\n  filter: brightness(1.2);\n}\n\n.contrast {\n  filter: contrast(150%);\n}\n\n.grayscale {\n  filter: grayscale(100%);\n}`, output: 'Blur adds a Gaussian blur effect. Brightness adjusts lightness. Contrast adjusts the difference between light and dark. Grayscale converts to black and white.' },
      { title: 'Color Filters', code: `.sepia {\n  filter: sepia(100%);\n}\n\n.hue-rotate {\n  filter: hue-rotate(90deg);\n}\n\n.saturate {\n  filter: saturate(200%);\n}\n\n.invert {\n  filter: invert(100%);\n}`, output: 'Sepia adds a warm brown tone. Hue-rotate shifts colors around the color wheel. Saturate adjusts color intensity. Invert creates a negative effect.' },
      { title: 'Combined Filters', code: `.vintage {\n  filter: sepia(50%) contrast(110%) brightness(90%);\n}\n\n.dramatic {\n  filter: contrast(150%) saturate(130%) brightness(95%);\n}`, output: 'Multiple filter functions can be chained together for complex effects. Each filter is applied in sequence to create the final visual result.' },
      { title: 'Hover Effects', code: `.image {\n  filter: grayscale(100%);\n  transition: filter 0.3s ease;\n}\n\n.image:hover {\n  filter: grayscale(0%);\n}`, output: 'Filters can be animated with transitions for smooth visual changes. A common effect is desaturating images and revealing color on hover.' },
      { title: 'Backdrop Filter', code: `.glass {\n  background: rgba(255, 255, 255, 0.2);\n  backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n}`, output: 'Backdrop-filter applies blur and other effects to the area behind the element. This creates glassmorphism effects with frosted glass appearance.' }
    ],
    keyPoints: [
      'Filters apply visual effects without changing the element layout.',
      'Multiple filter functions can be chained for complex effects.',
      'Backdrop-filter applies effects to the area behind the element.'
    ],
    commonMistakes: [
      'Using filters on large elements which can cause performance issues.',
      'Overusing filters which can make text and content hard to read.'
    ],
    proTips: [
      'Use filters for quick image effects without loading additional image files.',
      'Combine backdrop-filter with transparency for glassmorphism effects.'
    ]
  }
}

export default css