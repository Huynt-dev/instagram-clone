import React from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../../../public/images/instagram-logo-1.png";
import "./css/Menu.css";
import {
  Collapse,
  Navbar,
  Nav,
  UncontrolledDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faPaperPlane,
//   faCompass,
//   faHeart
// } from "@fortawesome/free-regular-svg-icons";
// import { faHome } from "@fortawesome/free-solid-svg-icons";

export default function NavMenu() {
  const history = useHistory();
  const logout = () => {
    localStorage.clear();
    // localStorage.removeItem("token");
    return history.push("/login");
  };

  const avatar = JSON.parse(localStorage.getItem("user"));
  return (
    <Navbar color="white" light expand="md" className="menu">
      <div className="container yolo">
        <Link to="/">
          <img className="logo-2" alt="ok" src={logo} />
        </Link>
        <Collapse navbar>
          <input
            className="menu-search form-control"
            type="search"
            placeholder="Tìm kiếm"
            aria-label="Search"
          />
        </Collapse>

        <Nav className="menu-box">
          <Link className="nav-link" to="/">
            <img src="../svg/Asset3.svg" alt="home" width="25" height="25" />
          </Link>

          <Link className="nav-link" to="/messenger">
            <img src="../svg/Asset6.svg" alt="home" width="25" height="25" />
          </Link>

          <Link className="nav-link" to="/explore">
            <img src="../svg/Asset4.svg" alt="home" width="25" height="25" />
          </Link>

          <Link className="nav-link" to="/activity">
            <img src="../svg/Asset2.svg" alt="home" width="25" height="25" />
          </Link>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav>
              <img className="avatar" alt="ok" src={avatar.avatar} />
            </DropdownToggle>
            <DropdownMenu right>
              <Link to="/profile">
                <DropdownItem>Trang cá nhân</DropdownItem>
              </Link>
              <DropdownItem>Đã Lưu</DropdownItem>
              <DropdownItem divider />
              <DropdownItem onClick={logout}>Logout</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </div>
    </Navbar>
  );
}
