import Presentation from "./components/Presentation/Presentation";
import NavBar from "./components/NavBar/NavBar";
import APropos from "./components/APropos/APropos";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Presentation />
      <APropos />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
