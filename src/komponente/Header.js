import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="logo"
      />
      <div className="header__pretraga">
        <input type="text" className="header__pretragaInput" />
        <SearchIcon className="header__pretragaIkona" />
      </div>
      <div className="header__nav">
        <div className="header__opcija">
          <span className="header__opcijaRedPrvi">Pozdrav</span>
          <span className="header__opcijaRedDrugi">Prijavi se</span>
        </div>
        <div className="header__opcija">
          <span className="header__opcijaRedPrvi">Povrati</span>
          <span className="header__opcijaRedDrugi">& Narudžbe</span>
        </div>
        <div className="header__opcija">
          <span className="header__opcijaRedPrvi">Tvoj</span>
          <span className="header__opcijaRedDrugi">Prime</span>
        </div>
        <div className="header__opcijaKosarica">
          <ShoppingBasketIcon />
          <span className="header__opcijaRedDrugi header__kosaricaBroj">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
