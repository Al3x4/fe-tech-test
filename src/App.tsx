import React, { FC } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { Content, Event, Overview } from 'pages'

import { RouteI } from 'models/types'

const routes: Array<RouteI> = [
  {
    path: '/content',
    component: Content,
    exact: true,
  },
  {
    path: '/content/:event',
    component: Event,
  },
  {
    path: '/',
    component: Overview,
    exact: true,
  },
]

// Pass routes through context
const App: FC = () => {
  return (
    <Router>
      <Switch>
        {routes.map((route) => (
          <Route
            path={route.path}
            render={(props) => <route.component {...props} />}
            exact={route.exact}
          ></Route>
        ))}
        <Route render={() => <Redirect to='/' />}></Route>
      </Switch>
    </Router>
  )
}

export default App
