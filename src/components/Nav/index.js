import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  const { navCategories, setCurrentCategory, currentCategory } = props;

  return (
    <nav>
      <ul className="nav nav-pills justify-content-center">
        {navCategories.map((c) => (
          <li className="nav-item" key={c.name}>
            <a className="nav-link" href={`#${c.name}`} onClick={() => {
              setCurrentCategory(c.name);
            }}>
              {c.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
