import "./Blagajna.css";
import React from "react";
import Suma from "./Suma";

function Blagajna() {
  return (
    <div className="blagajna">
      <div className="blagajna__lijevo">
        <img
          className="blagajna__oglas"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668.jpg"
          alt=""
        />
        <div>
          <h2 className="blagajna__naslov">Tvoja košarica</h2>

          {/* ITEM */}
          {/* ITEM */}
          {/* ITEM */}
        </div>
      </div>
      <div className="blagajna__desno">
        <Suma />
      </div>
    </div>
  );
}

export default Blagajna;
