import React from "react";
import "./Sidebar.css";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import PeopleIcon from "@mui/icons-material/People";
import HelpIcon from "@mui/icons-material/Help";
import SchoolIcon from "@mui/icons-material/School";
import { Link } from "react-router-dom";

import logo from "./muj.png";

function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <div className="sidebarWrapper">
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Dashbord</h3>
            <ul className="sidebarList">
              <Link to="/" className="link">
                <li className="sidebarListItem">
                  <LineStyleIcon className="sidebarIcon" />
                  Home
                </li>
              </Link>
            </ul>
          </div>
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Quick Menu</h3>
            <ul className="sidebarList">
              <Link to="/" className="link">
                <li className="sidebarListItem">
                  <PeopleIcon className="sidebarIcon" />
                  Peer Learning
                </li>
              </Link>
              <li className="sidebarListItem">
                <HelpIcon className="sidebarIcon" />
                Support
              </li>
              <Link to="/mentor" className="link">
                <li className="sidebarListItem">
                  <SchoolIcon className="sidebarIcon" />
                  Mentor
                </li>
              </Link>
            </ul>
          </div>
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Notification</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem ">
                <MailOutlineIcon className="sidebarIcon" />
                Mail
              </li>
              <Link to="/feedback" className="link">
                <li className="sidebarListItem">
                  <DynamicFeedIcon className="sidebarIcon" />
                  Feedback
                </li>
              </Link>
            </ul>
            <div className="profileSidebar">
              <img src={logo} alt="y" className="logoSidebar" />
              <span className="infoSidebar">
                Edit your Profile Information Here
              </span>
              <Link to="/user" className="link">
                <button className="buttonSidebar">Edit Profile</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
