import { useState } from "react";
import { createSignup, createUserDocument } from "../../utils/firebase/firebase";
import './SignUpForm.css'

const SignUpForm = () => {
    const [displayName, setDisplayName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const resetFormFields = () => {
      setDisplayName('')
      setEmail('')
      setPassword('')
      setConfirmPassword('')
    }

    const handleSubmit = async (event) => {
      event.preventDefault()

      if (password !== confirmPassword){
        alert('Passwords do not match!')
        return;
      }

      try {
        const response = await createSignup(email, password)
        console.log(response.user)
        await createUserDocument(response.user, displayName)
        resetFormFields()
      } catch(error) {
        console.log('User creation encountered an error!',error)
      }
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        switch(name) {
            case 'displayName':
                setDisplayName(value)
                break;
            case 'email':
                setEmail(value)
                break;
            case 'password':
                setPassword(value)
                break;
            case 'confirmPassword':
                setConfirmPassword(value)
                break;
            default:
        }

    }

  return (
    <div className="main">
      <br/>
      <h3 className="header" >SIGN UP FORM</h3>
      <br/>
      <br/>
      <form onSubmit={handleSubmit}>
        <input className="sign" type="text" required placeholder="Display Name" onChange={handleChange} name="displayName" value={displayName}/>
        <br/>
        <br/>
        <input className="sign" type="email" required placeholder="Email" onChange={handleChange} name="email" value={email}/>
        <br/>
        <br/>
        <input className="sign" type="password" required placeholder="Password" onChange={handleChange} name="password" value={password}/>
        <br/>
        <br/>
        <input className="sign" type="password" required placeholder="Confirm Password" onChange={handleChange} name="confirmPassword" value={confirmPassword}/>
        <br/>
        <br/>
        <button className="button" type="submit">SIGN UP</button>
        <br/>
        <br/>
      </form>
    </div>
  );
};

export default SignUpForm;