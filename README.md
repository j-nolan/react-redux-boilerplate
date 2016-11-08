# React-Redux Boilerplate
This repository contains a boilerplate for developping web applications using React and Redux. Is uses ES2015 JavaScript thanks to Babel.

It contains a very basic application that counts clicks.

# Usage

1. Clone or [download](https://github.com/j-nolan/react-redux-boilerplate/archive/master.zip) this repository
2. install dependencies: `npm install`
3. run dev server: `npm start`
4. open [http://localhost:8080](localhost:8080) in your browser

# Structure
The structure of the project is inspired by [Dan Abramov](https://github.com/gaearon)'s [Building React Applications with Idiomatic Redux](https://egghead.io/courses/building-react-applications-with-idiomatic-redux) video series.

The project has the following structure:

```
├── actions
│   └── index.js
├── components
│   ├── App.js
│   ├── ClickCountContainer.js
│   ├── ClickCount.js
│   ├── ClickFormContainer.js
│   ├── ClickForm.js
│   └── Root.js
├── reducers
│   ├── app.js
│   └── clicks.js
├── index.js
├── configureStore.js
├── localStorage.js
```

## Description
- The `actions` directory should contain all the action generators
- The `components` directory should contain all the components ([presentational and container](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.6d29s6ohn))
- The `reducers` directory should contain all the reducers. All new reducers should be combined in `app.js`

## LocalStorage
The application uses the browser's LocalStorage to store it's state when the page is refreshed. The state is stored every time the state tree is updated, but is throttled to one storage per second using [Lodash's throttle](https://www.npmjs.com/package/lodash.throttle). This behaviour can be changed in `src/configureStore.js`.
