import React from 'react'
import WeatherApp from './component/WeatherApp'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={WeatherApp} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  )
}

export default App