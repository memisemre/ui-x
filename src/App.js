import "./Css/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBar from "./Components/SideBar";
import RightBar from "./Components/RightBar";
import Picker from "./Views/Picker";
import NotFound from "./Views/NotFound";
import FontPage from "./Views/Fonts";
import Generators from "./Views/Generators";
import ToolsPage from "./Views/Tools";
import AboutMe from "./Views/AboutMe";

function App() {
  return (
      <div className="app-container">
          <Router>
            <Routes>
              <Route exact path="/" element={<Picker />}></Route>
              <Route exact path="/fonts" element={<FontPage />}></Route>
              <Route exact path="/generators" element={<Generators />}></Route>
              <Route exact path="/tools" element={<ToolsPage />}></Route>
              <Route exact path="/aboutme" element={<AboutMe />}></Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
      </div>
  );
}

export default App;
