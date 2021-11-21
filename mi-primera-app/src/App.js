import logo from './logo.svg';
import './App.css';
import Saludar from './components/Saludar'

function App() {
  /* const userName = "Pedro Bazó" */
  /* const edad = 49 */ 

  const user = {
    nombre: "Pedro Bazó",
    edad: 49,
    color: "Azul"
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Saludar name={userName} edad={edad}/> */}
        {/* <Saludar name="Leticia Rodríguez" edad="44"/> */}
        <Saludar userInfo={user}/>
      </header>
    </div>
  );
}

export default App;