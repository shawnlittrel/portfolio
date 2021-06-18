import React from "react";

function Resume(props) {
  const { skills } = props;

  //filter and access names of front end skills
  const frontEndSkillsObj = skills.filter((skill) => skill.type === 'frontend');
  const frontEndSkillsNames = Object.values(frontEndSkillsObj).map(skill => skill.name);

  //filter and access names of backend skills
  const backEndSkillsObj = skills.filter((skill) => skill.type === 'backend');
  const backEndSkillsNames = Object.values(backEndSkillsObj).map(skill => skill.name);

  //filter and access names of other skills
  const otherSkillsObj = skills.filter((skill) => skill.type === 'other');
  const otherSkillsNames = Object.values(otherSkillsObj).map(skill => skill.name);

//filter education
  const educationObj = skills.filter((skill) => skill.type === 'degree' || skill.type === 'certificate');

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

  return (
    <div className="container">
      <h3 className="text-center" key="summaryHeader">Summary:</h3>
      <p className="justify-content-center" key="summaryText">{summary}</p>
      <br />
      <h3 className="text-center" key="skillsHeader">Technical Skills:</h3>
      <p key="skillsFrontEnd">
        <strong>Front End:</strong> {frontEndSkillsNames.join(', ')}
      </p>
      <p key="skillsBackEnd">
        <strong>Back End:</strong> {backEndSkillsNames.join(', ')}
      </p>
      <p key="skillsOther">
        <strong>Other:</strong> {otherSkillsNames.join(', ')}
      </p>
      <br />
      <h3 className="justify-content-center" key="experienceHeader">Experience</h3>
      {experience.map((job, i) => (
        <div className="container" key={`${i}Container`}>
          <div className="row" key={`${i}RowA`}>
            <div className="col s6" key={`${i}ColA`}>
              <h4 className="text-start" key={`${i}Role`}>{job.role}</h4>
              <h5 className="text-start" key={`${i}Employer`}>{job.employer}</h5>
            </div>
            <div className="col s6" key={`${i}ColB`}>
              <h4 className="text-end" key={`${i}Date`}>{job.date}</h4>
              <h5 className="text-end" key={`${i}Location`}>{job.location}</h5>
            </div>
          </div>
          <div className="row" key={`${i}RowB`}>
            <p key={`${i}Description`}>{job.description}</p>
          </div>
        </div>
      ))}
      <h3 className="justify-content-center" key="educationHeader">Education</h3>
      {educationObj.map((ed, i) => (
        <div className="container" key={`ed${i}Container`}>
          <div className="row" key={`ed${i}RowA`}>
            <div className="col s4 text-start" key={`ed${i}ColA`}>
              <strong>{ed.name}</strong>
            </div>
            <div className="col s4 text-center" key={`ed${i}School`}>{ed.school}</div>
            <div className="col s4 text-end" key={`ed${i}Date`}>{ed.date}</div>
          </div>
        </div>
      ))}
     <br />
    </div>
  );
}

export default Resume;
