
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Header({ isLoggedIn, onLogout, logoSize }) {
  const [dropdownVisivel, setDropdownVisivel] = useState(false);
  const logoClass = logoSize === "large" ? "logo-header grande" : "logo-header";
  const navigate = useNavigate();

  const handleLogout = () => {
    setDropdownVisivel(false);
    onLogout?.();
    navigate('/');
  };

  return (
    <header className="header">
  <div
    className="logo-container"
    style={{ display: "flex", alignItems: "center", gap: "10px" }}
  >
    <img
      src="/images/logo.png"
      alt="ISCTESCORES"
      className={logoClass}
      onClick={() => navigate("/")}
      style={{ cursor: "pointer" }}
    />
  </div>

  <div
    className="user-container"
    style={{ position: "absolute", right: "16px", top: "15px", cursor: "pointer" }}
    onClick={() => {
      if (isLoggedIn) {
        setDropdownVisivel(!dropdownVisivel);
      } else {
        navigate("/login");
      }
    }}
  >
    <img src="/images/user.png" alt="Utilizador" className="logo-header" />

    {isLoggedIn && dropdownVisivel && (
      <div className="dropdown-logout">
        <button onClick={handleLogout}>Terminar Sessão</button>
      </div>
    )}
  </div>
</header>

  );
}

export default Header;
