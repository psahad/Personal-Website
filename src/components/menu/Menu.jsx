import "./menu.scss";
import { GitHub, LinkedIn, Instagram, Facebook } from "@material-ui/icons";
export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu "+(menuOpen && "active")}>
      <div className="menuItems">
        <ul>
          <li onClick={()=>setMenuOpen(false)}>
            <a href="#intro">Home</a>
          </li>
          <li onClick={()=>setMenuOpen(false)}>
            <a href="#skills">Skills</a>
          </li>
          <li onClick={()=>setMenuOpen(false)}>
            <a href="#works">Works</a>
          </li>
          <li onClick={()=>setMenuOpen(false)}>
            <a href="#academics">Academics</a>
          </li>
          <li onClick={()=>setMenuOpen(false)}>
            <a href="#contact">Contact me</a>
          </li>
        </ul>
      </div>
      <div className="menuIcons">
        <a href="https://github.com/psahad/" onClick={()=>setMenuOpen(false)}>
          <GitHub className="icon"/>
        </a>
        <a href="#contact" onClick={()=>setMenuOpen(false)}>
          <LinkedIn className="icon"/>
        </a>
        <a href="https://www.instagram.com/iamsahadp/" onClick={()=>setMenuOpen(false)}>
          <Instagram className="icon"/>
        </a>
        <a href="https://www.facebook.com/moh.sahad" onClick={()=>setMenuOpen(false)}>
          <Facebook className="icon"/>
        </a>
      </div>
    </div>
  );
}
