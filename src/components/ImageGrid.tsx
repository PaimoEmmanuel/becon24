const images = [
  { src: "/grid-1.png", className: "" },
  { src: "/grid-2.png", className: "vertical" },
  { src: "/grid-3.png", className: "" },
  { src: "/grid-4.png", className: "vertical" },
  { src: "/grid-5.png", className: "" },
  { src: "/grid-6.png", className: "vertical" },
  { src: "/grid-7.png", className: "" },
  { src: "/grid-8.png", className: "vertical" },
  { src: "/grid-9.png", className: "" },
  { src: "/grid-10.png", className: "vertical" },
  { src: "/grid-11.png", className: "" },
  { src: "/grid-12.png", className: "vertical" },
  { src: "/grid-13.png", className: "" },
  { src: "/grid-14.png", className: "vertical" },
  { src: "/grid-15.png", className: "" },
  { src: "/grid-16.png", className: "vertical" },
  { src: "/grid-17.png", className: "" },
  { src: "/grid-18.png", className: "vertical" },
  { src: "/grid-19.png", className: "" },
  { src: "/grid-20.png", className: "vertical" },
  { src: "/grid-21.png", className: "" },
  { src: "/grid-22.png", className: "vertical" },
  { src: "/grid-23.png", className: "" },
  { src: "/grid-24.png", className: "vertical" },
];
const ImageGrid = () => (
  <div className="image-grid slide-track">
    {images.map((image, index) => (
      <div
        key={image.src + index}
        data-lightbox="homePortfolio"
        className={image.className + " slide"}
      >
        <img src={image.src} />
      </div>
    ))}
  </div>
);

export default ImageGrid;
