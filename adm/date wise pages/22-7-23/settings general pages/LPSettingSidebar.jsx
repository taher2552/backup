import React from 'react';
import './styles/LPSetting.css';
import { NavLink } from "react-router-dom";
import arrowLeft from "../assets/image/arrow-left.svg";

const LPSettingSidebar = () => {
  return (
      <section className="setting-side-panel">
    <div className="go-back-btn ">
      <button className="setting-font-style"><img src={arrowLeft} alt="" /><span>Go Back</span></button>
    </div>
    <div>
      <p className="setting-heading setting-font-style">Settings</p>
    </div>
    <div className="setting-font-style">
      <p className="prefrence">Your Prefrences</p>
      <p className="prefrence-options"> <NavLink
            exact to="/lp/settings/general"       
            >General</NavLink></p>
      <p className="prefrence-options LPsidebar-active"><NavLink
            exact to="/lp/settings/notification"       
            >Notification</NavLink></p>
      <p className="prefrence-options">Security</p>
    </div>

    <div className="setting-font-style">
      <p className="account-setup">Account Setup</p>
      <p className="account-options">account defaults</p>
      <p className="account-options"> <NavLink
            exact to="/lp/settings/usernteams"
            activeClassName="activeLink"
            >users & teams</NavLink></p>
      <p className="account-options">privacy & consent</p>
    </div>
    <div className="setting-font-style">
      <p className="company-setup">Company</p>
      <p className="company-options">Company Settings</p>
      <p className="company-options">Leads</p>
      <p className="company-options">Deals</p>
      <p className="company-options">Usage</p>
      <p className="company-options">Import & Export</p>
    </div>
  </section>
  )
}

export default LPSettingSidebar