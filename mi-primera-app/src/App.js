import logo from './logo.svg';
import './App.css';
import Saludar from './components/Saludar'

function App() { 
  const user = {
    nombre: "Pedro Bazó",
    edad: 49,
    color: "Azul"
  }

  const saludarFn = (name, edad) => {
    /* console.log("Hola " + name + ". Tienes " + edad + " años.") */
    console.log(`Hola ${name}. Tienes ${edad} años.`)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Saludar userInfo={user} saludarFn={saludarFn}/>
      </header>
    </div>
  );
}

export default App;