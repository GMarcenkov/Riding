import React, { useState, useEffect } from "react";
import TitleHeader from "../layout/header/TitleHeader";
import NavBar from "../layout/header/NavBar";
import Footer from "../layout/Footer";
import ProfileStyle from "./ProfilStyle.module.css";
import ReactGa from "react-ga";
import YouTube from "react-youtube";
import about from '../../images/about.jpg'

const AboutContainer = (props) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  useEffect(() => {
    ReactGa.initialize("UA-174210957-1");
    ReactGa.pageview("/about");
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <TitleHeader />
      <NavBar menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
      <div className={ProfileStyle.wrapper}>
        <div className={ProfileStyle.about_container}>
          <img
            className={ProfileStyle.image_text}
            src={about}
          />
          <div className={ProfileStyle.text_container}>
            <div className={ProfileStyle.text_title}>
              За Тома можем да кажем, че е човек сбъднал една древна максима и
              мечта на много хора, а именно да отдадеш живота си на това което
              обичаш!
            </div>
            <div className={ProfileStyle.text}>
              Тома отглежда и работи с коне от 30 години. Основната работа която
              е вършил с тях е свързана с дърводобив, а именно превоз на
              еднометрови дърва на самар. Една професия, която в днешно време е
              на изчезване.
            </div>
            <div className={ProfileStyle.text}>
              От 10 години насам Тома дописва една допълнителна страница в своя
              живот, а именно езда сред природата. В това свое ново начинание,
              макар и неопитен е изградил свой собствен начин да предразполага
              хората, които за първи път се качват на кон.
            </div>
            <div className={ProfileStyle.text_title}>
              Заповядайте на конна езда в местностите на село Голямо Белово.
            </div>
          </div>
        </div>
        <div className={ProfileStyle.about_container}>
          <div className={ProfileStyle.text_container}>
            <div className={ProfileStyle.text_youtube}>
              За повече подробности около конния занаят на Тома Мърценков вижте
              още в интервюто му за "Пътуващото читалище"
            </div>
          </div>
          <YouTube videoId="W2wtj8Viqps" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

AboutContainer.propTypes = {};

export default AboutContainer;
