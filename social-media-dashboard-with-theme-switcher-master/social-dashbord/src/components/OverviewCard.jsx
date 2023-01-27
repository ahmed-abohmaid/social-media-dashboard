import React from "react";

const OverviewCard = ({
  text,
  logo,
  status,
  up,
  down,
  presentage,
  color,
  type,
}) => {
  return (
    <div className="p-5 hover:bg-slate-300 hover:shadow-md dark:hover:bg-gradient-to-tl dark:hover:from-slate-700 dark:hover:to-slate-800 cursor-pointer transition-all duration-75 bg-lightTheme-card dark:bg-darkTheme-card rounded-md">
      <div className="flex justify-between items-center">
        <p className="text-light-blue dark:text-dark-blue">{text}</p>
        <div>
          <img src={logo} alt={type} />
        </div>
      </div>
      <div className="flex justify-between mt-4 items-center">
        <p className="text-2xl font-bold dark:text-white">{status}</p>
        <div className="flex items-center">
          <img
            src={color === "green" ? up : down}
            alt={color === "green" ? "up" : "down"}
          />
          <span
            className={`ml-1 xs font-bold ${
              color === "green" ? "text-green" : "text-red"
            }`}
          >
            {presentage}
          </span>
        </div>
      </div>
    </div>
  );
};

export default OverviewCard;
