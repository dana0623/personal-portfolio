/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Aboutme from "./components/Aboutme";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import { useState } from "react";
import items from "./data.js";

const allCategories = ["All", ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItem, setMenuItem] = useState(items);
  const [buttons, setButtons] = useState(allCategories);

  const filter = (button) => {
    if (button === "All") {
      setMenuItem(items);
      return;
    }
    const filteredData = items.filter((item) => item.category === button);
    setMenuItem(filteredData);
  };

  return (
    <div>
      <Navbar />
      <Header />
      <Aboutme />
      <Portfolio menuItem={menuItem} button={buttons} filter={filter} />
      <Resume />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
