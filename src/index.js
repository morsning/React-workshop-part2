import React from 'react'
import ReactDOM from 'react-dom'
import App from './Components/App'
import { DemoProvider } from './Contexts/DemoContext'

ReactDOM.render(<DemoProvider><App /></DemoProvider>, document.getElementById('root'))