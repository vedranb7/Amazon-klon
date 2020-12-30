import React from "react";
import { Link } from "react-router-dom";
import BlagajnaProizvod from "./BlagajnaProizvod";
import "./Placanje.css";
import { useStateValue } from "./StateProvider";

function Placanje() {
  const [{ kosarica, korisnik }, dispatch] = useStateValue();

  return (
    <div className="placanje">
      <div className="placanje__container">
        <h1>
          Blagajna (
          <Link to="/blagajna">Broj proizvoda: {kosarica?.length}</Link>)
        </h1>
        {/* Adresa za dostavu */}
        <div className="placanje__section">
          <div className="placanje__naslov">
            <h3>Adresa za dostavu</h3>
          </div>
          <div className="placanje__adresa">
            <p>{korisnik?.email}</p>
            <p>Zvonimirova 99</p>
            <p>Knin, Hrvatska</p>
          </div>
        </div>
        {/* Proizvodi u kosarici */}
        <div className="placanje__section">
          <div className="placanje__naslov">
            <h3>Pregledajte proizvode i podatke za dostavu</h3>
          </div>
          <div className="placanje__proizvodi">
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
        {/* Nacin placanja */}
        <div className="placanje__section">
          <div className="placanje__naslov">
            <h3>Način plaćanja</h3>
          </div>
          <div className="placanje__podaci"></div>
        </div>
      </div>
    </div>
  );
}

export default Placanje;
