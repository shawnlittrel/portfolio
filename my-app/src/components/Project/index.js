import React, { useState } from 'react';

function Projects({ type }) {
     const projectList = [
          {
               title: 'title',
               description: 'description',
               tech: 'tech used',
               image: '../../assets/images/weather.JPG',
               type: 'frontend'
          },
          {
               title: 'title',
               description: 'description',
               tech: 'tech used',
               image: '../../assets/images/weather.JPG',
               type: 'frontend'
          },
          {
               title: 'title',
               description: 'description',
               tech: 'tech used',
               image: '../../assets/images/weather.JPG',
               type: 'backend'
          },
          {
               title: 'title',
               description: 'description',
               tech: 'tech used',
               image: '../../assets/images/weather.JPG',
               type: 'backend'
          },
          {
               title: 'title',
               description: 'description',
               tech: 'tech used',
               image: '../../assets/images/weather.JPG',
               type: 'fullstack'
          },
          {
               title: 'title',
               description: 'description',
               tech: 'tech used',
               image: '../../assets/images/weather.JPG',
               type: 'fullstack'
          },
          {
               title: 'title',
               description: 'description',
               tech: 'tech used',
               image: '../../assets/images/weather.JPG',
               type: 'fullstack'
          },
          {
               title: 'title',
               description: 'description',
               tech: 'tech used',
               image: '../../assets/images/weather.JPG',
               type: 'fullstack'
          },
     ]

     //const projectFilter = projectList.filter((project) => projectList.type === type);

     const [currentProject, setCurrentProject] = useState();

     return (
          <div className="row">
               {projectList.map((project, i) => (
                    <img
                         src={project.image}
                         type={project.type}
                         index={i}
                         alt={project.title}
                         className="project-thumbnail"
                    />
               ))}
          </div>
     )


};

export default Projects;