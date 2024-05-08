import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { rightImg, watchImg } from "../utils";
import VideoCarousel from "./VideoCarousel";

const Highlights = () => {
  useGSAP(() => {
    gsap.to("#title", {
      duration: 1,
      y: 0,
      opacity: 1,
    });
    gsap.to(".link",{
      duration: 1,
      y: 0,
      stagger:0.25,
      opacity: 1,
    })
  }, []);

  return (
    <section
      id="highlights"
      className="w-screen overflow-hidden h-full common-padding bg-zinc"
    >
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex items-end justify-between">
          <h1 id="title" className="section-heading">
            Get The Hightlights.
          </h1>

          <div className="flex flex-wrap items-end gap-5">
            <p className="link">watch the film
              <img src={watchImg} alt="Watch image" className="ml-2 capitalize"/>
            </p>
            <p className="link">watch the film
              <img src={rightImg} alt="Right" className="ml-2 capitalize"/>
            </p>
          </div>
        </div>
        <VideoCarousel /> 
      </div>
    </section>
  );
};

export default Highlights;
