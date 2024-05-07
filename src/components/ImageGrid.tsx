const images = [
  { src: "/grid-1.png", className: "" },
  { src: "/grid-2.png", className: "vertical" },
  { src: "/grid-3.png", className: "horizontal" },
  { src: "/grid-4.png", className: "vertical" },
  { src: "/grid-1.png", className: "" },
  { src: "/grid-5.png", className: "vertical" },
  { src: "/grid-6.png", className: "big" },
  { src: "/grid-7.png", className: "vertical" },
  { src: "/grid-8.png", className: "" },
  { src: "/grid-2.png", className: "" },
];
const ImageGrid = () => (
  <div className="image-grid">
    {images.map((image, index) => (
      <div
        key={image.src + index}
        data-lightbox="homePortfolio"
        className={image.className}
      >
        <img src={image.src} />
      </div>
    ))}
  </div>
);

export default ImageGrid;
