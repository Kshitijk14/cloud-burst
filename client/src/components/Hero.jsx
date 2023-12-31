import React from "react";

import { hero, rainGif } from "../assets";
import styles from "../constants/style";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>

      {/* Hero Content */}
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

        {/* Hero Heading */}
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Cloud Burst <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Forecasting</span>{" "}
          </h1>
        </div>
        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Made Easy
        </h1>
        {/* Hero Heading */}

        {/* Hero Para */}
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          The Cloud Burst Monitor, a lifesaver, tracks imminent heavy rainfall events. With real-time alerts, it empowers quick action, saving lives by mitigating flash flood risks through timely warnings and preparedness.
        </p>
        {/* Hero Para */}

      </div>
      {/* Hero Content */}

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>

        {/* Hero Img */}
        <img src={hero} alt="hero" className="w-[70%] h-[90%] relative z-[5] mr-10" />
        {/* Hero Img */}

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}

      </div>

    </section>
  );
};

export default Hero;
