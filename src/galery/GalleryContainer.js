import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import TitleHeader from "../layout/header/TitleHeader";
import NavBar from "../layout/header/NavBar";
import Footer from "../layout/Footer";
import GalleryStyle from "./GalleryStyle.module.css";

const GalleryContainer = (props) => {
  const [images, setImages] = useState([
    {
      original:
        "https://scontent-sof1-1.xx.fbcdn.net/v/t1.0-9/248201_169532439774792_4803122_n.jpg?_nc_cat=103&ccb=2&_nc_sid=cdbe9c&_nc_ohc=i6w6_MUsSUUAX9f9p6e&_nc_ht=scontent-sof1-1.xx&oh=06d22c115296eef4ade8fea97eb95e24&oe=603326E6",
      thumbnail:
        "https://scontent-sof1-1.xx.fbcdn.net/v/t1.0-9/248201_169532439774792_4803122_n.jpg?_nc_cat=103&ccb=2&_nc_sid=cdbe9c&_nc_ohc=i6w6_MUsSUUAX9f9p6e&_nc_ht=scontent-sof1-1.xx&oh=06d22c115296eef4ade8fea97eb95e24&oe=603326E6",
    },
    {
      original:
        "https://scontent-sof1-1.xx.fbcdn.net/v/t1.0-9/249938_169533026441400_1273207_n.jpg?_nc_cat=109&ccb=2&_nc_sid=cdbe9c&_nc_ohc=gAhsRpndzvoAX8ReT4P&_nc_ht=scontent-sof1-1.xx&oh=53fbc5d4df666c5250b31597d1d30702&oe=6033B383",
      thumbnail:
        "https://scontent-sof1-1.xx.fbcdn.net/v/t1.0-9/249938_169533026441400_1273207_n.jpg?_nc_cat=109&ccb=2&_nc_sid=cdbe9c&_nc_ohc=gAhsRpndzvoAX8ReT4P&_nc_ht=scontent-sof1-1.xx&oh=53fbc5d4df666c5250b31597d1d30702&oe=6033B383",
    },
    {
      original:
        "https://scontent-sof1-1.xx.fbcdn.net/v/t31.0-8/10448421_10203395840550469_3579341034080284287_o.jpg?_nc_cat=111&ccb=2&_nc_sid=f9d7a1&_nc_ohc=C0pfjD1DnEIAX8sa5kM&_nc_ht=scontent-sof1-1.xx&oh=6ca7a1e1f2a32d62057d334ddb306b19&oe=6034C315",
      thumbnail:
        "https://scontent-sof1-1.xx.fbcdn.net/v/t31.0-8/10448421_10203395840550469_3579341034080284287_o.jpg?_nc_cat=111&ccb=2&_nc_sid=f9d7a1&_nc_ohc=C0pfjD1DnEIAX8sa5kM&_nc_ht=scontent-sof1-1.xx&oh=6ca7a1e1f2a32d62057d334ddb306b19&oe=6034C315",
    },
    {
      original:
        "https://scontent-sof1-1.xx.fbcdn.net/v/t31.0-8/921530_10151585469207375_1029900264_o.jpg?_nc_cat=109&ccb=2&_nc_sid=cdbe9c&_nc_ohc=uViRaTJa7nIAX87keP8&_nc_ht=scontent-sof1-1.xx&oh=189c15858207fee1acd8dc87a893e997&oe=6032F76D",
      thumbnail:
        "https://scontent-sof1-1.xx.fbcdn.net/v/t31.0-8/921530_10151585469207375_1029900264_o.jpg?_nc_cat=109&ccb=2&_nc_sid=cdbe9c&_nc_ohc=uViRaTJa7nIAX87keP8&_nc_ht=scontent-sof1-1.xx&oh=189c15858207fee1acd8dc87a893e997&oe=6032F76D",
    },
    // {
    //   original:
    //     "https://scontent-sof1-1.xx.fbcdn.net/v/t31.0-8/479239_10151585472142375_1586056225_o.jpg?_nc_cat=104&ccb=2&_nc_sid=cdbe9c&_nc_ohc=0RHndQn-Vp4AX-YUOAl&_nc_ht=scontent-sof1-1.xx&oh=5031effadd09b92ac483cf0cd15cf0ba&oe=6034A1BD",
    //   thumbnail:
    //     "https://scontent-sof1-1.xx.fbcdn.net/v/t31.0-8/479239_10151585472142375_1586056225_o.jpg?_nc_cat=104&ccb=2&_nc_sid=cdbe9c&_nc_ohc=0RHndQn-Vp4AX-YUOAl&_nc_ht=scontent-sof1-1.xx&oh=5031effadd09b92ac483cf0cd15cf0ba&oe=6034A1BD",
    // },
    {
      original:
        "https://scontent-sof1-1.xx.fbcdn.net/v/t1.0-9/68339_427102270684473_1050961297_n.jpg?_nc_cat=107&ccb=2&_nc_sid=cdbe9c&_nc_ohc=tysZ3rHBmuMAX_Dx7RT&_nc_ht=scontent-sof1-1.xx&oh=297154fc7cfeb7fae7cc428cbd161a78&oe=6032EF8B",
      thumbnail:
        "https://scontent-sof1-1.xx.fbcdn.net/v/t1.0-9/68339_427102270684473_1050961297_n.jpg?_nc_cat=107&ccb=2&_nc_sid=cdbe9c&_nc_ohc=tysZ3rHBmuMAX_Dx7RT&_nc_ht=scontent-sof1-1.xx&oh=297154fc7cfeb7fae7cc428cbd161a78&oe=6032EF8B",
    },
    // {
    //   original:
    //     "https://scontent-sof1-1.xx.fbcdn.net/v/t1.0-9/404929_239070009501282_1202729581_n.jpg?_nc_cat=107&ccb=2&_nc_sid=f9d7a1&_nc_ohc=n9Zfvnsw6U8AX-g7Tab&_nc_ht=scontent-sof1-1.xx&oh=54a6db0ded17dc12b0dd9dca75edee47&oe=60333AF8",
    //   thumbnail:
    //     "https://scontent-sof1-1.xx.fbcdn.net/v/t1.0-9/404929_239070009501282_1202729581_n.jpg?_nc_cat=107&ccb=2&_nc_sid=f9d7a1&_nc_ohc=n9Zfvnsw6U8AX-g7Tab&_nc_ht=scontent-sof1-1.xx&oh=54a6db0ded17dc12b0dd9dca75edee47&oe=60333AF8",
    // },
    // {
    //   original:
    //     "https://scontent-sof1-1.xx.fbcdn.net/v/t1.0-9/73454_453027914069_8287482_n.jpg?_nc_cat=103&ccb=2&_nc_sid=cdbe9c&_nc_ohc=VVRmpA0m51AAX_Nn4xh&_nc_ht=scontent-sof1-1.xx&oh=a85bfcd5f1f4618d16c30f0e9e671811&oe=60354C19",
    //   thumbnail:
    //     "https://scontent-sof1-1.xx.fbcdn.net/v/t1.0-9/73454_453027914069_8287482_n.jpg?_nc_cat=103&ccb=2&_nc_sid=cdbe9c&_nc_ohc=VVRmpA0m51AAX_Nn4xh&_nc_ht=scontent-sof1-1.xx&oh=a85bfcd5f1f4618d16c30f0e9e671811&oe=60354C19",
    // },
    {
      original:
        "https://scontent-sof1-1.xx.fbcdn.net/v/t1.0-9/44638_1332279079297_7240118_n.jpg?_nc_cat=110&ccb=2&_nc_sid=cdbe9c&_nc_ohc=CAf3LAnfd2gAX-Bjyca&_nc_ht=scontent-sof1-1.xx&oh=a4fab527b3c6194e192b9063718b4565&oe=603299DC",
      thumbnail:
        "https://scontent-sof1-1.xx.fbcdn.net/v/t1.0-9/44638_1332279079297_7240118_n.jpg?_nc_cat=110&ccb=2&_nc_sid=cdbe9c&_nc_ohc=CAf3LAnfd2gAX-Bjyca&_nc_ht=scontent-sof1-1.xx&oh=a4fab527b3c6194e192b9063718b4565&oe=603299DC",
    },
    {
      original:
        "https://scontent-sof1-1.xx.fbcdn.net/v/t31.0-8/333421_383417268386307_1221831575_o.jpg?_nc_cat=108&ccb=2&_nc_sid=2c4854&_nc_ohc=TRvH_ysLGhIAX-THts5&_nc_ht=scontent-sof1-1.xx&oh=f021f84a979ca2f2e6ea5a3a2f706669&oe=6032FD8C",
      thumbnail:
        "https://scontent-sof1-1.xx.fbcdn.net/v/t31.0-8/333421_383417268386307_1221831575_o.jpg?_nc_cat=108&ccb=2&_nc_sid=2c4854&_nc_ohc=TRvH_ysLGhIAX-THts5&_nc_ht=scontent-sof1-1.xx&oh=f021f84a979ca2f2e6ea5a3a2f706669&oe=6032FD8C",
    },
    {
      original:
        "https://scontent-sof1-1.xx.fbcdn.net/v/t1.0-9/124095024_3619642751430393_2290173263903105821_n.jpg?_nc_cat=110&ccb=2&_nc_sid=8bfeb9&_nc_ohc=eKRxyzowS78AX8ONkpM&_nc_ht=scontent-sof1-1.xx&oh=16d7c8513cbb74334f9ee63db2dfde12&oe=603327F5",
      thumbnail:
        "https://scontent-sof1-1.xx.fbcdn.net/v/t1.0-9/124095024_3619642751430393_2290173263903105821_n.jpg?_nc_cat=110&ccb=2&_nc_sid=8bfeb9&_nc_ohc=eKRxyzowS78AX8ONkpM&_nc_ht=scontent-sof1-1.xx&oh=16d7c8513cbb74334f9ee63db2dfde12&oe=603327F5",
    },
    // {
    //   original:
    //     "https://scontent-sof1-1.xx.fbcdn.net/v/t1.0-9/10517508_727851177276246_1708833829266961981_n.jpg?_nc_cat=101&ccb=2&_nc_sid=730e14&_nc_ohc=XanbOxR6sXsAX-I9BX2&_nc_ht=scontent-sof1-1.xx&oh=40967a7e81c184e53281d3751d407dfa&oe=6032E58A",
    //   thumbnail:
    //     "https://scontent-sof1-1.xx.fbcdn.net/v/t1.0-9/10517508_727851177276246_1708833829266961981_n.jpg?_nc_cat=101&ccb=2&_nc_sid=730e14&_nc_ohc=XanbOxR6sXsAX-I9BX2&_nc_ht=scontent-sof1-1.xx&oh=40967a7e81c184e53281d3751d407dfa&oe=6032E58A",
    // },
    // {
    //   original:
    //     "https://scontent-sof1-1.xx.fbcdn.net/v/t1.0-9/394041_239059499502333_1189756566_n.jpg?_nc_cat=104&ccb=2&_nc_sid=f9d7a1&_nc_ohc=iL_nTV_TttMAX8zg7yv&_nc_ht=scontent-sof1-1.xx&oh=f614cd385a7b893fa49731dc72b7acdc&oe=6032E485",
    //   thumbnail:
    //     "https://scontent-sof1-1.xx.fbcdn.net/v/t1.0-9/394041_239059499502333_1189756566_n.jpg?_nc_cat=104&ccb=2&_nc_sid=f9d7a1&_nc_ohc=iL_nTV_TttMAX8zg7yv&_nc_ht=scontent-sof1-1.xx&oh=f614cd385a7b893fa49731dc72b7acdc&oe=6032E485",
    // },
  ]);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <div>
        <TitleHeader />
        <NavBar menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />

      <div className={GalleryStyle.wrapper}>
        <ImageGallery items={images} />
      </div>
      <Footer />
    </div>
  );
};

GalleryContainer.propTypes = {};

export default GalleryContainer;
