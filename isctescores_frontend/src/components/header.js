import { useNavigate } from 'react-router-dom';

export default function Header({ resetCompeticao, logoSize }) {
  const logoClass = logoSize === "large" ? "logo-header grande" : "logo-header";
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="logo-container">
        <img
          src="/images/logo.png"
          alt="ISCTESCORES"
          className={logoClass}
          onClick={resetCompeticao}
          style={{ cursor: "pointer" }}
        />
      </div>

      <div className="user-container" style={{ cursor: "pointer" }} onClick={() => navigate('/login')}>
        <img
          src="/images/user.png"
          alt="Utilizador"
          className={logoClass}
        />
      </div>
    </header>
  );
}
