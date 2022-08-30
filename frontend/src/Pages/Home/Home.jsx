import React from "react";
import Featuredinfo from "../../Components/Featuredinfo/Featuredinfo";
import FeaturedCourse from "../../Components/FeaturedCourses/FeaturedCourse"
import Rightbar from "../../Components/Rightbar/Rightbar";
import "./Home.css";
function Home() {
  return (
    <>
      <div className="home">
        <div className="homeBox">
          <h1 className="EnrolHomeTitle">Enrolled Courses</h1>
          <div className="homeInfo">
            <span className="courseSub">Programmes you are enrolled in</span>
            <button className="viewMore">View More &#62;</button>
          </div>
          <Featuredinfo />
          <h1 className="SuggestHomeTitle">Suggested Courses</h1>
          <div className="homeInfo">
            <span className="courseSub">
              According to your interest , these are the suggested courses
            </span>
            <button className="viewMore">View More &#62;</button>
          </div>
          <FeaturedCourse />
          </div>
      </div>
      <Rightbar />
    </>
  );
}

export default Home;
