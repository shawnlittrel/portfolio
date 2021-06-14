import React from "react";

function Footer() {
  return (
    <ul className="nav fixed-bottom justify-content-center">
      <li className="nav-item">
        <a
          className="nav-link"
          href="https://github.com/shawnlittrel"
          target="_blank"
          rel="noreferrer"
        >
          <i className="bi bi-github"></i>
        </a>
      </li>
      <li className="nav-item">
        <a
          className="nav-link"
          href="https://www.linkedin.com/in/shawn-littrel-063588139/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="bi bi-linkedin"></i>
        </a>
      </li>
    </ul>
  );
}

export default Footer;
