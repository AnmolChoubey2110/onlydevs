import React from "react";
import CourseBarChart from "../Barchart/CourseBarchart";
import "./Rightbar.css";

function Rightbar() {
  return (
    <>
      <div className="rightbar">
        <div className="rightBarHeading">
          <div className="rightBarTitle">
            <h1>Cousre Progress</h1>
          </div>
          <div className="rightbarChart">
            <CourseBarChart />
          </div>
        </div>
      </div>
    </>
  );
}

export default Rightbar;
