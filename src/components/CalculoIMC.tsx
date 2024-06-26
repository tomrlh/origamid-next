"use client";
import { useState } from "react";

const CalculoIMC = () => {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");

  const imc = () => {
    const imc = Number(peso) / (Number(altura) * Number(altura));
    return imc.toFixed(2);
  };

  return (
    <>
      <div>
        <label htmlFor="peso">PESO</label>
        <input
          id="peso"
          type="number"
          value={peso}
          onChange={(event) => {
            setPeso(event.target.value);
          }}
        />
      </div>
      <br />
      <div>
        <label htmlFor="altura">ALTURA</label>
        <input
          id="altura"
          type="number"
          value={altura}
          onChange={(event) => {
            setAltura(event.target.value);
          }}
        />
      </div>
      <br />
      {Number(imc()) > 0 && (
        <div>
          <label>IMC</label>
          <input disabled value={imc()} />
        </div>
      )}
    </>
  );
};

export default CalculoIMC;
