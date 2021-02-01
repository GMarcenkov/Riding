import React, { useState, useEffect } from "react";
import TitleHeader from "../layout/header/TitleHeader";
import NavBar from "../layout/header/NavBar";
import Footer from "../layout/Footer";
import ReactGa from "react-ga";
import ShopStyle from "./ShopStyle.module.css";

const ShopContainer = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  useEffect(() => {
    ReactGa.initialize("UA-174210957-1");
    ReactGa.pageview("/shop");
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <TitleHeader />
      <NavBar menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
      <div className={ShopStyle.wrapper}>
        <div className={ShopStyle.product_container}>
          <img
            className={ShopStyle.image_product}
            src="https://scontent-sof1-1.xx.fbcdn.net/v/t1.0-9/107336264_105902541196127_275319559135540377_o.jpg?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_ohc=8nJQsFB8TMkAX_mW2qj&_nc_ht=scontent-sof1-1.xx&oh=19278e8e29159c88494c36d2ac4feaf2&oe=603C2108"
          />
          <div className={ShopStyle.product_name_container}>
            <div className={ShopStyle.product_name}>Оглавник за коне</div>
          </div>
          <div className={ShopStyle.product_old_price_container}>
            <div className={ShopStyle.product_old_price}>15.00 лв.</div>
          </div>
          <div className={ShopStyle.product_price_container}>
            <div className={ShopStyle.product_price}>9.99 лв.</div>
          </div>
        </div>


      </div>
      <Footer />
    </div>
  );
};

ShopContainer.propTypes = {};

export default ShopContainer;
