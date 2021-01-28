import React, { useState, useEffect } from "react";
import TitleHeader from "../layout/header/TitleHeader";
import NavBar from "../layout/header/NavBar";
import PriceStyle from "./PricesStyle.module.css";
import Footer from "../layout/Footer";
import ReactGa from "react-ga";
import MessengerCustomerChat from "react-messenger-customer-chat";

const PricesContainer = (props) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  useEffect(() => {
    ReactGa.initialize("UA-174210957-1");
    ReactGa.pageview("/price");
      window.scrollTo(0, 0)
  }, []);
  return (
    <div>
      <TitleHeader />
      <NavBar menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
      <div className={PriceStyle.wrapper}>
        <h1>Цени</h1>
        <ul className={PriceStyle.prices}>
          <li>Половин час езда: 15.00 лв.</li>
          <li>Един час езда: 25.00 лв.</li>
        </ul>

        <h2>За група oт 4 до 6 човека:</h2>

        <ul className={PriceStyle.prices}>
          <li>Един час езда: 20.00 лв.</li>
        </ul>

        <div className={PriceStyle.description}>
          Можем да осигурим до 6 човека за езда на веднъж. Разполагаме с удобни
          и модерни седла. Също така за любителите на историята и за хората
          които желаят да преживеят чувството на своите деди които са се возили
          на масивен "самар", можем да задоволим и това тяхно удоволствие!
        </div>
        <MessengerCustomerChat
            pageId="100137018774976"
            appId="2757958997788792"
        />
      </div>
      <Footer />
    </div>
  );
};

export default PricesContainer;
