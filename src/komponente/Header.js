import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "../firebase";

function Header() {
  const [{ kosarica, korisnik }] = useStateValue();

  const handleAuthentication = () => {
    if (korisnik) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo"
        />
      </Link>

      <div className="header__pretraga">
        <input type="text" className="header__pretragaInput" />
        <SearchIcon className="header__pretragaIkona" />
      </div>
      <div className="header__nav">
        {/* Ako korisnik nije ulogiran, idi na login. Inače se odjavi i ostani na stranici */}
        <Link to={!korisnik && "/login"}>
          <div onClick={handleAuthentication} className="header__opcija">
            <span className="header__opcijaRedPrvi">Pozdrav</span>
            <span className="header__opcijaRedDrugi">
              {korisnik ? "Odjavi se" : "Prijavi se"}
            </span>
          </div>
        </Link>
        <div className="header__opcija">
          <span className="header__opcijaRedPrvi">Povrati</span>
          <span className="header__opcijaRedDrugi">& Narudžbe</span>
        </div>
        <div className="header__opcija">
          <span className="header__opcijaRedPrvi">Tvoj</span>
          <span className="header__opcijaRedDrugi">Prime</span>
        </div>
        <Link to="/blagajna">
          <div className="header__opcijaKosarica">
            <ShoppingBasketIcon />
            <span className="header__opcijaRedDrugi header__kosaricaBroj">
              {kosarica?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
