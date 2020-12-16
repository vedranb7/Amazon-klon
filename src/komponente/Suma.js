import React from "react";
import "./Suma.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getKosaricaSuma } from "./reducer";

function Suma() {
  const [{ kosarica }, dispatch] = useStateValue();
  return (
    <div className="suma">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>Količina proizvoda: {kosarica.length}</p>
            <p>
              Ukupan iznos:
              <strong>{value}</strong>
            </p>
            <small className="suma__poklon">
              <input type="checkbox" /> Ova narudžba sadrži poklon
            </small>
          </>
        )}
        decimalScale={2}
        value={getKosaricaSuma(kosarica)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={" kn "}
      />

      <button>Idi na plaćanje</button>
    </div>
  );
}

export default Suma;
