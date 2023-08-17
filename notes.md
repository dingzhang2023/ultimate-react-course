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
