import { useContext, useState } from "react";
import { DestaqueContext } from "../context/DestaqueContext";

const SidebarRight = () => {
  const { jogoDestaque } = useContext(DestaqueContext);
  const [selectedOdd, setSelectedOdd] = useState(null);

  const handleSelect = (tipo) => setSelectedOdd(tipo);

  const dadosJogos = {
    arsenal: {
      estadio: "Emirates Stadium",
      capacidade: "60.704",
      arbitro: "Michael Oliver"
    },
    manutd: {
      estadio: "Old Trafford",
      capacidade: "74.310",
      arbitro: "Anthony Taylor"
    },
    real: {
      estadio: "Santiago Bernabéu",
      capacidade: "81.044",
      arbitro: "Antonio Mateu Lahoz"
    },
    psg: {
      estadio: "Parc des Princes",
      capacidade: "47.929",
      arbitro: "Clément Turpin"
    },
    barcelona: {
      estadio: "Spotify Camp Nou",
      capacidade: "99.354",
      arbitro: "Jesús Gil Manzano"
    },
    inter: {
      estadio: "Giuseppe Meazza",
      capacidade: "75.923",
      arbitro: "Daniele Orsato"
    },
    atletico: {
      estadio: "Metropolitano",
      capacidade: "68.456",
      arbitro: "Carlos del Cerro Grande"
    },
    valencia: {
      estadio: "Mestalla",
      capacidade: "49.430",
      arbitro: "Juan Martínez Munuera"
    },
    bayern: {
      estadio: "Allianz Arena",
      capacidade: "75.000",
      arbitro: "Felix Brych"
    },
    dortmund: {
      estadio: "Signal Iduna Park",
      capacidade: "81.365",
      arbitro: "Daniel Siebert"
    }
  };

  if (!jogoDestaque) {
    return (
      <aside className="sidebar-right">
        <h2>Jogo em Destaque</h2>
        <p>Nenhum jogo selecionado.</p>
      </aside>
    );
  }

  const dados = dadosJogos[jogoDestaque.equipa_casa.toLowerCase()] || null;

  return (
    <aside className="sidebar-right">
      <h2>Jogo em Destaque</h2>

      <div className="highlight-featured">
        <div className="featured-logos horizontal">
          <div className="team-horizontal">
            <img
              src={`/images/${jogoDestaque.equipa_casa.toLowerCase()}.png`}
              alt={jogoDestaque.equipa_casa}
              className="club-logo-big"
            />
            <span className="team-name">{jogoDestaque.equipa_casa}</span>
          </div>

          <span className="score-vs">vs</span>

          <div className="team-horizontal">
            <img
              src={`/images/${jogoDestaque.equipa_fora.toLowerCase()}.png`}
              alt={jogoDestaque.equipa_fora}
              className="club-logo-big"
            />
            <span className="team-name">{jogoDestaque.equipa_fora}</span>
          </div>
        </div>

        <div className="match-time">
          <strong>{jogoDestaque.hora.slice(0, 5)}</strong> - Hoje
        </div>

        {dados && (
          <div style={{ marginTop: "6px", fontSize: "0.85rem", color: "#555" }}>
            <div><strong>Estádio:</strong> {dados.estadio}</div>
            <div><strong>Capacidade:</strong> {dados.capacidade}</div>
            <div><strong>Árbitro:</strong> {dados.arbitro}</div>
          </div>
        )}

        <p style={{ marginTop: "1rem" }}>Resultado final</p>

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

      {/* Anúncios Betclic e Pepsi */}
      <a href="https://www.betclic.pt/" target="_blank">
        <img src="/images/betclicP.jpg" alt="Betclic" className="anuncio-img" />
      </a>

      <a href="https://www.pepsi.com/" target="_blank">
        <img src="/images/pepsi.jpg" alt="Pepsi" className="anuncio-img" />
      </a>
    </aside>
  );
};

export default SidebarRight;
