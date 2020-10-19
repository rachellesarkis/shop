import React from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PetsIcon from "@material-ui/icons/Pets";
import { useSelector } from "react-redux";

const Header = () => {
  const itemsReducer = useSelector((state) => state.itemsReducer);
  const totalCountReducer = itemsReducer.reduce(
    (acc, item) => acc + item.quantiySelected,
    0
  );
  return (
    <header className="navbar">
      <Link className="navbar__title navbar__item" to="/">
        <div>
          ShopONLINE <PetsIcon />{" "}
        </div>
      </Link>
      <Link className="navbar__item" to="/order">
        {totalCountReducer}
        <ShoppingCartIcon />
      </Link>

      <Link className="navbar__item" to="/contact">
        <div>Contact</div>
      </Link>
    </header>
  );
};

export default Header;
