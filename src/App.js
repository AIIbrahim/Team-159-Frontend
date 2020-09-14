import React from "react";

import "bootstrap/dist/css/bootstrap.min.css/";
import "./App.css";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import ClientProfile from "./Pages/client/ClientProfile";
import ClientPackages from "./Pages/client/ClientPackages/ClientPackages";
import ClientDashboard from "./Pages/client/ClientDashboard/ClientDashboard"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Client-Profile" component= {ClientProfile}/>
        <Route path="/Client-Dashboard" component= {ClientDashboard}/>
        <Route exact path="/" component= {ClientPackages}/>
      </Switch>
    </Router>
     );
}

export default App;
