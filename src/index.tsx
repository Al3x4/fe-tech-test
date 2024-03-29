import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom'
import { Skeleton } from 'components'
import './index.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

import reportWebVitals from './reportWebVitals'

const App = lazy(() => import('./App'))

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={Skeleton}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
