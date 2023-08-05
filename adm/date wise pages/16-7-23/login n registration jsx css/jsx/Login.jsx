//for client
// {
//   "username": "admin@gmail.com",
//   "password": "Mahi@3332"
// }
//for admin panel
// {
//   "username": "mahesh@gmail.com",
//   "password": "Mahi@3332"
// }

import React, { useState, useEffect } from "react";
import axios from "axios";
import { LOGIN } from "./utils/Constants";
import { useNavigate } from "react-router-dom";
import "./styles/Login.css";
import LoginHeader from "./LoginHeader";
import LoginFooter from "./LoginFooter";
import CRMImage from "../assets/image/crm.svg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Check if a JWT token is already stored in localStorage
    const token = localStorage.getItem("jwtToken");
    if (token) {
      // Redirect to the landing URL
      const landingUrl = localStorage.getItem("landingUrl");
      navigate(landingUrl);
    }
  }, []); // Empty dependency array to run only once on component mount

  const handleUserName = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updateForm = {
      username: email,
      password: password,
    };
    axios
      .post(LOGIN, updateForm)
      .then((response) => {
        const token = response.data.token; // Assuming the token is in the response data
        localStorage.setItem("jwtToken", token); // Store the token in localStorage
        const landingUrl = response.data.landingurl;
        localStorage.setItem("landingUrl", landingUrl); // Store the landing URL in localStorage
        navigate(landingUrl);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <>
    <LoginHeader/>
      {/* <div>Login</div>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="text" value={email} onChange={handleUserName} />
        <label>Password</label>
        <input type="password" value={password} onChange={handlePassword} />
        <input type="submit" value="Login" />
      </form> */}

<main className="main-registration">
        <div className="free-trial-section">
            
                <h2 className="free-trial-heading">Start Your Free Trial</h2>
                <h3 className="no-credit">No credit card required, no software to install.</h3>
                <p className="day-trial">With your 30-day trial, you get:</p>
                <div className="data-load">

                    <ul>
                        <li>Pre-loaded data or upload your own</li>
                        <li>Pre-configured processes, reports, and dashboards</li>
                        <li>Guided experiences for sales reps, leaders, and administrators</li>
                        <li>Online training and live onboarding webinars</li>
                    </ul>

                </div>

                <p className="looking-support">Looking for support? Visit the <span> LeadPlaner Support Center</span> or
                    email</p>
                <p className="help-email">help@leadplaner.com</p>

              
                    <img src={CRMImage} alt="" />


        </div>

        <div className="login-form-section">
            <h2 className="login-form-heading">Login To  <span>Lead</span>Planer</h2>
             
            <form action="" onSubmit={handleSubmit}>

                <div className="login-page-fields">
                    <label for="" className="login-labels">login As</label>
                    <select name="" id="" className="login-form-input">
                        <option value="">Job Title*</option>
                    </select>

                </div>

                <div className="login-page-fields">
                    <label for="" className="login-labels">Work Email *</label>
                    <input type="email" value={email} onChange={handleUserName} className="login-form-input" placeholder="Enter Email Address" id=""/>

                </div>

                <div className="login-page-fields">
                    <label for="" className="login-labels">Password</label>
                    <input type="password"  value={password} onChange={handlePassword} className="login-form-input" name="" id="" placeholder="Enter Password"/>

                </div>
 

              <div>
                <p className="login-forget-password">forget Password?</p>
              </div>

                <div className="login-checkbox">
                    <input type="checkbox" name="" id=""/>
                    <label for="">Remember me?</label>

                </div>



                <input type="submit" value="Continue" className="login-continue-btn"/>
            </form>
           
        </div>

    </main>


      <LoginFooter/>
    </>
  );
};

export default Login;
