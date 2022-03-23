import { useState } from "react";
import { Navbar, Nav, InputGroup, FormControl } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const MyNavbar = ({ showSearchResult }) => {
  const [searchString, setSearchString] = useState("");

  const { pathname } = useLocation();

  const searchStringHandler = (e) => {
    if (e.keyCode === 13) {
      // WHEN ENTER KEY IS PRESSED
      showSearchResult(searchString);
    } else {
      setSearchString(e.currentTarget.value);
    }
  };

  return (
    <Navbar variant="dark" expand="lg" style={{ backgroundColor: "#221f1f" }}>
      <Navbar.Brand href="/">
        <img
          src="assets/logo.png"
          alt="logo"
          style={{ width: "100px", height: "55px" }}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/">
            <div
              className={
                "font-weight-bold nav-link" +
                (pathname === "/" ? " active" : "")
              }
            >
              Home
            </div>
          </Link>
          <Link to="/tv-shows">
            <div
              className={
                "font-weight-bold nav-link" +
                (pathname === "/tv-shows" ? " active" : "")
              }
            >
              TV Shows
            </div>
          </Link>
          <Nav.Link
            className={
              "font-weight-bold nav-link" +
              (pathname === "/tv-shows" ? "active" : "")
            }
          >
            Movies
          </Nav.Link>
          <Nav.Link className="font-weight-bold" href="/">
            Recently Added
          </Nav.Link>
          <Nav.Link className="font-weight-bold" href="/">
            My List
          </Nav.Link>
        </Nav>
        <span className="d-flex align-items-center">
          <InputGroup className="icons">
            <FormControl
              placeholder="Search and press enter"
              aria-label="search"
              aria-describedby="basic-addon1"
              onKeyDown={searchStringHandler}
              onChange={searchStringHandler}
              value={searchString}
            />
          </InputGroup>
          <div id="kids">KIDS</div>
          <i className="fa fa-bell icons"></i>
          <i className="fa fa-user icons"></i>
        </span>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
