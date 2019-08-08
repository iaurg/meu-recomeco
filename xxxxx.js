import React from 'react'
import { createMemoryHistory } from 'history'
import { Route, Router, Switch } from 'react-router-dom'

import '../assets/css/global.css'
import Tatuadores from './tatuadores'
import Inicio from './inicio'

const hist = createMemoryHistory()

export default () => (
  <Router history={hist}>
    <Switch>
      <Route path="/" exact component={Inicio} />
      <Route path="/tatuadores" component={Tatuadores} />
    </Switch>
  </Router>
)
