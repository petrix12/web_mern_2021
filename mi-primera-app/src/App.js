import logo from './logo.svg';
import './App.css';
import Saludar from './components/Saludar'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Saludar name="Pedro Bazó" edad="49"/>
        <Saludar name="Leticia Rodríguez" edad="44"/>
      </header>
    </div>
  );
}

export default App;