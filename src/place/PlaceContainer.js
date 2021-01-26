import React, { useState } from "react";
import TitleHeader from "../layout/header/TitleHeader";
import NavBar from "../layout/header/NavBar";
import HomeStyle from "../home/HomeStyle.module.css";
import Footer from "../layout/Footer";
import GoogleMapReact from 'google-map-react';

const PlaceContainer = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <div>
      <TitleHeader />
      <NavBar menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
      <div className={HomeStyle.wrapper}>
          <div style={{ height: '100vh', width: '100%' }}>
              <GoogleMapReact
                  defaultCenter={{
                      lat: 59.95,
                      lng: 30.33
                  }}
                  defaultZoom={11}
              />
          </div>

      </div>
      <Footer />
    </div>
  );
};

PlaceContainer.propTypes = {};

export default PlaceContainer;
