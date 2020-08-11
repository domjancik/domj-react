import React, { Fragment } from "react";
import RandomText from "./RandomText/RandomText";

function Hero() {
  return (
    <Fragment>
      <div className="text-6xl text-center uppercase mt-16 mb-16">
        Dominik
        <br />
        &#62;Jančík
      </div>
      <div className="text-center text-2xl">
        <RandomText
        interval={200}
          texts={["creative", "VL", "vvvv", "C#", "JavaScript", "product"]}
        />
      </div>
      <div className="text-center mb-16 text-xl">
        <RandomText
          texts={["developer", "artist", "designer", "maker", "inventor"]}
        />
      </div>
      <hr />
    </Fragment>
  );
}

export default Hero;
