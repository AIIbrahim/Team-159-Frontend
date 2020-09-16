import React from "react";

import "bootstrap/dist/css/bootstrap.min.css/";
import "./App.css";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import ClientProfile from "./Pages/client/ClientProfile";
import ClientPackages from "./Pages/client/ClientPackages/ClientPackages";
import ClientDashboard from "./pages/client/ClientDashboard/ClientDashboard"

import Navbar from "./Components/navbar/Navbar";
import Slider from "./Components/slider/Slider";
import Dispatcher from "./Pages/dispatcher/Dispatcher";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component= {ClientDashboard}/>
        <Route path="/packages" component= {ClientPackages}/>
        <Route path="/profile" component= {ClientProfile}/>
         <Route path="/dispatcher" component={Dispatcher} />
      </Switch>
    </Router>
     );
}

export default App;
