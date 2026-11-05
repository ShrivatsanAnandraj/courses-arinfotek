const react = {
  // ==================== INTRO LEVEL ====================
  intro: {
    definition: 'React is a JavaScript library for building user interfaces out of reusable pieces called components. It is maintained by Meta (Facebook).',
    whyUse: 'React is the most widely used frontend skill on the job market. Instagram, Netflix, Airbnb, Uber, and most modern startups build their apps with it. Its component model means you learn once and reuse everywhere - the same mental model applies to React Native mobile apps. For your career, React is arguably the single highest-value frontend library to learn.',
    whereUse: null,
    syntax: null,
    explanation: 'React lets you think of your page as a tree of small components (Header, CourseCard, ProgressBar). Each component gets data (props) and can hold its own changing data (state). When state changes, React automatically updates just the parts of the screen that changed - you never touch the DOM manually. This "declarative" style is what makes React fast to build with.',
    examples: [
      {
        title: 'The Component Idea',
        code: `// A React app is a tree of small pieces:
// <App>
//   <Header />
//   <CourseList>
//     <CourseCard name="React" />
//     <CourseCard name="Node.js" />
//   </CourseList>
// </App>

function Welcome() {
  return <h1>Hello from React!</h1>;
}
console.log("Components are reusable building blocks");`,
        output: 'Components are reusable building blocks'
      },
      {
        title: 'React vs Plain JavaScript',
        code: `// Plain JS way: find element, build HTML, replace content
// document.getElementById("list").innerHTML = "<li>Item</li>";

// React way: describe what the screen should show
// function List() {
//   return <ul><li>Item</li></ul>;
// }
// When data changes, React updates the screen for you.

console.log("React updates the UI for you instead of manual DOM work");`,
        output: 'React updates the UI for you instead of manual DOM work'
      },
      {
        title: 'Where React Runs',
        code: `const places = [
  "Web apps  - most company websites and dashboards",
  "Mobile    - React Native (Instagram, Airbnb)",
  "Desktop   - Electron apps using React UI",
  "This site - courses.arinfotek.co.in uses React!"
];
places.forEach(p => console.log(p));`,
        output: 'Web apps  - most company websites and dashboards\nMobile    - React Native (Instagram, Airbnb)\nDesktop   - Electron apps using React UI\nThis site - courses.arinfotek.co.in uses React!'
      }
    ],
    keyPoints: [
      'React builds UIs from reusable components.',
      'You describe the UI; React updates the DOM when data changes.',
      'Created by Meta, used by Instagram, Netflix, Airbnb, and this website.'
    ],
    commonMistakes: [
      'Thinking React is a full framework - routing and backend are added separately.',
      'Trying to update the DOM manually (querySelector, innerHTML) inside React.'
    ],
    proTips: [
      'Learn to think in components: split any design into small repeating cards.',
      'React knowledge transfers directly to React Native mobile development.'
    ]
  },

  setup: {
    definition: 'The fastest way to start a React project is Vite: one command creates a ready-to-run app with a dev server and hot reload.',
    whyUse: 'Vite gives you a working app in under a minute with fast refresh - you see your changes instantly, which doubles learning speed. Real teams also start projects this way (Vite, Next.js, or CRA), so the folder structure you learn here matches production projects.',
    whereUse: null,
    syntax: null,
    explanation: 'Run npm create vite@latest my-app -- --template react, then npm install and npm run dev. The dev server opens at localhost:5173 and reloads the page whenever you save a file. Structure: src/App.jsx (root component), src/main.jsx (entry point that mounts the app), index.html (the single page), and public/ for static files.',
    examples: [
      {
        title: 'Create and Run Your App',
        code: `# Terminal:
npm create vite@latest my-app -- --template react
cd my-app
npm install
npm run dev

# Open http://localhost:5173 - edit src/App.jsx and see it live`,
        output: 'VITE ready in ~200 ms  Local: http://localhost:5173/'
      },
      {
        title: 'What Vite Generates',
        code: `my-app/
  index.html          <- the only HTML page
  package.json        <- scripts and dependencies
  src/
    main.jsx          <- mounts React onto index.html
    App.jsx           <- your root component
    App.css           <- styles
  public/             <- images and static files

// main.jsx content:
// import { createRoot } from "react-dom/client";
// createRoot(document.getElementById("root")).render(<App />);`,
        output: 'Project structure ready'
      },
      {
        title: 'The Dev Server Loop',
        code: `// 1. npm run dev is running
// 2. You edit App.jsx and save
// 3. Vite hot-reloads only what changed (~instant)
// 4. Browser shows the update without a full refresh
// 5. Errors appear right in the browser overlay

console.log("Edit -> Save -> Instant update. That is your daily loop.");`,
        output: 'Edit -> Save -> Instant update. That is your daily loop.'
      }
    ],
    keyPoints: [
      'npm create vite@latest app -- --template react creates the project.',
      'npm run dev starts the fast dev server with hot reload.',
      'src/main.jsx mounts React; src/App.jsx is where you start coding.'
    ],
    commonMistakes: [
      'Running npm run dev from the wrong folder - cd into the project first.',
      'Editing the wrong file - most beginner changes go in src/App.jsx.'
    ],
    proTips: [
      'Keep the terminal open - it shows compile errors before the browser does.',
      'This website has a React editor: practice each lesson here without installing anything.'
    ]
  },

  hello: {
    definition: 'A React component is a plain function that returns JSX (the markup that becomes your screen). The function name must start with a capital letter.',
    whyUse: 'Components are the atom of React: every button, card, and page is one. Writing your first component and seeing it appear teaches the core loop you will repeat thousands of times - write function, return JSX, use it in the UI.',
    whereUse: null,
    syntax: null,
    explanation: 'Function component: function Welcome() { return <h1>Hi</h1>; }. To show it, write <Welcome /> inside another component (JSX tag with a capital letter). React runs the function and puts its output on the screen. Components can be nested and reused any number of times.',
    examples: [
      {
        title: 'Your First Component',
        code: `function Welcome() {
  return <h1>Hello, React!</h1>;
}

function App() {
  return (
    <div>
      <Welcome />
      <p>Learning one component at a time.</p>
    </div>
  );
}

export default App;
// Save as src/App.jsx and run npm run dev`,
        output: 'Screen shows a big "Hello, React!" heading and the paragraph'
      },
      {
        title: 'Reusable Components',
        code: `function Greeting({ name }) {
  return <p>Welcome, {name}!</p>;
}

function App() {
  return (
    <div>
      <Greeting name="Anita" />
      <Greeting name="Ravi" />
      <Greeting name="Meena" />
    </div>
  );
}

export default App;
// One component, three different outputs`,
        output: 'Welcome, Anita!\nWelcome, Ravi!\nWelcome, Meena!'
      },
      {
        title: 'Components Can Return More Than One Tag',
        code: `function CourseHeader() {
  return (
    <>
      <h2>React Basics</h2>
      <p>28 short lessons</p>
    </>
  );
}
// The empty <> </> (fragment) wraps multiple tags without adding extra HTML

console.log("A component must return one root - use <> ... </> for multiple");`,
        output: 'A component must return one root - use <> ... </> for multiple'
      }
    ],
    keyPoints: [
      'Component = function returning JSX; name must be Capitalized.',
      'Use a component as <ItsName /> inside other components.',
      'Fragments <> </> let you return multiple tags without extra HTML.'
    ],
    commonMistakes: [
      'Lowercase function names (function welcome()) - React treats them as HTML tags.',
      'Returning multiple root tags without a wrapper or fragment.'
    ],
    proTips: [
      'One component per file, named exactly like the file (CourseCard.jsx -> CourseCard).',
      'Start every new UI by sketching the component tree on paper.'
    ]
  },

  jsx: {
    definition: 'JSX is a syntax extension that looks like HTML but lives inside JavaScript. React uses it to describe what to render.',
    whyUse: 'JSX puts structure and logic side by side: you can write {isLogged ? "Hi" : "Login"} right inside your markup. This co-location is what makes React code readable - conditions and data live exactly where they are displayed. Every framework since (Vue, Svelte) copied the idea.',
    whereUse: null,
    syntax: null,
    explanation: 'JSX compiles to JavaScript function calls (React.createElement under the hood). Rules: one top-level element; attributes use camelCase (className, onClick); expressions go in braces {}; close every tag including <img /> and <br />; style takes an object. JavaScript is allowed anywhere inside {}.',
    examples: [
      {
        title: 'JSX Expressions',
        code: `const course = "React";
const lessons = 28;

function Header() {
  return (
    <div>
      <h1>{course} Course</h1>
      <p>{lessons} lessons total</p>
      <p>Double: {lessons * 2}</p>
      <p>Uppercase: {course.toUpperCase()}</p>
    </div>
  );
}

export default Header;`,
        output: 'React Course\n28 lessons total\nDouble: 56\nUppercase: REACT'
      },
      {
        title: 'className and Self-Closing Tags',
        code: `function Banner() {
  return (
    <div className="banner">
      <h2 className="title">Enroll Now</h2>
      <img src="/logo.png" alt="Logo" />
      <br />
      <a href="/courses" target="_blank" rel="noreferrer">
        Browse courses
      </a>
    </div>
  );
}

// HTML: class="banner"  ->  JSX: className="banner"
// HTML: for="x"         ->  JSX: htmlFor="x"`,
        output: 'Banner renders with class, image, line break and link'
      },
      {
        title: 'Conditional Logic Inside JSX',
        code: `function Status({ enrolled, score }) {
  return (
    <div>
      {enrolled ? <span>Enrolled</span> : <span>Not enrolled</span>}
      {score >= 90 && <p>Topper badge!</p>}
      <p>Result: {score >= 50 ? "Pass" : "Fail"}</p>
    </div>
  );
}

// && shows only when left side is true
// ? : picks one side`,
        output: 'Enrolled | Topper badge! | Result: Pass'
      }
    ],
    keyPoints: [
      'JSX = HTML-like syntax inside JavaScript, wrapped in {} for logic.',
      'className not class; close every tag; one root element.',
      'Any JS expression works inside braces: {cond ? a : b}.'
    ],
    commonMistakes: [
      'Writing class="x" instead of className="x".',
      'Returning two root elements without a wrapping tag or fragment.'
    ],
    proTips: [
      'JSX reads like the final UI - skim it top to bottom like HTML.',
      'Extract sub-parts into components when a JSX block grows past ~10 lines.'
    ]
  },

  components: {
    definition: 'Organizing React apps means one component per file, small focused components, and composing them into bigger ones.',
    whyUse: 'Real apps have hundreds of screens. Teams that dump everything into App.jsx slow down and conflict in git. The one-file-per-component convention is universal in React jobs - it makes code findable, testable, and reusable across projects.',
    whereUse: null,
    syntax: null,
    explanation: 'Each component lives in src/components/Name.jsx. It is defined with export default so other files can import it. Compose: App renders Navbar, Page, Footer; Page renders smaller pieces. Components receive everything they need through props - a component should not reach into another\'s data.',
    examples: [
      {
        title: 'One Component, One File',
        code: `// src/components/CourseCard.jsx
function CourseCard({ title, level }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <span>{level}</span>
    </div>
  );
}
export default CourseCard;

// src/App.jsx
// import CourseCard from "./components/CourseCard";
// function App() {
//   return <CourseCard title="React" level="Beginner" />;
// }`,
        output: 'CourseCard card renders with title and level'
      },
      {
        title: 'Composing a Page',
        code: `// App.jsx assembles the page from parts
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CourseList from "./components/CourseList";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <CourseList />
      <Footer />
    </div>
  );
}
export default App;`,
        output: 'Full page assembled from four components'
      },
      {
        title: 'Component Nesting Depth',
        code: `const tree = [
  "App",
  "|- Navbar",
  "|- CourseList",
  "|  |- CourseCard   (reused x N)",
  "|  |- CourseCard",
  "|- Footer"
].join("\\n");

console.log(tree);
console.log("Keep components small: if it does 3+ jobs, split it.");`,
        output: 'App\n|- Navbar\n|- CourseList\n|- CourseCard   (reused x N)\n|- CourseCard\n|- Footer\nKeep components small: if it does 3+ jobs, split it.'
      }
    ],
    keyPoints: [
      'One component per file, in src/components/.',
      'Compose bigger UIs from smaller components.',
      'Components get data via props - never import another component\'s state.'
    ],
    commonMistakes: [
      'Making one giant component handle the whole page.',
      'Passing props through 5+ levels (prop drilling) - use context instead.'
    ],
    proTips: [
      'If a file passes 150 lines, it is probably doing two jobs.',
      'Reuse comes from props: one CourseCard, endless courses.'
    ]
  },

  props: {
    definition: 'Props (properties) are read-only inputs a parent passes to a child component - like function arguments for UI.',
    whyUse: 'Props are how components stay reusable: the same CourseCard displays React, Node, or any course because the parent supplies the data. Understanding that props are read-only (never modify them inside the child) prevents one of the most common beginner bugs.',
    whereUse: null,
    syntax: null,
    explanation: 'Pass: <Greeting name="Anita" age={25} /> - strings in quotes, anything else in braces. Receive: function Greeting({ name, age }) - destructuring directly in the parameters. Children (content between tags) arrive as the children prop. Props flow one way: parent -> child, which keeps data predictable.',
    examples: [
      {
        title: 'Passing and Receiving Props',
        code: `function Greeting({ name, age }) {
  return (
    <p>
      {name} is {age} years old
    </p>
  );
}

function App() {
  return (
    <div>
      <Greeting name="Anita" age={25} />
      <Greeting name="Ravi" age={28} />
    </div>
  );
}
export default App;`,
        output: 'Anita is 25 years old\nRavi is 28 years old'
      },
      {
        title: 'Default Values and children',
        code: `function Button({ label = "Click me", children }) {
  return (
    <button className="btn">
      {children} - {label}
    </button>
  );
}

function App() {
  return (
    <div>
      <Button>Save</Button>
      <Button label="Cancel">Go back</Button>
    </div>
  );
}
export default App;`,
        output: 'Button 1: "Save - Click me"\nButton 2: "Go back - Cancel"'
      },
      {
        title: 'Props Are READ-ONLY',
        code: `function Bad({ count }) {
  // count = count + 1;   // NEVER do this - props are immutable
  // delete props.count;  // NEVER do this either

  return <p>Count from parent: {count}</p>;
}

// If the value needs to change, the change happens in the PARENT,
// which then passes the new value down.

console.log("Props are one-way data: parent -> child, never edited inside");`,
        output: 'Props are one-way data: parent -> child, never edited inside'
      }
    ],
    keyPoints: [
      'Strings pass as name="x"; numbers/objects/arrays as value={...}.',
      'Destructure in the signature: ({ name, age }).',
      'Props are immutable - to change, update the parent\'s state.'
    ],
    commonMistakes: [
      'Passing age={25} without braces for numbers - passing "25" as string.',
      'Mutating props inside the child - bugs appear far from their cause.'
    ],
    proTips: [
      'Spread props for lists: {...course} passes every field at once.',
      'children lets a component wrap any content - the key to flexible layouts.'
    ]
  },

  rendering: {
    definition: 'React rendering means the component function runs and produces JSX; when state or props change, it runs again and React syncs the screen.',
    whyUse: 'Understanding render cycles explains 80% of React behavior: why code inside a component body runs twice in development, why setState does not update the variable immediately, and how React decides what to touch in the DOM. Debugging becomes logical instead of magical.',
    whereUse: null,
    syntax: null,
    explanation: 'On mount, React calls your function and shows its output. When setState happens, React schedules a re-render: the function runs again with new values and React efficiently updates only what changed (reconciliation). Important: a render does NOT mean a network call - keep rendering pure (no fetch in the component body).',
    examples: [
      {
        title: 'Watching Renders Happen',
        code: `import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  console.log("Component rendered! count =", count);

  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  );
}
export default Counter;
// Every click -> setCount -> re-render -> console line appears`,
        output: 'Component rendered! count = 0\nComponent rendered! count = 1 (after click)'
      },
      {
        title: 'Render Is Not Immediate',
        code: `function Demo() {
  const [n, setN] = useState(0);

  function handleClick() {
    setN(1);
    console.log("n right after setN:", n);  // still 0!
  }

  return <button onClick={handleClick}>n = {n}</button>;
}
// setState schedules the next render - it does NOT change the
// current variable. This surprises every beginner once.`,
        output: 'n right after setN: 0  (update appears on next render)'
      },
      {
        title: 'Keep Rendering Pure',
        code: `function Bad() {
  // fetch("/api")        // NO - starts a request every render (loop!)
  // localStorage.setItem // NO - side effects belong in useEffect

  const items = [1, 2, 3];   // OK - cheap calculations are fine

  return <ul>{items.map(i => <li key={i}>{i}</li>)}</ul>;
}

console.log("Component body = pure JSX building only. Side effects -> useEffect");`,
        output: 'Component body = pure JSX building only. Side effects -> useEffect'
      }
    ],
    keyPoints: [
      'Render = component function runs and returns JSX.',
      'setState triggers a re-render; the old variable value is already gone.',
      'Rendering must stay pure - no fetch or saving in the component body.'
    ],
    commonMistakes: [
      'Expecting state to change the local variable instantly.',
      'Calling APIs directly in the component body - infinite request loops.'
    ],
    proTips: [
      'React StrictMode intentionally double-renders in dev to expose impure code.',
      'If something runs too often, log inside the component to count renders.'
    ]
  },

  // ==================== BASIC LEVEL ====================
  state: {
    definition: 'State is a component\'s own memory: data that can change over time. Updating state makes React re-render the component.',
    whyUse: 'Interactive apps must remember things: what you typed, whether the menu is open, items in a cart. State is how components remember - without it, a component is just a static picture. useState is the most-used hook in React, appearing in virtually every component in every React codebase.',
    whereUse: null,
    syntax: null,
    explanation: 'const [value, setValue] = useState(initial). value holds the current value; setValue updates it AND triggers a re-render. Never mutate state directly (value = 5 does nothing visible) - always call the setter. State belongs to one component: siblings each keep their own copy.',
    examples: [
      {
        title: 'useState Basics',
        code: `import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Add 1</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
export default Counter;`,
        output: 'Screen: "You clicked 0 times" -> click -> "You clicked 1 times"'
      },
      {
        title: 'Different Types of State',
        code: `import { useState } from "react";

function Profile() {
  const [name, setName] = useState("Anita");        // string
  const [enrolled, setEnrolled] = useState(false);  // boolean
  const [scores, setScores] = useState([92, 85]);   // array
  const [user, setUser] = useState(null);           // null (loading)

  return (
    <div>
      <input value={name} onChange={e => setName(e.target.value)} />
      <p>{enrolled ? "Enrolled" : "Not enrolled"}</p>
      <p>Sum: {scores.reduce((a, b) => a + b, 0)}</p>
    </div>
  );
}
export default Profile;`,
        output: 'Input bound to name; enrollment toggles; scores total 177'
      },
      {
        title: 'Updating Objects and Arrays Correctly',
        code: `import { useState } from "react";

function Cart() {
  const [items, setItems] = useState([{ name: "Pen", qty: 1 }]);

  // WRONG: items.push(...) or items[0].qty = 5  (mutates state)
  // RIGHT: create a new array
  const addOne = () => {
    setItems(prev => [...prev, { name: "Notebook " + prev.length, qty: 1 }]);
  };

  return (
    <button onClick={addOne}>
      Items: {items.length}
    </button>
  );
}
export default Cart;`,
        output: 'Clicking adds a new item to a NEW array (React sees the change)'
      }
    ],
    keyPoints: [
      'const [x, setX] = useState(initial) - destructuring pair.',
      'Calling setX schedules a re-render with the new value.',
      'Never mutate state - always set a new object/array (spread it).'
    ],
    commonMistakes: [
      'Mutating arrays/objects in state - React will not re-render.',
      'Forgetting that updates are async - old value persists until next render.'
    ],
    proTips: [
      'Use the functional form when the new value depends on the old: setX(prev => prev + 1).',
      'Multiple related values? Store one object instead of five separate useStates.'
    ]
  },

  events: {
    definition: 'Event handlers respond to user actions: onClick, onChange, onSubmit. In JSX they are camelCase functions.',
    whyUse: 'Buttons, forms, and menus are how users drive your app - events connect their actions to your logic. The React event pattern (handler functions with state updates) is identical everywhere: same syntax in every company\'s code you will ever work on.',
    whereUse: null,
    syntax: null,
    explanation: 'Write onClick={() => doStuff()} for inline handlers, or onClick={handleClick} for named ones. Events are camelCase (onClick, onChange, onSubmit). preventDefault() stops default behavior (page reload on form submit). Handlers may receive the event object (e) for target.value and similar.',
    examples: [
      {
        title: 'Click Handlers',
        code: `import { useState } from "react";

function LikeButton() {
  const [likes, setLikes] = useState(0);

  const handleLike = () => setLikes(likes + 1);

  return (
    <div>
      <button onClick={handleLike}>Like</button>
      <button onClick={() => setLikes(0)}>Reset</button>
      <p>{likes} likes</p>
    </div>
  );
}
export default LikeButton;`,
        output: 'Each Like click increases the counter; Reset returns it to 0'
      },
      {
        title: 'Input Events (onChange)',
        code: `import { useState } from "react";

function NameField() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        placeholder="Type your name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <p>Hello, {name || "stranger"}!</p>
    </div>
  );
}
export default NameField;
// value + onChange together = "controlled input" (React owns the value)`,
        output: 'Typing "Anita" updates the greeting instantly: "Hello, Anita!"'
      },
      {
        title: 'Form Submit Without Page Reload',
        code: `import { useState } from "react";

function Signup() {
  const [email, setEmail] = useState("");

  const handleSubmit = e => {
    e.preventDefault();               // stops the page reload
    console.log("Submitted:", email);
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={email} onChange={e => setEmail(e.target.value)} />
      <button type="submit">Sign up</button>
    </form>
  );
}
export default Signup;`,
        output: 'Submitting logs the email and clears the input - no reload'
      }
    ],
    keyPoints: [
      'onClick, onChange, onSubmit - always camelCase.',
      'e.preventDefault() is mandatory in form submits.',
      'Controlled inputs: value={state} + onChange={setState}.'
    ],
    commonMistakes: [
      'onClick={handleClick()} - the () calls it during render; pass the function itself.',
      'Forgetting preventDefault - the whole page reloads and state is lost.'
    ],
    proTips: [
      'Name handlers handleX (handleSubmit) - it makes JSX readable.',
      'When the new state depends on the previous, use setX(prev => ...).'
    ]
  },

  conditional_render: {
    definition: 'Conditional rendering shows or hides UI based on data: ternaries, the && operator, or early returns.',
    whyUse: 'Screens constantly change shape: show Login when logged out, a spinner while loading, an error box on failure. Getting these three states right is the difference between a polished app and a broken-looking one - every frontend job tests this skill.',
    whereUse: null,
    syntax: null,
    explanation: 'Three tools: (1) condition ? <A/> : <B/> for two-way choice; (2) condition && <A/> to show only when true; (3) early return in the function body for whole-page states (loading, unauthorized). Never use truthy-looking checks like {items && ...} when items can be an empty array - empty array is truthy and renders weirdly.',
    examples: [
      {
        title: 'Ternary and &&',
        code: `function UserArea({ user, notifications }) {
  return (
    <div>
      {user ? <p>Welcome, {user.name}</p> : <a href="/login">Login</a>}
      {notifications > 0 && <span className="badge">{notifications}</span>}
      {user?.isAdmin && <button>Admin panel</button>}
    </div>
  );
}
export default UserArea;`,
        output: 'Logged out: Login link. Logged in: welcome + notification badge.'
      },
      {
        title: 'Early Return for Loading States',
        code: `function StudentPage({ loading, student }) {
  if (loading) {
    return <p>Loading...</p>;
  }
  if (!student) {
    return <p>Student not found.</p>;
  }

  // Reached only when loaded AND student exists
  return (
    <div>
      <h2>{student.name}</h2>
      <p>Marks: {student.marks}</p>
    </div>
  );
}
export default StudentPage;`,
        output: 'Loading -> spinner; missing -> message; found -> student card'
      },
      {
        title: 'Avoid the Empty-Array Trap',
        code: `function List({ items }) {
  return (
    <div>
      {/* BAD when items can be [] - empty array is truthy! */}
      {/* {items && <ul>...</ul>}  might show an empty <ul> */}

      {/* GOOD */}
      {items.length > 0 ? (
        <ul>{items.map(i => <li key={i.id}>{i.name}</li>)}</ul>
      ) : (
        <p>No items yet</p>
      )}
    </div>
  );
}
export default List;`,
        output: 'Shows the list when it has items, otherwise "No items yet"'
      }
    ],
    keyPoints: [
      'ternary = two options; && = show when true; early return = full page states.',
      'Check items.length > 0, not just items (arrays are always truthy).',
      'Optional chaining (user?.name) safely skips nulls.'
    ],
    commonMistakes: [
      '{count && <p>...</p>} with count = 0 renders "0" (0 is falsy but JSX prints it!).',
      'Forgetting a loading state - users stare at a blank screen.'
    ],
    proTips: [
      'Always design three states: loading, error, success.',
      'Extract repeated conditionals into small components: <Loading /> or <ErrorBox />.'
    ]
  },

  lists: {
    definition: 'Lists render from arrays with .map(), and each item needs a unique key prop so React can track them.',
    whyUse: 'Almost every screen is a list: courses, messages, orders, search results. map + keys is the standard pattern, and wrong keys cause real bugs - items flicker, reorder wrongly, and state attaches to the wrong row. Interviewers frequently ask about keys.',
    whereUse: null,
    syntax: null,
    explanation: 'array.map(item => <Component key={id} {...item} />) turns data into elements. key should be a stable unique ID from your data (database id), never the array index (it breaks when the list reorders). Filter first, then map: list.filter(...).map(...).',
    examples: [
      {
        title: 'Basic map',
        code: `function CourseList() {
  const courses = [
    { id: 1, title: "React" },
    { id: 2, title: "Node.js" },
    { id: 3, title: "Kotlin" }
  ];

  return (
    <ul>
      {courses.map(c => (
        <li key={c.id}>{c.title}</li>
      ))}
    </ul>
  );
}
export default CourseList;`,
        output: 'Three bullets: React, Node.js, Kotlin'
      },
      {
        title: 'Filter Then Map',
        code: `function Toppers({ students }) {
  const toppers = students.filter(s => s.marks >= 90);

  if (toppers.length === 0) return <p>No toppers yet</p>;

  return (
    <ol>
      {toppers.map(s => (
        <li key={s.id}>
          {s.name} - {s.marks}
        </li>
      ))}
    </ol>
  );
}
export default Toppers;`,
        output: 'Ordered list of only the 90+ students'
      },
      {
        title: 'Why Keys Matter',
        code: `// WRONG: index as key when list can reorder/delete
// {items.map((item, i) => <Row key={i} />)}

// RIGHT: stable unique id
// {items.map(item => <Row key={item.id} />)}

// Without proper keys, React mismatches old and new rows:
// you delete row 1, and React edits row 3's text instead.
// Result: flickering, wrong input values, subtle bugs.

console.log("key = React's way of matching rows across renders");`,
        output: "key = React's way of matching rows across renders"
      }
    ],
    keyPoints: [
      'array.map(item => JSX) converts data to elements.',
      'key must be a stable unique id - never the index for dynamic lists.',
      'Empty list? Show a friendly fallback message.'
    ],
    commonMistakes: [
      'Forgetting key - React warns and rendering gets slow/buggy.',
      'Using index keys on lists that reorder or delete items.'
    ],
    proTips: [
      'If your data has an id field, that is your key.',
      'Chain filter().map() - readable and functional.'
    ]
  },

  forms: {
    definition: 'Controlled forms keep input values in React state, so you can validate and submit them exactly when you want.',
    whyUse: 'Forms collect the data every app runs on: signups, searches, checkouts. Controlled inputs give you instant validation, clear error messages, and full control over submit - the difference between a form that feels good and one that loses user data.',
    whereUse: null,
    syntax: null,
    explanation: 'Each input binds value={state} and onChange={setState} - React holds the truth. Handle submit with onSubmit + e.preventDefault(), validate the state, then send it (fetch). Multiple fields: one useState object or one useState per field. Show errors from state, not alerts.',
    examples: [
      {
        title: 'Controlled Signup Form',
        code: `import { useState } from "react";

function Signup() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const update = e => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = e => {
    e.preventDefault();
    if (!form.email.includes("@")) return setError("Valid email required");
    if (form.password.length < 8) return setError("Password too short");
    setError("");
    console.log("Sending:", form);
  };

  return (
    <form onSubmit={submit}>
      <input name="email" value={form.email} onChange={update} />
      <input name="password" type="password" value={form.password} onChange={update} />
      {error && <p className="error">{error}</p>}
      <button>Create account</button>
    </form>
  );
}
export default Signup;`,
        output: 'Invalid email shows the error; valid input logs the form data'
      },
      {
        title: 'Select and Checkbox',
        code: `import { useState } from "react";

function Preferences() {
  const [level, setLevel] = useState("beginner");
  const [ emailMe, setEmailMe ] = useState(true);

  return (
    <div>
      <select value={level} onChange={e => setLevel(e.target.value)}>
        <option value="beginner">Beginner</option>
        <option value="advanced">Advanced</option>
      </select>

      <label>
        <input
          type="checkbox"
          checked={emailMe}
          onChange={e => setEmailMe(e.target.checked)}
        />
        Email me updates
      </label>

      <p>{level} / {emailMe ? "subscribed" : "no emails"}</p>
    </div>
  );
}
export default Preferences;`,
        output: 'Dropdown and checkbox both reflect and update React state'
      },
      {
        title: 'Submit to an API',
        code: `const submitForm = async (data) => {
  const res = await fetch("/api/students", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  if (!res.ok) throw new Error("Save failed: " + res.status);
  return res.json();
};

// In handleSubmit:
// try { await submitForm(form); setSaved(true); }
// catch (e) { setError(e.message); }

console.log("Validate locally, then confirm with the server.");`,
        output: 'Validate locally, then confirm with the server.'
      }
    ],
    keyPoints: [
      'value + onChange = controlled input (React owns the value).',
      'Submit with preventDefault, validate from state, then fetch.',
      'Errors live in state - render them inline, do not use alert().'
    ],
    commonMistakes: [
      'Using uncontrolled refs for simple forms - harder to validate.',
      'Only validating on the server - bad input should fail fast in the UI.'
    ],
    proTips: [
      'One state object { ...form, [name]: value } scales to large forms.',
      'Disable the submit button until the form is valid for smoother UX.'
    ]
  },

  styling: {
    definition: 'React components can be styled with plain CSS classes, CSS Modules, or CSS-in-JS - all produce the same visual result.',
    whyUse: 'UI without styling looks broken to users. CSS Modules (Vite\'s default choice) give you scoped class names so styles never leak between components - a common bug in plain-CSS React apps. The approach you pick should match your team\'s stack, and most modern stacks use CSS Modules or Tailwind.',
    whereUse: null,
    syntax: null,
    explanation: 'Plain CSS: import "./App.css", use className="card". CSS Modules: create Card.module.css, import styles from "./Card.module.css", use className={styles.card} - class names get hashed so they cannot clash. Inline styles: style={{ color: "red" }} - object with camelCase properties, best for small dynamic values.',
    examples: [
      {
        title: 'Plain CSS Class',
        code: `// App.css
// .card { padding: 16px; border: 1px solid #ddd; border-radius: 8px; }
// .title { color: #61dafb; }

// Card.jsx
import "./App.css";

function Card({ title }) {
  return (
    <div className="card">
      <h3 className="title">{title}</h3>
    </div>
  );
}
export default Card;`,
        output: 'Card renders padded, bordered, with a cyan title'
      },
      {
        title: 'CSS Modules (Scoped Styles)',
        code: `// Card.module.css
// .card { padding: 16px; }
// .active { border-color: green; }

// Card.jsx
import styles from "./Card.module.css";
import { useState } from "react";

function Card() {
  const [active, setActive] = useState(false);
  const cls = active ? styles.card + " " + styles.active : styles.card;

  return <div className={cls} onClick={() => setActive(true)}>Tap me</div>;
}
export default Card;
// styles.card -> a unique hashed name, no global clashes`,
        output: 'Click turns the card border green; class names are scoped to this file'
      },
      {
        title: 'Dynamic Inline Styles',
        code: `function ProgressBar({ percent }) {
  const barStyle = {
    width: percent + "%",
    backgroundColor: percent > 80 ? "green" : "orange",
    height: 12,
    borderRadius: 6
  };

  return <div style={barStyle} />;
}

// export default ProgressBar;
// <ProgressBar percent={85} />  -> green bar at 85% width`,
        output: '85% -> green bar; 50% -> orange bar at half width'
      }
    ],
    keyPoints: [
      'className for CSS classes (never class= in JSX).',
      'CSS Modules (styles.card) prevent style leaks between components.',
      'Inline style={{ }} = camelCase object, for values driven by state.'
    ],
    commonMistakes: [
      'Writing class="card" - it silently does nothing; use className.',
      'Inline-styling entire layouts - it gets unwieldy fast; use CSS files.'
    ],
    proTips: [
      'Dynamic values (width, colors from state) -> inline; everything else -> CSS file.',
      'CSS Modules in Vite work with zero configuration.'
    ]
  },

  composition: {
    definition: 'Composition builds flexible components by passing JSX or functions as props - especially the special children prop.',
    whyUse: 'Libraries like React Router, MUI, and every design system are built on composition: a Modal that wraps {children}, a Layout that surrounds any page. Teams that use composition write far less prop-plumbing code. It is the key technique for creating reusable, clean APIs between components.',
    whereUse: null,
    syntax: null,
    explanation: 'Whatever sits between a component\'s tags arrives as props.children. Build components that wrap content: <Card><h3>Title</h3></Card>. Also compose by passing elements as props (footer={<Footer />}). This inverts control: the parent decides the content, the child decides where and how to show it.',
    examples: [
      {
        title: 'children - The Building Block',
        code: `function Card({ title, children }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <div className="body">{children}</div>
    </div>
  );
}

function App() {
  return (
    <div>
      <Card title="Course">
        <p>React in 28 lessons</p>
        <button>Enroll</button>
      </Card>
      <Card title="Note">
        <span>Remember the exam date</span>
      </Card>
    </div>
  );
}
export default App;`,
        output: 'Two cards share layout but hold completely different content'
      },
      {
        title: 'Layout Component Pattern',
        code: `function PageLayout({ sidebar, children }) {
  return (
    <div className="layout">
      <header>My Learning Site</header>
      <div className="row">
        <aside>{sidebar}</aside>
        <main>{children}</main>
      </div>
      <footer>(c) 2026</footer>
    </div>
  );
}

// <PageLayout sidebar={<Menu />}>
//   <Dashboard />
// </PageLayout>`,
        output: 'Any page gets header/sidebar/footer without rewriting them'
      },
      {
        title: 'Render Props (Function Children)',
        code: `function MouseTracker({ render }) {
  const pos = { x: 120, y: 45 };
  return <div>{render(pos)}</div>;
}

function App() {
  return (
    <MouseTracker
      render={({ x, y }) => <p>Mouse at {x}, {y}</p>}
    />
  );
}
// The child decides WHAT to show with the shared data.
// This is how libraries expose behavior + keep UI flexible.`,
        output: 'Mouse at 120, 45'
      }
    ],
    keyPoints: [
      'children = whatever the parent nested between your tags.',
      'Composition beats deep prop chains: wrap content instead of configuring it.',
      'Pass elements as props (sidebar={<Menu />}) for flexible layouts.'
    ],
    commonMistakes: [
      'Recreating the same wrapper markup in every page - extract a layout component.',
      'Over-configuring via props (showHeader, showFooter, showSidebar...) - accept children instead.'
    ],
    proTips: [
      'If a component has 10+ configuration props, consider accepting children/elements.',
      'Layout, Card, Modal, and Button are the classic composition candidates.'
    ]
  },

  // ==================== MEDIUM LEVEL ====================
  effects: {
    definition: 'useEffect runs code in response to things React does not own: data fetching, subscriptions, timers, and manual DOM updates.',
    whyUse: 'Components must talk to the outside world - APIs, websockets, localStorage - and React needs to know when that happens so it does not repeat the work on every render. useEffect plus a cleanup function is the correct, leak-free way to do it, and misuse of useEffect is the number one React anti-pattern to master.',
    whereUse: null,
    syntax: null,
    explanation: 'useEffect(fn, deps): fn runs after the component renders. Dependency array rules: [] = run once on mount; [a, b] = run when those change; no array = after every render. Return a cleanup function (for clearInterval, abort) - React calls it before the next run and on unmount. Fetching data? Always handle cleanup.',
    examples: [
      {
        title: 'Run Once on Mount',
        code: `import { useEffect, useState } from "react";

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log("Component mounted - fetch goes here");
    // fetch("/api/me").then(r => r.json()).then(setUser);
  }, []);   // [] = only once

  return <p>{user ? user.name : "Loading..."}</p>;
}
export default Profile;`,
        output: 'Component mounted - fetch goes here (once, not every render)'
      },
      {
        title: 'React to State Changes',
        code: `import { useEffect, useState } from "react";

function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (!query) { setResults([]); return; }
    console.log("Searching for:", query);
    // fetch(\`/api/search?q=\${query}\`).then(...)
  }, [query]);   // runs whenever query changes

  return <input value={query} onChange={e => setQuery(e.target.value)} />;
}
export default Search;`,
        output: 'Typing "rea" logs: Searching for: rea (once per change)'
      },
      {
        title: 'Cleanup: Timers and Subscriptions',
        code: `import { useEffect, useState } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setSeconds(s => s + 1), 1000);

    return () => clearInterval(id);   // cleanup before next run/unmount
  }, []);

  return <p>Seconds: {seconds}</p>;
}
// Without cleanup, intervals pile up: 1/sec becomes 2, 3, 4...`,
        output: 'Seconds: 1, 2, 3... exactly once per second, no leaks'
      }
    ],
    keyPoints: [
      '[] = mount once; [x] = when x changes; omitted = every render.',
      'Return a cleanup function for timers, listeners, and aborts.',
      'Never put values you forgot in the deps - that causes stale bugs.'
    ],
    commonMistakes: [
      'Missing deps - the effect uses old state forever.',
      'No cleanup for setInterval/addEventListener - memory leaks in production.'
    ],
    proTips: [
      'Before writing useEffect, ask: is this a response to rendering? If not, it belongs there - if it is an event handler, it belongs in onClick/handler instead.',
      'Fetch with AbortController for correct cancellation.'
    ]
  },

  context: {
    definition: 'React Context lets you pass data through the whole component tree without threading props through every level (prop drilling).',
    whyUse: 'Theme, logged-in user, locale, and cart data are needed everywhere - passing them through 8 levels of components is painful and noisy. Context is the built-in solution, used in virtually every medium-plus React app. It solves exactly the problem that makes prop drilling miserable.',
    whereUse: null,
    syntax: null,
    explanation: 'const Ctx = createContext(default). Provider: <Ctx.Provider value={data}> wraps the subtree that needs it. Consumer: useContext(Ctx) inside any descendant reads the current value. Rule: only put LOW-FREQUENCY shared data in context (auth, theme) - high-frequency data (cursor position) causes heavy re-renders.',
    examples: [
      {
        title: 'Context Without Drilling',
        code: `import { createContext, useContext } from "react";

const ThemeCtx = createContext("light");

function DeepChild() {
  const theme = useContext(ThemeCtx);     // skips 5 levels
  return <p>Current theme: {theme}</p>;
}

function App() {
  return (
    <ThemeCtx.Provider value="dark">
      <DeepChild />       {/* no props passed down the chain */}
    </ThemeCtx.Provider>
  );
}
export default App;`,
        output: 'Current theme: dark'
      },
      {
        title: 'Auth Context (Real Pattern)',
        code: `import { createContext, useContext, useState } from "react";

const AuthCtx = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const login = name => setUser({ name });
  const logout = () => setUser(null);
  return (
    <AuthCtx.Provider value={{ user, login, logout }}>
      {children}
    </AuthCtx.Provider>
  );
}

export const useAuth = () => useContext(AuthCtx);

// Anywhere: const { user, logout } = useAuth();`,
        output: 'Login/logout available at any depth via useAuth()'
      },
      {
        title: 'When NOT to Use Context',
        code: `// GOOD for context (changes rarely, needed everywhere):
// - theme (dark/light)
// - current user / auth token
// - language / locale
// - feature flags

// BAD for context (changes 60x per second):
// - mouse position
// - every keystroke of a global search box
// - scroll position
//
// For fast-changing data use component state or a store
// (Zustand/Redux) that lets subscribers opt in.

console.log("Context = slow shared state; stores = fast shared state");`,
        output: 'Context = slow shared state; stores = fast shared state'
      }
    ],
    keyPoints: [
      'createContext + Provider + useContext is the full pattern.',
      'Context skips intermediate components - no prop drilling.',
      'Keep context values small and slow-changing.'
    ],
    commonMistakes: [
      'Putting entire app state in one giant context - every keystroke re-renders everything.',
      'Creating a new value object inline each render without useMemo (causes extra renders).'
    ],
    proTips: [
      'Split contexts: AuthContext, ThemeContext - consumers only re-render for their own data.',
      'Export a useX() hook alongside each context for clean imports.'
    ]
  },

  custom_hooks: {
    definition: 'A custom hook is a function starting with "use" that contains reusable state logic (useState, useEffect, or any other hook).',
    whyUse: 'The same logic appears across many components: fetch data by URL, track online status, persist a value to localStorage. Custom hooks let you write it once and keep components small. It is the standard way React teams share logic - far cleaner than copying useEffect blocks around.',
    whereUse: null,
    syntax: null,
    explanation: 'Name must start with use (React enforces hook rules inside it). A hook receives arguments and returns values/objects: const { data, loading, error } = useFetch(url). Components using the same hook each get their OWN state copy - hooks do not share data between components.',
    examples: [
      {
        title: 'useFetch - The Most Useful Hook',
        code: `import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const ctrl = new AbortController();
    fetch(url, { signal: ctrl.signal })
      .then(r => { if (!r.ok) throw new Error(r.status); return r.json(); })
      .then(setData)
      .catch(e => e.name !== "AbortError" && setError(e.message))
      .finally(() => setLoading(false));
    return () => ctrl.abort();
  }, [url]);

  return { data, loading, error };
}

// Usage: const { data, loading } = useFetch("/api/students");`,
        output: 'Component gets { data, loading, error } with zero boilerplate'
      },
      {
        title: 'useLocalStorage',
        code: `import { useState, useEffect } from "react";

function useLocalStorage(key, initial) {
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : initial;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

// const [theme, setTheme] = useLocalStorage("theme", "light");
// now survives page refreshes`,
        output: 'State persists in localStorage automatically'
      },
      {
        title: 'Two Components, Two Independent Copies',
        code: `function A() {
  const [count] = useState(0);      // A's own state
  return <span>A: {count}</span>;
}
function B() {
  const [count] = useState(0);      // B's own state - separate!
  return <span>B: {count}</span>;
}
// Even with the same custom hook, each component gets a fresh copy.
// Custom hooks SHARE CODE, not STATE.`,
        output: 'Custom hooks SHARE CODE, not STATE.'
      }
    ],
    keyPoints: [
      'Name starts with use - that is the React convention and a lint rule.',
      'Return an object/array of values the component needs.',
      'Each component calling the hook keeps its own independent state.'
    ],
    commonMistakes: [
      'Calling hooks conditionally inside the hook (inside if) - violates hook rules.',
      'Expecting state to be shared between two components using the same hook.'
    ],
    proTips: [
      'If you copy an effect block into a second file, it is time for a custom hook.',
      'Hooks that call other hooks are perfectly fine - that is their power.'
    ]
  },

  refs: {
    definition: 'useRef gives you a container whose .current value persists across renders WITHOUT causing re-renders when it changes.',
    whyUse: 'You often need to touch the actual DOM node (focus an input, measure a box, scroll) or keep a value (timer id, previous state) that should not re-render on change. Trying to do these with state causes extra renders or broken behavior - refs are the purpose-built tool for both jobs.',
    whereUse: null,
    syntax: null,
    explanation: 'const ref = useRef(initial) - read/write ref.current freely; React keeps it stable. Attach to DOM: <input ref={inputRef} />, then inputRef.current.focus(). Typical uses: focus/scroll/measure, storing timer IDs for cleanup, keeping the previous value to compare, and anything that must NOT trigger a render.',
    examples: [
      {
        title: 'Focus an Input',
        code: `import { useRef } from "react";

function Search() {
  const inputRef = useRef(null);

  return (
    <div>
      <input ref={inputRef} placeholder="Search courses" />
      <button onClick={() => inputRef.current.focus()}>Focus</button>
    </div>
  );
}
export default Search;`,
        output: 'Clicking Focus places the cursor in the input'
      },
      {
        title: 'Keep Values Without Re-rendering',
        code: `import { useRef, useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const countRef = useRef(0);        // changing it renders nothing

  useEffect(() => {
    const id = setInterval(() => {
      countRef.current += 1;
      setSeconds(countRef.current);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return <p>{seconds}s (ref count: {countRef.current})</p>;
}`,
        output: 'Seconds tick every 1000ms; ref mirrors the count without extra renders'
      },
      {
        title: 'Previous Value Pattern',
        code: `import { useRef, useEffect, useState } from "react";

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;      // runs AFTER render, stores latest
  }, [value]);
  return ref.current;         // value from the previous render
}

function Demo() {
  const [n, setN] = useState(1);
  const prev = usePrevious(n);
  return (
    <button onClick={() => setN(n + 1)}>
      Now {n}, before {prev}
    </button>
  );
}`,
        output: 'Click: Now 2, before 1'
      }
    ],
    keyPoints: [
      'ref.current can change freely - no re-render triggered.',
      'Attach refs to DOM nodes: <input ref={r} />.',
      'Never read/write refs DURING render (except initialization) - it goes stale.'
    ],
    commonMistakes: [
      'Using ref instead of state for anything that must appear on screen.',
      'Mutating ref.current during render - React renders from stale values.'
    ],
    proTips: [
      'Rule of thumb: rendered value = state; unrendered bookkeeping = ref.',
      'Always clear ref-held intervals in effect cleanup.'
    ]
  },

  lifting_state: {
    definition: 'Lifting state up means moving shared state to the closest common ancestor and passing it down as props, so siblings stay in sync.',
    whyUse: 'Two sibling components often must agree: a temperature input and its boiling verdict, filters and the list they control, cart total and the checkout button. React\'s answer is one source of truth lifted to the parent - the pattern behind all coordinated UI, and a classic interview question.',
    whereUse: null,
    syntax: null,
    explanation: 'When two components reflect the same data, the state does not belong in either - it belongs in their shared parent. The parent owns the state and passes it plus setter functions down. Downside: it can produce long prop lists - that is exactly what context and stores solve next.',
    examples: [
      {
        title: 'Classic Example: Filter + List',
        code: `import { useState } from "react";

function App() {
  const [query, setQuery] = useState("");       // state lives HERE
  const courses = ["React", "Node.js", "Kotlin"];

  const visible = courses.filter(c =>
    c.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input value={query} onChange={e => setQuery(e.target.value)} />
      <CourseList items={visible} />            {/* same source of truth */}
    </div>
  );
}

function CourseList({ items }) {
  return <ul>{items.map(c => <li key={c}>{c}</li>)}</ul>;
}
export default App;`,
        output: 'Typing "no" leaves Node.js and Kotlin visible'
      },
      {
        title: 'Input + Output Siblings',
        code: `function Calculator() {
  const [temp, setTemp] = useState(0);          // shared by both children

  return (
    <div>
      <TemperatureInput temp={temp} onChange={setTemp} />
      <BoilingVerdict temp={temp} />             {/* always agrees */}
    </div>
  );
}

function TemperatureInput({ temp, onChange }) {
  return <input type="number" value={temp} onChange={e => onChange(+e.target.value)} />;
}

function BoilingVerdict({ temp }) {
  return <p>{temp >= 100 ? "Boiling!" : "Not boiling"}</p>;
}`,
        output: 'Set 100 -> "Boiling!" appears instantly'
      },
      {
        title: 'When Siblings Fight Without a Parent',
        code: `// WRONG (siblings each keep their own copy):
// <FilterBox />   has query state
// <CourseList />  has its own query state -> OUT OF SYNC
//
// RIGHT (lift to parent):
// <App />         owns query
//   <FilterBox value={query} onChange={setQuery} />
//   <CourseList items={filtered} />
//
// One source of truth = no sync bugs, ever.

console.log("Shared state lives in the closest common parent");`,
        output: 'Shared state lives in the closest common parent'
      }
    ],
    keyPoints: [
      'State goes up to the common parent; data flows down as props.',
      'One source of truth prevents sibling desynchronization.',
      'Pass setters down so children can request changes.'
    ],
    commonMistakes: [
      'Duplicating state in two components - they will drift apart.',
      'Lifting state too high (the whole app) when a local parent suffices.'
    ],
    proTips: [
      'If two components need the same value, that value has one home: their parent.',
      'When prop lists get long, that is your signal to graduate to context or a store.'
    ]
  },

  memoization: {
    definition: 'Memoization skips unnecessary re-render work: React.memo wraps a component, useMemo caches a calculated value, and useCallback caches a function.',
    whyUse: 'In big apps, one state change can re-render entire trees, causing lag on slow devices. Memoization tells React what is safe to skip. But it has a cost - use it on real bottlenecks (proven by the Profiler), not everywhere; premature memoization clutters code.',
    whereUse: null,
    syntax: null,
    explanation: 'React.memo(Component): re-render only if props changed (compared shallowly). useMemo(() => calc(a, b), [a, b]): recompute only when deps change - for expensive calculations. useCallback(() => fn, [deps]): stable function identity - needed when passing callbacks to memoized children or effect deps. All three take a deps array like useEffect.',
    examples: [
      {
        title: 'React.memo - Skip Unchanged Children',
        code: `import { memo, useState } from "react";

const HeavyRow = memo(function HeavyRow({ item }) {
  console.log("Rendering", item.name);   // only logs when item changes
  return <li>{item.name} - {item.score}</li>;
});

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>count {count}</button>
      <ul>
        <HeavyRow item={{ name: "Anita", score: 92 }} />
      </ul>
    </div>
  );
}`,
        output: 'Clicking the button does NOT re-render HeavyRow (props identical)'
      },
      {
        title: 'useMemo - Cache Expensive Math',
        code: `import { useMemo, useState } from "react";

function SortedList({ numbers }) {
  const [desc, setDesc] = useState(true);

  const sorted = useMemo(() => {
    console.log("Sorting...");
    return [...numbers].sort((a, b) => (desc ? b - a : a - b));
  }, [numbers, desc]);     // recompute only when these change

  return (
    <div>
      <button onClick={() => setDesc(!desc)}>Toggle</button>
      <p>{sorted.join(", ")}</p>
    </div>
  );
}`,
        output: '"Sorting..." logs only when numbers or order change'
      },
      {
        title: 'useCallback - Stable Callbacks',
        code: `import { useCallback, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  // identity stays stable across renders -> safe for memo children
  const handleAdd = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  // without useCallback, a new function is created every render,
  // defeating React.memo on any child receiving it.

  return <Child onAdd={handleAdd} />;
}`,
        output: 'Child receives the same function reference every render'
      }
    ],
    keyPoints: [
      'React.memo = component re-render guard (props comparison).',
      'useMemo = cache a value; useCallback = cache a function.',
      'All three need a deps array - same thinking as useEffect.'
    ],
    commonMistakes: [
      'Memoizing everything - overhead can exceed the benefit.',
      'Forgetting that React.memo does a shallow compare - object literals in JSX are always "new".'
    ],
    proTips: [
      'Measure first with React DevTools Profiler, then memoize hot spots.',
      'Inline object/prop creation ({ style={{}} }, onClick={}) defeats memo - extract them.'
    ]
  },

  router: {
    definition: 'React Router gives your single-page app multiple pages: URLs like /courses and /courses/:id map to different components without full page reloads.',
    whyUse: 'Users expect URLs: back button, bookmarks, sharing links. React Router is the standard way React apps handle this - used by most production React sites. Knowing routes, params, and nested layouts is required in virtually every React frontend job.',
    whereUse: null,
    syntax: null,
    explanation: 'npm install react-router-dom. Wrap the app in <BrowserRouter>. Define <Routes> with <Route path="/about" element={<About />} />. Dynamic segments: path="/courses/:id" read with useParams(). Navigate with <Link to="/about"> (not <a> - that reloads) or useNavigate() in code. Nested routes render through <Outlet />.',
    examples: [
      {
        title: 'Basic Routes and Links',
        code: `import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<p>404 - Not found</p>} />
      </Routes>
    </BrowserRouter>
  );
}
function Home() { return <h1>Home page</h1>; }
function About() { return <h1>About us</h1>; }`,
        output: '/ shows Home; /about shows About; anything else shows 404'
      },
      {
        title: 'Dynamic Route Params',
        code: `import { useParams, Link } from "react-router-dom";

function CoursePage() {
  const { id } = useParams();           // /courses/42 -> id = "42"
  return (
    <div>
      <h1>Course {id}</h1>
      <Link to="/courses">Back to list</Link>
    </div>
  );
}

// <Route path="/courses/:id" element={<CoursePage />} />
// URL: /courses/42  -> renders with id="42"`,
        output: 'Course 42 with a working Back link (no page reload)'
      },
      {
        title: 'Programmatic Navigation',
        code: `import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  const submit = e => {
    e.preventDefault();
    if (user) navigate("/dashboard");     // redirect after login
  };

  return (
    <form onSubmit={submit}>
      <input value={user} onChange={e => setUser(e.target.value)} />
      <button>Login</button>
    </form>
  );
}
// navigate(-1) also works like the browser back button.`,
        output: 'After successful login, URL changes to /dashboard instantly'
      }
    ],
    keyPoints: [
      'Link/NavLink for navigation - plain <a> causes full reloads.',
      'useParams reads :id segments; useNavigate moves in code.',
      'path="*" is your 404 catch-all.'
    ],
    commonMistakes: [
      'Using <a href="/about"> inside the app - it reloads everything.',
      'Forgetting to wrap the app in BrowserRouter.'
    ],
    proTips: [
      'Nested routes + <Outlet/> share navbars across pages cleanly.',
      'Route-level code splitting (React.lazy) keeps bundles small as pages grow.'
    ]
  },

  // ==================== ADVANCED LEVEL ====================
  data_fetching: {
    definition: 'Loading data from an API inside a component: trigger a request in useEffect, then render three states - loading, error, and success.',
    whyUse: 'Almost every real screen shows server data: dashboards, feeds, search results. Handling loading and error states properly is what makes an app feel professional - and beginners who skip them ship spinners that never stop and silent failures. This skill appears in every frontend take-home test.',
    whereUse: null,
    syntax: null,
    explanation: 'Pattern: state for data/loading/error; useEffect with fetch on mount (or param change); always cleanup with AbortController; render each state explicitly. Treat res.ok - fetch only rejects on network failure, not on 404/500. POST/PUT: JSON.stringify body + headers. Combine with React Query/SWR later to get caching for free.',
    examples: [
      {
        title: 'Full GET Pattern with All Three States',
        code: `import { useEffect, useState } from "react";

function Students() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const ctrl = new AbortController();
    fetch("/api/students", { signal: ctrl.signal })
      .then(r => { if (!r.ok) throw new Error("HTTP " + r.status); return r.json(); })
      .then(setData)
      .catch(e => e.name !== "AbortError" && setError(e.message))
      .finally(() => setLoading(false));
    return () => ctrl.abort();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="error">Error: {error}</p>;
  if (!data?.length) return <p>No students yet</p>;

  return <ul>{data.map(s => <li key={s.id}>{s.name} - {s.marks}</li>)}</ul>;
}
export default Students;`,
        output: 'Loading -> list, or friendly error, or empty-state message'
      },
      {
        title: 'Dependent Fetch (Search as You Type)',
        code: `import { useEffect, useState } from "react";

function useSearch(q) {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (q.length < 2) { setResults([]); return; }
    setLoading(true);
    const ctrl = new AbortController();
    fetch("/api/search?q=" + encodeURIComponent(q), { signal: ctrl.signal })
      .then(r => r.json())
      .then(setResults)
      .catch(() => {})
      .finally(() => setLoading(false));
    return () => ctrl.abort();     // cancels stale requests
  }, [q]);

  return { results, loading };
}`,
        output: 'Old requests abort as the user keeps typing - no wrong-order results'
      },
      {
        title: 'POST with JSON Body',
        code: `async function createStudent(payload) {
  const res = await fetch("/api/students", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  if (!res.ok) throw new Error("Create failed: " + res.status);
  return res.json();
}

// In the submit handler:
// setSaving(true);
// try { const s = await createStudent(form); setSaved(s); }
// catch (e) { setSaveError(e.message); }
// finally { setSaving(false); }

console.log("Always give feedback: saving -> saved/failed");`,
        output: 'Always give feedback: saving -> saved/failed'
      }
    ],
    keyPoints: [
      'Three states every time: loading, error, success (+ empty).',
      'AbortController cleanup prevents setState-after-unmount and stale responses.',
      'Check res.ok - HTTP 404/500 do not throw by themselves.'
    ],
    commonMistakes: [
      'Missing loading/error UI - blank screens confuse users.',
      'No cleanup: race conditions return older data after newer data.'
    ],
    proTips: [
      'Extract the whole pattern into a useFetch custom hook.',
      'For production apps, React Query / SWR add caching, retries, and refetching.'
    ]
  },

  performance: {
    definition: 'React performance means preventing wasted renders and keeping the UI responsive: measure first, then fix the hot paths.',
    whyUse: 'Users abandon apps that stutter - and React\'s default behavior (re-render the tree on any state change) can get slow in big apps. Knowing how to measure with the Profiler and knowing the five or six real fixes is a senior-level skill that shows up in code reviews and interviews.',
    whereUse: null,
    syntax: null,
    explanation: 'Common causes of slowness: unnecessary re-renders (fix: memo, proper keys, colocated state), expensive calculations in render (fix: useMemo), new function/object props defeating memo (fix: useCallback, extraction), huge lists (fix: windowing with react-window), and state placed too high (fix: lift DOWN - colocate). Always confirm with React DevTools Profiler before optimizing.',
    examples: [
      {
        title: 'Find the Problem: Profiler',
        code: `// 1. Install React DevTools browser extension
// 2. Open the "Profiler" tab -> Record -> interact -> Stop
// 3. Look for bars that take long or components that
//    re-render with no visual change
//
// Flamegraph colors: yellow/red = slow renders
// "Why did this render?" - DevTools flags each render's cause
//
// Optimize ONLY components the profiler flags.`,
        output: 'Profiler reveals the actual bottleneck instead of guessing'
      },
      {
        title: 'Colocate State (The Underrated Fix)',
        code: `import { useState } from "react";

// WORSE: search box state lives in App
// -> every keystroke re-renders the ENTIRE app
//
// BETTER: state lives in the search component itself
function SearchBox() {
  const [q, setQ] = useState("");
  return <input value={q} onChange={e => setQ(e.target.value)} />;
}

// Only lift state when a sibling actually needs it.
console.log("The fastest render is the one you never trigger");`,
        output: 'The fastest render is the one you never trigger'
      },
      {
        title: 'Window Long Lists',
        code: `// Rendering 10,000 rows at once = janky scrolling.
// Solution: render only what is visible.

// import { FixedSizeList } from "react-window";
//
// <FixedSizeList height={400} itemCount={10000} itemSize={36}>
//   {({ index, style }) => (
//     <div style={style}>Row {index + 1}</div>
//   )}
// </FixedSizeList>

// 10,000 items in the data, ~12 rows in the DOM.`,
        output: '10,000 items in the data, ~12 rows in the DOM - smooth scrolling'
      }
    ],
    keyPoints: [
      'Measure with React DevTools Profiler - never optimize blindly.',
      'Top fixes: colocate state, memoize heavy children, fix unstable props.',
      'Big lists -> react-window/react-virtuoso (windowing).'
    ],
    commonMistakes: [
      'Sprinkling useMemo everywhere "just in case" - it adds its own overhead.',
      'Optimizing tiny components while the actual bottleneck is an uncached API.'
    ],
    proTips: [
      'Development has StrictMode double-render - judge performance in production builds.',
      'render_count in the Profiler is the single fastest health check.'
    ]
  },

  state_libraries: {
    definition: 'When Context is not enough, dedicated state libraries (Redux Toolkit, Zustand, Jotai) hold global state with fine-grained subscriptions.',
    whyUse: 'Large apps have complex shared state: cart, notifications, filters, auth. Context re-renders every consumer on any change; stores let each component subscribe only to the slice it reads. Redux Toolkit is the industry standard (most job postings), while Zustand is the modern lightweight favorite.',
    whereUse: null,
    syntax: null,
    explanation: 'Redux Toolkit: createSlice defines state + reducers; components use useSelector to read and useDispatch to act; configureStore wires it. Zustand: create((set) => ({...})) and components call useStore(selector) - no providers needed. Choose Context for 1-2 slow values, Zustand for medium apps, Redux Toolkit when a team needs strict patterns and DevTools.',
    examples: [
      {
        title: 'Redux Toolkit Slice',
        code: `import { createSlice, configureStore } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [] },
  reducers: {
    add(state, action) { state.items.push(action.payload); },  // Immer allows "mutation"
    remove(state, action) { state.items = state.items.filter(i => i.id !== action.payload); }
  }
});

export const { add, remove } = cartSlice.actions;
export const store = configureStore({ reducer: { cart: cartSlice.reducer } });

// Component: const items = useSelector(s => s.cart.items)
//            dispatch(add({ id: 1, name: "Course" }))`,
        output: 'Cart state managed by a typed, DevTools-tracked store'
      },
      {
        title: 'Zustand (Minimal Store)',
        code: `import { create } from "zustand";

const useCart = create(set => ({
  items: [],
  add: item => set(s => ({ items: [...s.items, item] })),
  clear: () => set({ items: [] })
}));

// Any component, no Provider needed:
// const items = useCart(s => s.items);
// const add = useCart(s => s.add);
//
// Only components whose selected slice changes re-render.`,
        output: 'One-line store, subscriptions handled by selector'
      },
      {
        title: 'Choosing the Right Tool',
        code: `const choice = [
  "1-2 shared values, rarely change  -> Context",
  "Medium app, want minimal code     -> Zustand",
  "Large team, strict patterns,      -> Redux Toolkit",
  "DevTools, time-travel",
  "Server data (cache/refetch)       -> React Query / SWR"
].join("\\n");

console.log(choice);
console.log("Do NOT build a store on day one for a 3-page site.");`,
        output: 'Match the tool to the app size; avoid over-engineering'
      }
    ],
    keyPoints: [
      'Context = broad re-renders; stores = slice-level subscriptions.',
      'Redux Toolkit: slice + configureStore + useSelector/useDispatch.',
      'Zustand: smallest API, no provider boilerplate.'
    ],
    commonMistakes: [
      'Putting server cache (fetched lists) into Redux when React Query fits better.',
      'Starting a hello-world app with Redux - massive overkill.'
    ],
    proTips: [
      'Redux Toolkit remove the boilerplate classic Redux was famous for.',
      'Learn selectors early: const total = useCart(s => s.total) keeps renders minimal.'
    ]
  },

  error_boundaries: {
    definition: 'Error boundaries are React components that catch render-time crashes in their subtree and show a friendly fallback instead of a blank white screen.',
    whyUse: 'One broken component (bad API data, null field) can otherwise unmount the entire app - users see a white screen with no clue. Error boundaries keep the damage local: the rest of the page keeps working. Production apps without them turn small bugs into total outages.',
    whereUse: null,
    syntax: null,
    explanation: 'React catches errors only during rendering and lifecycle methods - errors in event handlers do not crash the tree. Class components implement static getDerivedStateFromError (show fallback) and componentDidCatch (log to error tracker). Place boundaries around risky sections: one per route or per widget. Async errors and event handlers need try/catch separately.',
    examples: [
      {
        title: 'A Reusable Error Boundary',
        code: `import { Component } from "react";

export default class ErrorBoundary extends Component {
  state = { error: null };

  static getDerivedStateFromError(error) {
    return { error };                    // render fallback next
  }

  componentDidCatch(error, info) {
    console.error("UI crashed:", error, info.componentStack);
  }

  render() {
    if (this.state.error) {
      return (
        <div className="fallback">
          <h3>Something went wrong</h3>
          <button onClick={() => this.setState({ error: null })}>
            Try again
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}`,
        output: 'Crash caught -> fallback UI with a retry button'
      },
      {
        title: 'Wrap Risky Sections',
        code: `import ErrorBoundary from "./ErrorBoundary";
import Chart from "./Chart";

function Dashboard() {
  return (
    <div>
      <Header />
      <ErrorBoundary fallback={<p>Chart unavailable</p>}>
        <Chart />          {/* crash here does NOT kill the page */}
      </ErrorBoundary>
      <Footer />
    </div>
  );
}
// Header and Footer keep working even if Chart explodes.`,
        output: 'One widget fails, the page survives'
      },
      {
        title: 'What Error Boundaries Do NOT Catch',
        code: `// CAUGHT by error boundaries:
// - errors during render (bad JSX data, null.map)
// - errors in lifecycle methods

// NOT caught (use try/catch yourself):
// - onClick handlers:  onClick={() => JSON.parse(bad)}
// - async code:        await fetch(...) failures
// - timers:            setTimeout(() => ..., 0)
// - event listeners
//
// Pattern: try/catch inside handlers, boundary around render.`,
        output: 'try/catch inside handlers, boundary around render'
      }
    ],
    keyPoints: [
      'Error boundaries are always class components (getDerivedStateFromError).',
      'Place them around routes/widgets, not one giant wrapper only.',
      'Handlers and async code still need their own try/catch.'
    ],
    commonMistakes: [
      'Expecting one top-level boundary to be enough - the whole app vanishes.',
      'Forgetting that boundaries do not catch event-handler errors.'
    ],
    proTips: [
      'Log boundary errors to Sentry/LogRocket to see real crashes in production.',
      'Always give the fallback a "Try again" button that resets the error state.'
    ]
  },

  testing: {
    definition: 'React testing checks that components render correctly and behave right when users interact - using Vitest/Jest with React Testing Library.',
    whyUse: 'Refactors without tests are gambling. Testing Library\'s philosophy - test what the user sees, not component internals - produces tests that survive redesigns. Frontend teams run tests on every commit; knowing this stack makes you effective from day one at a new job.',
    whereUse: null,
    syntax: null,
    explanation: 'Install: npm install -D vitest @testing-library/react @testing-library/jest-dom. Render the component, find elements the way a user would: getByRole (preferred), getByText, getByLabelText. Interact with fireEvent/userEvent, then assert what the user would see. Never test state or props directly - test visible behavior.',
    examples: [
      {
        title: 'First Component Test',
        code: `import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Counter from "./Counter";

describe("Counter", () => {
  it("starts at zero", () => {
    render(<Counter />);
    expect(screen.getByText("You clicked 0 times")).toBeInTheDocument();
  });
});
// Test file: Counter.test.jsx  |  Run: npm test`,
        output: 'PASS Counter > starts at zero'
      },
      {
        title: 'Test User Interaction',
        code: `import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";

it("increments when the button is clicked", async () => {
  render(<Counter />);
  await userEvent.click(screen.getByRole("button", { name: /add/i }));
  expect(screen.getByText("You clicked 1 times")).toBeInTheDocument();
});

it("resets to zero", async () => {
  render(<Counter />);
  await userEvent.click(screen.getByRole("button", { name: /add/i }));
  await userEvent.click(screen.getByRole("button", { name: /reset/i }));
  expect(screen.getByText("You clicked 0 times")).toBeInTheDocument();
});`,
        output: 'PASS increments when the button is clicked\nPASS resets to zero'
      },
      {
        title: 'Find Elements Like a User',
        code: `// PREFERRED queries, in order:
// screen.getByRole("button", { name: "Save" })  - accessibility first
// screen.getByLabelText("Email")                - form fields
// screen.getByText("Welcome back")              - visible text
// screen.getByPlaceholderText("Search")         - last resort

// AVOID:
// container.querySelector(".btn")               - tests implementation
// rerender with internal state                  - tests internals

// Users do not know your class names - test what they see.`,
        output: 'Role-based queries stay valid through CSS redesigns'
      }
    ],
    keyPoints: [
      'Test visible behavior (text, roles), never state or props.',
      'getByRole is the best query - it also checks accessibility.',
      'userEvent mirrors real typing/clicking better than fireEvent.'
    ],
    commonMistakes: [
      'Querying by class name - breaks on every style change.',
      'Forgetting async: interactions update the UI after await.'
    ],
    proTips: [
      'Write tests for bug fixes first - the bug never comes back.',
      'Focus on critical flows (checkout, login) before chasing coverage numbers.'
    ]
  },

  deploy: {
    definition: 'Building and deploying a React app: vite build creates optimized static files, and a host like Vercel serves them worldwide.',
    whyUse: 'A project nobody can open is invisible. Deployment gives you a shareable live URL for your resume, portfolio, and interviews - and it is nearly free. The build/deploy pipeline you set up here is the same one professional teams run on every merge.',
    whereUse: null,
    syntax: null,
    explanation: 'npm run build outputs a dist/ folder of optimized HTML/CSS/JS. Vercel/Netlify/GitHub Pages host static SPAs - but React Router needs a rewrite rule (send all 404s to index.html) so deep links like /courses/42 work. Environment variables for React must be prefixed with VITE_ and are inlined at build time. CI: install, test, build, deploy on push.',
    examples: [
      {
        title: 'Build for Production',
        code: `# Terminal:
npm run build        # creates dist/
npm run preview      # test the production build locally

# dist/ contains:
# index.html
# assets/index-abc123.js   (minified bundle)
# assets/index-def456.css

# Upload dist/ to any static host - or connect git to Vercel.`,
        output: 'dist/ ready - typically 100-300 KB gzipped'
      },
      {
        title: 'Deploy to Vercel (2 Minutes)',
        code: `# 1. Push to GitHub
git push

# 2. vercel.com -> Add New Project -> import your repo
#    Framework: Vite   Build: npm run build   Output: dist

# 3. Every push to main -> automatic deploy

# SPA rewrite for client routing (vercel.json):
# { "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }`,
        output: 'Live URL: https://your-app.vercel.app'
      },
      {
        title: 'Environment Variables Safely',
        code: `// .env (never commit - add to .gitignore)
// VITE_API_URL=https://api.arinfotek.co.in

// Usage in code - only VITE_ prefixed vars are exposed:
// const api = import.meta.env.VITE_API_URL;

// Set production values in the Vercel dashboard:
// Settings -> Environment Variables -> Production

console.log("Secrets without VITE_ never reach the browser bundle");`,
        output: 'Secrets without VITE_ never reach the browser bundle'
      }
    ],
    keyPoints: [
      'npm run build -> dist/ -> any static host.',
      'Client-side routing needs an SPA rewrite to index.html.',
      'Only VITE_-prefixed env vars reach the browser.'
    ],
    commonMistakes: [
      'Deploying but forgetting the SPA rewrite - /about gives 404 on refresh.',
      'Putting API secrets in VITE_ vars - anything with VITE_ is public!'
    ],
    proTips: [
      'Vercel previews every pull request with its own URL - great for review.',
      'Run npm run preview locally before deploying to catch build-only bugs.'
    ]
  },

  project: {
    definition: 'The final project: a complete React app - component structure, routing, API data, forms, tests, and a live deployment.',
    whyUse: 'This is your portfolio centerpiece: a real app you planned, built, and shipped. It proves the whole course end-to-end and gives you concrete stories for interviews ("I built X, handled Y loading states, tested Z"). Deploying it turns a local folder into a URL anyone can open.',
    whereUse: null,
    syntax: null,
    explanation: 'Choose a project: (A) Course Dashboard - list from API, detail pages, filter, dark mode; (B) Expense Tracker - forms, charts, localStorage; (C) Job Board - search, auth, protected routes. Structure: src/components (UI), src/pages (routes), src/hooks (custom hooks), src/context (theme/auth), src/api (fetch functions). Build order: static layout -> components -> state -> routing -> API -> tests -> deploy.',
    examples: [
      {
        title: 'Step 1: App Skeleton with Routes',
        code: `import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/courses">Courses</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  );
}`,
        output: 'Navigable app skeleton with dynamic detail routes'
      },
      {
        title: 'Step 2: Data + Loading/Error States',
        code: `import useFetch from "../hooks/useFetch";
import CourseCard from "../components/CourseCard";

export default function Courses() {
  const { data, loading, error } = useFetch("/api/courses");

  if (loading) return <p>Loading courses...</p>;
  if (error) return <p className="error">Could not load: {error}</p>;
  if (!data?.length) return <p>No courses yet - check back soon!</p>;

  return (
    <section className="grid">
      {data.map(c => <CourseCard key={c.id} {...c} />)}
    </section>
  );
}`,
        output: 'Every async state has a screen - no blank pages'
      },
      {
        title: 'Step 3: Ship-It Checklist',
        code: `// Your completion checklist:
// [ ] Layout: navbar + footer shared via components
// [ ] 3+ pages with working routing and a 404
// [ ] API data with loading AND error states
// [ ] A controlled form that validates before submit
// [ ] Custom hook extracted (useFetch or similar)
// [ ] Theme or auth via context
// [ ] 3+ tests (render + interaction) passing
// [ ] npm run build passes with no warnings
// [ ] Deployed to Vercel with SPA rewrite
// [ ] README: screenshots, live link, how to run

console.log("Tick every box -> then rebuild similar app on your own");`,
        output: 'Tick every box -> then rebuild similar app on your own'
      }
    ],
    keyPoints: [
      'Structure first: components / pages / hooks / api folders.',
      'Loading, error, and empty states on every data screen.',
      'Finish with tests + build + a live URL.'
    ],
    commonMistakes: [
      'Styling before structure - wire routing and data first.',
      'Leaving the app undeployed - the last 10% is what people actually see.'
    ],
    proTips: [
      'Portfolio tip: record a 60-second screen demo of the app in action.',
      'Then rebuild a similar app (different domain) without this guide - that is real mastery.'
    ]
  }
}

export default react
