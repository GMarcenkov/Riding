import React from "react";
import HeaderStyle from './HederStyle.module.css'
import {Link} from "react-router-dom"
const Menu = ({ menuIsOpen }) => {
  return (
    <div>
      {menuIsOpen ? (
        <div className={HeaderStyle.menu_container}>
          <Link to="/" className={HeaderStyle.category_title}>
            Начало
          </Link>
          <Link to="/about" className={HeaderStyle.category_title}>
            За Нас
          </Link>
          <Link to="/place" className={HeaderStyle.category_title}>
            Къде сме ?
          </Link>
          <Link to="/gallery" className={HeaderStyle.category_title}>
            Галерия
          </Link>
          <Link to="/price" className={HeaderStyle.category_title}>
            Ценоразпис
          </Link>
        </div>
      ) : null}
    </div>
  );
};

Menu.propTypes = {};

export default Menu;
