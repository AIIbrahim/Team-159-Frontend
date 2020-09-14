import React from "react";

import "./App.css";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import ClientProfile from "./Pages/client/ClientProfile";
import ClientPackages from "./Pages/client/ClientPackages/ClientPackages"

import Navbar from "./Components/navbar/Navbar";
import Slider from "./Components/slider/Slider";
import Dispatcher from "./Pages/dispatcher/Dispatcher";

function App() {
  return (
   <Router>
      <div className="App">    
        <Navbar />
        <Switch>
          <Route exact path="/" render={props => (
        <Slider />
        )} />
        
        <Route path="/dispatcher" component={Dispatcher} />
        </Switch>
      </div>
    </Router> 
  );
}

export default App;
