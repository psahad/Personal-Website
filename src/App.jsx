import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
import Works from "./components/works/Works"
import Academics from "./components/academics/Academics"
import Skills from "./components/skills/Skills"
import Contact from "./components/contact/Contact"
import "./app.scss"
import { useState } from "react";
import Menu from "./components/menu/Menu";

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="sections">
       <Intro/>
       <Skills/>
       <Works/>
       <Academics/>
       <Contact/>
     </div>
    </div>
  );
}

export default App;
