import "./Blagajna.css";
import React from "react";
import Suma from "./Suma";
import { useStateValue } from "./StateProvider";
import BlagajnaProizvod from "./BlagajnaProizvod";

function Blagajna() {
  const [{ kosarica, korisnik }, dispatch] = useStateValue();
  return (
    <div className="blagajna">
      <div className="blagajna__lijevo">
        <img
          className="blagajna__oglas"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668.jpg"
          alt=""
        />
        <div>
          <h3>Pozdrav, {korisnik?.email}</h3>
          <h2 className="blagajna__naslov">Vaša košarica</h2>
          {kosarica.map((artikl) => (
            <BlagajnaProizvod
              id={artikl.id}
              naslov={artikl.naslov}
              slika={artikl.slika}
              cijena={artikl.cijena}
              ocjena={artikl.ocjena}
            />
          ))}
        </div>
      </div>
      <div className="blagajna__desno">
        <Suma />
      </div>
    </div>
  );
}

export default Blagajna;
