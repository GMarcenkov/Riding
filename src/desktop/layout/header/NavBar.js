import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faBars } from "@fortawesome/free-solid-svg-icons";
import HeaderStyle from "./HederStyle.module.css";
import Menu from "./Menu";
import { Link } from "react-router-dom";
import MessengerCustomerChat from "react-messenger-customer-chat";

const NavBar = ({ setMenuIsOpen, menuIsOpen }) => {
  return (
    <nav className={HeaderStyle.navBar_wrapper}>
      <div className={HeaderStyle.navBar_container}>
        {/*<FontAwesomeIcon icon={faBars} onClick={()=>setMenuIsOpen(!menuIsOpen)}/>*/}
        <a href="tel:+359876825221" className={HeaderStyle.phone}>
          <FontAwesomeIcon icon={faPhoneAlt} /> +359897258673
        </a>
        <Link
          to="/"
          className={
            window.location.pathname === "/"
              ? HeaderStyle.category_title_select
              : HeaderStyle.category_title
          }
        >
          Начало
        </Link>
        <Link
          to="/about"
          className={
            window.location.pathname === "/about"
              ? HeaderStyle.category_title_select
              : HeaderStyle.category_title
          }
        >
          За Нас
        </Link>
        <Link
          to="/place"
          className={
            window.location.pathname === "/place"
              ? HeaderStyle.category_title_select
              : HeaderStyle.category_title
          }
        >
          Къде сме ?
        </Link>
        <Link
          to="/gallery"
          className={
            window.location.pathname === "/gallery"
              ? HeaderStyle.category_title_select
              : HeaderStyle.category_title
          }
        >
          Галерия
        </Link>
        <Link
          to="/price"
          className={
            window.location.pathname === "/price"
              ? HeaderStyle.category_title_select
              : HeaderStyle.category_title
          }
        >
          Ценоразпис
        </Link>
        <MessengerCustomerChat
            pageId="100137018774976"
            appId="2757958997788792"
        />
      </div>
      {/*<Menu menuIsOpen={menuIsOpen}/>*/}
    </nav>
  );
};

NavBar.propTypes = {};

export default NavBar;
