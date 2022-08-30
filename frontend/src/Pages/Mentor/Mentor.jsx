import React from "react";
import "./Mentor.css";
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@mui/icons-material";
function Mentor() {
  return (
    <>
      <div className="mentor">
        <div className="mentorTitleContainer">
          <h1 className="mentorTitle">Your Mentor</h1>
          {/* <Link to="./newmentor">
            <button className="mentorAddButton">Create</button>
          </Link> */}
        </div>
        <div className="mentorContainer">
          <div className="mentorShow">
            <div className="mentorShowTop">
              <img
                src="https://www.eecs.mit.edu/sites/default/files/person-photos/grimson.jpg"
                alt=""
                className="mentorShowImg"
              />
              <div className="mentorShowTopTitle">
                <span className="mentorShowmentorname">W. Eric L Grimson</span>
                <span className="mentorShowmentorTitle">Professor of SCIT</span>
              </div>
            </div>
            <div className="mentorShowBottom">
              <span className="mentorShowTitle">Account Details</span>
              <div className="mentorShowInfo">
                <PermIdentity className="mentorShowIcon" />
                <span className="mentorShowInfoTitle">egrimson_mit</span>
              </div>
              <div className="mentorShowInfo">
                <CalendarToday className="mentorShowIcon" />
                <span className="mentorShowInfoTitle">10.12.1964</span>
              </div>
              <span className="mentorShowTitle">Contact Details</span>
              <div className="mentorShowInfo">
                <PhoneAndroid className="mentorShowIcon" />
                <span className="mentorShowInfoTitle">+1 617-253-4645</span>{" "}
              </div>
              <div className="mentorShowInfo">
                <MailOutline className="mentorShowIcon" />
                <span className="mentorShowInfoTitle">
                egrimson@mit.edu
                </span>
              </div>
              <div className="mentorShowInfo">
                <LocationSearching className="mentorShowIcon" />
                <span className="mentorShowInfoTitle">New York, USA</span>
              </div>
            </div>
          </div>
          <div className="mentorUpdate">
            <span className="mentorUpdateTitle">Description</span>
            <span className="mentorDescription">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              iste, est quod, mollitia sit distinctio, dolores quos nobis fugit
              provident rerum. Quo quod officiis iure, minus consectetur illo
              quas rerum repudiandae distinctio, ratione, exercitationem vero
              quae cum hic corporis! Fugit alias error sequi, similique
              obcaecati deleniti vel quam quod animi reiciendis repellat?
              Aliquid distinctio rerum facilis pariatur illo minus expedita,
              nobis recusandae aspernatur reprehenderit vitae illum inventore
              odio temporibus asperiores aperiam sed nemo eos ex! Dignissimos
              atque, saepe, eum maiores natus quibusdam dicta laborum aliquam,
              error maxime exercitationem adipisci assumenda aliquid quaerat at.
              Perspiciatis dolorem ad numquam nemo iste, quidem voluptatum, sit
              temporibus facere quaerat delectus, repellendus error corporis
              officia? Corporis, dolorum totam quibusdam consequatur quae earum
              ipsum reprehenderit, qui temporibus ratione dolore voluptates quas
              fuga necessitatibus itaque sed. Eveniet sapiente repudiandae,
              accusantium at reprehenderit dignissimos libero reiciendis rem?
              Vel velit ratione amet facere libero debitis perspiciatis
              excepturi minima cum, modi odio nesciunt dolor? Officia quisquam
              accusantium reiciendis accusamus ad aperiam ipsa, corporis
              sapiente nam voluptatem ducimus. Ullam molestias nisi amet
              eligendi harum culpa id eaque corrupti voluptatem, veritatis
              pariatur excepturi quo asperiores at sit optio, repellat
              voluptatum impedit quis. Est atque quam magnam, praesentium
              sapiente quas delectus aspernatur, tempore eveniet neque iste
              quibusdam error cum, aliquam dicta. 
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mentor;
