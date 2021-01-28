import React, { useState,useEffect } from "react";
import TitleHeader from "../layout/header/TitleHeader";
import NavBar from "../layout/header/NavBar";
import HomeStyle from "../home/HomeStyle.module.css";
import Footer from "../layout/Footer";
import ReactGa from 'react-ga'
import MessengerCustomerChat from "react-messenger-customer-chat";

const PlaceContainer = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  useEffect(()=>{
      ReactGa.initialize('UA-174210957-1')
ReactGa.pageview('/place')
      window.scrollTo(0, 0)
  },[])
  return (
    <div>
      <TitleHeader />
      <NavBar menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
      <div className={HomeStyle.wrapper}>
            В процес на разработка
      </div>
      <Footer />
    </div>
  );
};

PlaceContainer.propTypes = {};

export default PlaceContainer;
