import React, { useState } from "react";
import Modal from "react-modal";

function Projects() {
  //log all projects available for display
  const projectList = [
    {
      title: "Oh-Snap",
      description: "A React SPA portfolio for a photographer.",
      tech: "React",
      image: "images/oh-snap.JPG",
      type: "frontend",
      github: "https://github.com/shawnlittrel/oh-snap",
    },
    {
      title: "Budget Tracker",
      description:
        "A PWA used to track expenses.  The app can be used online or offline, and will make all API requests when an internet connection is detected.",
      tech: "HTML, CSS, Express.js, MongoDB, Mongoose, IndexedDB",
      image: "images/budget-tracker.JPG",
      type: "fullstack",
      github: "https://github.com/shawnlittrel/budget-tracker",
      live: "https://radiant-tor-99647.herokuapp.com/",
    },
    {
      title: "Social Network API",
      description:
        "An API for a simple social network that allows addition and deletion of friends.  Users can record thoughts, and friends can reply to those thoughts.",
      tech: "JavaScript, Express.js, MongoDB, Mongoose",
      image: "images/social-network-api.gif",
      type: "backend",
      github: "https://github.com/shawnlittrel/social-network-api",
    },
    {
      title: "Campfire",
      description:
        "A proof of concept for an app that allows users to find groups near them to join for any given activity.",
      tech: "HTML, custom CSS, JavaScript, Handlebars, Express.js, Faker.js, mySQL",
      image: "images/campfire.JPG",
      type: "fullstack",
      github: "https://github.com/pahlzachary/group-of-friends",
      live: "https://secret-bastion-06521.herokuapp.com/",
    },
    {
      title: "Tech Blog",
      description:
        "A full-stack application to blog about news, notes, and developments.",
      tech: "HTML, Materialize CSS, Handlebars, mySQL",
      image: "images/tech-blog.JPG",
      type: "fullstack",
      github: "https://github.com/shawnlittrel/tech-blog-mvc",
      live: "https://shawns-tech-blog.herokuapp.com/",
    },
    {
      title: "Notebook",
      description: "A web app used to take and save notes.",
      tech: "HTML, Materialize CSS, JavaScript, Express.js",
      image: "images/notebook.JPG",
      type: "fullstack",
      github: "https://github.com/shawnlittrel/notebook",
    },
    {
      title: "Jobless",
      description:
        "An app that allows users to research job listings in a given area, then compare that listing with Bureau of Labor Statistics data on salary, job outlook, etc.",
      tech: "HTML, Foundation CSS, JavaScript, jQuery, Google Search API, CareerOneStop API",
      image: "images/jobless.jpg",
      type: "fullstack",
      github: "https://github.com/merriammassey/job-search",
      live: "merriammassey.github.io/job-search",
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

  //manual styling for modal
  const modalStyle = {
    width: "100%",
    height: "auto",
  };

  //determine current project
  const [currentProject, setCurrentProject] = useState({
    title: "",
    description: "",
    tech: "",
    image: "",
    type: "",
  });

  //monitor status of modal visibility
  const [modalIsOpen, setIsOpen] = useState(false);

  //function to open Modal
  function openModal() {
    setIsOpen(true);
  }

  //sync and access references
  function afterOpenModal() {}

  //function to close Modal
  function closeModal() {
    setIsOpen(false);
  }

  //determine list of projects to display on page
  const [filteredProject, setFilteredProject] = useState(projectList);

  //filter projects based on button clicked
  function projectFilter(stack) {
    switch (stack) {
      case "all":
        setFilteredProject(projectList);
        break;
      case "frontend":
        setFilteredProject(
          projectList.filter((project) => project.type === "frontend")
        );
        break;
      case "backend":
        setFilteredProject(
          projectList.filter((project) => project.type === "backend")
        );
        break;
      case "fullstack":
        setFilteredProject(
          projectList.filter((project) => project.type === "fullstack")
        );
        break;
      default:
        setFilteredProject(projectList);
    }
  }

  return (
    <div className="container">
      <div className="row" key="firstRow">
        <div className="col" key="colA">
          <div
            className="buttonContainer"
            style={buttonStyle}
            key="buttonContainer"
          >
            <h4 key="filterText">Filter By:</h4>
            <div
              className="btn-group-vertical"
              role="group"
              aria-label="Stack Filter"
              key="buttonGroup"
            >
              <button
                type="button"
                className="btn btn-all"
                key="all"
                onClick={() => {
                  projectFilter("all");
                }}
              >
                All
              </button>
              <button
                type="button"
                className="btn btn-frontend"
                key="frontend"
                onClick={() => {
                  projectFilter("frontend");
                }}
              >
                Front End
              </button>
              <button
                type="button"
                className="btn btn-backend"
                key="backend"
                onClick={() => {
                  projectFilter("backend");
                }}
              >
                Back End
              </button>
              <button
                type="button"
                className="btn btn-all"
                key="fullstack"
                onClick={() => {
                  projectFilter("fullstack");
                }}
              >
                Full Stack
              </button>
            </div>
          </div>
        </div>
        <div className="col-sm-11" key="projectWrapper">
          {filteredProject.map((project, i) => (
            <div
              className="card-wrapper"
              style={cardStyle}
              key={`project${i}Wrapper`}
            >
              <div
                className="card"
                key={`project${i}Card`}
                onClick={() => {
                  setCurrentProject(projectList[i]);
                  openModal();
                }}
              >
                <img
                  className="card-img-top"
                  src={project.image}
                  alt={project.title}
                  key={`project${i}Img`}
                />
                <br />
                <h5
                  className="card-title text-center"
                  key={`project${i}Header`}
                >
                  {project.title}
                </h5>
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
        key={`projectModal`}
      >
        <div key="modalWrapper">
          <h2 key="modalHeader">{currentProject.title}</h2>
          <div className="d-grid gap-2 d-md-flex justify-content-end">
            <button
              type="button"
              onClick={closeModal}
              className="btn-danger"
              aria-label="Close"
              key="modalClose"
            >
              Close
            </button>
          </div>
          <img
            src={currentProject.image}
            alt={currentProject.title}
            style={modalStyle}
            key="modalImg"
          />
          <p key="modalSummary" className="display-6 text-center">
            Summary: {currentProject.description}
          </p>
          <p key="modalTech" className="lead text-center">
            Made using: {currentProject.tech}
          </p>
          <a
            className="thirds-text"
            href={currentProject.github}
            target="_blank"
            rel="noreferrer"
            key={currentProject.github}
          >
            Github Repository
          </a>
          {currentProject.live && (
            <a
              className="thirds-text"
              href={currentProject.live}
              target="_blank"
              rel="noreferrer"
              key={currentProject.live}
            >
              Live Application
            </a>
          )}
          <div className="d-grid gap-2 d-md-flex justify-content-end">
            <button
              type="button"
              onClick={closeModal}
              className="btn-danger"
              aria-label="Close"
              key="modalClose"
            >
              Close
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Projects;
