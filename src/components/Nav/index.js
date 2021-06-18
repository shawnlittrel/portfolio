import React, { useState } from "react";

function Nav(props) {
  const { navCategories, setCurrentCategory } = props;

  // //monitor active nav button
  // const [activeClass, setActiveClass] = useState(false);
  // function toggleClass(target) {
    
  //   setActiveClass(!activeClass);


  return (
    <div className="container">
    <nav>
      <ul className="nav nav-justified">
        {navCategories.map((c) => (
          <li className="nav-item" key={c.name}>
            <a
              className="nav-link"
              href={`#${c.name}`}
              onClick={() => {
                setCurrentCategory(c.name);
              }}
            >
              {c.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
    </div>
  );
}

export default Nav;
