import React from "react";
import Instrument from "../Components/Instrument";

export const Ideari = () => {
    return (
      <div className="size-full overflow-y-auto text-center">
        <h1 className="text-5xl desktop:text-6xl pt-20 pb-16 text-white">
          Ideari
        </h1>
        <div className=" px-12 py-6 laptop:px-32  laptop:py-16">
          <Instrument />
        </div>
      </div>
    );
  };
  