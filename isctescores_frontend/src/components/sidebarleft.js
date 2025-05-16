import React, { useState, useEffect } from "react";

const SidebarLeft = ({ onSelectCompeticao, ligaSelecionada }) => {
  const ligas = [
    { nome: "Premier League", img: "/images/premier.png" },
    { nome: "Champions League", img: "/images/champions.png" },
    { nome: "La Liga", img: "/images/laliga.png" },
    { nome: "Bundesliga", img: "/images/bundesliga.png" },
  ];

  const slides = [
    "/images/solverde.jpg",
    "/images/betano.jpg",
    "/images/betclicP.jpg",
  ];

  const [indexAtual, setIndexAtual] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndexAtual((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000);

    return () => clearInterval(intervalo);
  }, []); // <- ✅ Correção aqui

  return (
    <aside className="sidebar-left">
      <ul>
        {ligas.map((liga) => (
          <li key={liga.nome}>
            <button
              className={ligaSelecionada === liga.nome ? "active" : ""}
              onClick={() => onSelectCompeticao(liga.nome)}
            >
              <img src={liga.img} alt={liga.nome} />
              {liga.nome}
            </button>
          </li>
        ))}
      </ul>

      <div className="anuncios">
        <img
          src={slides[indexAtual]}
          alt="Publicidade"
          className="anuncio-img"
        />
      </div>
    </aside>
  );
};

export default SidebarLeft;
