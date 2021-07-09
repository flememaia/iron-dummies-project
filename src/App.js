import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import index from "./index.css";

import "./index.css"
// import Navbar from "./components/Navbar";
import ForumList from "./components/forum/ForumList";
import NewContribution from "./components/forum/NewContribution";
import ContributionDetails from "./components/forum/ContributionDetails";
import EditContribution from "./components/forum/EditContribution";
import DeleteContribution from "./components/forum/DeleteContribution";
import AppLoggedInForumBasics from "./components/forum/AppLoggedInForumBasics";
import AppLoggedInForumWebDevFront from "./components/forum/AppLoggedInForumWebDevFront";
import AppLoggedInForumWebDevBack from "./components/forum/AppLoggedInForumWebDevBack";
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

              <Route exact path="/forumbasics" component={AppLoggedInForumBasics} />
              <Route exact path="/forumfrontend" component={AppLoggedInForumWebDevFront} />
              <Route exact path="/forumbackend" component={AppLoggedInForumWebDevBack} />

              
              <Route exact path="/forumhavenoidea" component={ForumList} />
              
              <Route path="/newcontribution/:id" component={NewContribution} />
              <Route path="/contributiondetails/:id" component={ContributionDetails}/>
              <Route path="/editcontribution/:id" component={EditContribution} />
              <Route path="/deletecontribution/:id" component={DeleteContribution}
              />
              {/* :id => _id */}
              <Route path="/h" component={Home} />
              <Route path="/login" component={LogIn} />
              <Route path="/newdummy" component={NewUser} />
              <Route exact path="/home/:id" component={AppLogedIn} />
              <Route path="/updateskills/:id" component={EditSkillsM1}/>
              <Route path="/updateskills_m2/:id" component={EditSkillsM2}/>
              <Route path="/updateskills_m3/:id" component={EditSkillsM3}/>
              <Route path="/chart/:id" component={ChartBox}/>
            </BrowserRouter>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
