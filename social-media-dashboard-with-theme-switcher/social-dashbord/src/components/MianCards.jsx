import React from "react";
import Card from "./Card";
import { socialData } from "../utils/data";

const MainCrads = () => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8" role="main">
      {socialData.map((data) => (
        <Card key={data.id} data={data} />
      ))}
    </div>
  );
};

export default MainCrads;
