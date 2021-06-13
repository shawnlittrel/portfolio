import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  const { navCategories, setCurrentCategory, currentCategory } = props;

  return (
    <nav>
      <ul className="nav nav-pills justify-content-center">
        {navCategories.map((c) => (
          <li className="nav-item">
            <a className="nav-link" href={`#${c.name}`} onClick={() => {
              setCurrentCategory(c.name);
            }}>
              {capitalizeFirstLetter(c.name)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
