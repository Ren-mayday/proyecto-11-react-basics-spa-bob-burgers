import React from "react";
import Tabs from "../components/Tabs";
import Title from "../components/Title";
import "./About.css";

const About = () => {
  const tabsData = [
    {
      label: "The Show",
      content: (
        <div className="content-section">
          <h2>About Bob's Burgers</h2>
          <p>
            Bob's Burgers is an American animated sitcom created by Loren Bouchard that premiered on January 9, 2011.
            The show centers on the Belcher family, who run a hamburger restaurant.
          </p>
          <h3>Where to Watch</h3>
          <ul>
            <li>Hulu</li>
            <li>Disney+</li>
            <li>Fox</li>
          </ul>
        </div>
      ),
    },
    {
      label: "The Project",
      content: (
        <div className="content-section">
          <h2>About This Project</h2>
          <p>
            This is a Single Page Application (SPA) built with React and Vite. It uses the Bob's Burgers API to fetch
            character data.
          </p>
          <h3>Technologies Used</h3>
          <ul>
            <li>React</li>
            <li>Vite</li>
            <li>React Router</li>
            <li>Bob's Burgers API</li>
            <li>LocalStorage for caching</li>
          </ul>
        </div>
      ),
    },
    {
      label: "Fun Facts",
      content: (
        <div className="content-section">
          <h2>Fun Facts</h2>
          <ul>
            <li>The restaurant's address is 659 Ocean Avenue</li>
            <li>Each episode title is a pun</li>
            <li>The Burger of the Day is different in every episode</li>
            <li>Gene's keyboard is a Casio SK-5</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <main className="about-page page-container">
      <Title className="chewy-title" text={"About"} />
      <Tabs tabs={tabsData} />
    </main>
  );
};

export default About;
