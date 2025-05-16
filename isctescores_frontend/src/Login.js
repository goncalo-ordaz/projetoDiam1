import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    axios
      .post("http://127.0.0.1:8000/api/login/", {
        username,
        password,
      })
      .then((res) => {
        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
          alert("Login feito com sucesso!");
          navigate("/");
        } else {
          alert("Credenciais inválidas.");
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Erro ao tentar fazer login.");
      });
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Iniciar Sessão</h2>
      <input
        type="text"
        placeholder="Utilizador"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Palavra-passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Entrar</button>
    </form>
  );
}

export default Login;
