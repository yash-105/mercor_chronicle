import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import "./section2.css";
import Scroll from "../Scroller/Scroll";

export const Section2 = () => {
  const cardsRef = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: cardsRef.current,
        pin: ".section2",
        pinSpacing: true,
        start: "top 200px",
        end: "+=2000",
        scrub: 1,
      },
    });

    timeline.addLabel("card1");
    timeline.to(".card-1", {
      yPercent: 0,
      opacity: 1,
    });

    timeline.from(".card-2", {
      yPercent: 75,
      opacity: 0,
    });
    timeline.addLabel("card2");

    timeline.to(
      ".card-1",
      {
        scale: 0.95,
        yPercent: -0.5,
        opacity: 0.5,
      },
      "-=0.3"
    );

    timeline.to(".card-2", {
      yPercent: 0,
      opacity: 1,
    });

    timeline.from(".card-3", {
      yPercent: 75,
      opacity: 0,
    });
    timeline.addLabel("card3");

    timeline.to(
      ".card-2",
      {
        scale: 0.98,
        yPercent: -0.4,
        opacity: 0.6,
      },
      "-=0.3"
    );

    timeline.to(".card-3", {
      yPercent: 0,
      opacity: 1,
    });

    timeline.to(".card-3", {});
  }, []);

  return (
    <div className="section2">
      <div className="part1">
        <div class="workflow">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="mt-[3px]"
          >
            <path
              d="M8.75348 17.6952C7.72056 14.0706 3.94416 10.3084 0.305928 9.27938C-0.101976 9.14829 -0.101976 8.8599 0.305928 8.72226C3.95074 7.68666 7.72056 3.931 8.76005 0.299863C8.8719 -0.0999545 9.14164 -0.0999545 9.25349 0.299863C10.2864 3.931 14.0628 7.68666 17.6945 8.72226C18.1024 8.85335 18.1024 9.14829 17.6945 9.27938C14.0562 10.3084 10.2798 14.0706 9.24691 17.6952C9.13506 18.1016 8.86532 18.1016 8.75348 17.6952Z"
              fill="#A594FD"
            ></path>
          </svg>
          <h4>Workflow</h4>
        </div>
        <div className="content">
          <h1>Create at the speed of thought.</h1>
          <div className="para-text">
            Focus on your getting your thoughts out and crafting the best
            message while Chronicle does the heavy lifting for you
          </div>
        </div>
      </div>
      <div className="part2">
        <div className="cards" ref={cardsRef}>
          <div className="card card-1"></div>
          <div className="card card-2"></div>
          <div className="card card-3"></div>
        </div>
      </div>
      <Scroll />
    </div>
  );
};
