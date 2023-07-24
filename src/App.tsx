import logo from "./assets/ShinyAppsLogo.jpeg";
import "./App.css";

export default function App() {
  return (
    <>
      <div>
        <a
          href="https://www.shinyapps.nl/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>ShinyApps</h1>
      <p>Crafting apps that shine!</p>
    </>
  );
}
