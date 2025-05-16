import React from "react";

function MainContent({ jogos, setJogoDestaque }) {
  return (
    <main className="content">
      <h2 className="titulo-centralizado">Jogos de Hoje</h2>

      <div className="jogos-lista">
        {jogos.map((jogo) => (
          <div
            key={jogo.id}
            className="jogo-card-preview claro"
            onClick={() => setJogoDestaque(jogo)}
          >
            <span className="hora-preview">{jogo.hora.slice(0, 5)}</span>

            <div className="equipa-linha">
              <img
                src={`/images/${jogo.equipa_casa.toLowerCase()}.png`}
                alt={jogo.equipa_casa}
                className="escudo-pequeno"
              />
              <span className="nome-equipa">{jogo.equipa_casa}</span>
            </div>

            <span className="vs-central">VS</span>

            <div className="equipa-linha">
              <img
                src={`/images/${jogo.equipa_fora.toLowerCase()}.png`}
                alt={jogo.equipa_fora}
                className="escudo-pequeno"
              />
              <span className="nome-equipa">{jogo.equipa_fora}</span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default MainContent;
