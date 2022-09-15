import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Navbar, Nav, NavDropdown} from 'react-bootstrap'
import Home from '../components/Home';
import AboutUs from '../components/AboutUs';
import ContactUs from '../components/ContactUs';
import FileToCSS from '../components/developTools/FileToCSS';
import { Link } from 'react-router-dom';
import logo from '../svg/logo.svg';
import LanguageSelect from './LanguageSelect';
import { useTranslation } from "react-i18next";
import { BsHouseDoor, BsBriefcase, BsPeople, BsChatRightDots, BsTools} from 'react-icons/bs';

const Layout = () => {
  const { t, i18n  } = useTranslation("common");
  const productBtnStr = (<><BsBriefcase/> {t("product_nav_btn")}</>);
  const DevToolBtnStr = (<><BsTools/> {t("dev_tools_nav_btn")}</>);

  return (
    <>
      <Router>
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
          <Container>
            {/* Home Icon */}
            <Navbar.Brand as={Link} to="/">
              <img alt="" src={logo} width="30" height="30" className="d-inline-block"/>PePing Studio
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                {/* Home */}
                <Nav.Link as={Link} to="/">
                  <BsHouseDoor/> {t("home_nav_btn")}
                </Nav.Link>
                {/* Product */}
                <NavDropdown
                  title={productBtnStr}
                  id="collasible-nav-dropdown"
                >
                  <NavDropdown.Item
                    as={Link}
                    to="/my-game/flash-card-game"
                  >
                    Flash Card Game
                  </NavDropdown.Item>
                </NavDropdown>
                {/* Dev Tools */}
                <NavDropdown
                  title={DevToolBtnStr}
                  id="collasible-nav-dropdown"
                >
                  <NavDropdown.Item
                    as={Link}
                    to="/dev-tools/file-css"
                  >
                    File to css
                  </NavDropdown.Item>
                </NavDropdown>
                {/* About Us */}
                <Nav.Link as={Link} to="/about-us">
                  <BsPeople/> {t("aboutus_nav_btn")}
                </Nav.Link>
                {/* Contact Us */}
                <Nav.Link as={Link} to="/contact-us">
                  <BsChatRightDots/> {t("contactus_nav_btn")}
                </Nav.Link>
              </Nav>
              <LanguageSelect />
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <br />
        <Container>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about-us">
              <AboutUs />
            </Route>
            <Route path="/dev-tools/file-css">
              <FileToCSS />
            </Route>
            <Route path="/contact-us">
              <ContactUs />
            </Route>
          </Switch>
        </Container>
      </Router>
    </>
  );  
};

export default Layout;