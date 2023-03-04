import Nav from "./components/Navbar/Nav";
import hero from "./assets/div.png"
function App() {

  return (
  <>
  <Nav />
  <img style={{width:"100%"}} src={hero} />
  </>
  );
}
export default App;