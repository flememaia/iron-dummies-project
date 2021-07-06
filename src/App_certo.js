import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SkillsList from "./components/SkillsList";
import NewContribution from "./components/NewContribution";

import Home from "./components/Home";
import NewUser from "./components/NewUser";
import EditSkills from "./components/EditSkills";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col col-md-auto">
            <BrowserRouter>
              {/* LINKAR A ROTA NEW DUMMY NA NAVBAR */}
              <Navbar />
              <Route exact path="/" component={SkillsList} />
              <Route exact path="/h" component={Home} />
              <Route path="/newcontribution" component={NewContribution} />
              <Route path="/newdummy" component={NewUser} />
              <Route path="/updateskills/:id" component={EditSkills} />
            </BrowserRouter>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
