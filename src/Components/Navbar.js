import React from "react";

export default function Navbar() {
  return (
    <nav>
      <img src="../assets/Logos/MainLogo.png" alt="Interno logo" />
      <ul>
        <li>Home</li>
        <li>Pages</li>
        <li>Services</li>
        <li>Project</li>
        <li>Blog</li>
        <li>Contact</li>
        <li>
          <img src="../assets/Icons/Search.png" alt="Search icon" />
        </li>
      </ul>
    </nav>
  );
}
