import React from "react";
import OverviewCard from "./OverviewCard";
import Down from "../assets/icon-down.svg";
import Up from "../assets/icon-up.svg";
import Facebook from "../assets/icon-facebook.svg";
import Instagram from "../assets/icon-instagram.svg";
import Twitter from "../assets/icon-twitter.svg";
import Youtube from "../assets/icon-youtube.svg";

const OverviewCards = () => {
  return (
    <div className="mt-8" role="main">
      <div className="font-bold text-light-blue dark:text-white text-xl tracking-wide">
        Overview - Today
      </div>
      <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <OverviewCard
          text="Page Views"
          logo={Facebook}
          type="Facebook"
          status="87"
          up={Up}
          down={Down}
          presentage="3"
          color="green"
        />
        <OverviewCard
          text="Likes"
          logo={Facebook}
          type="Facebook"
          status="52"
          up={Up}
          down={Down}
          presentage="2"
          color="red"
        />
        <OverviewCard
          text="Likes"
          logo={Instagram}
          type="Instagram"
          status="5462"
          up={Up}
          down={Down}
          presentage="2257"
          color="green"
        />
        <OverviewCard
          text="Profile Views"
          logo={Instagram}
          type="Instagram"
          status="52K"
          up={Up}
          down={Down}
          presentage="1375"
          color="green"
        />
        <OverviewCard
          text="Reweets"
          logo={Twitter}
          type="Twitter"
          status="117"
          up={Up}
          down={Down}
          presentage="303"
          color="green"
        />
        <OverviewCard
          text="Likes"
          logo={Twitter}
          type="Twitter"
          status="507"
          up={Up}
          down={Down}
          presentage="553"
          color="green"
        />
        <OverviewCard
          text="Likes"
          logo={Youtube}
          type="Youtube"
          status="107"
          up={Up}
          down={Down}
          presentage="19"
          color="red"
        />
        <OverviewCard
          text="Page Views"
          logo={Youtube}
          type="Youtube"
          status="1407"
          up={Up}
          down={Down}
          presentage="12"
          color="red"
        />
      </div>
    </div>
  );
};

export default OverviewCards;
