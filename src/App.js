import React from "react";

import "bootstrap/dist/css/bootstrap.min.css/";
import "./App.css";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import ClientProfile from "./Pages/client/ClientProfile"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Client-Dashboard" component= {ClientProfile}/>
      </Switch>
    </Router>
     );
}

export default App;
