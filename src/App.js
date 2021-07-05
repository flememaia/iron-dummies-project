import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SkillsList from "./components/SkillsList";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path="/" component={SkillsList} />
    </BrowserRouter>
  );
}

export default App;
