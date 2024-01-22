import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function myApp() {
  return (
    <div>
      <h1>Hello World</h1>
      <p>This is my first React component!</p>
    </div>
  )
}

// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https://www.google.com',
//       target: '_blank',
//   },
//   children: 'Click me to visit Google',
// }

const createElement = (
  <a href="https://google.com">visit google</a>
)

const reactElement = React.createElement(
  'a',
  {
    href: 'https://google.com',
    target: '_blank',
  },
  'visit google',
)

ReactDOM.createRoot(document.getElementById('root')).render(

  // reactElement,
  <App />,
)
