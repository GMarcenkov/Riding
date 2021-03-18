import React, { useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import TitleHeader from "../layout/header/TitleHeader";
import NavBar from "../layout/header/NavBar";
import Footer from "../layout/Footer";
import GalleryStyle from "./GalleryStyle.module.css";
import ReactGa from "react-ga";
import starina from "../../images/starina.jpg";
import starina2 from "../../images/starina2.jpg";
import starina3 from "../../images/starina3.jpg";
import dvama from "../../images/dvama.jpg";
import ski from "../../images/ski.jpg";

const GalleryContainer = (props) => {
  const [images, setImages] = useState([
    {
      original: starina,
      thumbnail: starina,
    },
    {
      original: starina2,
      thumbnail: starina2,
    },
    {
      original: starina3,
      thumbnail: starina3,
    },
    {
      original: dvama,
      thumbnail: dvama,
    },
    {
      original: ski,
      thumbnail: ski,
    },
  ]);
  useEffect(() => {
    ReactGa.initialize("UA-174210957-1");
    ReactGa.pageview("/gallery");
    window.scrollTo(0, 0);
  }, []);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <div>
      <TitleHeader />
      <NavBar menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
      <div className={GalleryStyle.wrapper}>
        <div className={GalleryStyle.gallery_container}>
          <ImageGallery items={images} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

GalleryContainer.propTypes = {};

export default GalleryContainer;
