import Nav from "./components/Navbar/Nav";
import hero from "./assets/div.png";
import "./components/Navbar/Nav.css"
function App() {

  return (
  <>
  <Nav />
  <div class="image-container">
  <img className="hero-img" src={hero} />
  </div>
  
  </>
  );
}
export default App;