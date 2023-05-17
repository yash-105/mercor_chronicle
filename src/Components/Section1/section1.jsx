import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./section1.css";
import Word from "./Word";

export function Section1() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.defaults({
      scroller: window,
    });

    gsap.to(".wordtext p", {
      backgroundPositionX: "1%",
      stagger: 1,
      scrollTrigger: {
        trigger: ".wordtext p ",
        scrub: 2,
        start: "top 200px",
        end: "bottom top",
        pin: ".wordtext ",
        pinSpacing: false,
      },
    });
  }, []);
  const data =
    "In Chronicle everything is made with Blocks that come with pixel perfect design, interactivity and motion out of the box. Instead of designing from scratch, simply choose the right one from our library of blocks and see the magic unfold.";
  const allWords = data.split(" ");

  return (
    <div>
      <div className="container">
        <div className="wordtext">
          <p className="scroll-text">
            {allWords.map((word, i) => (
              <Word word={word} i={i} len={allWords.length} />
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}
