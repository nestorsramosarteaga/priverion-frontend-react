import React from 'react'
import ReactDOM from 'react-dom/client'

import {FrontendApp} from './FrontendApp'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FrontendApp />
  </React.StrictMode>,
)
