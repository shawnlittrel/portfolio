import React, { useState } from "react";

function Resume() {
  const summary = `Committed automation programmer and project manager, now aspiring to
     develop extraordinary web applications. Background in home and
     commercial AV and systems engineering provides experience meeting tight,
     moving deadlines, teamwork, customer training and satisfaction, and
     project lifecycle management. Consummate communicator with strong
     interpersonal skills, and the ability to lead teams to meet and far
     surpass service, quality, and performance expectations. Superior
     critical thinking, decision making, people management, and analytical
     skills.`;

  const experience = [
    {
      role: "Security Supervisor",
      employer: "Performance Audio Video",
      location: "Phoenix, AZ",
      date: "2020-Present",
      description:
        "Installed, programmed, and serviced home theater, automation, and security products for high value clients in the greater Phoenix area.  Developed training program to teach technicians how to operate, program, and integrate multiple types of security systems.  Programmed Control4 systems to integrate audio, video, security, and other home products.",
    },
    {
     role: "Project Engineer",
     employer: "Ford Audio Video",
     location: "Phoenix, AZ",
     date: "2019-2020",
     description:
       "Designed, programmed, installed, and commissioned  large commercial audio/video systems for clients in various locations throughout the United States.  Worked in teams from 2-10 people to meet rapidly changing goals and deadlines.  Accurately read and interpreted blueprints to achieve 100% accuracy on all installed projects.  Achieved certifications from QSYS and Avixa for commercial AV system design.",
   },
   {
     role: "Service Manager",
     employer: "Lanza AV",
     location: "Phoenix, AZ",
     date: "2016-2019",
     description:
       "Managed expectations through the clear direction of a multifaceted team responsible for managing all service calls promptly and efficiently, in addition to delivering unparalleled customer service and support.  Ensured strict alignment with operational policies, practices, and procedures while providing exceptional quality service with high efficiency. Supported operations by taking service calls and performing technical support as needed.  Generated recurring field sales by developing productive relationships with each customer, identifying needs, and presenting viable product/service solutions.  Provided leadership, guidance, and support to a staff of six technicians; as subject matter expert, serve as a source of guidance, information, and support to all members of the team.  Served as Lead Technician on job sites, providing leadership, setting expectations, and evaluating completed works to ensure alignment with performance and quality standards.  Planned and implemented a software integration which interfaced with QuickBooks allowing for greater efficiency and a more consolidated and streamlined display of service visit details.  Pitched a proposal to the owner which resulted in the entire team gaining access to affordable health coverage.",
   },
  ];

  const education = [
    {
      degree: "Certificate",
      school: "University of Arizona",
      date: "In Progress",
    },
    {
      degree: "BS, Electronics Engineering Technology",
      school: "Hamilton Technical College",
      date: "2014",
    },
  ];
  return (
    <div className="container">
      <h3 className="text-center">Summary:</h3>
      <p className="justify-content-center">{summary}</p>
      <br />
      <h3 className="text-center">Technical Skills:</h3>
      <p>
        <strong>Front End:</strong> JavaScript ES6, HTML5, CSS3, Handlebars,
        React, jQuery
      </p>
      <p>
        <strong>Back End:</strong> SQL, MySQL, NoSQL, Express.js, Node.js, AJAX
      </p>
      <p>
        <strong>Other:</strong> Github, Heroku, Webpack, Regex
      </p>
      <br />
      <h3 className="justify-content-center">Experience</h3>
      {experience.map((job) => (
        <div className="container">
          <div className="row">
            <div className="col s6">
              <h4 className="text-start">{job.role}</h4>
              <h5 className="text-start">{job.employer}</h5>
            </div>
            <div className="col s6">
              <h4 className="text-end">{job.date}</h4>
              <h5 className="text-end">{job.location}</h5>
            </div>
          </div>
          <div className="row">
            <p>{job.description}</p>
          </div>
        </div>
      ))}
      <h3 className="justify-content-center">Education</h3>
      {education.map((ed) => (
        <div className="container">
          <div className="row">
            <div className="col s4 text-start">
              <strong>{ed.degree}</strong>
            </div>
            <div className="col s4 text-center">{ed.school}</div>
            <div className="col s4 text-end">{ed.date}</div>
          </div>
        </div>
      ))}
     <br />
    </div>
  );
}

export default Resume;
