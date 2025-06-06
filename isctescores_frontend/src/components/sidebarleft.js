import React from "react";
import "../App.css";

function SidebarLeft({ onSelectCompeticao, ligaSelecionada }) {
  return (
    <aside className="sidebar-left">
      <ul>
        <li>
          <button
            className={ligaSelecionada === "Liga Betclic" ? "active" : ""}
            onClick={() => onSelectCompeticao("Liga Betclic")}
          >
            <img src="/images/betclicP.jpg" alt="Liga Betclic" />
            Liga Betclic
          </button>
        </li>
        <li>
          <button
            className={ligaSelecionada === "Premier League" ? "active" : ""}
            onClick={() => onSelectCompeticao("Premier League")}
          >
            <img src="/images/premier.png" alt="Premier League" />
            Premier League
          </button>
        </li>
        <li>
          <button
            className={ligaSelecionada === "Bundesliga" ? "active" : ""}
            onClick={() => onSelectCompeticao("Bundesliga")}
          >
            <img src="/images/bundesliga.png" alt="Bundesliga" />
            Bundesliga
          </button>
        </li>
        <li>
          <button
            className={ligaSelecionada === "La Liga" ? "active" : ""}
            onClick={() => onSelectCompeticao("La Liga")}
          >
            <img src="/images/laliga.png" alt="La Liga" />
            La Liga
          </button>
        </li>

        <li>
  <button
    className={ligaSelecionada === "Serie A" ? "active" : ""}
    onClick={() => onSelectCompeticao("Serie A")}
  >
    <img src="/images/seriea.png" alt="Serie A" />
    Serie A
  </button>
</li>


        <li>
          <button
            className={ligaSelecionada === "Favoritos" ? "active" : ""}
            onClick={() => onSelectCompeticao("Favoritos")}
          >
            ⭐ Favoritos
          </button>
        </li>
      </ul>
    </aside>
  );
}

export default SidebarLeft;
