
import { useEffect, useState, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

import Header from "./components/header";
import Footer from "./components/footer";
import SidebarLeft from "./components/sidebarleft";
import SidebarRight from "./components/sidebarright";
import MainContent from "./components/Maincontent";
import Login from "./components/Login";

import { DestaqueProvider, DestaqueContext } from "./context/DestaqueContext";
import { FavoritosProvider } from "./context/FavoritosContext";

import './App.css';

function HomePage() {
  const [jogosESPN, setJogosESPN] = useState([]);
  const [jogosESPNInglesa, setJogosESPNInglesa] = useState([]);
  const [jogosESPNBundesliga, setJogosESPNBundesliga] = useState([]);
  const [ligaSelecionada, setLigaSelecionada] = useState("");
  const { setJogoDestaque } = useContext(DestaqueContext);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/jogos/api/jogos_espn/")
      .then(res => {
        const comComp = res.data.map(j => ({ ...j, comp: "Liga Betclic" }));
        setJogosESPN(comComp);
      })
      .catch(err => console.error("Erro ESPN Portugal:", err));
  }, []);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/jogos/api/jogos_espn_inglesa/")
      .then(res => {
        const comComp = res.data.map(j => ({ ...j, comp: "Premier League" }));
        setJogosESPNInglesa(comComp);
      })
      .catch(err => console.error("Erro ESPN Inglesa:", err));
  }, []);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/jogos/api/jogos_espn_bundesliga/")
      .then(res => {
        const comComp = res.data.map(j => ({ ...j, comp: "Bundesliga" }));
        setJogosESPNBundesliga(comComp);
      })
      .catch(err => console.error("Erro ESPN Bundesliga:", err));
  }, []);

  return (
    <div className="container">
      <Header resetCompeticao={setLigaSelecionada} logoSize="large" />
      <div className="main">
        <SidebarLeft
          onSelectCompeticao={setLigaSelecionada}
          ligaSelecionada={ligaSelecionada}
        />
        <MainContent
          jogosESPN={jogosESPN}
          jogosESPNInglesa={jogosESPNInglesa}
          jogosESPNBundesliga={jogosESPNBundesliga}
          setJogoDestaque={setJogoDestaque}
          ligaSelecionada={ligaSelecionada}
        />
        <SidebarRight />
      </div>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <DestaqueProvider>
      <FavoritosProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </FavoritosProvider>
    </DestaqueProvider>
  );
}

export default App;
