import React, { useState } from 'react'
import LPSettingSidebar from './LPSettingSidebar'
import "./styles/LPSetting.css";
import "./styles/LPUserAndTeam.css";
import SearchIcon from '../assets/image/search.svg';
import ExportIcon from '../assets/image/export.svg';
import ExportIcon2 from '../assets/image/export2.svg';
import ArrowUp from '../assets/image/arrow-up.svg';
import DarkArrowUp from '../assets/image/dark-arrow-up.svg';
import ArrowDown from '../assets/image/arrow-down.svg';
import User from '../assets/image/user-icon.svg';


const UserAndTeams = () => {

    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(!isHovered);
    };
    return (
        <div className='settings-container'>
            <LPSettingSidebar />
            <div className='mainPage'>

                <main className="user-team-container">
                    <div className="user-team-setting-btn user-team-font">
                        <button className="user-team-btn genral-active">Users</button>
                        <button className="user-team-btn ">Teams</button>

                    </div>

                    <section className="top-msg-display">
                        <p className="user-team-font">Create new users, customize user permissions, and remove users from your account</p>
                    </section>

                    <section>
                        <div className="search-user-section">
                            <div className="search-box">
                                <input type="text" className="search-input user-team-font" placeholder="Search..." />
                                <span className="search-icon">
                                    <img src={SearchIcon} alt="" />
                                </span>
                            </div>


                            <div className="user-export">

                                <button className="user-team-font export-user-btn" onMouseEnter={handleHover}
                                    onMouseLeave={handleHover}> <img src={isHovered ?  ExportIcon2  :  ExportIcon } alt="" className='export-icon' />Export Users</button>
                                <button className="create-user-btn user-team-font">  Create User</button>
                            </div>


                        </div>
                    </section>

                    <section className="user-table">

                        
                    <table>
                        <tr className='user-team-font'>
                            <th><input type="checkbox" className="cb1" /></th>
                            <th>
                                <div className='name-info'>
                                    <p>Name</p>
                                    <div className="arrow-icon">
                                    <img src={DarkArrowUp} className="arrow-up" alt="" />
                                    <img src={ArrowDown} className="arrow-down" alt="" />
                                    
                                </div>
                                </div>
                            </th>

                            <th>
                                <div className='name-info'>
                                    <p>Team</p>
                                    <div className="arrow-icon">
                                    <img src={ArrowUp} className="arrow-up" alt="" />
                                    <img src={ArrowDown} className="arrow-down" alt="" />
                                    
                                </div>
                                </div>
                            </th>
                            <th>
                                <div className='name-info'>
                                    <p>Access</p>
                                    <div className="arrow-icon">
                                    <img src={ArrowUp} className="arrow-up" alt="" />
                                    <img src={ArrowDown} className="arrow-down" alt="" />
                                    
                                </div>
                                </div>
                            </th>
                            <th>
                                <div className='name-info'>
                                    <p>Last Active</p>
                                    <div className="arrow-icon">
                                    <img src={ArrowUp} className="arrow-up" alt="" />
                                    <img src={ArrowDown} className="arrow-down" alt="" />
                                    
                                </div>
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <td><input type="checkbox" className="cb1" /></td>
                            <td>
                            <div className="user-info">
                                <div className="usericon-name-email">
                                    <div className='user-icon-round'>

                                        <img src={User} alt="" />
                            
                                    </div>

                                    <div className="user-name-info">
                                        <p className="user-name-value">Anant Sign Chauhan</p>
                                        <p>anantsingh@123@gmail.com</p>
                                    </div>

                                </div>
                                <div>
                
                                    <select name="" id="" className="select-action user-team-font">
                                        <option value="">Action</option>
                                    </select>
                                </div>

                            </div>

                            </td>
                            <td className='user-team-font'></td>
                            <td className='user-team-font'>Super Admin</td>
                            <td className='user-team-font'>3 hours ago</td>
                        </tr>
                       

                    </table>

                    </section>


                </main>

            </div>
        </div>

    )
}

export default UserAndTeams