import React,{useState,useEffect} from 'react';
import TitleHeader from "../layout/header/TitleHeader";
import NavBar from "../layout/header/NavBar";
import Footer from "../layout/Footer";
import ProfileStyle from  './ProfilStyle.module.css'
import ReactGa from "react-ga";

const ProfileContainer = props => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    useEffect(()=>{
        ReactGa.initialize('UA-174210957-1')
        ReactGa.pageview('/about')
    },[])
    return (
        <div>
            <TitleHeader />
            <NavBar menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
            <div className={ProfileStyle.wrapper}>
  В процес на разработка
            </div>
            <Footer />
        </div>
    );
};

ProfileContainer.propTypes = {

};

export default ProfileContainer;
