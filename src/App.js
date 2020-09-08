import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Slider from "./slider/Slider";
import  Navbar from "./navbar/Navbar";
import Dispatcher from "./pages/dispatcher/Dispatcher";



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
