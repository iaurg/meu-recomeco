import React from "react";
import {createMemoryHistory} from "history";
import {Route, Router, Switch} from "react-router-dom";

import "../assets/css/global.css";
import Tatuadores from "./tatuadores";
import Inicio from "./inicio";


let hist = createMemoryHistory();

export default () => (
  <Router history={hist}>
    <Switch>
      <Route path="/tatuadores" component={Tatuadores} />
      <Route path="/" component={Inicio}/>
    </Switch>
  </Router>
);
