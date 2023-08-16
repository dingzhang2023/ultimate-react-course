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

```

```
