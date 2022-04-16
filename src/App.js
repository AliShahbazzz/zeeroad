import SectionOne from "./components/SectionOne/sectionOne";
import About from "./components/About/about";
import './App.css';
import Services from "./components/Services/services";
import Work from "./components/Our Work/work";
import Book from "./components/Book Session/book";

function App() {
  return (
    <div className="app-root">
      <div className="app-main">
        <SectionOne />
        <About />
        <Services />
        <Work />
        <Book />
      </div>
    </div>
  );
}

export default App;
