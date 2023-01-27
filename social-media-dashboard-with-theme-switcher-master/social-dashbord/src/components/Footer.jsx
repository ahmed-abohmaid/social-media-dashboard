import React from "react";

const Footer = () => {
  return (
    <div role="contentinfo">
      {" "}
      <div className="attribution mt-5">
        <span className="text-light-darkBlue dark:text-white">
          Challenge by
        </span>{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          rel="noreferrer"
          target="_blank"
        >
          <span className="text-blue-400">Frontend Mentor</span>
        </a>
        . <span className="text-light-darkBlue dark:text-white">Coded by</span>{" "}
        <a
          href="https://github.com/Ahmed-AboHmaiD"
          rel="noreferrer"
          target="_blank"
        >
          <span className="text-blue-400">Ahmed Ramadan (AboHmaiD)</span>
        </a>
        .
      </div>
    </div>
  );
};

export default Footer;
