import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "./../../assets/images/logo.png";
import "./header.scss";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import { FiMapPin, FiMessageCircle, FiSearch, FiUser } from "react-icons/fi";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <img src={logo} alt="logo" className="logo" />
      <Navbar.Brand href="#home">
        <FiMapPin />
        <span className="m-2">شیراز</span>
      </Navbar.Brand>
      <NavDropdown title="دسته ها" id="basic-nav-dropdown"></NavDropdown>
      <div class="input-group w-50">
        <span class="input-group-text" id="basic-addon1">
          <FiSearch />
        </span>
        <input
          type="text"
          class="form-control"
          placeholder="جستجو درهمه آگهی ها"
        />
      </div>

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">
            <FiUser />
            <span className="m-2">دیوار من</span>
          </Nav.Link>
          <Nav.Link href="#link">
            <FiMessageCircle />
            <span className="m-2">چت</span>
          </Nav.Link>
          <Nav.Link href="#link">
            <span className="m-2">پشتیبانی</span>
          </Nav.Link>
          <Button variant="danger">ثبت آگهی</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
