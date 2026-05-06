import { useEffect, useState } from "react";
import { generateCodename } from "./utils/generateCodename";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [codename, setCodename] = useState<string>("");

  useEffect(() => {
    const storedLogin = localStorage.getItem("isLoggedIn");

    if (storedLogin === "true") {
      setIsLoggedIn(true);

      const cachedName = localStorage.getItem("codename");
      if (cachedName) setCodename(cachedName);
    }
  }, []);

  const handleLogin = (): void => {
    let cachedName = localStorage.getItem("codename");

    if (!cachedName) {
      cachedName = generateCodename();
      localStorage.setItem("codename", cachedName);
    }

    localStorage.setItem("isLoggedIn", "true");

    setCodename(cachedName);
    setIsLoggedIn(true);
  };

  const handleGenerate = (): void => {
    const newName = generateCodename();
    localStorage.setItem("codename", newName);
    setCodename(newName);
  };

  const handleLogout = (): void => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <div className="app-container">
      <div className="card">
        {!isLoggedIn ? (
          <>
            <h1>🔐 Agent Login</h1>
            <p>Kirjaudu nähdäksesi agenttitunnuksesi</p>
            <button className="primary-btn" onClick={handleLogin}>
              Kirjaudu sisään
            </button>
          </>
        ) : (
          <>
            <h1>🕵️ Tervetuloa agentti</h1>
            <p>Koodinimesi on:</p>

            <div className="codename">{codename}</div>

            <button
              className="primary-btn"
              onClick={handleGenerate}
            >
              Generoi uusi koodinimi
            </button>

            <button
              className="logout-btn"
              onClick={handleLogout}
            >
              Kirjaudu ulos
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;