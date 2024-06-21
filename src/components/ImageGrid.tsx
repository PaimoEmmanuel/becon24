const images = [
  { src: "/grid-1.png", classNameName: "" },
  { src: "/grid-2.png", classNameName: "tall" },
  { src: "/grid-3.png", classNameName: "" },
  { src: "/grid-4.png", classNameName: "tall" },
  { src: "/grid-5.png", classNameName: "" },
  { src: "/grid-6.png", classNameName: "tall" },
  { src: "/grid-7.png", classNameName: "" },
  { src: "/grid-8.png", classNameName: "tall" },
  { src: "/grid-9.png", classNameName: "" },
  { src: "/grid-10.png", classNameName: "tall" },
  { src: "/grid-11.png", classNameName: "" },
  { src: "/grid-12.png", classNameName: "tall" },
  { src: "/grid-13.png", classNameName: "tall" },
  { src: "/grid-15.png", classNameName: "tall" },
  { src: "/grid-17.png", classNameName: "tall" },
  { src: "/grid-19.png", classNameName: "tall" },
  { src: "/grid-21.png", classNameName: "tall" },
  { src: "/grid-23.png", classNameName: "tall" },
  { src: "/grid-14.png", classNameName: "" },
  { src: "/grid-16.png", classNameName: "" },
  { src: "/grid-18.png", classNameName: "" },
  { src: "/grid-20.png", classNameName: "" },
  { src: "/grid-22.png", classNameName: "" },
  { src: "/grid-24.png", classNameName: "" },
];
const ImageGrid = () => (
  <div className="grid-wrapper">
    {images.map((image) => (
      <div key={image.src} className={image.classNameName}>
        <img src={image.src} alt="" />
      </div>
    ))}
  </div>
);

export default ImageGrid;
