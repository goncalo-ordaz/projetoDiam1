
import { createContext, useContext, useState } from "react";

export const FavoritosContext = createContext();

export const FavoritosProvider = ({ children }) => {
  const [favoritos, setFavoritos] = useState([]);
  const [userLogado, setUserLogado] = useState(true); // <- simula usuário autenticado

  const toggleFavorito = (jogo) => {
    if (!userLogado) {
      alert("É necessário login para adicionar aos favoritos.");
      return;
    }

    const existe = favoritos.find(f =>
      f.equipa_casa === jogo.equipa_casa && f.equipa_fora === jogo.equipa_fora
    );

    if (existe) {
      setFavoritos(favoritos.filter(f => f !== existe));
    } else {
      setFavoritos([...favoritos, jogo]);
    }
  };

  return (
    <FavoritosContext.Provider value={{ favoritos, toggleFavorito, userLogado, setUserLogado }}>
      {children}
    </FavoritosContext.Provider>
  );
};

export const useFavoritos = () => useContext(FavoritosContext);
