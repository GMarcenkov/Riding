import React, { useState, useEffect } from "react";
import HomeStyle from "./HomeStyle.module.css";
import all from "../../images/all.jpg";
import hight from "../../images/hight.jpg";
import TitleHeader from "../layout/header/TitleHeader";
import NavBar from "../layout/header/NavBar";
import Footer from "../layout/Footer";
import ReactGa from "react-ga";
import AdSense from "react-adsense";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/captioned.css";
import one from "../../images/1.webp";
import two from "../../images/two.webp";
import three from "../../images/3.webp";
import four from "../../images/4.webp";
import five from "../../images/5.png";
import six from "../../images/6.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const HomeContainer = (props) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  useEffect(() => {
    ReactGa.initialize("UA-174210957-1");
    ReactGa.pageview("/");
    window.scrollTo(0, 0);
  }, []);
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  const images = [
    {
      url: two,
    },
    {
      url: five,
    },
    {
      url: six,
    },
    {
      url: one,
    },
    {
      url: three,
    },
    {
      url: four,
    },
  ];

  return (
    <div>
      <TitleHeader />
      <NavBar menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
      <div className={HomeStyle.wrapper}>
        <div className={HomeStyle.slider}>
          <AutoplaySlider play={true} interval={3000} infinite={true}>
            {images.map((img) => (
              <div>
                <img
                  style={{ width: "1250px", height: "770px" }}
                  src={img.url}
                />
              </div>
            ))}
          </AutoplaySlider>
        </div>

        <div className={HomeStyle.text_container}>
          <img className={HomeStyle.image} src={all} />
          <div className={HomeStyle.body}>
            Заповядайте в село Голямо Белово на една неописуема езда сред
            природата. Няма значение ако ще яздите за първи път, ние сме
            сигурни, че ще ви хареса!
          </div>
        </div>

        <div className={HomeStyle.google_title}>Как да ни намерите  <FontAwesomeIcon icon={faMapMarkerAlt} /></div>

        <div className={HomeStyle.google_maps_wrapper}>
          <div className={HomeStyle.body}>
            Село Голямо Белово се намира на един час път от Пловдив и на
            по-малко oт два часа път от София.
          </div>

          <div className={HomeStyle.google_maps_container}>
            <h2>Вижте в googleMaps:</h2>
            <a
              href="https://www.google.com/maps/dir/42.1916292,23.9876993//@42.1915985,23.9862072,16.75z/data=!4m2!4m1!3e0"
              target="_blank"
              rel="noreferrer noopener"
              className={HomeStyle.google_maps_town}
            >
              <FontAwesomeIcon icon={faMapMarkerAlt} /> Голямо Белово
            </a>
          </div>
        </div>

        <div className={HomeStyle.text_container}>
          <div className={HomeStyle.body}>
            За работещите в големия град. Подарете си разтоварваща почивка на
            село. Насладете се на спокойствието и красотата при нас. За
            семействата с малки (или по-големи) деца. Елате при нас през
            уикенда. Прекарайте един прекрасен ден сред природата.
          </div>
          <img className={HomeStyle.image} src={hight} />
        </div>
        <AdSense.Google
          client="ca-pub-5841965259524315"
          style={{ width: 500, height: 300, float: "left" }}
          format=""
        />
      </div>
      <Footer />
    </div>
  );
};

HomeContainer.propTypes = {};

export default HomeContainer;
