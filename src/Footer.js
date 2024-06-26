import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <hr />
      <div className="mt-3">
        This project was coded by{" "}
        <a href="https://jennahcodes.com" target="_blank" rel="noreferrer">
          Jennah Applebaum
        </a>
        , and is open-sourced on{" "}
        <a
          href="https://github.com/jmapplebaum"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}
