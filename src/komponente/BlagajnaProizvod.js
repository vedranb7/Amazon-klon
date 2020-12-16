import React from "react";
import "./BlagajnaProizvod.css";
import { useStateValue } from "./StateProvider";

function BlagajnaProizvod({ id, slika, naslov, cijena, ocjena }) {
  const [{ kosarica }, dispatch] = useStateValue();
  const obrisiIzKosarice = () => {
    dispatch({
      type: "OBRISI_IZ_KOSARICE",
      id: id,
    });
  };
  return (
    <div className="blagajnaProizvod">
      <img
        className="blagajnaProizvod__slika"
        src={slika}
        alt="slika proizvoda"
      />

      <div className="blagajnaProizvod__info">
        <p className="blagajnaProizvod__naslov">{naslov}</p>
        <p className="blagajnaProizvod__cijena">
          <small>kn </small>
          <strong>{cijena}</strong>
        </p>
        <div className="blagajnaProizvod__ocjena">
          {Array(ocjena)
            .fill()
            .map(() => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={obrisiIzKosarice}>Obriši iz košarice</button>
      </div>
    </div>
  );
}

export default BlagajnaProizvod;
