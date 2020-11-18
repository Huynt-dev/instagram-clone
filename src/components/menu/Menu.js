import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./css/Menu.css";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faCompass,
  faHeart
} from "@fortawesome/free-regular-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
export default function NavMenu() {
  const history = useHistory();
  const logout = () => {
    localStorage.removeItem("token");
    return history.push("/login");
  };

  return (
    <Navbar color="white" light expand="md" className="menu">
      <div className="container yolo">
        <Link to="/">
          <img
            className="logo-2"
            alt="ok"
            src="../images/instagram-logo-1.png"
          />
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
            <FontAwesomeIcon icon={faHome} />
          </Link>

          <Link className="nav-link" to="/messenger">
            <FontAwesomeIcon icon={faPaperPlane} />
          </Link>

          <Link className="nav-link" to="/explore">
            <FontAwesomeIcon icon={faCompass} />
          </Link>

          <Link className="nav-link" to="/activity">
            <FontAwesomeIcon icon={faHeart} />
          </Link>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav>
              <img
                className="avatar"
                alt="ok"
                src="../images/instagram-logo-1.png"
              />
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
