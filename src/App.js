import React from "react";
<<<<<<< HEAD
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Slider from "./slider/Slider";
import  Navbar from "./navbar/Navbar";
import Dispatcher from "./pages/dispatcher/Dispatcher";

=======
>>>>>>> 57feeb95792401e2e5d11824472af988d996a16b

import "bootstrap/dist/css/bootstrap.min.css/";
import "./App.css";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import ClientProfile from "./Pages/client/ClientProfile";
import ClientPackages from "./Pages/client/ClientPackages/ClientPackages"

function App() {
  return (
<<<<<<< HEAD
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
=======
    <Router>
      <Switch>
        <Route path="/Client-Profile" component= {ClientProfile}/>
        <Route exact path="/" component= {ClientPackages}/>
      </Switch>
    </Router>
     );
>>>>>>> 57feeb95792401e2e5d11824472af988d996a16b
}

export default App;
