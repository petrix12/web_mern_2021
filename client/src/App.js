import './App.scss';
import { Routes, Route, Link } from "react-router-dom";

function App() {

  return (
      <div className="App">
        <h1>Sistema de rutas básico</h1>
        <Link to="/">Home</Link><br/>
        <Link to="/contact">Contact</Link><br/>
        <Link to="/users">Users</Link><br/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Cantact />} />
          <Route path="users" element={<Users />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
    </div>
  );
}

function Home(){
  return <h2>Estamos en el componente Home</h2>
}

function Cantact(){
  return <h2>Estamos en el componente Cantact</h2>
}

function Users(){
  return <h2>Estamos en el componente Users</h2>
}

function Error404(){
  return <h2>Error 404...</h2>
}

export default App;