import React from "react";
import HeaderStyle from "./HederStyle.module.css";
import { Link } from "react-router-dom";
const Menu = ({ menuIsOpen }) => {
  return (
    <div>
      {menuIsOpen ? (
        <div className={HeaderStyle.menu_container}>
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
            to="/shop"
            className={
              window.location.pathname === "/shop"
                ? HeaderStyle.category_title_select
                : HeaderStyle.category_title
            }
          >
            Артикули
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
        </div>
      ) : null}
    </div>
  );
};

Menu.propTypes = {};

export default Menu;
