import Presentation from "./components/Presentation/Presentation";
import NavBar from "./components/NavBar/NavBar";
import APropos from "./components/APropos/APropos";
import Portfolio from "./components/Portfolio/Portfolio";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Presentation />
      <APropos />
      <Portfolio />
    </div>
  );
}

export default App;
