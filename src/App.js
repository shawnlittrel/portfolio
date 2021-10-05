import React, { useState } from "react";
import Footer from "./components/Footer";
import Nav from "./components/Nav/index.js";
import Content from "./components/Content";

function App() {
  const navCategories = [
    {
      name: "about",
      text: "About Me",
    },
    {
      name: "projects",
      text: "Projects",
    },
    {
      name: "resume",
      text: "Resume",
    },
    {
      name: "contact",
      text: "Contact Me",
    },
  ];


  const [currentCategory, setCurrentCategory] = useState(navCategories[0]);

  const pageStyle = {
    minHeight: "100vh",
    minWidth: "100vw",
    paddingBottom: "1px",
    backgroundImage: `url(/images/woodBG.jpg)`
  };
  return (
    <div style={pageStyle}>
      <Nav
        navCategories={navCategories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      />
      <main>
        <div className="container">
          <Content
            currentCategory={currentCategory}
            setCurrentCategory={setCurrentCategory}
            navCategories={navCategories}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
