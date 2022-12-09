import React, { useState } from "react";
import "./App.css";
import { LoremIpsum } from "react-lorem-ipsum";
import Menu from "./components/Menu";
import image from './image.jpg'

function App() {
  const [menuActive, setMenuActive] = useState(false);

  const items = [
    { value: "Home", href: "/home" },
    { value: "About", href: "/about" },
    { value: "Contact", href: "/contact" },
  ];

  return (
    <div className="app">
      <nav>
        <div className="burger-btn" onClick={() => setMenuActive(!menuActive)}>
          <span />
        </div>
      </nav>
      <main>
        <img src={image} alt="image"/>
        <LoremIpsum p={10} />
      </main>
      <Menu
        active={menuActive}
        setActive={setMenuActive}
        header={"Menu"}
        items={items}
      />
    </div>
  );
}

export default App;
