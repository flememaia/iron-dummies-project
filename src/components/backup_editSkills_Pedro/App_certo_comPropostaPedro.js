import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import SkillsList from "./components/SkillsList";
import NewContribution from "./components/NewContribution";
import ContributionDetails from "./components/ContributionDetails";
import EditContribution from "./components/EditContribution";
// import DeleteContribution from "./components/DeleteContribution";
import Home from "./components/Home";
import NewUser from "./components/NewUser";
import LogIn from "./components/LogIn";
import AppLogedIn from "./components/AppLoggedIn";
import EditSkillsM1 from "./components/EditSkillsM1";
import EditSkillsM2 from "./components/EditSkillsM2";
import EditSkillsM3 from "./components/EditSkillsM3";
import ChartBox from "./components/ChartBox";

function App() {
  return (
  <div className="App">
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col col-md-auto">
            <BrowserRouter>
              <Navbar />
              <Route exact path="/" component={SkillsList} />
              <Route path="/h" component={Home} />
              <Route path="/login" component={LogIn} />
              <Route path="/newdummy" component={NewUser} />
              <Route path="/newcontribution" component={NewContribution} />
              <Route
                path="/contributiondetails"
                component={ContributionDetails}
              />
              <Route path="/editcontribution" component={EditContribution} />
              {/* <Route
                path="/deletecontribution"
                component={DeleteContribution}
              /> */}
              {/* :id => _id */}
              <Route exact path="/home/:id" component={AppLogedIn} />
              <Route path="/updateskills/:id" component={EditSkillsM1}/>
              <Route path="/updateskills_m2/:id" component={EditSkillsM2}/>
              <Route path="/updateskills_m3/:id" component={EditSkillsM3}/>
              {/* <Route path="/updateskills_m2/:id/:m" component={EditSkillsM2_select_test}/> PROPOSTA PEDRO COMPONENTE ÚNICO*/}
              <Route path="/chart/:id" component={ChartBox}/>
            </BrowserRouter>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
