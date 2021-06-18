import React from "react";
import About from "../../components/About";
import Contact from "../../components/Contact";
import Project from "../../components/Project";
import Resume from "../../components/Resume";

function Content(props) {
  const skills = [
    {
      name: "Full Stack Web Developer",
      type: "certificate",
      date: 2021,
      school: "University of Arizona",
    },
    {
      name: "Microsoft MTA - SQL",
      type: "certificate",
      date: 2018,
      school: "Self-study",
    },
    {
      name: "BS Electronics Engineering",
      type: "degree",
      date: 2014,
      school: "Hamilton Technical College",
    },

    {
      name: "HTML5",
      type: "frontend",
    },
    {
      name: "CSS",
      type: "frontend",
    },
    {
      name: "CSS Frameworks",
      type: "frontend",
    },
    {
      name: "React",
      type: "frontend",
    },
    {
      name: "JavaScript ES6+",
      type: "frontend",
    },
    {
      name: "jQuery",
      type: "frontend",
    },
    {
      name: "AJAX",
      type: "backend",
    },
    {
      name: "Node.js",
      type: "backend",
    },
    {
      name: "Express.js",
      type: "backend",
    },
    {
      name: "SQL",
      type: "backend",
    },
    {
      name: "noSQL",
      type: "backend",
    },
    {
      name: "MongoDB",
      type: "backend",
    },
    {
      name: "Webpack",
      type: "other",
    },
    {
      name: "Git",
      type: "other",
    },
    {
      name: "Heroku",
      type: "other",
    },
    {
      name: "React Router",
      type: "frontend",
    },
    {
      name: "GraphQL",
      type: "backend",
    },
  ];

  let { currentCategory } = props;

  if (currentCategory === "contact") {
    return <Contact />;
  } else if (currentCategory === "projects") {
    return <Project />;
  } else if (currentCategory === "resume") {
    return <Resume skills={skills} />;
  } else {
    return <About skills={skills} />;
  }
}

export default Content;
