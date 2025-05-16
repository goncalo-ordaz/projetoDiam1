import React, { useEffect, useState } from 'react';
import axios from 'axios';

const JogosHoje = () => {
  const [jogos, setJogos] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/jogos/api/jogos/')
      .then((res) => setJogos(res.data))
      .catch((err) => console.error("Erro ao carregar jogos:", err));
  }, []);

  return (
    <div>
      <h2>Jogos Guardados na BD</h2>
      <ul>
        {jogos.map((jogo) => (
          <li key={jogo.id}>
            {jogo.equipa_casa} vs {jogo.equipa_fora} às {jogo.hora}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JogosHoje;
