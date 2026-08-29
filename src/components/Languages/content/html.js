const html = {
  intro: {
    definition: 'HTML (HyperText Markup Language) is the standard markup language for creating web pages and web applications. It describes the structure and content of a web page using a system of tags and attributes.',
    whyUse: 'HTML is the backbone of every website. It provides the semantic structure that browsers use to render content. Without HTML, there would be no way to display text, images, videos, or interactive elements on the web.',
    whereUse: 'HTML is used in every web page, web application, email template, and digital document on the internet. It is essential for web developers, designers, content creators, and anyone building for the web.',
    syntax: null,
    explanation: 'HTML documents are made up of elements enclosed in angle brackets. Most elements have an opening tag, content, and a closing tag. Tags can have attributes that provide additional information about the element. Elements can be nested inside other elements to create a document hierarchy.',
    examples: [
      { title: 'Basic HTML Document', code: `<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>My Page</title>\n</head>\n<body>\n  <h1>Hello World</h1>\n  <p>Welcome to HTML.</p>\n</body>\n</html>`, output: 'A complete HTML document with a heading and paragraph. The browser displays "Hello World" as a large heading and "Welcome to HTML." as regular text below it.' },
      { title: 'HTML Element Structure', code: `<h1>This is a heading</h1>\n<p>This is a paragraph.</p>\n<br>\n<hr>`, output: 'Shows different element types: block elements (h1, p), a void element (br), and a thematic break (hr). Block elements start on new lines.' },
      { title: 'Nested Elements', code: `<div>\n  <h2>Title</h2>\n  <p>A paragraph with <strong>bold</strong> and <em>italic</em> text.</p>\n</div>`, output: 'A container div holding a heading and paragraph. Inside the paragraph, bold and italic text is achieved by nesting strong and em elements.' },
      { title: 'HTML Comments', code: `<!-- This is a comment -->\n<p>Visible text</p>\n<!-- Comments are not displayed -->`, output: 'Comments are hidden from the user. They are useful for leaving notes for other developers or temporarily disabling code.' }
    ],
    keyPoints: [
      'HTML uses tags enclosed in angle brackets like <tag> to define elements',
      'Most elements have an opening tag and a closing tag with a slash like </tag>',
      'The DOCTYPE declaration tells the browser which version of HTML to use',
      'HTML elements can be nested inside other elements to create hierarchy',
      'Attributes provide additional information about elements using key="value" pairs'
    ],
    commonMistakes: [
      'Forgetting the DOCTYPE declaration at the top of the document',
      'Not closing tags properly which can cause rendering issues',
      'Using HTML as a programming language when it is only a markup language',
      'Putting block elements inside inline elements'
    ],
    proTips: [
      'Always use semantic HTML tags instead of generic divs when possible',
      'Validate your HTML using the W3C validator to catch errors early',
      'Keep your HTML structure clean and indented for better readability'
    ]
  },
  elements: {
    definition: 'HTML elements are the building blocks of a web page. An element consists of an opening tag, content, and a closing tag. Elements define the type and structure of content displayed in the browser.',
    whyUse: 'Elements give meaning and structure to content. Different elements tell the browser how to display content and help screen readers and search engines understand the page structure.',
    whereUse: 'Every visible part of a web page is contained within HTML elements. Elements are used for headings, paragraphs, links, images, lists, forms, and everything else on a page.',
    syntax: null,
    explanation: 'HTML elements are created using tags. An opening tag marks the start of an element and a closing tag marks the end. The content goes between the tags. Some elements are void elements that do not have closing tags or content, such as br and img.',
    examples: [
      { title: 'Block vs Inline Elements', code: `<div>Block element - starts on a new line</div>\n<span>Inline element - stays in the flow</span>`, output: 'Div is a block element that takes full width. Span is an inline element that only takes the width of its content.' },
      { title: 'Void Elements', code: `<br>\n<hr>\n<img src=\"photo.jpg\" alt=\"Photo\">\n<input type=\"text\">`, output: 'Void elements do not have closing tags. They are self-closing and do not contain content between tags.' },
      { title: 'Blockquote Element', code: `<blockquote cite=\"https://example.com\">\n  <p>HTML is the foundation of the web.</p>\n  <footer>- Web Standards</footer>\n</blockquote>`, output: 'A blockquote element indents the content and can include a source citation using the cite attribute.' },
      { title: 'Details Element', code: `<details>\n  <summary>Click to expand</summary>\n  <p>This content is hidden by default.</p>\n</details>`, output: 'A collapsible section that shows a summary. Clicking the summary reveals the hidden content inside the details element.' }
    ],
    keyPoints: [
      'Block elements start on a new line and take full width available',
      'Inline elements do not start on a new line and only take necessary width',
      'Void elements cannot have content and do not need closing tags',
      'Elements can be nested to create complex page structures',
      'The content of an element can include other elements, text, or media'
    ],
    commonMistakes: [
      'Nesting elements incorrectly such as putting a p tag inside another p tag',
      'Using inline elements where block elements are needed for layout',
      'Forgetting that some elements like img and br are void elements',
      'Overusing generic elements like div instead of semantic alternatives'
    ],
    proTips: [
      'Use the HTML5 semantic elements like article, section, and nav for better structure',
      'Check element nesting using browser developer tools for debugging',
      'Learn the difference between block and inline elements to control layout'
    ]
  },
  text: {
    definition: 'HTML provides a wide range of elements for formatting and structuring text content. These elements define headings, paragraphs, emphasis, importance, and other text-related semantics.',
    whyUse: 'Proper text formatting improves readability, accessibility, and SEO. Search engines and screen readers rely on semantic text elements to understand content hierarchy and importance.',
    whereUse: 'Text elements are used in every web page for content display. They are essential for articles, blogs, documentation, forms, navigation, and any content that involves reading.',
    syntax: null,
    explanation: 'HTML text elements include heading levels h1 through h6 for hierarchy, p for paragraphs, strong for importance, em for emphasis, and many more. Each element carries specific meaning beyond visual appearance.',
    examples: [
      { title: 'Headings Hierarchy', code: `<h1>Main Title</h1>\n<h2>Section Title</h2>\n<h3>Subsection Title</h3>\n<h4>Minor Heading</h4>\n<h5>Small Heading</h5>\n<h6>Smallest Heading</h6>`, output: 'Headings create a document outline. h1 is the most important and largest, h6 is the least important and smallest. Each page should have only one h1.' },
      { title: 'Emphasis and Importance', code: `<p>This is <strong>very important</strong> text.</p>\n<p>This is <em>emphasized</em> text.</p>\n<p>This is <mark>highlighted</mark> text.</p>`, output: 'Strong indicates importance and is bold by default. Em indicates stress emphasis and is italic by default. Mark highlights text with a yellow background.' },
      { title: 'Text Formatting Elements', code: `<p><small>Copyright 2024</small></p>\n<p>He is <del>25</del> <ins>26</ins> years old.</p>\n<p>WATER is H<sub>2</sub>O and x<sup>2</sup> is x squared.</p>`, output: 'Small renders smaller text. Del and ins show deleted and inserted text for edits. Sub and sup render subscript and superscript text.' },
      { title: 'Quotation Elements', code: `<p>She said <q>Hello World</q> to the class.</p>\n<p>The <abbr title=\"HyperText Markup Language\">HTML</abbr> spec is extensive.</p>`, output: 'The q element adds quotation marks around inline quotes. The abbr element marks abbreviations and shows the full text on hover.' }
    ],
    keyPoints: [
      'Use h1 through h6 for headings with h1 being the most important',
      'Use p elements to wrap blocks of paragraph text',
      'Strong indicates serious importance while em indicates stress emphasis',
      'Always use semantic text elements instead of styling with CSS alone',
      'Maintain proper heading hierarchy for accessibility and SEO'
    ],
    commonMistakes: [
      'Using multiple h1 tags on a single page',
      'Using bold tags instead of strong for important text',
      'Skipping heading levels such as going from h2 directly to h4',
      'Not wrapping text content in proper elements like p tags'
    ],
    proTips: [
      'Create a logical heading hierarchy that works without CSS for accessibility',
      'Use strong and em for meaning, not just for visual styling',
      'Consider using blockquote for extended quotations from other sources'
    ]
  },
  attributes: {
    definition: 'HTML attributes are special keywords added to opening tags that provide additional information about elements. They configure or modify the behavior and appearance of elements.',
    whyUse: 'Attributes allow you to customize element behavior, provide metadata, set relationships between elements, and control how content is displayed or interacts with users.',
    whereUse: 'Attributes are used in virtually every HTML element. Common uses include setting links with href, image sources with src, form values, class and id identifiers, and accessibility information.',
    syntax: null,
    explanation: 'Attributes are placed inside the opening tag after the element name. They use a key-value pair format with the attribute name followed by an equals sign and the value in quotes. Boolean attributes do not need a value.',
    examples: [
      { title: 'Common Global Attributes', code: `<div id=\"main\" class=\"container\" style=\"color: blue;\">\n  <p lang=\"en\">This is English text.</p>\n</div>`, output: 'Id provides a unique identifier. Class groups elements for styling. Style adds inline CSS. Lang specifies the language of the content.' },
      { title: 'Boolean Attributes', code: `<input type=\"text\" required>\n<audio src=\"sound.mp3\" controls autoplay loop></audio>\n<button disabled>Click me</button>`, output: 'Boolean attributes do not need values. Their presence means true. Required makes a form field mandatory. Controls shows audio controls. Disabled prevents button clicks.' },
      { title: 'Link Attributes', code: `<a href=\"https://example.com\" target=\"_blank\" rel=\"noopener noreferrer\">\n  External Link\n</a>`, output: 'Href sets the URL. Target blank opens in new tab. Rel prevents the new page from accessing the original page for security.' },
      { title: 'Image Attributes', code: `<img src=\"photo.jpg\" alt=\"A sunset\" width=\"800\" height=\"600\" loading=\"lazy\">`, output: 'Src is the image URL. Alt provides alternative text for accessibility. Width and height set dimensions. Lazy defers loading until the image is near the viewport.' }
    ],
    keyPoints: [
      'Attributes are placed inside the opening tag of an element',
      'Most attributes use the format name="value" with quotes around the value',
      'Boolean attributes do not require a value and their presence means true',
      'Global attributes like id, class, and style can be used on any element',
      'Always include alt attributes on images for accessibility'
    ],
    commonMistakes: [
      'Forgetting to put quotes around attribute values',
      'Not including the alt attribute on img elements',
      'Using double quotes inside attribute values without escaping',
      'Confusing id which should be unique with class which can be shared'
    ],
    proTips: [
      'Use data attributes to store custom data on elements for JavaScript access',
      'Follow a consistent naming convention for class names and ids',
      'Use the title attribute to provide additional information on hover'
    ]
  },
  links: {
    definition: 'The anchor element a creates hyperlinks that connect web pages and resources together. Links are fundamental to the web by allowing users to navigate between pages and access external content.',
    whyUse: 'Links enable navigation between pages, connect related content, provide access to downloadable resources, and are essential for website usability and SEO link structure.',
    whereUse: 'Links are used in navigation menus, body content, footers, sidebars, footnotes, citations, and anywhere a user might need to navigate to another page or resource.',
    syntax: null,
    explanation: 'The anchor element uses the href attribute to specify the destination URL. Links can point to other pages, files, email addresses, phone numbers, or specific sections on the same page using fragment identifiers.',
    examples: [
      { title: 'Basic Links', code: `<a href=\"https://www.example.com\">Visit Example</a>\n<a href=\"about.html\">About Us</a>\n<a href=\"../index.html\">Home</a>`, output: 'Links can point to external URLs, relative paths to other pages, or use relative paths with directory traversal to navigate up the folder structure.' },
      { title: 'Link with Target and Rel', code: `<a href=\"https://external.com\" target=\"_blank\" rel=\"noopener noreferrer\">\n  Open in New Tab\n</a>`, output: 'Target blank opens the link in a new tab. Rel noopener prevents the new page from accessing the original page, and noreferrer prevents sending the referrer information.' },
      { title: 'Email and Phone Links', code: `<a href=\"mailto:info@example.com\">Send Email</a>\n<a href=\"tel:+1234567890\">Call Us</a>`, output: 'Mailto links open the default email client with the specified address. Tel links open the default phone app on mobile devices.' },
      { title: 'Section Links', code: `<a href=\"#section2\">Jump to Section 2</a>\n...\n<h2 id=\"section2\">Section 2</h2>`, output: 'Fragment identifiers with the hash symbol link to specific elements on the same page. The browser scrolls to the element with the matching id.' },
      { title: 'Download Link', code: `<a href=\"files/report.pdf\" download=\"annual-report.pdf\">\n  Download Report\n</a>`, output: 'The download attribute tells the browser to download the file instead of navigating to it. The value specifies the suggested filename for the download.' }
    ],
    keyPoints: [
      'The href attribute specifies the URL or path the link points to',
      'Use target="_blank" to open links in a new tab or window',
      'Always add rel="noopener noreferrer" when using target="_blank" for security',
      'Use fragment identifiers with hash to link to specific sections on a page',
      'The download attribute triggers a file download instead of navigation'
    ],
    commonMistakes: [
      'Not providing href attribute which makes the link non-functional',
      'Using target="_blank" without rel="noopener" which is a security risk',
      'Broken links that point to pages or resources that no longer exist',
      'Not making link text descriptive like using click here instead of descriptive text'
    ],
    proTips: [
      'Use descriptive link text that tells users where the link goes',
      'Test all links regularly to ensure they are not broken',
      'Consider adding a visual indicator for external links so users know they are leaving your site'
    ]
  },
  images: {
    definition: 'The img element is used to embed images into web pages. Images can be static pictures, icons, illustrations, or any visual content. The img element is a void element that does not have a closing tag.',
    whyUse: 'Images make web pages visually appealing, convey information quickly, and improve user engagement. They are essential for product pages, blogs, social media, and any content that benefits from visual representation.',
    whereUse: 'Images are used in headers, articles, product listings, galleries, backgrounds, icons, logos, infographics, and anywhere visual content enhances the user experience.',
    syntax: null,
    explanation: 'The img element requires the src attribute for the image URL and the alt attribute for alternative text. Additional attributes control size, loading behavior, and responsive behavior.',
    examples: [
      { title: 'Basic Image', code: `<img src=\"photo.jpg\" alt=\"A beautiful sunset over the ocean\">`, output: 'Displays the image with the specified source. The alt text is shown if the image fails to load and is read by screen readers for accessibility.' },
      { title: 'Sized Image', code: `<img src=\"logo.png\" alt=\"Company Logo\" width=\"200\" height=\"100\">`, output: 'Sets the display dimensions of the image. The width and height attributes also help the browser reserve space before the image loads to prevent layout shift.' },
      { title: 'Responsive Image', code: `<img src=\"photo.jpg\" alt=\"Landscape\"\n     srcset=\"photo-small.jpg 480w,\n             photo-medium.jpg 800w,\n             photo-large.jpg 1200w\"\n     sizes=\"(max-width: 600px) 480px,\n             (max-width: 900px) 800px,\n             1200px\">`, output: 'Srcset provides multiple image files for different screen sizes. Sizes tells the browser which image to use based on viewport width. This improves performance on smaller screens.' },
      { title: 'Lazy Loading', code: `<img src=\"photo.jpg\" alt=\"Photo\" loading=\"lazy\">`, output: 'The lazy loading attribute defers loading the image until it is close to the viewport. This improves page load performance for images below the fold.' },
      { title: 'Figure with Caption', code: `<figure>\n  <img src=\"chart.png\" alt=\"Sales Chart\">\n  <figcaption>Figure 1: Sales growth in 2024</figcaption>\n</figure>`, output: 'The figure element groups an image with its caption. The figcaption provides a visible caption that describes the image content.' }
    ],
    keyPoints: [
      'Always include the alt attribute for accessibility and SEO',
      'Specify width and height to prevent layout shift during loading',
      'Use srcset and sizes for responsive images on different screen sizes',
      'Use loading="lazy" for images below the fold to improve performance',
      'The img element is a void element and does not need a closing tag'
    ],
    commonMistakes: [
      'Missing the alt attribute which hurts accessibility and SEO',
      'Using very large images without optimization which slows page loading',
      'Not specifying dimensions which causes layout shift as images load',
      'Using images as the only way to convey important information'
    ],
    proTips: [
      'Use modern image formats like WebP for better compression and quality',
      'Always optimize images for web use to reduce file size without losing quality',
      'Consider using CSS for decorative images and HTML img for meaningful content'
    ]
  },
  lists: {
    definition: 'HTML lists organize content in a structured way. There are three types of lists: unordered lists for bullet points, ordered lists for numbered sequences, and description lists for key-value pairs.',
    whyUse: 'Lists provide clear visual organization of related items. They improve readability, help users scan content quickly, and give semantic meaning to grouped information.',
    whereUse: 'Lists are used for navigation menus, feature comparisons, steps in instructions, glossaries, contact information, sidebars, and any content that groups related items together.',
    syntax: null,
    explanation: 'Unordered lists use ul with li items. Ordered lists use ol with li items. Description lists use dl with dt for terms and dd for descriptions. Lists can be nested inside other list items for hierarchical structures.',
    examples: [
      { title: 'Unordered List', code: `<ul>\n  <li>HTML</li>\n  <li>CSS</li>\n  <li>JavaScript</li>\n</ul>`, output: 'Displays a bulleted list of items. Unordered lists are used when the order of items does not matter.' },
      { title: 'Ordered List', code: `<ol>\n  <li>Plan the project</li>\  <li>Write the code</li>\n  <li>Test and deploy</li>\n</ol>`, output: 'Displays a numbered list. Ordered lists are used when sequence or priority matters such as steps in a process.' },
      { title: 'Description List', code: `<dl>\n  <dt>HTML</dt>\n  <dd>HyperText Markup Language for structure</dd>\n  <dt>CSS</dt>\n  <dd>Cascading Style Sheets for presentation</dd>\n</dl>`, output: 'Displays terms with their descriptions. Description lists are useful for glossaries, FAQs, and metadata displays.' },
      { title: 'Nested Lists', code: `<ul>\n  <li>Frontend\n    <ul>\n      <li>HTML</li>\n      <li>CSS</li>\n      <li>JavaScript</li>\n    </ul>\n  </li>\n  <li>Backend\n    <ul>\n      <li>Node.js</li>\n      <li>Python</li>\n    </ul>\n  </li>\n</ul>`, output: 'Lists can be nested inside list items to create hierarchical structures. This is useful for menus, outlines, and categorized content.' },
      { title: 'Reversed and Start Attributes', code: `<ol reversed start=\"10\">\n  <li>Tenth item</li>\n  <li>Ninth item</li>\n  <li>Eighth item</li>\n</ol>`, output: 'The reversed attribute counts down instead of up. The start attribute specifies the starting number. Useful for countdowns or reverse rankings.' }
    ],
    keyPoints: [
      'Use ul for unordered lists with bullet points',
      'Use ol for ordered lists with numbers or letters',
      'Use dl for description lists with terms and definitions',
      'Lists can be nested by placing a list inside a list item',
      'All list items must be wrapped in li elements'
    ],
    commonMistakes: [
      'Putting li elements directly inside a ul without being wrapped properly',
      'Nesting block elements like div inside li without proper structure',
      'Using lists purely for visual layout instead of using CSS for styling',
      'Forgetting that li elements should only appear as direct children of list containers'
    ],
    proTips: [
      'Use CSS list-style-type to customize bullet and number styles',
      'Consider using description lists for metadata and key-value displays',
      'Nest lists to represent hierarchical data like site navigation structures'
    ]
  },
  tables: {
    definition: 'HTML tables organize data into rows and columns using a grid structure. Tables use tr for rows, td for data cells, and th for header cells. They are essential for displaying tabular data.',
    whyUse: 'Tables are the correct way to display structured tabular data such as schedules, financial data, comparisons, and any data that benefits from row and column organization.',
    whereUse: 'Tables are used for data comparison, pricing plans, schedules, calendars, statistical data, and any content that is naturally organized in rows and columns.',
    syntax: null,
    explanation: 'Tables consist of table rows tr, table data cells td, and table header cells th. The thead, tbody, andtfoot elements group rows into logical sections for better semantics and styling.',
    examples: [
      { title: 'Basic Table', code: `<table>\n  <tr>\n    <th>Name</th>\n    <th>Age</th>\n  </tr>\n  <tr>\n    <td>Alice</td>\n    <td>25</td>\n  </tr>\n  <tr>\n    <td>Bob</td>\n    <td>30</td>\n  </tr>\n</table>`, output: 'Displays a simple two-column table with headers for Name and Age. The th elements are bold and centered by default.' },
      { title: 'Structured Table', code: `<table>\n  <thead>\n    <tr>\n      <th>Product</th>\n      <th>Price</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Widget</td>\n      <td>$9.99</td>\n    </tr>\n  </tbody>\n  <tfoot>\n    <tr>\n      <td>Total</td>\n      <td>$9.99</td>\n    </tr>\n  </tfoot>\n</table>`, output: 'The table is divided into header, body, and footer sections. This helps with styling and accessibility by clearly defining the purpose of each row group.' },
      { title: 'Colspan and Rowspan', code: `<table>\n  <tr>\n    <th colspan=\"2\">Full Name</th>\n  </tr>\n  <tr>\n    <td>John</td>\n    <td>Doe</td>\n  </tr>\n  <tr>\n    <th rowspan=\"2\">Info</th>\n    <td>Age: 30</td>\n  </tr>\n  <tr>\n    <td>City: NYC</td>\n  </tr>\n</table>`, output: 'Colspan makes a cell span multiple columns. Rowspan makes a cell span multiple rows. Useful for complex table layouts with merged cells.' },
      { title: 'Table with Caption', code: `<table>\n  <caption>Monthly Sales</caption>\n  <tr>\n    <th>Month</th>\n    <th>Revenue</th>\n  </tr>\n  <tr>\n    <td>January</td>\n    <td>$5,000</td>\n  </tr>\n</table>`, output: 'The caption element provides a title for the table that describes its content. It helps users understand what data the table contains.' }
    ],
    keyPoints: [
      'Use tables only for tabular data, never for page layout',
      'Always include th elements to define header cells for columns or rows',
      'Use thead, tbody, and tfoot to group rows into logical sections',
      'Use colspan and rowspan to merge cells when needed',
      'Add a caption to describe what data the table contains'
    ],
    commonMistakes: [
      'Using tables for page layout instead of CSS Grid or Flexbox',
      'Not including header cells which hurts accessibility',
      'Using tables for presentation instead of actual tabular data',
      'Forgetting to add a caption or summary for complex tables'
    ],
    proTips: [
      'Use CSS to style tables instead of using old presentation attributes',
      'Add scope attributes to th elements for better accessibility',
      'Consider responsive table solutions for small screens'
    ]
  },
  forms: {
    definition: 'HTML forms collect user input and send it to a server for processing. Forms contain various input elements like text fields, checkboxes, radio buttons, and submit buttons that allow users to interact with web applications.',
    whyUse: 'Forms are the primary way users interact with web applications. They enable login, registration, searches, surveys, checkout processes, and any interaction that requires user data collection.',
    whereUse: 'Forms are used in login pages, registration forms, search bars, contact pages, checkout forms, feedback forms, comment sections, and any place user input is needed.',
    syntax: null,
    explanation: 'The form element wraps all input elements. The action attribute specifies where to send the data. The method attribute specifies how to send the data as GET or POST. Each input element has a name attribute that identifies the data.',
    examples: [
      { title: 'Basic Form', code: `<form action=\"/submit\" method=\"POST\">\n  <label for=\"name\">Name:</label>\n  <input type=\"text\" id=\"name\" name=\"name\" required>\n  <button type=\"submit\">Submit</button>\n</form>`, output: 'A simple form with a text input and submit button. When submitted, the form sends the name data to the /submit URL using the POST method.' },
      { title: 'Form with Multiple Inputs', code: `<form action=\"/register\" method=\"POST\">\n  <input type=\"text\" name=\"username\" placeholder=\"Username\">\n  <input type=\"email\" name=\"email\" placeholder=\"Email\">\n  <input type=\"password\" name=\"password\" placeholder=\"Password\">\n  <button type=\"submit\">Register</button>\n</form>`, output: 'A registration form with text, email, and password inputs. Each input has a name attribute that identifies the data sent to the server.' },
      { title: 'Fieldset and Legend', code: `<form>\n  <fieldset>\n    <legend>Personal Information</legend>\n    <input type=\"text\" name=\"firstname\" placeholder=\"First Name\">\n    <input type=\"text\" name=\"lastname\" placeholder=\"Last Name\">\n  </fieldset>\n</form>`, output: 'Fieldset groups related form elements together. Legend provides a caption for the fieldset. This improves accessibility and visual organization.' },
      { title: 'Form Validation Attributes', code: `<form>\n  <input type=\"text\" name=\"user\" required minlength=\"3\" maxlength=\"20\">\n  <input type=\"number\" name=\"age\" min=\"1\" max=\"120\">\n  <input type=\"email\" name=\"email\" required>\n  <button type=\"submit\">Submit</button>\n</form>`, output: 'Built-in validation attributes check input before submission. Required prevents empty fields. Minlength and maxlength control text length. Min and max set number ranges.' }
    ],
    keyPoints: [
      'Always use the form element to wrap input elements for proper submission',
      'The action attribute specifies where form data is sent',
      'The method attribute determines how data is sent as GET or POST',
      'Use labels with for attribute linked to input id for accessibility',
      'Use fieldset and legend to group related form elements'
    ],
    commonMistakes: [
      'Not associating labels with inputs using the for and id attributes',
      'Missing the name attribute on inputs which prevents data from being sent',
      'Not using proper input types like email or number for validation',
      'Forgetting to add required attribute on mandatory fields'
    ],
    proTips: [
      'Use HTML5 input types like email, url, and tel for built-in validation',
      'Always provide clear labels and placeholders for better user experience',
      'Test forms on multiple devices to ensure they work on mobile and desktop'
    ]
  },
  input: {
    definition: 'The input element is the most versatile form element. It can create text fields, checkboxes, radio buttons, color pickers, file uploaders, and many other types of controls depending on the type attribute.',
    whyUse: 'Input elements provide different ways for users to enter data. Choosing the right input type improves usability, provides built-in validation, and gives the appropriate keyboard on mobile devices.',
    whereUse: 'Input elements are used in search bars, login forms, registration forms, settings pages, surveys, filters, and anywhere user interaction requires data entry or selection.',
    syntax: null,
    explanation: 'The type attribute determines the kind of input control. Common types include text, email, password, number, checkbox, radio, date, file, and color. Each type has specific behavior and validation rules.',
    examples: [
      { title: 'Text Input Types', code: `<input type=\"text\" placeholder=\"Name\">\n<input type=\"email\" placeholder=\"Email\">\n<input type=\"password\" placeholder=\"Password\">\n<input type=\"search\" placeholder=\"Search...\">`, output: 'Text is a general text field. Email validates email format. Password hides characters. Search may show a clear button on some browsers.' },
      { title: 'Numeric and Range Inputs', code: `<input type=\"number\" min=\"0\" max=\"100\" value=\"50\">\n<input type=\"range\" min=\"0\" max=\"100\" value=\"75\">\n<input type=\"tel\" placeholder=\"Phone number\">`, output: 'Number shows a spinner for incrementing values. Range shows a slider control. Tel shows a numeric keypad on mobile devices.' },
      { title: 'Selection Inputs', code: `<input type=\"checkbox\" name=\"agree\" id=\"agree\">\n<label for=\"agree\">I agree</label>\n\n<input type=\"radio\" name=\"color\" value=\"red\" id=\"red\">\n<label for=\"red\">Red</label>`, output: 'Checkbox allows multiple selections from a group. Radio allows only one selection from a group. Radio buttons with the same name are mutually exclusive.' },
      { title: 'Date and Color Inputs', code: `<input type=\"date\" name=\"birthday\">\n<input type=\"time\" name=\"meeting\">\n<input type=\"color\" name=\"theme\" value=\"#ff0000\">`, output: 'Date shows a date picker. Time shows a time picker. Color shows a color picker that lets users select a color visually.' },
      { title: 'File Input', code: `<input type=\"file\" name=\"avatar\" accept=\"image/*\">\n<input type=\"file\" name=\"docs\" multiple accept=\".pdf,.doc\">`, output: 'File input opens a file browser dialog. Accept restricts file types. The multiple attribute allows selecting more than one file.' }
    ],
    keyPoints: [
      'The type attribute determines the kind of input control displayed',
      'Always use appropriate input types for better validation and user experience',
      'Use placeholder text to give users hints about expected input',
      'Use min, max, and step attributes for number inputs to set limits',
      'Use accept attribute on file inputs to restrict allowed file types'
    ],
    commonMistakes: [
      'Using text type for email or phone which loses built-in validation',
      'Not setting min and max on number inputs which allows invalid values',
      'Forgetting the name attribute which prevents form data from being sent',
      'Not using the multiple attribute when multiple file uploads are needed'
    ],
    proTips: [
      'Use datalist element to provide autocomplete suggestions for text inputs',
      'Combine input types with JavaScript for enhanced functionality',
      'Test input types on mobile to ensure the correct keyboard appears'
    ]
  },
  semantic: {
    definition: 'Semantic HTML uses elements that clearly describe their meaning to both the browser and the developer. Elements like header, nav, main, article, section, aside, and footer provide structural meaning beyond just visual layout.',
    whyUse: 'Semantic HTML improves accessibility for screen readers, helps search engines understand page structure, makes code more readable and maintainable, and provides better SEO through meaningful markup.',
    whereUse: 'Semantic elements are used throughout every web page. They define the header, navigation, main content area, articles, sidebars, and footer of a page in a meaningful way.',
    syntax: null,
    explanation: 'Semantic elements replace generic div and span elements with descriptive alternatives. For example, nav instead of div class navigation, article instead of div class post, and footer instead of div class footer.',
    examples: [
      { title: 'Page Structure', code: `<header>\n  <nav>\n    <a href=\"/\">Home</a>\n    <a href=\"/about\">About</a>\n  </nav>\n</header>\n<main>\n  <article>\n    <h1>Article Title</h1>\n    <p>Article content...</p>\n  </article>\n  <aside>Sidebar content</aside>\n</main>\n<footer>\n  <p>Copyright 2024</p>\n</footer>`, output: 'The page is organized with semantic elements that describe their purpose. Screen readers can navigate by landmarks and search engines understand the content hierarchy.' },
      { title: 'Article Element', code: `<article>\n  <header>\n    <h2>Blog Post Title</h2>\n    <time datetime=\"2024-01-15\">January 15, 2024</time>\n  </header>\n  <p>Post content goes here...</p>\n  <footer>\n    <p>Tags: HTML, Web Development</p>\n  </footer>\n</article>`, output: 'The article element represents a self-contained piece of content. It can include its own header, content, and footer. The time element provides machine-readable dates.' },
      { title: 'Section Element', code: `<section>\n  <h2>Features</h2>\n  <p>This section describes the features of our product.</p>\n  <ul>\n    <li>Fast</li>\n    <li>Reliable</li>\n  </ul>\n</section>`, output: 'The section element groups related content with a heading. It is used for thematic groupings of content that belong together.' },
      { title: 'Aside and Figure', code: `<aside>\n  <h3>Related Articles</h3>\n  <ul>\n    <li><a href=\"#\">Article 1</a></li>\n  </ul>\n</aside>\n\n<figure>\n  <img src=\"diagram.png\" alt=\"Architecture\">\n  <figcaption>System Architecture Diagram</figcaption>\n</figure>`, output: 'Aside represents content tangentially related to the main content. Figure groups media with its caption. Both improve document structure and accessibility.' }
    ],
    keyPoints: [
      'Use header for introductory content or navigation groups',
      'Use nav for major navigation blocks',
      'Use main for the primary content of the page',
      'Use article for self-contained content like blog posts',
      'Use section for thematic groupings of content',
      'Use aside for tangentially related content',
      'Use footer for footer information of its nearest ancestor'
    ],
    commonMistakes: [
      'Using div elements when semantic alternatives are available',
      'Using header and footer inside article or section incorrectly',
      'Nesting article elements too deeply which reduces semantic meaning',
      'Using section when article would be more appropriate'
    ],
    proTips: [
      'Use ARIA landmarks as a fallback when older browser support is needed',
      'Think about the content meaning, not the visual appearance when choosing elements',
      'Use the outline algorithm to verify your heading hierarchy is logical'
    ]
  },
  divspan: {
    definition: 'The div element is a generic container for flow content. The span element is a generic container for phrasing content. Both are non-semantic elements used when no other semantic element is appropriate.',
    whyUse: 'Div and span provide generic containers for styling with CSS and manipulating with JavaScript. They are used when existing semantic elements do not fit the content structure.',
    whereUse: 'Div elements are used for layout containers, grouping related elements, and creating custom components. Span elements are used for inline styling and JavaScript manipulation of text portions.',
    syntax: null,
    explanation: 'Div creates a block-level container that starts on a new line. Span creates an inline container that flows with surrounding text. Both are empty containers that only have meaning through their content or CSS classes.',
    examples: [
      { title: 'Basic Usage', code: `<div class=\"container\">\n  <p>This is a paragraph.</p>\n  <p>This is another paragraph.</p>\n</div>\n\n<p>This is <span class=\"highlight\">highlighted</span> text.</p>`, output: 'Div groups the paragraphs into a container for styling or layout. Span wraps a portion of text within a paragraph for inline styling without breaking the text flow.' },
      { title: 'Layout Container', code: `<div class=\"card\">\n  <div class=\"card-header\">\n    <h3>Card Title</h3>\n  </div>\n  <div class=\"card-body\">\n    <p>Card content goes here.</p>\n  </div>\n</div>`, output: 'Nested divs create a card component structure. The outer div is the card container, and inner divs define the header and body sections for styling.' },
      { title: 'JavaScript Hook', code: `<div id=\"app\" data-user-id=\"12345\">\n  <span class=\"user-name\">John Doe</span>\n</div>`, output: 'The id attribute provides a unique identifier for JavaScript to select the element. Data attributes store custom data that JavaScript can access for dynamic behavior.' },
      { title: 'Wrapper Pattern', code: `<div class=\"wrapper\">\n  <div class=\"inner\">\n    <h1>Content</h1>\n    <p>More content here.</p>\n  </div>\n</div>`, output: 'Wrapper divs are used to create layout constraints like centering content, setting max-width, or applying background styles that span multiple child elements.' }
    ],
    keyPoints: [
      'Div is a block-level container and span is an inline container',
      'Use div and span only when no semantic element is appropriate',
      'Use meaningful class names instead of generic ones like wrapper or container',
      'Avoid overusing divs which leads to div soup that is hard to read',
      'Use data attributes on divs to store custom data for JavaScript'
    ],
    commonMistakes: [
      'Using too many nested divs which makes the code hard to maintain',
      'Using div instead of semantic elements like article or section',
      'Using span for block-level content which should use div',
      'Not adding class or id attributes which makes divs harder to target'
    ],
    proTips: [
      'Prefer semantic elements like article and section over div when possible',
      'Use BEM naming convention for classes on div and span elements',
      'Limit nesting depth to keep your HTML structure readable'
    ]
  },
  media: {
    definition: 'HTML provides elements for embedding media content including audio, video, and embedded content like iframes. These elements allow rich media experiences without requiring plugins.',
    whyUse: 'Media elements bring content to life with audio, video, and interactive embeds. They are essential for modern web experiences including streaming, podcasts, tutorials, and social media content.',
    whereUse: 'Media elements are used for video players, audio players, embedded maps, social media posts, advertisements, interactive content, and any rich media experience on the web.',
    syntax: null,
    explanation: 'The video element embeds video content with controls for playback. The audio element embeds audio content. The iframe element embeds external content like other web pages or interactive widgets.',
    examples: [
      { title: 'Video Element', code: `<video src=\"movie.mp4\" controls width=\"800\">\n  <track kind=\"subtitles\" src=\"subs.vtt\" srclang=\"en\" label=\"English\">\n  Your browser does not support the video element.\n</video>`, output: 'Displays a video player with playback controls. The track element adds subtitles. The fallback text is shown if the browser does not support the video element.' },
      { title: 'Video with Multiple Sources', code: `<video controls width=\"800\">\n  <source src=\"movie.mp4\" type=\"video/mp4\">\n  <source src=\"movie.webm\" type=\"video/webm\">\n  Your browser does not support the video element.\n</video>`, output: 'Multiple source elements provide different video formats. The browser uses the first format it supports. This ensures compatibility across different browsers.' },
      { title: 'Audio Element', code: `<audio controls>\n  <source src=\"podcast.mp3\" type=\"audio/mpeg\">\n  <source src=\"podcast.ogg\" type=\"audio/ogg\">\n  Your browser does not support the audio element.\n</audio>`, output: 'Displays an audio player with playback controls. Multiple sources provide different audio formats for browser compatibility.' },
      { title: 'Iframe Element', code: `<iframe src=\"https://www.example.com\" \n        width=\"100%\" height=\"500\"\n        title=\"Example Page\"\n        loading=\"lazy\">\n</iframe>`, output: 'Embeds another web page within the current page. The title attribute is required for accessibility. Lazy loading improves page performance.' },
      { title: 'Picture Element', code: `<picture>\n  <source media=\"(min-width: 800px)\" srcset=\"large.jpg\">\n  <source media=\"(min-width: 400px)\" srcset=\"medium.jpg\">\n  <img src=\"small.jpg\" alt=\"Responsive image\">\n</picture>`, output: 'Picture element serves different images based on conditions like screen size. This provides art direction and responsive images with different crops or sizes.' }
    ],
    keyPoints: [
      'Always include multiple source elements for different browser format support',
      'Use the controls attribute to show default browser media controls',
      'Add fallback content inside media elements for unsupported browsers',
      'Use the loading="lazy" attribute on iframes to improve performance',
      'Always include a title attribute on iframes for accessibility'
    ],
    commonMistakes: [
      'Not providing multiple source formats which limits browser compatibility',
      'Missing the title attribute on iframes which hurts accessibility',
      'Using autoplay which can be annoying and waste user bandwidth',
      'Not providing fallback content for browsers that do not support the element'
    ],
    proTips: [
      'Use the preload attribute to control when media files start loading',
      'Consider using poster attribute on video to show a preview image',
      'Optimize media files for web delivery to reduce page load times'
    ]
  },
  meta: {
    definition: 'The meta element provides metadata about the HTML document. Metadata is information about data that is not displayed on the page but is used by browsers, search engines, and other web services.',
    whyUse: 'Meta elements control how browsers display the page, how search engines index content, how social media platforms preview links, and how the page behaves on different devices.',
    whereUse: 'Meta elements are always placed in the head section of the HTML document. They define character encoding, viewport settings, page descriptions, keywords, authors, and social media tags.',
    syntax: null,
    explanation: 'Meta elements use the name and content attributes together, or the charset attribute for character encoding, or the http-equiv attribute for HTTP headers. They provide information to browsers and external services.',
    examples: [
      { title: 'Character Encoding', code: `<meta charset=\"UTF-8\">`, output: 'Sets the character encoding for the document. UTF-8 supports all characters and symbols. Always include this as the first meta tag in the head.' },
      { title: 'Viewport Meta', code: `<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">`, output: 'Controls how the page scales on different devices. Width=device-width sets the width to the device width. Initial-scale sets the initial zoom level.' },
      { title: 'SEO Meta Tags', code: `<meta name=\"description\" content=\"Learn HTML and CSS for web development\">\n<meta name=\"keywords\" content=\"HTML, CSS, web development, tutorial\">\n<meta name=\"author\" content=\"Your Name\">`, output: 'Description shows in search engine results. Keywords help search engines understand content topics. Author identifies the page creator.' },
      { title: 'Social Media Meta Tags', code: `<meta property=\"og:title\" content=\"Page Title\">\n<meta property=\"og:description\" content=\"Page description for social media\">\n<meta property=\"og:image\" content=\"https://example.com/image.jpg\">\n<meta property=\"og:url\" content=\"https://example.com\">`, output: 'Open Graph tags control how the page appears when shared on social media. Title, description, image, and URL define the preview card.' },
      { title: 'Refresh and Redirect', code: `<meta http-equiv=\"refresh\" content=\"5; url=https://example.com\">\n<meta http-equiv=\"refresh\" content=\"30\">`, output: 'Refresh redirects to another URL after a specified time. Without a URL it reloads the page. Use with caution as it can be disorienting for users.' }
    ],
    keyPoints: [
      'Always include the charset meta tag with UTF-8 encoding',
      'The viewport meta tag is essential for responsive design on mobile',
      'Description meta tag is important for search engine results',
      'Open Graph tags control social media sharing previews',
      'Meta tags are placed in the head section of the HTML document'
    ],
    commonMistakes: [
      'Forgetting the viewport meta tag which makes the site not responsive on mobile',
      'Writing descriptions that are too long or too short for search engines',
      'Missing Open Graph tags which results in poor social media previews',
      'Not including charset which can cause character encoding issues'
    ],
    proTips: [
      'Keep meta descriptions between 150 and 160 characters for best search results',
      'Test social media previews using the Open Graph debugger tools',
      'Use canonical link tag to prevent duplicate content issues in SEO'
    ]
  },
  accessibility: {
    definition: 'HTML accessibility ensures that web content is usable by everyone including people with disabilities. Accessible HTML uses semantic elements, ARIA attributes, and proper structure to work with assistive technologies.',
    whyUse: 'Accessibility is a legal requirement in many regions and ensures your website reaches the widest possible audience. It improves usability for all users, not just those with disabilities.',
    whereUse: 'Accessibility considerations apply to every part of a web page including navigation, forms, images, media, tables, and interactive elements. It is integrated throughout the entire HTML document.',
    syntax: null,
    explanation: 'Accessible HTML uses proper heading hierarchy, semantic elements, alt text on images, labels on form inputs, ARIA roles and attributes, and keyboard navigation support. It ensures content works without visual or interactive cues.',
    examples: [
      { title: 'Alt Text for Images', code: `<img src=\"chart.png\" alt=\"Bar chart showing sales growth of 25% in Q4 2024\">\n<img src=\"decorative-line.png\" alt=\"\" role=\"presentation\">`, output: 'Meaningful alt text describes the content and purpose of the image. Decorative images use empty alt and role presentation to be ignored by screen readers.' },
      { title: 'Form Accessibility', code: `<label for=\"email\">Email Address</label>\n<input type=\"email\" id=\"email\" name=\"email\" required aria-describedby=\"email-help\">\n<span id=\"email-help\">We will never share your email.</span>`, output: 'Labels are linked to inputs using for and id. Aria-describedby provides additional context. This ensures screen readers can identify and describe form controls.' },
      { title: 'ARIA Roles', code: `<div role=\"navigation\" aria-label=\"Main navigation\">\n  <a href=\"/\">Home</a>\n</div>\n<button aria-label=\"Close dialog\" aria-expanded=\"false\">X</button>`, output: 'Aria roles define the purpose of elements. Aria labels provide accessible names. Aria expanded indicates the state of toggleable elements.' },
      { title: 'Skip Navigation Link', code: `<a href=\"#main-content\" class=\"skip-link\">Skip to main content</a>\n<header>Navigation...</header>\n<main id=\"main-content\">Main content...</main>`, output: 'A skip navigation link allows keyboard users to bypass repetitive navigation and jump directly to the main content. It is visually hidden until focused.' },
      { title: 'Table Accessibility', code: `<table>\n  <caption>Sales Data</caption>\n  <thead>\n    <tr>\n      <th scope=\"col\">Product</th>\n      <th scope=\"col\">Revenue</th>\n    </tr>\n  </thead>\n</table>`, output: 'The scope attribute on th cells tells screen readers whether the header applies to a column or row. The caption provides a summary of the table content.' }
    ],
    keyPoints: [
      'Always include alt text on images that conveys content and purpose',
      'Use labels for all form inputs and link them using for and id',
      'Maintain proper heading hierarchy from h1 through h6',
      'Use ARIA attributes when native HTML semantics are not sufficient',
      'Ensure all interactive elements are keyboard accessible',
      'Use sufficient color contrast for text readability'
    ],
    commonMistakes: [
      'Missing alt text on images which makes them invisible to screen readers',
      'Using div and span for interactive elements instead of buttons and links',
      'Not providing labels for form inputs which makes them unlabeled',
      'Using color alone to convey information without alternative indicators',
      'Creating content that cannot be navigated using only a keyboard'
    ],
    proTips: [
      'Test your page with a screen reader like NVDA or VoiceOver',
      'Use the axe accessibility tool in browser dev tools to find issues',
      'Follow the Web Content Accessibility Guidelines WCAG standards',
      'Consider keyboard-only navigation when designing interactive elements'
    ]
  },
  entities: {
    definition: 'HTML entities are special codes that represent characters which are difficult to type or reserved by HTML. They start with an ampersand and end with a semicolon. Entities display special characters that would otherwise be interpreted as HTML code.',
    whyUse: 'Entities allow you to display reserved HTML characters like angle brackets, display special characters like copyright symbols, and ensure content is displayed correctly regardless of the document encoding.',
    whereUse: 'Entities are used throughout HTML documents for special characters, mathematical symbols, currency symbols, and any character that might be confused with HTML syntax.',
    syntax: null,
    explanation: 'Entities are written as either named entities like &lt; or numeric entities like &#60;. Named entities are easier to remember. Numeric entities use the character Unicode or ASCII code number.',
    examples: [
      { title: 'Reserved Characters', code: `<p>Use &lt;div&gt; for containers.</p>\n<p>The variable uses &amp; to concatenate.</p>\n<p>Attribute values use &quot;quotes&quot;.</p>`, output: 'Displays reserved characters without interpreting them as HTML. Less than, greater than, ampersand, and quotes are shown as text content.' },
      { title: 'Common Entities', code: `<p>Copyright &copy; 2024 Company</p>\n<p>Price: $100 &plus; tax</p>\n<p>Temperature: 25&deg;C</p>`, output: 'Displays the copyright symbol, plus sign, and degree symbol. These entities ensure the characters display correctly across different encodings.' },
      { title: 'Mathematical Symbols', code: `<p>E = mc&sup2;</p>\n<p>2 &lt; 5 and 5 &gt; 2</p>\n<p>x &ne; 0 and x &ge; 1</p>`, output: 'Displays superscript, comparison operators, and inequality symbols. Mathematical expressions can be shown using HTML entities.' },
      { title: 'Currency and Trade Symbols', code: `<p>&euro;100</p>\n<p>&pound;50</p>\n<p>&yen;1000</p>\n<p>&trade; and &reg;</p>`, output: 'Displays euro, pound, and yen currency symbols. Trade and registered trademark symbols are also available as entities.' },
      { title: 'Non-Breaking Space', code: `<p>This&nbsp;is&nbsp;a&nbsp;long&nbsp;word.</p>\n<p>Paris,&nbsp;France</p>`, output: 'Non-breaking spaces prevent line breaks at that point. Useful for keeping words or phrases together across line breaks.' }
    ],
    keyPoints: [
      'Use &lt; and &gt; to display angle brackets as text content',
      'Use &amp; to display the ampersand character',
      'Named entities are easier to read than numeric entities',
      'Use &nbsp; for non-breaking spaces that prevent line breaks',
      'Entities are essential for displaying reserved HTML characters in content'
    ],
    commonMistakes: [
      'Forgetting to close entities with a semicolon which can cause display issues',
      'Using numeric entities when named entities would be more readable',
      'Not using &amp; for ampersands in content which breaks HTML parsing',
      'Overusing non-breaking spaces which can cause awkward spacing'
    ],
    proTips: [
      'Use named entities when available for better code readability',
      'Keep a reference of common entities handy for quick lookup',
      'Test entity display across different browsers and devices'
    ]
  },
  utf8: {
    definition: 'UTF-8 is a character encoding that represents every character in the Unicode standard. It can encode over a million characters including letters, numbers, symbols, and characters from every language in the world.',
    whyUse: 'UTF-8 is the universal character encoding for the web. It ensures that text displays correctly regardless of the user language or system. Without proper encoding, special characters may appear as garbled text.',
    whereUse: 'UTF-8 encoding is used in every HTML document. It is set using the meta charset tag and ensures that all characters from all languages display correctly in the browser.',
    syntax: null,
    explanation: 'The meta charset tag tells the browser which character encoding to use when interpreting the document. UTF-8 is backward compatible with ASCII and can represent characters using one to four bytes depending on the character.',
    examples: [
      { title: 'Setting UTF-8 Encoding', code: `<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"UTF-8\">\n  <title>UTF-8 Example</title>\n</head>\n<body>\n  <p>Hello World</p>\n</body>\n</html>`, output: 'The meta charset tag must be the first tag in the head section. It tells the browser to interpret the document using UTF-8 encoding.' },
      { title: 'Multilingual Content', code: `<meta charset=\"UTF-8\">\n<p>English: Hello</p>\n<p>Spanish: Hola</p>\n<p>Japanese: こんにちは</p>\n<p>Arabic: مرحبا</p>\n<p>Russian: Привет</p>`, output: 'UTF-8 supports characters from all languages. This allows web pages to display content in multiple languages without encoding issues.' },
      { title: 'Special Characters', code: `<p>Copyright © 2024</p>\n<p>Temperature: 25°C</p>\n<p>Currency: €100 £50 ¥1000</p>\n<p>Symbols: ★ ♥ ✓ ✗</p>`, output: 'UTF-8 supports all special characters including copyright symbols, temperature units, currency symbols, and decorative symbols used in content.' },
      { title: 'HTML Entity Reference', code: `<meta charset=\"UTF-8\">\n<p>Use &copy; for © or &#169; for the same character.</p>\n<p>Both approaches work with UTF-8 encoding.</p>`, output: 'UTF-8 encoding supports both named entities and numeric entities. Characters can be written directly or using entity codes for compatibility.' }
    ],
    keyPoints: [
      'Always include meta charset UTF-8 as the first tag in the head section',
      'UTF-8 is the universal character encoding standard for the web',
      'It supports characters from all languages and special symbols',
      'UTF-8 is backward compatible with ASCII encoding',
      'Proper encoding prevents garbled text and character display issues'
    ],
    commonMistakes: [
      'Not including the meta charset tag which can cause character display issues',
      'Using other encodings like ISO-8859-1 which do not support all characters',
      'Placing the charset tag after other elements in the head section',
      'Saving files with the wrong encoding in the text editor'
    ],
    proTips: [
      'Always save your HTML files with UTF-8 encoding in your text editor',
      'Test your pages with multilingual content to verify encoding works',
      'Use the Accept-Charset attribute on forms for additional encoding support'
    ]
  },
  html5: {
    definition: 'HTML5 is the latest major revision of HTML. It introduces new semantic elements, multimedia support, form improvements, APIs for complex web applications, and better compatibility across devices and browsers.',
    whyUse: 'HTML5 provides modern features for building web applications without plugins. It includes native video and audio support, improved forms, offline capabilities, and APIs for geolocation, storage, and graphics.',
    whereUse: 'HTML5 is used in every modern web page and web application. It enables complex applications like online editors, games, maps, and real-time communication directly in the browser.',
    syntax: null,
    explanation: 'HTML5 builds on previous versions by adding new elements, attributes, and APIs. It simplifies the DOCTYPE declaration, introduces semantic elements, adds native media support, and provides JavaScript APIs for advanced functionality.',
    examples: [
      { title: 'HTML5 Document', code: `<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>HTML5 Page</title>\n</head>\n<body>\n  <header>\n    <h1>HTML5 Features</h1>\n  </header>\n  <main>\n    <article>\n      <p>Modern web development</p>\n    </article>\n  </main>\n</body>\n</html>`, output: 'HTML5 uses a simplified DOCTYPE, includes the viewport meta tag for responsive design, and uses semantic elements like header and main for better structure.' },
      { title: 'HTML5 Semantic Elements', code: `<header>Site header with navigation</header>\n<nav>Main navigation links</nav>\n<main>\n  <article>Primary content</article>\n  <section>Content section</section>\n  <aside>Related content</aside>\n</main>\n<footer>Site footer</footer>`, output: 'HTML5 introduced semantic elements that give meaning to page structure. These elements replace generic divs and improve accessibility and SEO.' },
      { title: 'HTML5 Form Features', code: `<form>\n  <input type=\"email\" placeholder=\"Email\" required>\n  <input type=\"date\">\n  <input type=\"range\" min=\"0\" max=\"100\">\n  <input type=\"color\">\n  <input type=\"search\" placeholder=\"Search...\">\n  <input type=\"url\" placeholder=\"Website\">\n</form>`, output: 'HTML5 added new input types with built-in validation and specialized controls. Email validates format, date shows a date picker, and search may show a clear button.' },
      { title: 'HTML5 Media Elements', code: `<video controls width=\"800\">\n  <source src=\"video.mp4\" type=\"video/mp4\">\n  Your browser does not support video.\n</video>\n\n<audio controls>\n  <source src=\"audio.mp3\" type=\"audio/mpeg\">\n  Your browser does not support audio.\n</audio>`, output: 'HTML5 provides native video and audio elements that work without plugins. Multiple sources ensure compatibility across different browsers and formats.' },
      { title: 'HTML5 Data Attributes', code: `<div id=\"app\" data-user-id=\"12345\" data-role=\"admin\">\n  <p data-status=\"active\">User is active</p>\n</div>`, output: 'Data attributes store custom data on HTML elements that JavaScript can access. They use the data- prefix and provide a clean way to store metadata.' }
    ],
    keyPoints: [
      'HTML5 uses a simplified DOCTYPE declaration without version numbers',
      'New semantic elements like header, nav, main, article, and section replace generic divs',
      'HTML5 provides native video and audio elements without requiring plugins',
      'New input types and form attributes provide built-in validation',
      'Data attributes allow custom data storage on HTML elements',
      'The viewport meta tag is essential for responsive design'
    ],
    commonMistakes: [
      'Using the old DOCTYPE declaration from HTML4 which is no longer needed',
      'Not including the viewport meta tag which prevents responsive behavior',
      'Using deprecated elements like center and font instead of CSS',
      'Not providing fallback content for media elements in older browsers'
    ],
    proTips: [
      'Use the HTML5 semantic elements to create a clear document outline',
      'Leverage HTML5 form validation to reduce JavaScript validation code',
      'Explore HTML5 APIs like geolocation, localStorage, and Canvas for advanced features',
      'Use the picture element for responsive images with art direction'
    ]
  }
}

export default html
