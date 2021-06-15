import React from "react";


function ProjectModal({ currentProject, onRequestClose }) {
  const { title, description, tech, image } = currentProject;

  const closeModal = onRequestClose;

  

  return (
    <div>
      <h2>{title}</h2>
      <button
        type="button"
        onClick={closeModal}
        class="btn-close"
        aria-label="Close"
      >
        Close
      </button>
      <img src={image} alt={title} />
      <p>Summary: {description}</p>
      <p>Made using: {tech}</p>
    </div>
  );
}

export default ProjectModal;
