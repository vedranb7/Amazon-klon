import React from "react";
import "./Naslovnica.css";
import NaslovnaPozadina from "../slike/Naslovnapozadina.jpg";
import Proizvod from "./Proizvod";

function Naslovnica() {
  return (
    <div className="naslovnica">
      <div className="naslovnica__container">
        <img
          className="naslovnica__pozadina"
          src={NaslovnaPozadina}
          alt="Pozadina"
        />
        <div className="naslovnica__red">
          <Proizvod
            id="199199199"
            naslov="The Slight Edge (Turning Simple Disciplines into Massive Success and Happiness)"
            cijena={189.99}
            slika="https://images-na.ssl-images-amazon.com/images/I/41hC5Pli3SL._SX332_BO1,204,203,200_.jpg"
            ocjena={5}
          />
          <Proizvod
            id="299299299"
            naslov="Lenovo ThinkPad T540p 15.6-Inch FHD - 2.6GHz Intel Core i5-4300M Processor, 8GB DDR3, 500GB HDD, Intel HD Graphics 4600 + NVIDIA GeForce GT 730M - Black"
            cijena={3999.99}
            slika="https://images-na.ssl-images-amazon.com/images/I/61jgvDUQ0lL._AC_SL1200_.jpg"
            ocjena={3}
          />
        </div>

        <div className="naslovnica__red">
          <Proizvod
            id="399399399"
            naslov='Xiaomi Redmi Note 9S 6.67" 48MP International Global Version (Glacier White, 4GB/64GB) Dual SIM GSM Unlocked 4G LTE'
            cijena={1899.99}
            slika="https://images-na.ssl-images-amazon.com/images/I/61L9nm4HvqL._AC_SL1200_.jpg"
            ocjena={4}
          />
          <Proizvod
            id="499499499"
            naslov='Fujitsu B24T-7 LED proGREEN - LED monitor - 24" - 1920 x 1080 FullHD - TN - 250 cd/m2 - 1000:1 - 20000000:1 (dynamic) -'
            cijena={1780.99}
            slika="https://images-na.ssl-images-amazon.com/images/I/81LLpLpPZ2L._AC_SL1500_.jpg"
            ocjena={5}
          />
          <Proizvod
            id="599599599"
            naslov="iRobot Roomba 675 Robot Vacuum-Wi-Fi Connectivity, Works with Alexa, Good for Pet Hair, Carpets, Hard Floors, Self-Charging"
            cijena={3999.99}
            slika="https://images-na.ssl-images-amazon.com/images/I/91irRh%2BK7qL._AC_SL1500_.jpg"
            ocjena={5}
          />
        </div>

        <div className="naslovnica__red">
          <Proizvod
            id="699699699"
            naslov="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            cijena={9499.99}
            slika="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            ocjena={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Naslovnica;
