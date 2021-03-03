import React, {useState} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { FormLogin } from './components/Login'
import { Logout } from './components/Logout'
import { PrivateRoute } from './components/PrivateRoute'

function App() {
  const[ isAuthenticated, setIsAuthenticated] = useState(false)

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <FormLogin setIsAuthenticated={setIsAuthenticated} />
        </Route>
        <PrivateRoute path="/Logout" component={Logout} auth={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
