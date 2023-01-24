import { signInWithGooglePopup, createUserDocument } from "../../utils/firebase/firebase";
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

import './Sign-in.css'

const SignIn = () => {
  const login = async () => {
    const response = await signInWithGooglePopup();
    console.log(response.user)
    createUserDocument(response.user)
  }
  return (
    <div className="full">
      <h1 className="signIn">Please Sign In Below </h1>
      <button className="green" onClick={login}>
        Sign In 
      </button>
    </div>
  )
}

export default SignIn