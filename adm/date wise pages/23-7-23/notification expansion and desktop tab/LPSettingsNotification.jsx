import React, { useState } from "react";
import LPSettingSidebar from "./LPSettingSidebar";
import "./styles/LPSettingsNotification.css";
import ArrowGreater from "../assets/image/greater-arrow.svg";
import SearchIcon from "../assets/image/search.svg";
import Envelope from "../assets/image/envelope.svg";
import GreaterArrowDown from "../assets/image/greater-arrow-down.svg";

const LPSettingsNotification = () => {
  const [activeTab, setActiveTab] = useState("email");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="settings-container">
      <LPSettingSidebar />
      <div className="mainPage">
        <section className="notification-setting-container notification-setting-fonts">
          <p className="notification-heading">Notification</p>

          <div className="notification-setting-btn notification-setting-fonts">
            <button
              className={`notification-btn ${activeTab === "email" ? "notification-active" : ""
                }`}
              onClick={() => handleTabClick("email")}
            >
              Email
            </button>
            <button
              className={`notification-btn ${activeTab === "desktop" ? "notification-active" : ""
                }`}
              onClick={() => handleTabClick("desktop")}
            >
              Desktop
            </button>
            <button
              className={`notification-btn ${activeTab === "otherApps" ? "notification-active" : ""
                }`}
              onClick={() => handleTabClick("otherApps")}
            >
              Other Apps
            </button>
          </div>
          {activeTab === "email" && (
            <>
              <div className="notification-email-section">
                <div className="envelope-section">
                  <img src={Envelope} alt="" />
                  <div className="notification-email-description">
                    <p>Email</p>
                    <p>
                      Notification will be sent to your saved mail. (You can
                      change your email anytime)
                    </p>
                  </div>
                </div>

                <div>
                  <label className="notification-switch">
                    <input type="checkbox" />
                    <span className="notification-slider notification-round"></span>
                  </label>
                </div>
              </div>


              <div className="notification-list-section notification-setting-fonts">
                <p className="notify-me-about">Notify me about</p>

                <div className="search-user-section">
                  <div className="search-box">
                    <input
                      type="text"
                      className="search-input notification-setting-fonts"
                      placeholder="Search for notification topics"
                    />
                    <span className="search-icon">
                      <img src={SearchIcon} alt="" />
                    </span>
                  </div>
                </div>

                <div className="notification-list">
                  <ul>
                    <li>
                      <div className="notification-list-table">
                        <div className="notification-display">
                          <div className="notification-img">
                            <img src={GreaterArrowDown} alt="" className="arrow-img" />

                          </div>

                          <div>
                            <span>Calling</span>
                            <table className="notification-table" id="notification-border">
                              <thead>

                                <tr>

                                  <th>
                                    <label class="custom-checkbox">
                                      <input type="checkbox" className="cb1" />
                                      <span class="checkmark"></span>
                                    </label>
                                  </th>
                                  <th></th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <label class="custom-checkbox">
                                      <input type="checkbox" className="cb1" />
                                      <span class="checkmark"></span>
                                    </label>
                                  </td>

                                  <td>
                                    <div className="notification-list-details">
                                      <p className="notify-heading">Missed Calls</p>
                                      <p className="notify-note">Get notified when a call has been missed</p>
                                    </div>
                                  </td>
                                </tr>

                              </tbody>

                            </table>
                          </div>


                        </div>










                      </div>


                    </li>
                    <li>
                      <div className="notification-list-table">
                        <div className="notification-display">
                          <div className="notification-img">
                            <img src={ArrowGreater} alt="" className="arrow-img" />

                          </div>

                          <div>
                            <span>Deals</span>
                            <table className="notification-table" id="notification-border">
                              <thead>

                                <tr>

                                  <th>
                                    <label class="custom-checkbox">
                                      <input type="checkbox" className="cb1" />
                                      <span class="checkmark"></span>
                                    </label>
                                  </th>
                                  <th></th>
                                </tr>

                                <tr>
                                  <td>
                                    <label class="custom-checkbox">
                                      <input type="checkbox" className="cb1" />
                                      <span class="checkmark"></span>
                                    </label>
                                  </td>

                                  <td>
                                    <div className="notification-list-details">
                                      <p className="notify-heading">Deal assigned to you</p>
                                      <p className="notify-note">Get notified when a deal is assigned to you</p>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <label class="custom-checkbox">
                                      <input type="checkbox" className="cb1" />
                                      <span class="checkmark"></span>
                                    </label>
                                  </td>

                                  <td>
                                    <div className="notification-list-details">
                                      <p className="notify-heading">Deal stage update</p>
                                      <p className="notify-note">Get notified when a deal you own or follow moves to a new stage.</p>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <label class="custom-checkbox">
                                      <input type="checkbox" className="cb1" />
                                      <span class="checkmark"></span>
                                    </label>
                                  </td>

                                  <td>
                                    <div className="notification-list-details">
                                      <p className="notify-heading">You’re mentioned on a deal record</p>
                                      <p className="notify-note">Get notified when a teammate @mentions you in a note or logged activity on a deal record.</p>
                                    </div>
                                  </td>
                                </tr>

                              </thead>

                            </table>
                          </div>


                        </div>










                      </div>


                    </li>
                    <li>
                      <div className="notification-list-table">
                        <div className="notification-display">
                          <div className="notification-img">
                            <img src={ArrowGreater} alt="" className="arrow-img" />

                          </div>

                          <div>
                            <span>Leads</span>
                            <table className="notification-table" id="notification-border">
                              <thead>

                                <tr>

                                  <th>
                                    <label class="custom-checkbox">
                                      <input type="checkbox" className="cb1" />
                                      <span class="checkmark"></span>
                                    </label>
                                  </th>
                                  <th></th>
                                </tr>
                              </thead>
                              <tbody>

                                <tr>
                                  <td>
                                    <label class="custom-checkbox">
                                      <input type="checkbox" className="cb1" />
                                      <span class="checkmark"></span>
                                    </label>
                                  </td>

                                  <td>
                                    <div className="notification-list-details">
                                      <p className="notify-heading">Lead assigned to you</p>
                                      <p className="notify-note">Get notified when a deal is assigned to you</p>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <label class="custom-checkbox">
                                      <input type="checkbox" className="cb1" />
                                      <span class="checkmark"></span>
                                    </label>
                                  </td>

                                  <td>
                                    <div className="notification-list-details">
                                      <p className="notify-heading">Lead stage update</p>
                                      <p className="notify-note">Get notified when a deal you own or follow moves to a new stage.</p>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <label class="custom-checkbox">
                                      <input type="checkbox" className="cb1" />
                                      <span class="checkmark"></span>
                                    </label>
                                  </td>

                                  <td>
                                    <div className="notification-list-details">
                                      <p className="notify-heading">You’re mentioned on a lead record</p>
                                      <p className="notify-note">Get notified when a teammate @mentions you in a note or logged activity on a deal record.</p>
                                    </div>
                                  </td>
                                </tr>

                              </tbody>

                            </table>
                          </div>


                        </div>










                      </div>


                    </li>
                    <li>
                      <div className="notification-list-table">
                        <div className="notification-display">
                          <div className="notification-img">
                            <img src={ArrowGreater} alt="" className="arrow-img" />

                          </div>

                          <div>
                            <span>Activity</span>
                            <table className="notification-table" id="notification-border">
                              <thead>

                                <tr>

                                  <th>
                                    <label class="custom-checkbox">
                                      <input type="checkbox" className="cb1" />
                                      <span class="checkmark"></span>
                                    </label>
                                  </th>
                                  <th></th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <label class="custom-checkbox">
                                      <input type="checkbox" className="cb1" />
                                      <span class="checkmark"></span>
                                    </label>
                                  </td>

                                  <td>
                                    <div className="notification-list-details">
                                      <p className="notify-heading">Activity created & assigned to you</p>
                                      <p className="notify-note">Get notified when a activity is assigned to you</p>
                                    </div>
                                  </td>
                                </tr>

                              </tbody>

                            </table>
                          </div>


                        </div>










                      </div>


                    </li>
                    <li>
                      <div className="notification-list-table">
                        <div className="notification-display">
                          <div className="notification-img">
                            <img src={ArrowGreater} alt="" className="arrow-img" />

                          </div>

                          <div>
                            <span>comments</span>
                            <table className="notification-table" id="notification-border">
                              <thead>

                                <tr>

                                  <th>
                                    <label class="custom-checkbox">
                                      <input type="checkbox" className="cb1" />
                                      <span class="checkmark"></span>
                                    </label>
                                  </th>
                                  <th></th>
                                </tr>
                              </thead>

                              <tbody>
                                <tr>
                                  <td>
                                    <label class="custom-checkbox">
                                      <input type="checkbox" className="cb1" />
                                      <span class="checkmark"></span>
                                    </label>
                                  </td>

                                  <td>
                                    <div className="notification-list-details">
                                      <p className="notify-heading">Mention in comments</p>
                                      <p className="notify-note">When a team member comments on a note you own or where you have left comments.</p>
                                    </div>
                                  </td>
                                </tr>

                              </tbody>

                            </table>
                          </div>


                        </div>

                      </div>
                    </li>


                    <li>
                      <div className="notification-list-table">
                        <div className="notification-display">
                          <div className="notification-img">
                            <img src={ArrowGreater} alt="" className="arrow-img" />

                          </div>

                          <div>
                            <span>comments & Mentions</span>
                            <table className="notification-table" id="notification-border">
                              <thead>

                                <tr>

                                  <th>
                                    <label class="custom-checkbox">
                                      <input type="checkbox" className="cb1" />
                                      <span class="checkmark"></span>
                                    </label>
                                  </th>
                                  <th></th>
                                </tr>

                                </thead>
                                <tbody>
                               <tr>
                                  <td>
                                    <label class="custom-checkbox">
                                      <input type="checkbox" className="cb1" />
                                      <span class="checkmark"></span>
                                    </label>
                                  </td>

                                  <td>
                                    <div className="notification-list-details">
                                      <p className="notify-heading">Mention in comments</p>
                                      <p className="notify-note">Get notified when a team member comments on a note you own or where you have left comments.</p>
                                    </div>
                                  </td>
                                </tr>

                                </tbody>

                            </table>
                          </div>


                        </div>

                      </div>


                    </li>


                    <li>
                      <div className="notification-list-table">
                        <div className="notification-display">
                          <div className="notification-img">
                            <img src={ArrowGreater} alt="" className="arrow-img" />

                          </div>

                          <div>
                            <span>Assigned to you</span>
                            <table className="notification-table" id="notification-border">
                              <thead>

                                <tr>

                                  <th>
                                    <label class="custom-checkbox">
                                      <input type="checkbox" className="cb1" />
                                      <span class="checkmark"></span>
                                    </label>
                                  </th>
                                  <th></th>
                                </tr>
                                </thead>

                                <tbody>
                                <tr>
                                  <td>
                                    <label class="custom-checkbox">
                                      <input type="checkbox" className="cb1" />
                                      <span class="checkmark"></span>
                                    </label>
                                  </td>

                                  <td>
                                    <div className="notification-list-details">
                                      <p className="notify-heading">Chat conversation assigned to you</p>
                                      <p className="notify-note">Get notified when a new live chat, bot, Facebook Messenger, or WhatsApp conversation is assigned to you.</p>
                                    </div>
                                  </td>
                                </tr>

                                <tr>
                                  <td>
                                    <label class="custom-checkbox">
                                      <input type="checkbox" className="cb1" />
                                      <span class="checkmark"></span>
                                    </label>
                                  </td>

                                  <td>
                                    <div className="notification-list-details">
                                      <p className="notify-heading">Chat conversation reassigned to you</p>
                                      <p className="notify-note">Get notified when a chat, Facebook Messenger, or WhatsApp conversation is reassigned to you. Note: Bots only notify at the point of handoff.</p>
                                    </div>
                                  </td>
                                </tr>

                                <tr>
                                  <td>
                                    <label class="custom-checkbox">
                                      <input type="checkbox" className="cb1" />
                                      <span class="checkmark"></span>
                                    </label>
                                  </td>

                                  <td>
                                    <div className="notification-list-details">
                                      <p className="notify-heading">Email conversation assigned to you</p>
                                      <p className="notify-note">Get notified when an email conversation is assigned to you.</p>
                                    </div>
                                  </td>
                                </tr>

                                <tr>
                                  <td>
                                    <label class="custom-checkbox">
                                      <input type="checkbox" className="cb1" />
                                      <span class="checkmark"></span>
                                    </label>
                                  </td>

                                  <td>
                                    <div className="notification-list-details">
                                      <p className="notify-heading">Email conversation reassigned to you</p>
                                      <p className="notify-note">Get notified when an email conversation is reassigned to you.</p>
                                    </div>
                                  </td>
                                </tr>

                                </tbody>

                            </table>
                          </div>


                        </div>










                      </div>


                    </li>
                    <li>
                      <div className="notification-list-table">
                        <div className="notification-display">
                          <div className="notification-img">
                            <img src={ArrowGreater} alt="" className="arrow-img" />

                          </div>

                          <div>
                            <span>Contacts & Companies </span>
                            <table className="notification-table" id="notification-border">
                              <thead>

                                <tr>

                                  <th>
                                    <label class="custom-checkbox">
                                      <input type="checkbox" className="cb1" />
                                      <span class="checkmark"></span>
                                    </label>
                                  </th>
                                  <th></th>
                                </tr>

                                </thead>

                                <tbody>
                                <tr>
                                  <td>
                                    <label class="custom-checkbox">
                                      <input type="checkbox" className="cb1" />
                                      <span class="checkmark"></span>
                                    </label>
                                  </td>

                                  <td>
                                    <div className="notification-list-details">
                                      <p className="notify-heading">Company assigned to you</p>
                                      <p className="notify-note">Get notified when a company is assigned to you</p>
                                    </div>
                                  </td>
                                </tr>


                                <tr>
                                  <td>
                                    <label class="custom-checkbox">
                                      <input type="checkbox" className="cb1" />
                                      <span class="checkmark"></span>
                                    </label>
                                  </td>

                                  <td>
                                    <div className="notification-list-details">
                                      <p className="notify-heading">Contact assigned to you</p>
                                      <p className="notify-note">Get notified when a contact is assigned to you</p>
                                    </div>
                                  </td>
                                </tr>


                                <tr>
                                  <td>
                                    <label class="custom-checkbox">
                                      <input type="checkbox" className="cb1" />
                                      <span class="checkmark"></span>
                                    </label>
                                  </td>

                                  <td>
                                    <div className="notification-list-details">
                                      <p className="notify-heading">You’re mentioned on a company record</p>
                                      <p className="notify-note">Get notified when a teammate @mentions you in a note or logged activity on a company record.</p>
                                    </div>
                                  </td>
                                </tr>


                                <tr>
                                  <td>
                                    <label class="custom-checkbox">
                                      <input type="checkbox" className="cb1" />
                                      <span class="checkmark"></span>
                                    </label>
                                  </td>

                                  <td>
                                    <div className="notification-list-details">
                                      <p className="notify-heading">You’re mentioned on a contact record</p>
                                      <p className="notify-note">Get notified when a teammate @mentions you in a note or logged activity on a contact </p>
                                    </div>
                                  </td>
                                </tr>

                                </tbody>

                            </table>
                          </div>


                        </div>










                      </div>


                    </li>
                    <li>
                      <div className="notification-list-table">
                        <div className="notification-display">
                          <div className="notification-img">
                            <img src={ArrowGreater} alt="" className="arrow-img" />

                          </div>

                          <div>
                            <span>Invoices</span>
                            <table className="notification-table" id="notification-border">
                              <tbody>
                                <tr>
                                  <td>
                                    <label class="custom-checkbox">
                                      <input type="checkbox" className="cb1" />
                                      <span class="checkmark"></span>
                                    </label>
                                  </td>

                                  <td>
                                    <div className="notification-list-details">
                                      <p className="notify-heading">Invoice Paid</p>
                                      <p className="notify-note">Get notified when an invoice you own has been paid.</p>
                                    </div>
                                  </td>
                                </tr>

                                </tbody>

                            </table>
                          </div>


                        </div>










                      </div>


                    </li>

                  </ul>
                </div>
              </div>
            </>
          )}

          {activeTab === "desktop" && <>
          
          
          <div className="desktop-notification">
                <table className="desktop-table" id="desktop-border"  style={{border:"none"}}>
                  <tr>
                    <td className="desktop-content" id="desktop-item">
                      <div>
                      <p id="desktop-bell">Bell</p>
                      <p id="desktop-note">Bell notifications appear as a red badge on the bell icon in your navigation bar. You can click on the bell anytime to see your most recent notifications.</p>
                      </div>
                     
                      <div>
                  <label className="notification-switch">
                    <input type="checkbox" />
                    <span className="notification-slider notification-round"></span>
                  </label>
                </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="desktop-content" id="desktop-item">
                      <div>
                      <p id="desktop-bell2">pop-up</p>
                      <p id="desktop-note2">Pop-up notifications appear on your screen when you’re active in LeadPlaner.</p>
                      </div>
                     
                      <div>
                  <label className="notification-switch">
                    <input type="checkbox" />
                    <span className="notification-slider notification-round"></span>
                  </label>
                </div>
                    </td>
                  </tr>

                </table>
              </div>
          
          
          </>}

          {activeTab === "otherApps" && <>other apps</>}
        </section>
      </div>
    </div>
  );
};

export default LPSettingsNotification;
