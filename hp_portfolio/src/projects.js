import React from "react";
import "./projects.css";

function Projects() {
  return (
    <div className="overall_projects">
      <h1 className="main_header">Projects</h1>

      {/* list of projects */}
      <div className="project_list">
        {/*  */}
        <div className="iot_project">
          <h2>Iot Form</h2>
          <p>
            This is a form I created during my internship at SKKU. It was used
            for a Hackathon. It was a very fun way to learn React and had a
            taste on back-end with Python.
          </p>
          <p>
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=_y6xLtUXBzw"
            >
              Click here to see a video of the project
            </a>
          </p>
        </div>
        {/*  */}
        <div className="ag_portfolio">
          <h2>August's Portfolio</h2>
          <p>
            This project is a portfolio who I made for a very dear friend of
            mine. It was one of my first times ever coding.
          </p>
          <p>
            <a
              target="_blank"
              href="https://augustshimusicportfolio.netlify.app/"
            >
              Click here to see the project.
            </a>
          </p>
        </div>
        <div className="to_hike">
          <h2>To Hike</h2>
          <p>
            This is project was a 'to-do app' that I created to use for myself.
            It shows my comprehesion of DOM manipulation.
          </p>
          <p>
            <a href="https://tohiketodoapp.netlify.app/" target="_blank">
              Click here to see the project
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
