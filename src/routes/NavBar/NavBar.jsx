import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, useNavigate } from 'react-router-dom';
import { firebaseAuth } from '../../utils/firebase/firebase';
import { onAuthStateChanged } from "firebase/auth";
import { signOut } from "firebase/auth";
import { BiLogOut } from "react-icons/bi"
import './NavBar.css';


function ColorSchemesExample() {
  
const navigate = useNavigate();


onAuthStateChanged(firebaseAuth, (currentUser) => {
  if (!currentUser) navigate("/login");
  });
  
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
            <Nav.Link className='signout' onClick={() => signOut(firebaseAuth)}>
            <BiLogOut/> 
            </Nav.Link>      
          </Nav>
      </Navbar>
            <Outlet/>
    </>
  );
}

export default ColorSchemesExample;