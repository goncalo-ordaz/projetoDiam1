import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function getCSRFToken() {
  return document.cookie.split('; ').find(row => row.startsWith('csrftoken='))?.split('=')[1];
}

function Login() {
  const [email, setEmail] = useState('');
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

  return (
    <div className="login-container">
      <div className="login-card">
        <img src="/images/logo.png" alt="Logo ISCTESCORES" className="login-logo" />
        <h2>Iniciar Sessão</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>Entrar</button>

        {error && <p className="error-msg">{error}</p>}
      </div>
    </div>
  );
}

export default Login;
