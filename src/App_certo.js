import React from "react"
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from "./components/Navbar";
import SkillsList from "./components/SkillsList";

import Home from "./components/Home";
import NewUser from "./components/NewUser"
import LogIn from "./components/LogIn";
import AppLogedIn from "./components/AppLoggedIn";
import EditSkills from "./components/EditSkills";

function App() {
  return (<div className="App">
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col col-md-auto">
          <BrowserRouter>
            <Navbar />
            <Route exact path="/" component={SkillsList} />
            <Route path="/h" component={Home}/>
            <Route  path="/login" component={LogIn}/>
            <Route path="/newdummy" component={NewUser}/>
            {/* :id => _id */}
            <Route exact path="/home/:id" component={AppLogedIn}/>
            <Route path="/updateskills/:id" component={EditSkills}/>
          </BrowserRouter>
        </div>
      </div>
    </div>
    
  </div>
  );
}

export default App;
