import React, { useState } from "react";
import Modal from "react-modal";

function Projects() {
     //log all projects we want to display
  const projectList = [
    {
      title: "Oh-Snap",
      description: "A React SPA portfolio for a photographer.",
      tech: "React",
      image: "images/oh-snap.JPG",
      type: "frontend",
    },
    {
      title: "Budget Tracker",
      description:
        "A PWA used to track expenses.  The app can be used online or offline, and will make all API requests when an internet connection is detected.",
      tech: "HTML, CSS, Express.js, MongoDB, Mongoose, IndexedDB",
      image: "images/budget-tracker.JPG",
      type: "fullstack",
    },
    {
      title: "Social Network API",
      description:
        "An API for a simple social network that allows addition and deletion of friends.  Users can record thoughts, and friends can reply to those thoughts.",
      tech: "JavaScript, Express.js, MongoDB, Mongoose",
      image: "images/social-network-api.gif",
      type: "backend",
    },
    {
      title: "Campfire",
      description:
        "A proof of concept for an app that allows users to find groups near them to join for any given activity.",
      tech: "HTML, custom CSS, JavaScript, Handlebars, Express.js, Faker.js, mySQL",
      image: "images/campfire.JPG",
      type: "fullstack",
    },
    {
      title: "Tech Blog",
      description:
        "A full-stack application to blog about news, notes, and developments.",
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
      description:
        "An app that allows users to research job listings in a given area, then compare that listing with Bureau of Labor Statistics data on salary, job outlook, etc.",
      tech: "HTML, Foundation CSS, JavaScript, jQuery, Google Search API, CareerOneStop API",
      image: "images/jobless.jpg",
      type: "fullstack",
    },
  ];

  //manual styling for project display cards
  const cardStyle = {
    width: "35vw",
    padding: "1vw",
    margin: "auto",
  };

  //manual styling for filter buttons
  const buttonStyle = {
    position: "fixed",
    top: "5vh",
    left: "2vw",
  };

//determine current project
const [currentProject, setCurrentProject] = useState({
     title: "",
     description: "",
     tech: "",
     image: "",
     type: ""
});

//set current project on click
function clickProject(title) {
     if (title === "Oh-Snap") {
          setCurrentProject(projectList[0])
     }
     else if (title === 'Budget Tracker') {
          setCurrentProject(projectList[1])
     }
     else if (title === 'Social Network API') {
          setCurrentProject(projectList[2])
     }
     else if (title === 'Campfire') {
          setCurrentProject(projectList[3])
     }
     else if (title === 'Tech Blog') {
          setCurrentProject(projectList[4])
     }
     else if (title === 'Notebook') {
          setCurrentProject(projectList[5])
     }
     else if (title === 'Jobless') {
          setCurrentProject(projectList[6])
     }

}


  //monitor status of modal visibility
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  //sync and access references
  function afterOpenModal(title) {}

  function closeModal() {
    setIsOpen(false);
  }

  console.log('current proj', currentProject);
  console.log('modal', modalIsOpen);

  //const projectFilter = projectList.filter((project) => projectList.type === type);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="buttonContainer" style={buttonStyle}>
            <h4>Filter By:</h4>
            <div
              className="btn-group-vertical"
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
        <div className="col-sm-11">
          {projectList.map((project) => (
            <div 
            className="card-wrapper" 
            style={cardStyle}         
            >
              <div 
              className="card" 
              key={project.id} 
              onClick={openModal}
              >
                <img
                  className="card-img-top"
                  src={project.image}
                  alt={project.title}
                  onClick={clickProject(project.title)}
                />
                <h5 className="card-title">{project.title}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        currentProject={currentProject}
      />
    </div>
  );
}

export default Projects;
