import React,{useState} from 'react';
import TitleHeader from "../layout/header/TitleHeader";
import NavBar from "../layout/header/NavBar";
import PriceStyle from './PricesStyle.module.css'
import Footer from "../layout/Footer";

const PricesContainer = props => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    return (
        <div>
            <TitleHeader />
            <NavBar menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
            <div className={PriceStyle.wrapper}>
                В процес на разработка
            </div>
            <Footer />
        </div>
    );
};


export default PricesContainer;
