import { Component } from "react";
import "./NavbarStyles.css";
import { Menuitems } from "./Menuitems";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = { clicked: false }; // makes hand bar icon flase as it cannot keep running
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked }); //if bar icon clicked, set state !this.state.clicked (true)
  };
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Bsc (Maths)</h1> {/* heading - My Name */}
        <div className="menu-icons" onClick={this.handleClick}>
          {" "}
          {/* div class for menu icons */}
          <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}>
            {" "}
          </i>{" "}
          {/* (Click event with icons initialised:
          if drop down is clicked, switch state to X icon and vice versa */}
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {" "}
          {/* Calls Menuitems from Menuitems.js */}
          {Menuitems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}> </i>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
