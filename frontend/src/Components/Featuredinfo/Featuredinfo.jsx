import React from "react";
import "./Featuredinfo.css";
function Featuredinfo() {
  return (
    <div className="featured">
      <a className="featuredItem" target="_blank" href="https://www.coursera.org/programs/manipal-university-jaipur-ura2a/browse?productId=udYNBKoJEeehKwqLCT_WXA&productType=s12n&query=ui+ux&showMiniModal=true&source=search">
      <div >
        <img
          src="https://coursera-university-assets.s3.amazonaws.com/f1/004ff04b1711e7aa5d7f0b94d133cc/Logo_180x180.png"
          alt=""
          className="featuredImg"
        />
        <div className="featuredInformation">
          <span className="featuredCourse">Understanding UI/UX</span>
          <div className="featuredCourseContainer">
            <span className="featuredSub">
            The UI/UX Design Specialization brings a design-centric approach to user interface and user experience design, and offers practical, skill-based instruction centered around a visual communications perspective.
            </span>
          </div>
          <div className="featuredCourseInfo">
            <span className="featuredSub">Offerd By:- caLARTS </span>
            <span className="featuredSub">Duration:- 16 Weeks</span>
            <span className="featuredSub">Beginner</span>
          </div>
        </div>
      </div>
      </a>
      <a className="featuredItem" target="_blank" href="https://www.coursera.org/programs/manipal-university-jaipur-ura2a/browse?productId=3-NBikXzEeWwQw6izX918Q&productType=s12n&query=java&showMiniModal=true&source=search">
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/Duke_University_seal.svg/800px-Duke_University_seal.svg.png"
          alt=""
          className="featuredImg"
        />
        <div className="featuredInformation">
          <span className="featuredCourse">Java and Oops Concepts</span>
          <div className="featuredCourseContainer">
            <span className="featuredSub">
            Take your first step towards a career in software development with this introduction to Java—one of the most in-demand programming languages and the foundation of the Android operating system.</span>
          </div>
          <div className="featuredCourseInfo">
            <span className="featuredSub">Offerd By:- Duke University</span>
            <span className="featuredSub">Duration:- 8 Weeks</span>
            <span className="featuredSub">Beginner</span>
          </div>
        </div>
      </div>
      </a>
    </div>
  );
}

export default Featuredinfo;
