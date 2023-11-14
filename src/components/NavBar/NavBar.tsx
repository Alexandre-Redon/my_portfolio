import "./navbar.css";
import logo from "../../assets/logo.png";
import contact from "../../assets/contact.svg";
import { Link } from "react-scroll";

function NavBar() {
  return (
    <nav className="navBar">
      <img src={logo} alt="logo" className="logo" />
      <div className="desktopMenu">
        <Link
          className="desktopMenuItemListItem"
          to="intro"
          spy={true}
          smooth={true}
        >
          Accueil
        </Link>
        <Link
          className="desktopMenuItemListItem"
          to="a-propos"
          spy={true}
          smooth={true}
        >
          À propos
        </Link>
        <Link
          className="desktopMenuItemListItem"
          to="portfolio"
          spy={true}
          smooth={true}
        >
          PortFolio
        </Link>
      </div>
      <Link to="contact" className="desktopMenuButton" spy={true} smooth={true}>
        <img src={contact} alt="" className="imageButtonContact" />
        Me contacter
      </Link>
    </nav>
  );
}

export default NavBar;
