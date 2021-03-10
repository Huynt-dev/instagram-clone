import React from "react";
import { Link, useHistory } from "react-router-dom";
import {
  logo,
  Asset3,
  Asset2,
  Asset4,
  Asset6,
} from "../../assets/images/index";
import "./css/Menu.css";
import {
  Collapse,
  Navbar,
  Nav,
  UncontrolledDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";

export default function NavMenu() {
  const user = JSON.parse(localStorage.getItem("user"));
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
            <img src={Asset3} alt="home" width="25" height="25" />
          </Link>

          <Link className="nav-link" to="/messenger">
            <img src={Asset6} alt="home2" width="25" height="25" />
          </Link>

          <Link className="nav-link" to="/explore">
            <img src={Asset4} alt="home3" width="25" height="25" />
          </Link>

          <Link className="nav-link" to="/activity">
            <img src={Asset2} alt="home4" width="25" height="25" />
          </Link>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav>
              <img className="avatar" alt="ok" src={avatar.avatar} />
            </DropdownToggle>
            <DropdownMenu right>
              <Link to={`/${user.user}/profile`}>
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
