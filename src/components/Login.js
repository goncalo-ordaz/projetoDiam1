import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function getCSRFToken() {
  return document.cookie.split('; ').find(row => row.startsWith('csrftoken='))?.split('=')[1];
}

function Login() {
  const [modo, setModo] = useState('login');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await axios.get('http://localhost:8000/api/csrf/', { withCredentials: true });
      await axios.post('http://localhost:8000/api/login/', { email, password }, {
        withCredentials: true,
        headers: { 'X-CSRFToken': getCSRFToken() }
      });

      setError('');
      navigate('/');
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      setError('Credenciais inválidas');
    }
  };

  const handleRegisto = async () => {
    try {
      await axios.get('http://localhost:8000/api/csrf/', { withCredentials: true });
      await axios.post('http://localhost:8000/api/registar/', { username, password }, {
        withCredentials: true,
        headers: { 'X-CSRFToken': getCSRFToken() }
      });

      alert("Utilizador registado com sucesso!");
      setModo('login');
    } catch (error) {
      console.error('Erro ao registar:', error);
      setError('Erro ao registar utilizador');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <img src="/images/logo.png" alt="Logo ISCTESCORES" className="login-logo" />
        <h2>{modo === 'login' ? 'Iniciar Sessão' : 'Registar Conta'}</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {modo === 'registo' && (
          <input
            type="text"
            placeholder="Nome de utilizador"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        )}
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={modo === 'login' ? handleLogin : handleRegisto}>
          {modo === 'login' ? 'Entrar' : 'Registar'}
        </button>

        {error && <p className="error-msg">{error}</p>}

        <p style={{ marginTop: '1rem', cursor: 'pointer' }} onClick={() => setModo(modo === 'login' ? 'registo' : 'login')}>
          {modo === 'login' ? 'Ainda não tens conta? Regista-te' : 'Já tens conta? Inicia sessão'}
        </p>
      </div>
    </div>
  );
}

export default Login;
