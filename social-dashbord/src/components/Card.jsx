import React from "react";

const Card = ({
  data: { img, todayF, type, userName, followers, up, down },
}) => {
  return (
    <div
      className={`flex flex-col justify-center items-center hover:bg-slate-300 dark:hover:bg-gradient-to-tl dark:hover:from-slate-700 dark:hover:to-slate-800 hover:shadow-md dark:hover:shadow-gray-800 hover:-translate-y-2 cursor-pointer transition-all duration-100 ease relative pt-6 pb-5 bg-lightTheme-card dark:bg-darkTheme-card rounded-md z-10 before:top-0 before:left-0 before:w-full before:h-1 before:absolute before:rounded-tl-xl before:rounded-tr-xl before:z-0
        ${
          type === "facebook"
            ? "before:bg-facebook"
            : type === "twitter"
            ? "before:bg-twitter"
            : type === "youtube"
            ? "before:bg-youtube"
            : "before:bg-gradient-to-r before:from-instaR before:to-instaL"
        }`}
    >
      <div className="flex text-xs items-center">
        <img src={img} alt="logo" className="mr-2" />
        <span className="text-light-blue dark:text-dark-blue">@{userName}</span>
      </div>
      <div className="flex flex-col items-center mt-4">
        <div className="font-bold text-5xl dark:text-white">{followers}</div>
        <p className="uppercase text-xs tracking-big text-light-blue mt-1 dark:text-dark-blue">
          {type !== "youtube" ? "followers" : "subscribers"}
        </p>
      </div>
      <div className="flex items-center mt-6">
        <img
          src={type !== "youtube" ? up : down}
          alt={type !== "youtube" ? "up" : "down"}
        />
        <span
          className={`ml-1 text-xs font-bold ${
            type !== "youtube" ? "text-green" : "text-red"
          }`}
        >
          {todayF} Today
        </span>
      </div>
    </div>
  );
};

export default Card;
