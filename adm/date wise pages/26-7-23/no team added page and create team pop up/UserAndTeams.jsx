import React, { useState,useEffect } from "react";
import LPSettingSidebar from "./LPSettingSidebar";
import "./styles/LPSetting.css";
import "./styles/LPUserAndTeam.css";
import axios from "axios";
import { GET_TEAM_MEM,getDecryptedToken } from "./utils/Constants";
import SearchIcon from "../assets/image/search.svg";
import ExportIcon from "../assets/image/export.svg";
import ExportIcon2 from "../assets/image/export2.svg";
import ArrowUp from "../assets/image/arrow-up.svg";
import DarkArrowUp from "../assets/image/dark-arrow-up.svg";
import ArrowDown from "../assets/image/arrow-down.svg";
import User from "../assets/image/user-icon.svg";
import CreateUserModal from "./CreateUserModal";
import CreateTeamModal from "./CreateTeamModal";

const UserAndTeams = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [activeTab, setActiveTab] = useState("users");
  const [isModalOpen, setIsModalOpen] = useState(false); // New state for modal
  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false); // New state for modal
  const decryptedToken = getDecryptedToken();
  const [teamData, setTeamData] = useState([]);
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleHover = () => {
    setIsHovered(!isHovered);
  };
   // Function to open the modal
   const openModal = () => {
    setIsModalOpen(true);
  };

  const openTeamModal = () => {
    setIsTeamModalOpen(true)
  }

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const closeTeamModal  = () => {
    setIsTeamModalOpen(false);
  };

  const userAdded = () => {
    axios
    .get(GET_TEAM_MEM, {
      headers: {
        Authorization: `Bearer ${decryptedToken}` // Include the JWT token in the Authorization header
      }
    })
    .then((response) => {
      console.log(response.data.data);
      setTeamData(response.data.data);
    })
    .catch((error) => {
     console.log(error);
    });
  }
  useEffect(() => {
    userAdded();
  }, []);
  return (
    <div className="settings-container">
      <LPSettingSidebar />
      <div className="mainPage">
        <main className="user-team-container">
          <div className="user-team-setting-btn user-team-font">
            <button
              className={`user-team-btn ${
                activeTab === "users" ? "genral-active" : ""
              }`}
              onClick={() => handleTabClick("users")}
            >
              Users
            </button>
            <button
              className={`user-team-btn ${
                activeTab === "teams" ? "genral-active" : ""
              }`}
              onClick={() => handleTabClick("teams")}
            >
              Teams
            </button>
          </div>
          {activeTab === "users" && (
            <>
              <section className="top-msg-display">
                <p className="user-team-font">
                  Create new users, customize user permissions, and remove users
                  from your account
                </p>
              </section>

              <section>
                <div className="search-user-section">
                  <div className="search-box">
                    <input
                      type="text"
                      className="search-input user-team-font"
                      placeholder="Search..."
                    />
                    <span className="search-icon">
                      <img src={SearchIcon} alt="" />
                    </span>
                  </div>

                  <div className="user-export">
                    <button
                      className="user-team-font export-user-btn"
                      onMouseEnter={handleHover}
                      onMouseLeave={handleHover}
                    >
                      {" "}
                      <img
                        src={isHovered ? ExportIcon2 : ExportIcon}
                        alt=""
                        className="export-icon"
                      />
                      Export Users
                    </button>
                    <button className="create-user-btn user-team-font" onClick={openModal}>
                      {" "}
                      Create User
                    </button>
                  </div>
                </div>
              </section>

              <section className="user-table">
                <table>
                  <tr className="user-team-font">
                    <th>
                      <label class="custom-checkbox">
                        <input type="checkbox" className="cb1" />
                        <span class="checkmark"></span>
                      </label>
                    </th>
                    <th>
                      <div className="name-info">
                        <p>Name</p>
                        <div className="arrow-icon">
                          <img src={DarkArrowUp} className="arrow-up" alt="" />
                          <img src={ArrowDown} className="arrow-down" alt="" />
                        </div>
                      </div>
                    </th>

                    <th>
                      <div className="name-info">
                        <p>Team</p>
                        <div className="arrow-icon">
                          <img src={ArrowUp} className="arrow-up" alt="" />
                          <img src={ArrowDown} className="arrow-down" alt="" />
                        </div>
                      </div>
                    </th>
                    <th>
                      <div className="name-info">
                        <p>Access</p>
                        <div className="arrow-icon">
                          <img src={ArrowUp} className="arrow-up" alt="" />
                          <img src={ArrowDown} className="arrow-down" alt="" />
                        </div>
                      </div>
                    </th>
                    <th>
                      <div className="name-info">
                        <p>Last Active</p>
                        <div className="arrow-icon">
                          <img src={ArrowUp} className="arrow-up" alt="" />
                          <img src={ArrowDown} className="arrow-down" alt="" />
                        </div>
                      </div>
                    </th>
                  </tr>
                  <tr>
                    <td>
                      <label class="custom-checkbox">
                        <input type="checkbox" className="cb1" />
                        <span class="checkmark"></span>
                      </label>
                    </td>
                    <td>
                      <div className="user-info">
                        <div className="usericon-name-email">
                          <div className="user-icon-round">
                            <img src={User} alt="" />
                          </div>

                          <div className="user-name-info">
                            <p className="user-name-value">
                              Anant Sign Chauhan
                            </p>
                            <p>anantsingh@123@gmail.com</p>
                          </div>
                        </div>
                        <div>
                          <select
                            name=""
                            id=""
                            className="select-action user-team-font"
                          >
                            <option value="">Action</option>
                          </select>
                        </div>
                      </div>
                    </td>
                    <td className="user-team-font"></td>
                    <td className="user-team-font">Super Admin</td>
                    <td className="user-team-font">3 hours ago</td>
                  </tr>
                  {teamData.map((teamMember) => (
          <tr key={teamMember.id}>
            <td>
              <label className="custom-checkbox">
                <input type="checkbox" className="cb1" />
                <span className="checkmark"></span>
              </label>
            </td>
            <td>
                      <div className="user-info">
                        <div className="usericon-name-email">
                          <div className="user-icon-round">
                            <img src={User} alt="" />
                          </div>

                          <div className="user-name-info">
                            <p className="user-name-value">
                              {teamMember.first_name+" "+teamMember.last_name}
                            </p>
                            <p>{teamMember.email}</p>
                          </div>
                        </div>
                        <div>
                          <select
                            name=""
                            id=""
                            className="select-action user-team-font"
                          >
                            <option value="">Action</option>
                          </select>
                        </div>
                      </div>
                    </td>
                    <td className="user-team-font"></td>
                    <td className="user-team-font"></td>
                    <td className="user-team-font"></td>

            </tr>
                  )
                  )}
                </table>
              </section>
            </>
          )}

          {activeTab === "teams" && <>
          
          <main className="team-container">

        <section className="top-msg-display">
            <p className="user-team-font">Set up your team now for better management.</p>
        </section>

        <section>
            <div className="search-user-section">
                <div className="search-box">
                    <input type="text" className="search-input font-style" placeholder="Search..."/>
                    <span className="search-icon">
                        <img src={SearchIcon} alt="" />
                    </span>
                </div>


                <div className="user-export">
                    <button className="create-user-btn user-team-font"  onClick={openTeamModal}>Create Team</button>
                </div>


            </div>
        </section>

        <section className="user-team-font no-team-added">

            <p className="no-team-para">No Teams added yet</p>

        </section>



    </main>
          
          
          
          
          </>}
        </main>
      </div>
      {isModalOpen && <CreateUserModal onClose={closeModal} onUserAdded={userAdded} />}

      {isTeamModalOpen && <CreateTeamModal onCloseTeamModal={closeTeamModal}/>}
    </div>

    
  );
};

export default UserAndTeams;
