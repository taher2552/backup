import React, { useState, useEffect } from "react";
import "./styles/LPleads.css";
import axios from "axios";
import {
  UPDATE_LEAD,
  GETNOTEBYSOURCE,
  GET_LEAD_ID,
  handleLogout,
  getDecryptedToken,
} from "./utils/Constants";
import userIcon from "../assets/image/user-img.png";
import AddNotes from "./AddNotes";
import LeadDocUp from "./LeadDocUp";

const Modal = ({ selectedItem, closeModal, onLeadAdded }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isEditable, setIsEditable] = useState(false);
  const [editedItem, setEditedItem] = useState('');
  const [updateMessage, setUpdateMessage] = useState("");
  const [activeTab, setActiveTab] = useState("notes"); // Initial active tab
  const [notes, setNotes] = useState();
  const [stateBtn, setStateBtn] = useState(0);
  const decryptedToken = getDecryptedToken();
  const [name, setName] = useState("");
  const [owner, setOwner] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [isHoverDisabled, setIsHoverDisabled] = useState(false);


  const fetchLead = () => {
    axios
      .get(GET_LEAD_ID + selectedItem.id, {
        headers: {
          Authorization: `Bearer ${decryptedToken}` // Include the JWT token in the Authorization header
        }
      })
      .then((response) => {
        console.log(response.data.data[0]);
        setEditedItem(response.data.data[0]);
        setName(response.data.data[0].first_name + " " + response.data.data[0].last_name);
        setOwner(response.data.data[0].ownerf_name + " " + response.data.data[0].ownerl_name)
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchLead();
  }, []);

  const getStatusBackgroundColor2 = () => {
    switch (editedItem.priority) {
      case "Imp":
        return "#ff4040";
      case "Avg":
        return "#ffb42e";
        case "Cool":
          return "#ffb42e";
      
      default:
        return "";
    }
  }

  const getStatusBackgroundColor = () => {
    switch (editedItem.status) {
      case "New":
        return "#5181FF";
      case "Open":
        return "#B543EB";
      case "In Progress":
        return "#63C257";
      case "Open deal":
        return "#FD9802";
      case "Unread":
        return "#797979";
    
      default:
        return ""; // Default background color
    }

 


    };
    useEffect(() => {
      fetchNotes();
    }, []);


    const fetchNotes = () => {
      axios
        .get(GETNOTEBYSOURCE + selectedItem.id, {
          headers: {
            Authorization: `Bearer ${decryptedToken}`, // Include the JWT token in the Authorization header
          },
        })
        .then((response) => {
          if (response.data.status === 1) {
            setNotes(response.data.data.length);
          } else {
            if (response.data.message === "Token has expired") {
              alert(response.data.message);
              handleLogout();
            }
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };

    const handleInputChange = (e) => {
      setEditedItem({
        ...editedItem,
        [e.target.name]: e.target.value,
      });
      setStateBtn(1);
    };
    const handleNameChange = (e) => {
      setName(e.target.value);
      setStateBtn(1);
    };
    const handleOwnerChange = (e) => {
      setOwner(e.target.value);
      setStateBtn(1);
    };
    const toggleEditable = (e) => {
      e.preventDefault();
      setIsEditable(!isEditable);
      setIsDisabled(!isDisabled);
      setIsHoverDisabled(!isHoverDisabled);
    };

    const handleUpdateClick = (event) => {
      event.preventDefault();

      const updatedLead = {
        // Update only the desired properties
        lead_name: editedItem.lead_name,
        first_name: name.split(" ")[0],
        last_name: name.split(" ")[1],
        position: editedItem.position,
        phone: editedItem.phone,
        source: editedItem.source,
        company_name: editedItem.company_name,
        value: editedItem.value,
        email: editedItem.email,
        type: editedItem.type,
        priority: editedItem.priority,
        status: editedItem.status,
        address1: editedItem.address1,
        city: editedItem.city,
        state: editedItem.state,
        country: editedItem.country,
        pin: editedItem.pin,
        // ownerf_name: owner.split(" ")[0],
        // ownerl_name: owner.split(" ")[1],
        // owner_email:editedItem.email,
        // owner_phone:editedItem.phone,
      };

      axios
        .put(UPDATE_LEAD + selectedItem.id, updatedLead, {
          headers: {
            Authorization: `Bearer ${decryptedToken}`, // Include the JWT token in the Authorization header
          },
        })
        .then((response) => {
          setUpdateMessage("Lead data updated successfully");
          setTimeout(() => {
            setUpdateMessage("");
          }, 30000); // Clear message after 1 minute (60000 milliseconds)
        })
        .catch((error) => {
          console.log(error);
        });

      setIsEditable(false);
      onLeadAdded();
    };

    const handleTabClick = (tab) => {
      setActiveTab(tab);
    };

    const normalStyling = {
      textAlign: "left",
      fontFamily: "Lexend Deca",
      fontSize: '1.125rem',
      fontWeight: 500,
      color: '#1e2224',
      lineHeight: '17px',
      border: "1px solid transparent",
      width: '12rem'
    }

    const editStyling = {
      border: "1px solid #dcdcdc",
      textAlign: "left",
      fontFamily: "Lexend Deca",
      fontSize: '1.125rem',
      fontWeight: 500,
      color: '#1e2224',
      lineHeight: '17px',
      width: '12rem',

      ':hover': {
        backgroundColor: isHoverDisabled ? 'rgb(227, 225, 225)' : '',
        transition: isHoverDisabled ? 'all .5s ease-in-out' : '',
        cursor: isHoverDisabled ? 'pointer' : ''
      }
    }

    const normalStylingInput = {
      color: '#1e2224',
      fontWeight: 400,
      border: '1px solid #dcdcdc',
      outline: 'rgb(59, 59, 59)',
      backgroundColor: '#ffffff',
      fontSize: '0.8rem',
      fontFamily: "Lexend Deca",
      borderRadius: '0.3125rem',
      padding: '0.3rem',
      border: "1px solid transparent",
      height: '2rem'

    }

    const editStylingInput = {

      color: '#1e2224',
      fontWeight: 400,
      border: '1px solid #dcdcdc',
      outline: 'rgb(59, 59, 59)',
      backgroundColor: '#ffffff',
      fontSize: '0.8rem',
      fontFamily: "Lexend Deca",
      borderRadius: '0.3125rem',
      padding: '0.3rem',
      border: "1px solid #dcdcdc",
      height: '2rem',

      ':hover': {
        backgroundColor: isHoverDisabled ? 'rgb(227, 225, 225)' : '',
        transition: isHoverDisabled ? 'all .5s ease-in-out' : '',
        cursor: isHoverDisabled ? 'pointer' : ''
      },
      ':focus': {
        border: '1px solid #E2E9F2',
        boxShadow: 'none'
      }


    }

    const normalStylingSelect1 = {
      backgroundColor: getStatusBackgroundColor2(),
      /* height: 32px; */
      color: ' #ffffff !important',
      fontSize: ' 0.8rem',
      fontFamily: '"Lexend Deca", sans-serif',
      fontWeight: 400,
      padding: '0.3rem',
      borderRadius: '5px',
      textTransform: 'capitalize',
      WebkitAppearance: 'none',
      MozAppearance: 'none',
      appearance: 'none',
      border: '1px solid transparent',
      height: '2rem',
    }
    const editStylingSelect1 = {
      width: '100%',
      color: ' #1e2224',
      fontWeight: 400,
      border: '1px solid #dcdcdc',
      outline: 'rgb(59, 59, 59)',
      backgroundColor: '#ffffff',
      fontSize: '0.8rem',
      fontFamily: "Lexend Deca",
      borderRadius: '0.3125rem',
      padding: '0.1rem',
      height: '2rem',

    }
    const normalStylingSelect2 = {
      backgroundColor: editedItem.status && getStatusBackgroundColor(),
      /* height: 32px; */
      color: ' #ffffff !important',
      fontSize: ' 0.8rem',
      fontFamily: '"Lexend Deca", sans-serif',
      fontWeight: 400,
      padding: '0.3rem',
      borderRadius: '5px',
      textTransform: 'capitalize',
      WebkitAppearance: 'none',
      MozAppearance: 'none',
      appearance: 'none',
      border: '1px solid transparent',
      height: '2rem',
    }
    const editStylingSelect2 = {
      width: '100%',
      color: ' #1e2224',
      fontWeight: 400,
      border: '1px solid #dcdcdc',
      outline: 'rgb(59, 59, 59)',
      backgroundColor: '#ffffff',
      fontSize: '0.8rem',
      fontFamily: "Lexend Deca",
      borderRadius: '0.3125rem',
      padding: '0.1rem',
      height: '2rem',

    }
    return (
      <div className="modal">
        <div className="customization_popup_container">

          <span className="close" onClick={closeModal}>
            <i className="fa-sharp fa-solid fa-xmark"></i>
          </span>
          <div className="user-details--left">
            <div className="user-details--heading">
              <div className="user-details-imgBox">
                <img src={userIcon} alt="user" />
                <p>

                  <>
                    {isLoading ? (<span>-</span>) : (<> <input
                      type="text"
                      name="lead_name"
                      value={editedItem.lead_name}
                      onChange={handleInputChange}
                      style={isEditable ? editStyling : normalStyling}
                      disabled={isDisabled}
                    />
                      <br /></>)
                    }
                  </>

                  <span>
                    Last Updated:{" "}
                    {editedItem && editedItem.update_date
                      ? editedItem.update_date.split("T")[0]
                      : ""}
                  </span>
                </p>
              </div>
              <a href="#" className="edit-details" onClick={toggleEditable}>
                <i className="fa-solid fa-pen"></i>
              </a>
            </div>
            <div className="leadDetailsLeft">
              {updateMessage && <p className="updateMsg">{updateMessage}</p>}
              <div className="detailsBox">
                <p className="detailHead">LEAD INFORMATION</p>
                <div className="detailsContent">
                  <div
                    className="detailsLeftContainer"
                    
                  >
                    <p>Name</p>
                    <p>Title</p>
                    <p>Phone</p>
                    <p>Lead Source</p>
                    <p>Company</p>
                    <p>Annual Revenue</p>
                    <p>Email</p>
                    <p>Industry</p>
                    <p>Lables</p>
                    <p>Status</p>
                  </div>
                  <div className="detailsRightContainer">
                    <p>

                      {isLoading ? (
                        <span>-</span>
                      ) : (
                        <span>
                          <input
                            type="text"
                            value={name}
                            onChange={handleNameChange}
                            style={isEditable ? editStylingInput : normalStylingInput}
                            disabled={isDisabled}
                          />
                        </span>
                      )
                      }
                    </p>
                    <p>

                      {isLoading ? (
                        <span>-</span>
                      ) : (
                        <span>
                          <input
                            type="text"
                            name="position"
                            value={editedItem.position}
                            onChange={handleInputChange}
                            style={isEditable ? editStylingInput : normalStylingInput}
                            disabled={isDisabled}
                          />
                        </span>
                      )
                      }
                    </p>
                    <p>


                      {isLoading ? (
                        <span>-</span>
                      ) : (
                        <span>
                          <input
                            type="text"
                            name="phone"
                            value={editedItem.phone}
                            onChange={handleInputChange}
                            style={isEditable ? editStylingInput : normalStylingInput}
                            disabled={isDisabled}
                          />
                        </span>
                      )
                      }
                    </p>
                    <p>

                      {isLoading ? (
                        <span>-</span>
                      ) : (
                        <span>
                          <input
                            type="text"
                            name="source"
                            value={editedItem.source}
                            onChange={handleInputChange}
                            style={isEditable ? editStylingInput : normalStylingInput}
                            disabled={isDisabled}
                          />
                        </span>
                      )
                      }
                    </p>
                    <p>

                      {isLoading ? (
                        <span>-</span>
                      ) : (
                        <span>
                          <input
                            type="text"
                            name="company_name"
                            value={editedItem.company_name}
                            onChange={handleInputChange}
                            style={isEditable ? editStylingInput : normalStylingInput}
                            disabled={isDisabled}
                          />
                        </span>
                      )
                      }
                    </p>
                    <p>

                      {isLoading ? (
                        <span>-</span>
                      ) : (
                        <span>
                          <input
                            type="text"
                            name="value"
                            value={editedItem.value}
                            onChange={handleInputChange}
                            style={isEditable ? editStylingInput : normalStylingInput}
                            disabled={isDisabled}
                          />
                        </span>
                      )
                      }
                    </p>
                    <p>

                      {isLoading ? (
                        <span>-</span>
                      ) : (
                        <span>
                          <input
                            type="email"
                            name="email"
                            value={editedItem.email}
                            onChange={handleInputChange}
                            style={isEditable ? editStylingInput : normalStylingInput}
                            disabled={isDisabled}
                          />
                        </span>
                      )
                      }
                    </p>
                    <p>

                      {isLoading ? (
                        <span>-</span>
                      ) : (
                        <span>
                          <input
                            type="text"
                            name="type"
                            value={editedItem.type}
                            onChange={handleInputChange}
                            style={isEditable ? editStylingInput : normalStylingInput}
                            disabled={isDisabled}
                          />
                        </span>
                      )
                      }
                    </p>
                    <p>

                      {isLoading ? (
                        <span>-</span>
                      ) : (
                        <span>
                          <select
                            name="priority"
                            id="priority"
                            value={editedItem.priority}
                            onChange={handleInputChange}
                            disabled={isDisabled}
                            style={isEditable ? editStylingSelect1 : normalStylingSelect1}
                            className={isDisabled ? 'disabled' : ''}
                          >
                            <option value="Imp">Imp</option>
                            <option value="Avg">Avg</option>
                            <option value="Cool">Cool</option>
                          </select>
                        </span>
                      )
                      }
                    </p>

                    <p>
                      {isLoading ? (
                        <span>-</span>
                      ) : (
                        <span>
                          <select
                            name="status"
                            id="status"
                            value={editedItem.status}
                            onChange={handleInputChange}
                            disabled={isDisabled}
                            style={isEditable ? editStylingSelect2 : normalStylingSelect2}
                            className={isDisabled ? 'disabled' : ''}
                          >
                            <option value="New">New</option>
                            <option value="Open">Open</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Unread">Unread</option>
                          </select>
                        </span>
                      )
                      }
                    </p>
                  </div>
                </div>
              </div>
              <div className="detailsBox">
                <p className="detailHead">LEAD OWNER</p>
                <div className="detailsContent">
                  <div
                    className="detailsLeftContainer"
                  >
                    <p>Lead Owner</p>
                    <p>Email</p>
                    <p>Contact</p>
                  </div>
                  <div className="detailsRightContainer">
                    <p>

                      {isLoading ? (
                        <span>-</span>
                      ) : (
                        <span>
                          <input
                            type="text"
                            value={owner}
                            onChange={handleOwnerChange}
                            style={isEditable ? editStylingInput : normalStylingInput}
                            disabled={isDisabled}
                          />
                        </span>
                      )
                      }
                    </p>
                    <p>

                      {isLoading ? (
                        <span>-</span>
                      ) : (
                        <span>
                          <input
                            type="email"
                            name="owner_email"
                            value={editedItem.owner_email}
                            style={isEditable ? editStylingInput : normalStylingInput}
                            disabled={isDisabled}
                          />
                        </span>
                      )
                      }
                    </p>
                    <p>


                      {isLoading ? (
                        <span>-</span>
                      ) : (
                        <span>
                          <input
                            type="text"
                            name="owner_phone"
                            value={editedItem.owner_phone}
                            style={isEditable ? editStylingInput : normalStylingInput}
                            disabled={isDisabled}
                          />
                        </span>
                      )
                      }
                    </p>
                  </div>
                </div>
              </div>
              <div className="detailsBox">
                <p className="detailHead">ADDRESS INFORMATION</p>
                <div className="detailsContent">
                  <div
                    className="detailsLeftContainer"
                    
                  >
                    <p>Street</p>
                    <p>City</p>
                    <p>State</p>
                    <p>Country</p>
                    <p>Zip Code</p>
                  </div>
                  <div className="detailsRightContainer">
                    <p>

                      {isLoading ? (
                        <span>-</span>
                      ) : (
                        <span>
                          <input
                            type="text"
                            name="address1"
                            value={editedItem.address1}
                            onChange={handleInputChange}
                            style={isEditable ? editStylingInput : normalStylingInput}
                            disabled={isDisabled}
                          />
                        </span>
                      )
                      }
                    </p>
                    <p>

                      {isLoading ? (
                        <span>-</span>
                      ) : (
                        <span>
                          <input
                            type="text"
                            name="city"
                            value={editedItem.city}
                            onChange={handleInputChange}
                            style={isEditable ? editStylingInput : normalStylingInput}
                            disabled={isDisabled}
                          />
                        </span>
                      )
                      }
                    </p>
                    <p>

                      {isLoading ? (
                        <span>-</span>
                      ) : (
                        <span>
                          <input
                            type="text"
                            name="state"
                            value={editedItem.state}
                            onChange={handleInputChange}
                            style={isEditable ? editStylingInput : normalStylingInput}
                            disabled={isDisabled}
                          />
                        </span>
                      )
                      }
                    </p>
                    <p>

                      {isLoading ? (
                        <span>-</span>
                      ) : (
                        <span>
                          <input
                            type="text"
                            name="country"
                            value={editedItem.country}
                            onChange={handleInputChange}
                            style={isEditable ? editStylingInput : normalStylingInput}
                            disabled={isDisabled}
                          />
                        </span>
                      )
                      }
                    </p>
                    <p>

                      {isLoading ? (
                        <span>-</span>
                      ) : (
                        <span>
                          <input
                            type="text"
                            name="pin"
                            value={editedItem.pin}
                            onChange={handleInputChange}
                            style={isEditable ? editStylingInput : normalStylingInput}
                            disabled={isDisabled}
                          />
                        </span>
                      )
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>