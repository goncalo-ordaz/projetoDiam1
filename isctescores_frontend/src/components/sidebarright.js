
import { useContext, useState, useEffect } from "react";
import { DestaqueContext } from "../context/DestaqueContext";

const SidebarRight = () => {
  const { jogoDestaque } = useContext(DestaqueContext);
  const [selectedOdd, setSelectedOdd] = useState(null);
  const handleSelect = (tipo) => setSelectedOdd(tipo);

  // Slides de anúncios rotativos
  const slides = [
    "/images/betano.jpg",
    "/images/solverde.jpg",
    "/images/betclic.jpg",
  ];
  const [indexAtual, setIndexAtual] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndexAtual((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <aside className="sidebar-right">
      <h2>Jogo em Destaque</h2>

      {jogoDestaque ? (
        <div className="highlight-featured">
          <div className="featured-logos horizontal">
            <div className="team-horizontal">
              <img
                src={`/images/${jogoDestaque.equipa_casa?.toLowerCase()}.png`}
                alt={jogoDestaque.equipa_casa}
                className="club-logo-big"
              />
              <span className="team-name">{jogoDestaque.equipa_casa}</span>
            </div>

            <span className="score-vs">vs</span>

            <div className="team-horizontal">
              <img
                src={`/images/${jogoDestaque.equipa_fora?.toLowerCase()}.png`}
                alt={jogoDestaque.equipa_fora}
                className="club-logo-big"
              />
              <span className="team-name">{jogoDestaque.equipa_fora}</span>
            </div>
          </div>

          <div className="match-time">
            <strong>
              {jogoDestaque.hora?.slice(11, 16) || jogoDestaque.hora?.slice(0, 5)}
            </strong>{" "}
            - Hoje
          </div>

          {jogoDestaque.estado && (
            <p className="score-vs">Estado: {jogoDestaque.estado}</p>
          )}

          <div className="odds-grid">
            {["1", "X", "2"].map((tipo) => (
              <a
                key={tipo}
                href="https://www.betclic.pt/"
                target="_blank"
                rel="noopener noreferrer"
                className={`odd-box ${selectedOdd === tipo ? "selected" : ""}`}
                onClick={() => handleSelect(tipo)}
              >
                <span>{tipo}</span>
                <strong>{jogoDestaque.odds?.[tipo] || "-"}</strong>
              </a>
            ))}
          </div>
        </div>
      ) : (
        <p>Nenhum jogo selecionado.</p>
      )}

      <div className="anuncios" style={{ marginTop: "20px" }}>
        <img
          src={slides[indexAtual]}
          alt="Publicidade"
          className="anuncio-img"
        />
      </div>
    </aside>
  );
};

export default SidebarRight;
