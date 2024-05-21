import { useEffect } from "react";

const CursorTransform: React.FC = () => {
  useEffect(() => {
    const constrain = 40;
    const mouseOverContainer = document.getElementById("banner-container");
    const ex1Layer = document.getElementById("ex1-layer");

    function transforms(x: number, y: number, el: HTMLElement | null) {
      if (!el) return;
      const box = el.getBoundingClientRect();
      const calcX = -(y - box.y - box.height / 2) / constrain;
      const calcY = (x - box.x - box.width / 2) / constrain;

      return (
        "perspective(500px) " +
        "   rotateX(" +
        calcX +
        "deg) " +
        "   rotateY(" +
        calcY +
        "deg) "
      );
    }

    function transformElement(
      el: HTMLElement | null,
      xyEl: number[],
      layer: HTMLElement | null
    ) {
      if (el) {
        el.style.transform = transforms(xyEl[0], xyEl[1], layer) || "";
      }
    }
    if (mouseOverContainer) {
      mouseOverContainer.onmousemove = function (e) {
        const xy = [e.clientX, e.clientY];
        const position = xy;

        window.requestAnimationFrame(function () {
          transformElement(ex1Layer, position, ex1Layer);
        });
      };
    }
  }, []);
  return (
    <div id="ex1" className="cursor-transform banner-img">
      <img id="ex1-layer" src="/banner.png" alt="Becon 2 s024" />
    </div>
  );
};

export default CursorTransform;
