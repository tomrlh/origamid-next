"use client";
import React, { useState, useEffect } from "react";

const Width = () => {
  const [width, setWidth] = useState(0);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWidth(document.documentElement.clientWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <h2 style={{ color: active ? "#680" : "#b00" }}>
        Largura da tela: {width}
      </h2>
      <button onClick={() => setActive((b) => !b)}>Ativar</button>
    </div>
  );
};

export default Width;
