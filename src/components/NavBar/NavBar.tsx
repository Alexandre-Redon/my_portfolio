import "./navbar.css";
import logo from "../../assets/logo.png";
import contact from "../../assets/contact.svg";
import menu from "../../assets/menu.png";
import { Link } from "react-scroll";
import { useState } from "react";

function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navBar">
      <a href="/">
        <img src={logo} alt="logo" className="logo" />
      </a>
      <div className="desktopMenu">
        <Link
          activeClass="active"
          className="desktopMenuItemListItem"
          to="presentation"
          spy={true}
          smooth={true}
          offset={-100}
        >
          Accueil
        </Link>
        <Link
          className="desktopMenuItemListItem"
          to="a-propos"
          spy={true}
          smooth={true}
          offset={-100}
        >
          À propos
        </Link>
        <Link
          className="desktopMenuItemListItem"
          to="portfolio"
          spy={true}
          smooth={true}
          offset={-100}
        >
          PortFolio
        </Link>
      </div>
      <Link to="contact" className="desktopMenuButton" spy={true} smooth={true}>
        <img src={contact} alt="" className="imageButtonContact" />
        Me contacter
      </Link>

      <img
        src={menu}
        alt="menu"
        className="navMenu"
        onClick={() => {
          setShowMenu(!showMenu);
        }}
      />
      <div
        className="mobileMenu"
        style={{ display: showMenu ? "flex" : "none" }}
      >
        <Link
          activeClass="active"
          className="listItemMobileMenu"
          to="presentation"
          spy={true}
          smooth={true}
          offset={-100}
          onClick={() => setShowMenu(false)}
        >
          Accueil
        </Link>
        <Link
          activeClass="active"
          className="listItemMobileMenu"
          to="a-propos"
          spy={true}
          smooth={true}
          offset={-100}
          onClick={() => setShowMenu(false)}
        >
          À propos
        </Link>
        <Link
          activeClass="active"
          className="listItemMobileMenu"
          to="portfolio"
          spy={true}
          smooth={true}
          offset={-100}
          onClick={() => setShowMenu(false)}
        >
          PortFolio
        </Link>
        <Link
          activeClass="active"
          to="contact"
          className="listItemMobileMenu"
          spy={true}
          smooth={true}
          onClick={() => setShowMenu(false)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
