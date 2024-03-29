import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './components/App'
import * as serviceWorker from './serviceWorker'

const element = document.getElementById('root') as HTMLElement
const root = ReactDOM.createRoot(element)

root.render(<App />)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
