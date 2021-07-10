# important resources I used:

- [React Boostrap Doc](https://react-bootstrap.github.io/getting-started/introduction/)

- [sticky footer react Bootstrap](https://github.com/jmlivingston/react-bootstrap-sticky-footer/blob/master/src/App.js)

```js
import React from 'react'
import './App.css'

const App = () => {
  return (
    <>
      <header>
        {/* Fixed navbar */}
        <nav className='navbar navbar-expand-md navbar-dark fixed-top bg-dark'>
          <a className='navbar-brand' href='/'>
            Fixed navbar
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarCollapse'
            aria-controls='navbarCollapse'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse' id='navbarCollapse'>
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item active'>
                <a className='nav-link' href='/'>
                  Home <span className='sr-only'>(current)</span>
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/'>
                  Link
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link disabled' href='/' tabIndex={-1} aria-disabled='true'>
                  Disabled
                </a>
              </li>
            </ul>
            <form className='form-inline mt-2 mt-md-0'>
              <input className='form-control mr-sm-2' type='text' placeholder='Search' aria-label='Search' />
              <button className='btn btn-outline-success my-2 my-sm-0' type='submit'>
                Search
              </button>
            </form>
          </div>
        </nav>
      </header>
      {/* Begin page content */}
      <main role='main' className='flex-shrink-0'>
        <div className='container'>
          <h1 className='mt-5'>Sticky footer with fixed navbar</h1>
          <p className='lead'>
            Pin a footer to the bottom of the viewport in desktop browsers with this custom HTML and CSS. A fixed navbar
            has been added with <code>padding-top: 60px;</code> on the <code>main &gt; .container</code>.
          </p>
          <p>
            Back to <a href='/docs/4.3/examples/sticky-footer/'>the default sticky footer</a> minus the navbar.
          </p>
        </div>
      </main>
      <footer className='footer mt-auto py-3 bg-dark text-white'>
        <div className='container'>Place sticky footer content here.</div>
      </footer>
    </>
  )
}

export default App
```

<hr/>

- [React Bootstrap Tutorial](https://www.youtube.com/watch?v=8pKjULHzs0s)

- [responsive footer design](https://codepen.io/heggy231/pen/JjNRbXo)

- [ex show toast bootstrap](https://codesandbox.io/s/youthful-wiles-ksyv4?file=/src/App.js:366-435)

- [font awesome react](https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react)

- [React Beautiful dnd](https://github.com/atlassian/react-beautiful-dnd)

![drag and drop demo](https://user-images.githubusercontent.com/2182637/53614150-efbed780-3c2c-11e9-9204-a5d2e746faca.gif)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
