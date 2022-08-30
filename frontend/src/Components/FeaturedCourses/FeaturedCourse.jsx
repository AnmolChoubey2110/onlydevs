import React from "react";
import "./FeaturedCourse.css";
function Featuredinfo() {
  return (
    <div className="featured">
        <a className="featuredItem" target="_blank" href="https://www.coursera.org/programs/manipal-university-jaipur-ura2a/browse?productId=XbrUuL9AEeyRUA73PlX3yQ&productType=s12n&query=meta+backend&showMiniModal=true&source=search">

      <div >
        <img
          src="https://blog.logomyway.com/wp-content/uploads/2021/11/meta-logo.png"
          alt=""
          className="featuredImg"
        />
    
        <div className="featuredInformation" >
            
          <span className="featuredCourse">Meta Back-End Developer</span>
          <div className="featuredCourseContainer">
            <span className="featuredSub">
            Ready to gain new skills and learn the tools developers use to create websites and web applications? This 10-course program, designed by the software engineering experts at  Meta.
            </span>
          </div>
          <div className="featuredCourseInfo">
            <span className="featuredSub">Offerd By:- Meta </span>
            <span className="featuredSub">Duration:- 8 Weeks</span>
            <span className="featuredSub">Beginner</span>
          </div>
          
        </div>
      </div>
      </a>
      <a className="featuredItem" target="_blank" href="https://www.coursera.org/programs/manipal-university-jaipur-ura2a/browse?productId=eDu3y3Q7EeWKsgrp3VnvAw&productType=course&query=meta+backend&showMiniModal=true&source=search" >
      <div>
        <img
          src="https://d57439wlqx3vo.cloudfront.net/iblock/bc0/bc0f0fade6094e32d26afe9ee426bf47/a1d39b9944184055866844a5d88fdec3.png"
          alt=""
          className="featuredImg"
        />
        <div className="featuredInformation">
          <span className="featuredCourse">Google SEO Capstone Project</span>
          <div className="featuredCourseContainer">
            <span className="featuredSub">
            SEO is a dynamic and growing career field that demands knowledge and skills in a variety of website optimization strategies and tactics in order to be successful.            </span>
          </div>
          <div className="featuredCourseInfo">
            <span className="featuredSub">Offerd By:- Google</span>
            <span className="featuredSub">Duration:- 2 Hours</span>
            <span className="featuredSub">Intermediate</span>
          </div>
        </div>
      </div>
      </a>
    </div>
  );
}

export default Featuredinfo;
