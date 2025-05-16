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

import './App.css';

function HomePage() {
  const [jogos, setJogos] = useState([]);
  const [jogosESPN, setJogosESPN] = useState([]);
  const [jogosESPNInglesa, setJogosESPNInglesa] = useState([]);
  const [ligaSelecionada, setLigaSelecionada] = useState("");
  const { setJogoDestaque } = useContext(DestaqueContext);

  // Jogos locais (base de dados Django)
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/jogos/api/jogos/")
      .then(res => setJogos(res.data))
      .catch(err => console.error("Erro BD:", err));
  }, []);

  // Jogos ESPN Liga Portuguesa
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/jogos/api/jogos_espn/")
      .then(res => setJogosESPN(res.data))
      .catch(err => console.error("Erro ESPN Portugal:", err));
  }, []);

  // Jogos ESPN Premier League
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/jogos/api/jogos_espn_inglesa/")
      .then(res => setJogosESPNInglesa(res.data))
      .catch(err => console.error("Erro ESPN Inglesa:", err));
  }, []);

  const jogosFiltrados = ligaSelecionada
    ? jogos.filter(j => j.comp === ligaSelecionada)
    : jogos;

  return (
    <div className="container">
      <Header resetCompeticao={() => setLigaSelecionada("")} logoSize="large" />
      <div className="main">
        <SidebarLeft
          onSelectCompeticao={setLigaSelecionada}
          ligaSelecionada={ligaSelecionada}
        />
        <MainContent
          jogos={jogosFiltrados}
          jogosESPN={jogosESPN}
          jogosESPNInglesa={jogosESPNInglesa}
          setJogoDestaque={setJogoDestaque}
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
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </DestaqueProvider>
  );
}

export default App;

