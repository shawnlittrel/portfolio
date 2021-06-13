import React, { useState } from "react";
import Footer from "./components/Footer";
import Nav from "./components/Nav/index.js";
import Content from './components/Content'


function App() {
  const navCategories = [
    {
      name: "about",
    },
    {
      name: "projects",
    },
    {
      name: "resume",
    },
    {
      name: "contact",
    },
  ];

  const [currentCategory, setCurrentCategory] = useState(navCategories[0]);

  return (
    <div>
      <Nav
        navCategories={navCategories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      />
      <main> 
        <Content
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
