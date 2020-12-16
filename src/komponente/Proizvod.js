import React from "react";
import "./Proizvod.css";
import { useStateValue } from "./StateProvider";

function Proizvod({ id, naslov, slika, cijena, ocjena }) {
  const [{ kosarica }, dispatch] = useStateValue();
  const dodajUKosaricu = () => {
    dispatch({
      type: "DODAJ_U_KOSARICU",
      item: {
        id: id,
        naslov: naslov,
        slika: slika,
        cijena: cijena,
        ocjena: ocjena,
      },
    });
  };

  return (
    <div className="proizvod">
      <div className="proizvod__info">
        <p>{naslov}</p>
        <p className="proizvod__cijena">
          <strong>{cijena}</strong>
          <small> kn</small>
        </p>
        <div className="proizvod__ocjena">
          {Array(ocjena)
            .fill()
            .map(() => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={slika} alt="" />
      <button onClick={dodajUKosaricu}>Dodaj u košaricu</button>
    </div>
  );
}

export default Proizvod;
