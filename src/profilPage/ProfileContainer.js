import React,{useState} from 'react';
import PropTypes from 'prop-types';
import TitleHeader from "../layout/header/TitleHeader";
import NavBar from "../layout/header/NavBar";
import Footer from "../layout/Footer";
import ProfileStyle from  './ProfilStyle.module.css'

const ProfileContainer = props => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
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
