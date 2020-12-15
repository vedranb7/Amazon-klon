import React from "react";
import "./Suma.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";

function Suma() {
  const [{ kosarica }, dispatch] = useStateValue();
  return (
    <div className="suma">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({kosarica.length} items):
              <strong>0</strong>
            </p>
            <small className="suma__poklon">
              <input type="checkbox" /> Ova narudžba sadrži poklon
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"kn"}
      />

      <button>Idi na plaćanje</button>
    </div>
  );
}

export default Suma;
