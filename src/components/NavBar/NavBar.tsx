import "./navbar.css";
import logo from "../../assets/logo.png";
import contact from "../../assets/contact.svg";
import { Link } from "react-scroll";

function NavBar() {
  return (
    <nav className="navBar">
      <img src={logo} alt="logo" className="logo" />
      <div className="desktopMenu">
        <Link className="desktopMenuItemListItem" to="">
          Accueil
        </Link>
        <Link className="desktopMenuItemListItem" to="">
          À propos
        </Link>
        <Link className="desktopMenuItemListItem" to="">
          Formations
        </Link>
        <Link className="desktopMenuItemListItem" to="">
          PortFolio
        </Link>
      </div>
      <button className="desktopMenuButton">
        <img src={contact} alt="" className="imageButtonContact" />
        Me contacter
      </button>
    </nav>
  );
}

export default NavBar;
