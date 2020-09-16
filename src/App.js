import React from "react";

import "./App.css";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import ClientProfile from "./Pages/client/ClientProfile";
import ClientPackages from "./Pages/client/ClientPackages/ClientPackages";
import ClientDashboard from "./Pages/client/ClientDashboard/ClientDashboard"

import Navbar from "./Components/navbar/Navbar";
import Slider from "./Components/slider/Slider";
import Dispatcher from "./pages/dispatcher/Dispatcher";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component= {ClientPackages}/>
        <Route path="/Client-Profile" component= {ClientProfile}/>
        <Route path="/Client-Dashboard" component= {ClientDashboard}/>
         <Route path="/dispatcher" component={Dispatcher} />
      </Switch>
    </Router>
     );
}

export default App;
