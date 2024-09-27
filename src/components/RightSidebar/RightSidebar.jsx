import { useState } from "react";
import assets from "../../assets/assets";
import "./RightSidebar.css";
import PropTypes from "prop-types";

const ImageOverlay = ({ src, onClose }) => {
  return (
    <div className="overlay-img" onClick={onClose}>
      <img src={src} alt="Clicked Media" />
      <button className="close-btn" onClick={onClose}>
        Close
      </button>
    </div>
  );
};

ImageOverlay.propTypes = {
  src: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};

const RightSidebar = () => {
  const [viewImg, setViewImg] = useState(false);
  const [imageSrc, setImageSrc] = useState("");

  const overlayHandler = (imgSrc) => {
    setViewImg(true);
    setImageSrc(imgSrc);
  };
  console.log(viewImg, "image overlay");
  return (
    <div className="rs">
      <div className="rs-profile">
        <img src={assets.profile_img} alt="" />
        <h3>
          Richard Sanford <img src={assets.green_dot} className="dot" alt="" />
        </h3>
        <p>Hey There, I am Richard Sanford Using ChatXoXo</p>
      </div>
      <hr />
      <div className="rs-media">
        <p>Media</p>
        <div>
          <img
            onClick={() => overlayHandler(assets.pic1)}
            src={assets.pic1}
            alt=""
          />
          <img
            onClick={() => overlayHandler(assets.pic2)}
            src={assets.pic2}
            alt=""
          />
          <img
            onClick={() => overlayHandler(assets.pic3)}
            src={assets.pic3}
            alt=""
          />
          <img
            onClick={() => overlayHandler(assets.pic4)}
            src={assets.pic4}
            alt=""
          />
          <img
            onClick={() => overlayHandler(assets.pic1)}
            src={assets.pic1}
            alt=""
          />
          <img
            onClick={() => overlayHandler(assets.pic2)}
            src={assets.pic2}
            alt=""
          />
        </div>
      </div>
      {viewImg && (
        <ImageOverlay src={imageSrc} onClose={() => setViewImg(false)} />
      )}

      <button>Logout</button>
    </div>
  );
};

export default RightSidebar;
