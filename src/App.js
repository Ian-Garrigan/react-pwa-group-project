import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Image, Row, Col } from 'react-bootstrap';
import logo from './images/logo.png';
import Home from "./views/Home";
import Starters from './views/Starters';
import Mains from './views/Mains';
import Desserts from './views/Desserts';
import Wines from './views/Wines';
import Booking from './views/Booking';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar expand="lg" className="navbar-right" ms-auto>
          <Container>
            <Navbar.Brand as={Link} to="/" ><Image src={logo} width="250px" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" mr-auto>
              <Nav className="ms-auto">
                <Nav.Link as={Link} to="/" >Home</Nav.Link>
                <Nav.Link as={Link} to="/Starters" >Starters</Nav.Link>
                <Nav.Link as={Link} to="/Mains">Mains</Nav.Link>
                <Nav.Link as={Link} to="/Desserts">Desserts</Nav.Link>
                <Nav.Link as={Link} to="/Wines">Wines</Nav.Link>
                <Nav.Link as={Link} to="/Booking">Booking</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <hr className="hr"></hr>


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Starters" element={<Starters />} />
          <Route path="Mains" element={<Mains />} />
          <Route path="Desserts" element={<Desserts />} />
          <Route path="Wines" element={<Wines />} />
          <Route path="Booking" element={<Booking />} />

        </Routes>
      </Router>

      <footer className='bg-light bg-opacity-75 mt-3'>
        <Container >
        <Row>
        <hr className="hr"></hr>
          <Col lg={3}></Col>
          <Col lg={6} className='text-center'>
            <div>
              <h2 className='heading text-underlined'>Hello Chef</h2>
              <p>Hello Chef&#174; is a trademark of the Better Code Better Food company.</p>
              <p>Contact us at: <a href='mailto:about@hello.chef.com'>about@hello.chef.com</a></p>
              <p>Mayor Street Lower,</p>
              <p>International Financial Services Centre,</p>
              <p>Dublin 1</p>
            </div>
          </Col>
          <Col lg={3}></Col>
        </Row>
        </Container>
      </footer>
    </div>
  );
}

export default App;
