import React from "react";
import "./Proizvod.css";

function Proizvod({ id, naslov, slika, cijena, ocjena }) {
  return (
    <div className="proizvod">
      <div className="proizvod__info">
        <p>{naslov}</p>
        <p className="proizvod__cijena">
          <small>kn</small>
          <strong>{cijena}</strong>
        </p>
        <div className="proizvod__ocjena">
          {Array(ocjena)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={slika} alt="" />
      <button>Dodaj u košaricu</button>
    </div>
  );
}

export default Proizvod;
