// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useEffect } from "react";

import { useEffect } from "react";

import ImageGrid from "./ImageGrid";

const InfiniteScroll = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    // If a user hasn't opted in for recuded motion, then we add the animation
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        // add data-animated="true" to every `.scroller` on the page
        scroller.setAttribute("data-animated", "true");

        // Make an array from the elements within `.scroller-inner`
        const scrollerInner = scroller.querySelector(".scroller__inner");
        if (scrollerInner) {
          const scrollerContent = Array.from(scrollerInner.children);
          // For each item in the array, clone it
          // add aria-hidden to it
          // add it into the `.scroller-inner`
          scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            (duplicatedItem as HTMLElement).setAttribute("aria-hidden", "true");
            scrollerInner.appendChild(duplicatedItem);
          });
        }
      });
    }
  }, []);
  return (
    <div className="scroller" data-speed="fast">
      <ul className="tag-list scroller__inner">
        <li>
          <ImageGrid />
        </li>
      </ul>
    </div>
  );
};

export default InfiniteScroll;
