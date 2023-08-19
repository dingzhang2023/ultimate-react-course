### React Fundamentals

**08/16/2023**

#### Modern Frontend

-   Data driven UI - stay in sync with data is hard

    > problems with js + jQuery
    >
    > -   DOM manipulation and traversing
    > -   Data(state) is usually stored in DOM, shared across App is hard and bug-prone

-   React and Vue frontend frameworks

    > Solve the problem of keeping UI in sync with data and state management, taking away hard work from developers.

-   Decouple React
    > Based on components
    > Declarative - JSX based on current data/state
    > State-driven - data driven, re-render the UI when data changes
    > JS libray - view layer only, not a full framework, next.js or Remix is a full framework
    > Extremely popular - rank 1 in 2023 in North America
    > Crtead by Facebook - Jordan Walke in 2011, open-source in 2013

#### Setup

-   plugins for VSCode
    > eslint, monokai one theme, material icon theme, eslint prettier
    > settings
    >
    > -   auto save => onFocusChange
    > -   default formatter => Code Prettier
    > -   eslint run => onSave
    > -   format on save
-   snippets.json for VSCode

#### Pure React

-   Use script tag to include react and react-dom

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Hello React!</title>
	</head>
	<body>
		<div id="root"></div>

		<script
			src="https://unpkg.com/react@18/umd/react.development.js"
			crossorigin
		></script>
		<script
			src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
			crossorigin
		></script>

		<script>
			function App() {
				// const time = new Date().toLocaleTimeString();
				const [time, setTime] = React.useState(
					new Date().toLocaleTimeString()
				);

				React.useEffect(function () {
					setInterval(function () {
						setTime(new Date().toLocaleTimeString());
					}, 1000);
				}, []);

				return React.createElement(
					'header',
					null,
					`Hello React! It's ${time}`
				);
			}

			const root = ReactDOM.createRoot(document.getElementById('root'));
			root.render(React.createElement(App));
		</script>
	</body>
</html>
```

-   Use Vite to create a React project

```bash
npm init vite@latest
```

```bash
npx create-vite-app@5 my-app --template react
```

-   Install Quokka.js extension for VSCode runtime evaluation

-   Async

```js
// https://jsonplaceholder.typicode.com/todos/1
```

-   Props

    > Enable pass params to a component to control its appearance and behavior, like function arguments.
    > default type is string, can be any type. e.g. {10} as number, {true} as boolean, {[]} as array, {{}} as object
    > one way data flow, **parent -> children**

-   JSX
    {}表示是 JS 的地盘，需要解析

-   List rendering
    map() function, key prop, 都是传整个对象

-   Conditional rendering
    **&&, ? :**

    ```jsx
    {
    	isCompleted && <span>Completed</span>;
    }
    {
    	isCompleted ? <span>Completed</span> : null;
    }
    ```

-   State and event
    > install Color Highlight extension for VSCode
    > **State** is the most important concept in React and involves the component's life cycle.
    > **State** is data that changes over time, **component's memory**, component state.
    > Updating component state triggers React to re-render the component
        ```javascript
        const [state, setState] = useState() hook
        		<!-- 使用函数更新state，永远会更新 -->
        		<button className="close" onClick={() => setIsOpen((is) => !is)}>&times;</button>
        ```
-   More thoughts on state
    > one component, one state, components are indepenendently
    > UI as a function of state UI = f(state)
    > Declarative, view UI as a reflection of data changing over time, using state, event handlers, and JSX
-   Guidline for state

    > Use a variable for any data of which the component tracking.
    > Hook a state with a state variable.
    > Use event handler to update the state using call back function.

-   State vs Props

    > State is internal data, owned by component, Props is external data, passed to component and owned by parent component, similar to function arguments
    > State is componenty memory, Props is component's configuration, read only
    > State can be updated by the component itself, and updating state causes component to re-render. Props cannot be updated by the component itself, and recieving new props causes component to re-render. Usually when the parent's state has been updated.
    > Used to make components interactive, used to pass data to components

-   Thinking in React
    > 1. Break the UI into a components and establish the component tree
    > 2. Build a static version in React(without state)
    > 3. Think about state:
        - When to use state
        - Types of state: local vs. global (component and children vs redux)
        - Where to place each piece of state
        - When and where to populate state, always start with local state
-   **Props.children**

    > 1. props.children is a special prop that is passed to components automatically
    > 2. props.children is the content between the opening and closing tags of a component
    > 3. children prop allow us to pass JSX into an element besides regular props
    > 4. Essential tool to make reusable and configurable components(especially component content)
    > 5. Really useful for generic components that dont know their content before being used(modal)

-   How to Split a UI into Components

    > 1. logical seperation of content/layout
    > 2. reusability
    > 3. Single responsibility principle with low coupling and complexity
    > 4. Personal coding style
    > 5. **Don't overdo it** Start with a big component then split it into smaller components as it become necessary
    > 6. too many props too many pieces of state too many things together
    > 7. Name a component according to **what it does** or **what it displays**. Don't be afraid to using long component names
    > 8. Never declare a new component inside a component, always declare it outside and import it
    > 9. **Co-locate components inside the same file**. Dont sperate components into different files too early.

-   Props as an API

    > Props related to flexibility and reusability, need to find a balance between flexibility and complexity

-   Props validation

    > 1. PropTypes is a built-in library for validating props
    > 2. Typescript can get this job done, if you use it

-   Deep dive for React behind the scences

> In React,rendering is Not updating the DOM or displaying elements on the screen. Rendering is the process of generating a tree of React elements in memory. React then uses the tree and a diffing algorithm to determine how to update the DOM in the most efficient way. React is fast because it only updates the necessary parts of the DOM. 是一种差分的思想, **React DOM diffing algorithm**.
> Render is triggered => (Render phase => Commit phase) => Browser paints to the screen
> Render phase: React calls component functions and figures out how DOM should be updated
> Commit phase: React **actually writes to the DOM**,updating, inserting, and deleting elements
> **Only 2 situations renders are triggered**
>
> 1. Initial render of the application
> 2. State is updated in one or more component instances(re-render)
>    The render process is triggered for the entire application
>    In practice, it looks like React only re-renders the component where the state update happens, but that's not **how it works behind the scense**.
>    Renders are **not** triggered immediately, but **scheduled** for when the JS engine has some "free time". There is also batching of multiple setState calls in event handlers.

-   Virtual DOM - React Element Tree
    > intial render => virtual DOM => real DOM, virtual DOM: tree of all React elements created from all instances in the component tree.
    > Virtual DOM is cheap and fast, aka JS object in memory, not real DOM.
    > React generate fiber tree from virtual DOM, fiber tree is a tree of fiber nodes, each fiber node is a JS object that represents a DOM element. Then React uses the fiber tree and a diffing algorithm to determine how to update the DOM in the most efficient way.
    > Virtual DOM => Real DOM, generating Real DOM would be inefficient and wastful and (relatively) slow.
    > When state is updated, Virtual DOM is updated for the whole app, then only small part of the Real DOM is updated by using the Virtual DOM and diffing algorithm.
    > **Reconciliation**: Deciding which DOM elements actually need to be inserted, updated, or removed. Fiber tree is the reconciliation tree.
    > **Fiber**: A fiber is a JS object that contains information about a component, its input, and its output. Fiber is a unit of work that React can perform and reconcile. fiber tree is an internall tree that has `fiber` for each component instance and DOM element.
    > fibers are **not** re-created on every render, fiber is an `unit of work`, including current state, props, side effects, used hooks, and queue of work.
    > Work can be done asynchronously, which means redering process can be split into chunks, tasks can be prioritized, and work can be paused, reused, or thrown away. - Enable concurrent featuers such as Suspense and transitions. - Long renders wont block JS engine and make the app unresponsive.
-   Commit Phase - **ReactDOM** is in charge of the commit phase

    > React writes to the DOM in the commit phase, updating, inserting, and deleting elements.(list of DOM updates are "flushed" to the DOM)
    > Committing is synchronouse, DOM is updated in one go, it cant be interrupted. This is necessary so that the DOM never shows partial results, ensuring a consistent UI(in sync with state and all times).
    > After the commit phase, the workInProgres fiber tree becomes the current tree for the next render cycle.
    > React never touches the DOM. React **only renders**. It does not know where the render result will go, that's why React can be used on different platforms('hosts'). ReactDOM is the host for the web.
    > list of DOM updates -> Commiters(Web App, Mobile App, VR App, Video App,...)
    >
    > -   React render => ReactDOM(Brower)
    > -   React render => ReactNative(Mobile)
    > -   React render => React360(VR)
    > -   React render => Remotion(video)

-   Diffing

    > Two fundamental assumptions:
    >
    > -   Two elements of different types will produce different trees.
    > -   Elements with a stable key prop stay the same across renders.
    >     The two assumptions reduces the diffing alogritm from $O(n^3)$to$O(n)$ time, linear time.
    >     Diffing algorithm only works on the same level of the tree, it doesn't compare children of different nodes.

-   Render logic

    > Code that lives a the top level of the componenet function
    > Participants in describing how the component view looks like
    > state, return block

-   Event handler functions

    > Executed as a consequence of the event that the handler is listening for (change event in the example)
    > Code that actually does things: update state, perform http requests, etc.

-   Pure functions

    > Side effect: dependency on or modification of any data outside the function scope. "Interaction with the outside world". Examples: mutating external variables, HTTP requests, writing to DOM.
    > Pure function: no side effects, does not not change any variables outside its scope, always returns the same result for the same input.

-   Rules for render logic

    > Components must be pure when it comes to render logic: given the same props, a component must always render the same view.JSX
    > Rnder logic must produce no side effects:
    >
    > -   No HTTP requests
    > -   No DOM mutations
    > -   No state updates: could create an infinite loop
    > -   No subscriptions: could create memory leaks
    > -   No timers: could create memory leaks
    > -   No logging: could create memory leaks
    > -   No reading from or writing to external variables  
    >     However, Side effects are allowed(and encouraged) in event handlers functions! There is also a special hook to register side effects(useEffect).

-   State Update Batching

    ```javascript
    const reset = () => {
    	setAnswer('');
    	console.log(answer);
    	setBest(true);
    	setSolved(false);
    };
    ```

    > React batches state updates that happen in event handlers, so that the component is only re-rendered once. This is an optimization that React does for us. => render + commint, just one render and commit per event handler.
    > What's the value of answer? Since the updating state is async, re-render has not happend yet, answer state is a stale state. If we want to use the updated state, we need to use a **callback function to update state. setAnswer((answer) => '')**; => answer is the latest state.
    > We can opt out of automatic batching by using **ReactDOM.flushSync()**.(but you will never need this) React 18 batch everything.

-   How React handles events

    > React registers all event handlers on the root DOM container. This is where all events are handled.
    > Syntehtic event: React wraps the native event object with a synthetic event object. This is to make sure that the event object is consistent across browsers. **Most synthetic events bubble(including focus, blur, and change), except for scroll**
    > Default behavior cant be prevented in React, only by using preventDefault()
    > Attach "Capture" if you need to handle during **capture phase(e.g. onClickCapture)**

-   Component Lifecycle

    > 1. Mount/Initial render: fresh state and props are **created**
    > 2. Re-render: **state, props, parent, context changes**
    > 3. Unmount: component is **removed** from the DOM, State and Props are **destroyed**

-   useEffect Hook

    > 1. useEffect is a hook that allows us to perform side effects in function components, interacting with the outside world. example: fetching data, updating the DOM, logging, setting up timers, setting up subscriptions, etc.
    > 2. side effects are **not allowed** in render logic, but they are allowed in useEffect hook.
    > 3. Executed after the component mounts(initial render) and after subsequent re-renders(according to dependency array).
    > 4. useEffect is executed after the commit phase, so it's safe to perform DOM mutations in useEffect.
    > 5. useEffect only take sync functions, but we can use a wrapper to wrap async functions inside useEffect.

    ```javascript
    useEffect(() => {
    	// sync function wrapper
    	const fetchMovies = async () => {
    		const res = await fetch(
    			`http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
    		);
    		const data = await res.json();
    		setMovies(data.Search);
    	};
    	fetchMovies();
    }, []);
    ```

-   useEffect **Dependency Array**
    > -   By default, effects run after every render. We can prevent that by passing a dependency array.
    > -   Without the dependency array, React doesn't know when to run the effect.
    > -   Each time one of the dependencies changes, the effect is re-run.
    > -   **Every state and prop used inside the effect MUST be included in the dependency array**
    > -   useEffect is like an **event listener** that is listening for one dependency to change. **Whenever a dependency changes, the effect is re-run.**
    > -   component state/props => useEffect(Synchronize process) => External system
    > -   useEffect(fn, [x, y, z]) => fn is executed when x, y, or z changes
    > -   useEffect(fn, []) => fn is executed only once, after the initial render(mount)
    > -   useEffect(fn) => fn is executed after every render > useEffect will be executed **after the commit phase**, so it's safe to perform DOM mutations in useEffect.
    > -   cleanup function, before useEffect is executed again, the cleanup function is executed first. After a component has unmounted. Necessary whenever the side effect keeps **happening after the component has been re-render or unmounted**. For example, timers, api subscriptions, and event listeners, http requests.
    > -   Each useEffect does **one thing**.
