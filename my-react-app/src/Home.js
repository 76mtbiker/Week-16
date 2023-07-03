import React from "react";
import Crud from "./Crud";

export default function Home() {
  return (
    <div>
      <h1>Trail Time</h1>
      <Navigation />
      <Crud />
      <Footer />
    </div>
  );
}

function Navigation() {
  return (
    <nav>
      <nav className="navbar">
        <a href="https://yeticycles.com/">Team Yeti</a>
        <br />
        <a href="https://www.ridgetorivers.org/">Boise Trail Map</a>
        <br />
        <a href="https://www.performancebike.com/">Great Gear Resource</a>
        <br />
      </nav>
      <img
        src="https://u7q2x7c9.stackpathcdn.com/photos/24/96/371096_3795_XXXL.webp"
        alt="Example Image"
        className="small-image"
      />
    </nav>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2023 Baby Steps Created.</p>
      <nav>
        <p>Let's Learn software Development, along with have fun on are adventures, and create some goals...</p>
      </nav>
    </footer>
  );
}
