import { useEffect } from "react";

const CursorTransform: React.FC = () => {
  useEffect(() => {
    const constrain = 40;
    const mouseOverContainer = document.getElementById("banner-container");
    const ex1Layers = document.querySelectorAll(
      ".ex1-layer"
    ) as NodeListOf<HTMLElement>;

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
          transformElement(ex1Layers[0], position, ex1Layers[0]);
          transformElement(ex1Layers[1], position, ex1Layers[1]);
          transformElement(ex1Layers[2], position, ex1Layers[2]);
          transformElement(ex1Layers[3], position, ex1Layers[3]);
        });
      };
    }
  }, []);
  return (
    <div id="ex1" className="cursor-transform banner-img">
      <img className="ex1-layer" src="/banner.png" alt="Becon 2024" />
      <img className="ex1-layer" src="/banner-2.png" alt="Becon 2024" />
      <img className="ex1-layer" src="/banner-3.png" alt="Becon 2024" />
      <img className="ex1-layer" src="/banner-4.png" alt="Becon 2024" />
      <img style={{ opacity: 0 }} src="/banner.png" alt="Becon 2024" />
    </div>
  );
};

export default CursorTransform;
