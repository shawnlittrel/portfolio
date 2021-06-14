import React, { useState } from "react";

function Projects({ type }) {
  const projectList = [
    {
      title: "Oh-Snap",
      description: "A React SPA portfolio for a photographer.",
      tech: 'React',
      image: "images/oh-snap.JPG",
      type: "frontend",
    },
    {
      title: "Budget Tracker",
      description: "A PWA used to track expenses.  The app can be used online or offline, and will make all API requests when an internet connection is detected.",
      tech: "HTML, CSS, Express.js, MongoDB, Mongoose, IndexedDB",
      image: "images/budget-tracker.JPG",
      type: "fullstack",
    },
    {
      title: "Social Network API",
      description: "An API for a simple social network that allows addition and deletion of friends.  Users can record thoughts, and friends can reply to those thoughts.",
      tech: "JavaScript, Express.js, MongoDB, Mongoose",
      image: "images/social-network-api.gif",
      type: "backend",
    },
    {
      title: "Campfire",
      description: "A proof of concept for an app that allows users to find groups near them to join for any given activity.",
      tech: "HTML, custom CSS, JavaScript, Handlebars, Express.js, Faker.js, mySQL",
      image: "images/campfire.JPG",
      type: "fullstack",
    },
    {
      title: "Tech Blog",
      description: "A full-stack application to blog about news, notes, and developments.",
      tech: "HTML, Materialize CSS, Handlebars, mySQL",
      image: "images/tech-blog.JPG",
      type: "fullstack",
    },
    {
      title: "Notebook",
      description: "A web app used to take and save notes.",
      tech: "HTML, Materialize CSS, JavaScript, Express.js",
      image: "images/notebook.JPG",
      type: "fullstack",
    },
    {
      title: "Jobless",
      description: "An app that allows users to research job listings in a given area, then compare that listing with Bureau of Labor Statistics data on salary, job outlook, etc.",
      tech: "HTML, Foundation CSS, JavaScript, jQuery, Google Search API, CareerOneStop API",
      image: "images/jobless.jpg",
      type: "fullstack",
    },
  ];
  const cardStyle = {
       width: '25vw',
       padding: '1vw',
       margin: '2vw'
  }
  //const projectFilter = projectList.filter((project) => projectList.type === type);

  //const [currentProject, setCurrentProject] = useState();

  return (
    <div className="container">
      <div className="row">
        <div className="col text-end">Filter By:</div>
        <div className="col">
          <div
            class="btn-group justify-content-left"
            role="group"
            aria-label="Stack Filter"
          >
            <button type="button" className="btn btn-primary">
              All
            </button>
            <button type="button" className="btn btn-danger">
              Front End
            </button>
            <button type="button" className="btn btn-warning">
              Back End
            </button>
            <button type="button" className="btn btn-success">
              Full Stack
            </button>
          </div>
        </div>
      </div>
      <div className="row">

          {projectList.map((project) => (
               <div className="card-wrapper" style={cardStyle}>
               <div className="card">
                    <img className="card-img-top" src={project.image} alt={project.title} />
                    
                    <h5 className="card-title">
                         {project.title}
                    </h5>
                    <p className="card-text">
                         {project.description}
                    </p>
                    <p className="card-text">
                         Made Using: {project.tech}
                    </p>
               </div>
               <br />
               </div>
          ))}

      </div>
    </div>
  );
}

export default Projects;
