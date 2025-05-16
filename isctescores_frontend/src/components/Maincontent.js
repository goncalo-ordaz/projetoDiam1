
import React from "react";
import { useFavoritos } from "../context/FavoritosContext";

function MainContent({ jogosESPN, jogosESPNInglesa, jogosESPNBundesliga, setJogoDestaque, ligaSelecionada }) {
  const { favoritos, toggleFavorito } = useFavoritos();

  const isFavorito = (jogo) => {
    return favoritos.some(
      (f) =>
        f.equipa_casa === jogo.equipa_casa &&
        f.equipa_fora === jogo.equipa_fora
    );
  };

  const logoPath = (nome) => {
    return `/images/${nome.toLowerCase().replace(/ /g, "_")}.png`;
  };

  const renderJogoCard = (jogo, index) => (
    <div
      key={index}
      className="jogo-card-preview claro"
      onClick={() => setJogoDestaque(jogo)}
    >
      <span className="hora-preview">{jogo.hora.slice(11, 16)}</span>
      <div className="equipa-linha">
        <img src={logoPath(jogo.equipa_casa)} alt={jogo.equipa_casa} className="escudo-pequeno" />
        <span className="nome-equipa">{jogo.equipa_casa}</span>
      </div>
      <span className="vs-central">VS</span>
      <div className="equipa-linha">
        <img src={logoPath(jogo.equipa_fora)} alt={jogo.equipa_fora} className="escudo-pequeno" />
        <span className="nome-equipa">{jogo.equipa_fora}</span>
      </div>
      <span
        onClick={(e) => {
          e.stopPropagation();
          toggleFavorito(jogo);
        }}
        style={{ cursor: "pointer", marginLeft: "8px", fontSize: "20px", userSelect: "none" }}
      >
        {isFavorito(jogo) ? "⭐" : "☆"}
      </span>
    </div>
  );

  return (
    <main className="content">
      {ligaSelecionada === "Favoritos" && (
        <>
          <h2 className="titulo-centralizado">Meus Jogos Favoritos</h2>
          {favoritos.length === 0 ? (
            <p style={{ textAlign: "center" }}>Nenhum favorito adicionado ainda.</p>
          ) : (
            <div className="jogos-lista">
              {favoritos.map(renderJogoCard)}
            </div>
          )}
        </>
      )}

      {ligaSelecionada === "Liga Betclic" && (
        <>
          <h2 className="titulo-centralizado">Jogos Liga Betclic (ESPN)</h2>
          <div className="jogos-lista">
            {jogosESPN.map(renderJogoCard)}
          </div>
        </>
      )}

      {ligaSelecionada === "Premier League" && (
        <>
          <h2 className="titulo-centralizado">Jogos Premier League (ESPN)</h2>
          <div className="jogos-lista">
            {jogosESPNInglesa.map(renderJogoCard)}
          </div>
        </>
      )}

      {ligaSelecionada === "Bundesliga" && (
        <>
          <h2 className="titulo-centralizado">Jogos Bundesliga (ESPN)</h2>
          <div className="jogos-lista">
            {jogosESPNBundesliga.map(renderJogoCard)}
          </div>
        </>
      )}
    </main>
  );
}

export default MainContent;
