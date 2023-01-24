import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet } from 'react-router-dom';
import './NavBar.css';

function ColorSchemesExample() {
  return (
    <>
      <Navbar>
        <Nav.Link className="logo" href="/home" to={"/home"}>
          <img
            src={require("../../assets/logo.jpg")}
            alt={"logo"}
            href ="/"
            width={120}
          />
        </Nav.Link>
          <Nav className="me-auto">    
            <Nav.Link href="/rides">Rides</Nav.Link>
            <Nav.Link href="/CreateaReview">Create A Review</Nav.Link>
            <Nav.Link href="/Review">Reviews</Nav.Link>
          </Nav>
          <Nav className="me-auto-1">
            <Nav.Link className='login' href="/Sign-in">Login</Nav.Link>
            <Nav.Link className='login' href="/Sign-up">Sign-up</Nav.Link>
          </Nav>
      </Navbar>
            <Outlet/>
    </>
  );
}

export default ColorSchemesExample;