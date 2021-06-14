import React from 'react';
import About from "../../components/About";
import Contact from "../../components/Contact";
import Project from "../../components/Project";
import Resume from "../../components/Resume";

function Content(props) {

     let { currentCategory } = props;

     if(currentCategory === 'contact') {
          return <Contact />
     }
     else if(currentCategory === 'projects') {
          return <Project />
     }
     else if(currentCategory === 'resume') {
          return <Resume />
     }
     else {
          return <About />
     }

};

export default Content;