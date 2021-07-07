import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import SkillsList from "./components/SkillsList";
import NewContribution from "./components/NewContribution";
import ContributionDetails from "./components/ContributionDetails";
import EditContribution from "./components/EditContribution";
import DeleteContribution from "./components/DeleteContribution";
import Home from "./components/Home";
import NewUser from "./components/NewUser";
import LogIn from "./components/LogIn";
import AppLogedIn from "./components/AppLoggedIn";
// import EditSkills from "./components/EditSkills";
// import EditSkills_select from "./components/EditSkills_select";
import EditSkills_select_test from "./components/EditSkills_select_test";
import ChartBox from "./components/ChartBox";

function App() {
  return (
  <div className="App">
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col col-md-auto">
            <BrowserRouter>
              <Navbar />
              <Route exact path="/forumbasics" component={SkillsList} />
              <Route exact path="/forumfrontend" component={SkillsList} />
              <Route exact path="/forumbackend" component={SkillsList} />
              <Route exact path="/forumhavenoidea" component={SkillsList} />
              <Route path="/h" component={Home} />
              <Route path="/login" component={LogIn} />
              <Route path="/newdummy" component={NewUser} />
              <Route path="/newcontribution" component={NewContribution} />
              <Route
                path="/contributiondetails"
                component={ContributionDetails}
              />
              <Route path="/editcontribution" component={EditContribution} />
              <Route
                path="/deletecontribution"
                component={DeleteContribution}
              />
              {/* :id => _id */}
              <Route exact path="/home/:id" component={AppLogedIn} />
              {/* <Route path="/updateskills/:id" component={EditSkills_select} /> */}
              <Route path="/updateskills/:id" component={EditSkills_select_test}/>
              {/* <Route path="/chart/:id" component={ChartBox}/> */}
              <Route path="/chart" component={ChartBox} />
            </BrowserRouter>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
