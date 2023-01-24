import './App.css';
import { Outlet } from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import Navigation from "./routes/NavBar/NavBar"
import Home from "./routes/Home/Home"
import SignIn from './routes/Sign-in/Sign-in';
import SignUp from './routes/Signup/Signup'
import Review from './routes/Review/Review';
import CreateaReview from './routes/Createareview/Createareview';
import Rides from './routes/Rides/rides';

// semantic ui react 2.1.4


function App() {
  
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route path='rides' element={<Rides/>}/>
        <Route path='review' element={<Review/>}/>
        <Route path='createaReview' element={<CreateaReview/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='sign-in' element={<SignIn/>}/>
        <Route path='sign-up' element={<SignUp/>}/>

      </Route>
    </Routes>
      
  )
}

export default App;
