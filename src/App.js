import React from 'react';
import './App.css';
import FacebookLogin from 'react-facebook-login'
import logo from '../src/logo.png'
import googleLogo from '../src/googleLogo.png'
import fbLogo from '../src/fbLogo.png'
const responseFacebook = (response) => {
  console.log("login result",response);
}
const componentClicked =(data)=>{
    console.warn(data);
}
function App() {
  return (
    <div className="App">
      <div className="brand-logo">
       <img className="bobble" src={logo}></img>
      </div>
       <div className="container">
        <p className="p-head">SIGN UP</p>
        <h1 className="heading1">Create Your Account</h1>
        <p className="p-head-lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="oAuth-buttons">    
            <div className="google-button">
                <a className="btn-google" href="">
                  <div className="google-content">
                      <div class="logo">
                        <img className="googleLogo" src={googleLogo}></img>
                      </div>
                    <p>Sign Up with Google</p>
                  </div>
                </a>
            </div>
            <div className="fb-button">
            <FacebookLogin
                      appId="925342501306602"
                      autoLoad={true}
                      fields="name,email"
                      onClick={componentClicked}
                      callback={responseFacebook}
                      cssClass="my-facebook-button-class"
                      icon="fa-facebook"
                        />,
            </div>
        </div>
        
          <div className="line"></div>
          <p>or</p>
          <div className="line"></div>
        
        <form className="form-signup" action="#">
            <div className="first-name input-container">
                <input type="text" name="first-name" autocomplete="off" id="first-name" placeholder="First Name"></input>
            </div>
            <div className="email input-container">
                <input type="text" name="last-name" id="last-name" placeholder="Last Name" autocomplete="off"></input>
            </div>
            <div className="password input-container">
                <input type="email" name="email" id="email" placeholder="Email" autocomplete="off"></input>
            </div>
            <div className="re-password input-container">
                <input type="password" name="password" id="password" placeholder="Password" autocomplete="off"></input>
                <p className="p-head-lorem">By clicking sign Up, you agree to our Terms of Use ad our Privacy Policy. </p>
                <button type="submit" className="signupbtn">Sign Up</button>
            </div>
            
        </form>
      </div>
    </div>
  );
}

export default App;
