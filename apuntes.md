# Web Personal MERN Full Stack: MongoDB, Express, React y Node
+ [URL del curso en Udemy](https://www.udemy.com/course/web-personal-mern-full-stack-mongodb-express-react-node)
+ [URL del repositorio en GitHub](https://github.com/petrix12/web_mern_2021.git)

## Antes de iniciar:
1. Crear proyecto en la página de [GitHub](https://github.com) con el nombre: **web_mern_2021**.
    + **Description**: Proyecto para seguir el curso de 'Web Personal MERN Full Stack: MongoDB, Express, React y Node', creado por Agustín Navarro Galdo en Udemy.
    + **Public**.
2. En la ubicación raíz del proyecto en la terminal de la máquina local:
    + $ git init
    + $ git add .
    + $ git commit -m "Antes de iniciar"
    + $ git branch -M main
    + $ git remote add origin https://github.com/petrix12/web_mern_2021.git
    + $ git push -u origin main

## Sección 01: Introducción

### 001. Introducción
+ **Contenido**: explicación de la aplicación que desarrollaremos.
1. Commit Video 001:
    + $ git add .
    + $ git commit -m "Introducción"
    + $ git push -u origin main

### 002. Una charla antes de empezar
+ **Contenido**: recomendaciones para seguir el curso.
1. Commit Video 002:
    + $ git add .
    + $ git commit -m "Una charla antes de empezar"
    + $ git push -u origin main

### 003. ¿Que es el Stack MERN, MongoDB, ExpressJS, ReactJS y NodeJS?
+ **Continido**: acerca del Stack MERN.
1. Commit Video 003:
    + $ git add .
    + $ git commit -m "¿Que es el Stack MERN, MongoDB, ExpressJS, ReactJS y NodeJS?"
    + $ git push -u origin main

### 004. ¿Por que usamos React JS?
+ **Contenido**: razones para utilizar React.js.
1. Commit Video 004:
    + $ git add .
    + $ git commit -m "¿Por que usamos React JS?"
    + $ git push -u origin main

### 005. ¿Por que usamos Node JS?
+ **Contenido**: razones para utilizar Node.js.
1. Commit Video 005:
    + $ git add .
    + $ git commit -m "¿Por que usamos Node JS?"
    + $ git push -u origin main

### 006. ¿Por que usamos Express JS?
+ **Contenido**: razones para utilizar Express.js.
1. Commit Video 006:
    + $ git add .
    + $ git commit -m "¿Por que usamos Express JS?"
    + $ git push -u origin main

### 007. ¿Por que usamos MongoDB?
+ **Contenido**: razones para utilizar MongoDB.
1. Commit Video 007:
    + $ git add .
    + $ git commit -m "¿Por que usamos MongoDB?"
    + $ git push -u origin main

### 008. ¿Por que usamos el ODM Mongoose?
+ **Contenido**: razones para utilizar ODM Mongoose.
1. Commit Video 008:
    + $ git add .
    + $ git commit -m "¿Por que usamos el ODM Mongoose?"
    + $ git push -u origin main

## Sección 02: Instalaciones básicas

### 009. Seleccionando el Navegador
+ **Contenido**: razones para utilizar Googel Chrome.
1. Commit Video 009:
    + $ git add .
    + $ git commit -m "Seleccionando el Navegador"
    + $ git push -u origin main

### 010. Instalando Extensiones para Google Chrome
1. Instalar la extensión de Google Chrome: React Developer Tools.
2. Commit Video 010:
    + $ git add .
    + $ git commit -m "Instalando Extensiones para Google Chrome"
    + $ git push -u origin main

### 011. Instalando Postman para Peticiones HTTP
1. El autor del curso recomienda descargar e instalar [Postman](https://www.postman.com), yo en cambio recomiendo descargar la extensión de Visual Studio Code: 
    + Thunder Client
        + Editor: Ranga Vadhineni
        + Rest API Client for VS Code, GUI based Http Client
2. Commit Video 011:
    + $ git add .
    + $ git commit -m "Instalando Postman para Peticiones HTTP"
    + $ git push -u origin main

### 012. Seleccionando el Editor de Código
+ **Contenido**: razones para utilizar Visual Studio Code.
1. Commit Video 012:
    + $ git add .
    + $ git commit -m "Seleccionando el Editor de Código"
    + $ git push -u origin main

### 013. Instalando las Extensiones en Visual Studio Code
1. Extensiones de Visual Studio Code recomendadas:
    + Bracket Pair Colorizer 2
        + Editor: CoenraadS
    + ES7 React/Redux/GraphQL/React-Native snippets
        + Editor: dsznajder
    + ESLint
        + Editor: Microsoft
    + HTML Snippets
        + Editor: Mohamed Abusaid
    + IntelliSense for CSS class names in HTML
        + Editor: Zignd
    + JavaScript (ES6) code snippets
        + Editor: charalampos karypidis
    + Material Icon Theme
        + Editor: Philipp Kief
    + Path Intellisense
        + Editor: Christian Kohler
    + Prettier - Code formatter
        + Editor: Prettier
    + Rainbow CSV
        + Editor: mechatroner
    + Reactjs code snippets
        + Editor: charalampos karypidis
2. Commit Video 013:
    + $ git add .
    + $ git commit -m "Instalando las Extensiones en Visual Studio Code"
    + $ git push -u origin main

### 014. Instalando Node JS
1. Descargar e instalar [Node.js](https://nodejs.org/es).
2. Commit Video 014:
    + $ git add .
    + $ git commit -m "Instalando Node JS"
    + $ git push -u origin main

### 015. Instalando YARN
1. Instalar [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable):
    + $ npm install --global yarn
        + Para chequear la instalación:
            + $ yarn --version
2. Commit Video 015:
    + $ git add .
    + $ git commit -m "Instalando YARN"
    + $ git push -u origin main

### 016. MacOs - Instalando MongoDB
+ https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x
+ **Contenido**: explicación de la instalación de MongoDB en Mac.
1. Commit Video 016:
    + $ git add .
    + $ git commit -m "MacOs - Instalando MongoDB"
    + $ git push -u origin main

### 017. Windows - Instalando MongoDB
+ https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/
1. Descargar e instalar MongoDB.
2. Crear variables de entorno para ejecutar MongoDB desde cualquier ubicación.
    + En **Windows**, ir a **Propiedades del sistema** y en las pestaña de **Opciones avanzadas** presionar el botón **Variables de entorno...**.
    + En el grupo de Variables de usuario agregar la ruta **C:\Program Files\MongoDB\Server\5.0\bin** en **Path**.
    + Para iniciar los servicios de MongoDB, ejecutar en una terminal de Windows:
        + $ mongod
        + **Nota**: MongoDB correra en el puerto 27017.
    + Conexión para administrar **MongoDB** desde **Robo 3T**:
        + Nombre: localhost
        + Puerto: 27017
5. Commit Video 017:
    + $ git add .
    + $ git commit -m "Windows - Instalando MongoDB"
    + $ git push -u origin main

### 018. Instalando Robot 3T
1. Descargar e instalar [Robo 3T](https://robomongo.org)
1. Commit Video 018:
    + $ git add .
    + $ git commit -m "Instalando Robot 3T"
    + $ git push -u origin main

## Sección 03: Conceptos básicos de React JS

### 019. ¿Qué vamos hacer en esta sección?
+ **Contenido**: breve introducción a esta sección.
1. Commit Video 019:
    + $ git add .
    + $ git commit -m "¿Qué vamos hacer en esta sección?"
    + $ git push -u origin main

### 020. Introducción a JSX
+ **Contenido**: introducción a JSX.
1. Commit Video 020:
    + $ git push -u origin main
    + $ git commit -m "Introducción a JSX"
    + $ git push -u origin main

### 021. Conceptos básicos de React JS
+ **Contenido**: Virtual DOM vs. Real DOM.
1. Commit Video 021:
    + $ git add .
    + $ git commit -m "Conceptos básicos de React JS"
    + $ git push -u origin main

### 022. Creando nuestra primera app en React JS
1. Crear proyecto React:
    + $ npx create-react-app mi-primera-app
2. Ejecutar proyecto **mi-primera-app**:
    + $ cd mi-primera-app
    + $ yarn start
4. Commit Video 022:
    + $ git add .
    + $ git commit -m "Creando nuestra primera app en React JS"
    + $ git push -u origin main

### 023. Estructura de React JS
+ **Contenido**: estructura básica de una aplicación React.
1. Commit Video 023:
    + $ git add .
    + $ git commit -m "Estructura de React JS"
    + $ git push -u origin main

### 024. Nuestro primer Componente en React JS
1. Crear componente **mi-primera-app\src\components\HolaMundo.js**:
    ```js
    import React from 'react';

    // La función del componente debe comenzar obligatoriamente en mayúscula, pero si se puede llamar diferente.
    // La función del componente obligatoriamente deber retornar algún valor.
    export default function HolaMundo(){
        const mifuncion = () => {
            console.log('Mi función')
        }
                
        return (
            <div>
                <h1>Soluciones++</h1>
                <h2>Pedro Bazó</h2>
            </div>
        )
    }

    /* export function AdiosMundo(){
        return(
            <div>
                <h3>Adios</h3>
            </div>
        )
    } */

    /* export default HolaMundo */
    ```
    + **Nota**: obligatoriamente todo componente en React debe comenzar en mayúscula.
2. Crear componente **mi-primera-app\src\components\AdiosMundo.js**:
    ```js
    import React from 'react';

    export default function AdiosMundo(){
        return(
            <div>
                <h3>Adios</h3>
            </div>
        )
    }
    ```
3. Modificar el compoente padre **mi-primera-app\src\App.js**:
    ```js
    import logo from './logo.svg';
    import './App.css';
    import HolaMundo/* , { AdiosMundo } */ from './components/HolaMundo'
    import AdiosMundo from './components/AdiosMundo'

    function App() {
        return (
            <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <HolaMundo />
                <AdiosMundo />
            </header>
            </div>
        );
    }

    export default App;
    ```
4. Commit Video 024:
    + $ git add .
    + $ git commit -m "Nuestro primer Componente en React JS"
    + $ git push -u origin main

### 025. ¿Que son los Props de React?
+ **Contenido**: utilidad de los Props en React.
1. Commit Video 025:
    + $ git add .
    + $ git commit -m "¿Que son los Props de React?"
    + $ git push -u origin main

### 026. Pasando props básicos entre componentes
1. Crear componente **mi-primera-app\src\components\Saludar.js**:
    ```js
    export default function Saludar(props){
        console.log(props)

        return(
            <div>
                <h2>Hola {props.name}. Tienes {props.edad} años</h2>
            </div>
        )
    }
    ```
2. Modificar el componente padre **mi-primera-app\src\App.js**:
    ```js
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
    ```
3. Commit Video 026:
    + $ git add .
    + $ git commit -m "Pasando props básicos entre componentes"
    + $ git push -u origin main

### 027. Pasando variables y objetos entre componentes por los props
1. Modificar la aplicación padre **mi-primera-app\src\App.js**:
    ```js
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
    ```
2. Modificar el componente **mi-primera-app\src\components\Saludar.js**:
    ```js
    export default function Saludar(props){
        /* console.log(props.userInfo.nombre) */
        /* console.log(props.userInfo.edad) */
        /* console.log(props.userInfo.color) */

        return(
            <div>
                <h2>
                    Hola {props.userInfo.nombre}. 
                    Tienes {props.userInfo.edad} años.
                    Tu color es {props.userInfo.color}
                </h2>
            </div>
        )
    }
    ```
3. Commit Video 027:
    + $ git add .
    + $ git commit -m "Pasando variables y objetos entre componentes por los props"
    + $ git push -u origin main

### 028. Pasando funciones entre componente por los props
1. Modificar el componente **mi-primera-app\src\components\Saludar.js**:
    ```js
    export default function Saludar(props){
        console.log(props)

        const saludar = () => {
            alert("Hola Pedro")
        }

        return(
            <div>
                {/* <button onClick={saludar}>Saludar</button> */}
                <button onClick={() => props.saludarFn(props.userInfo.nombre)}>Saludar</button>
            </div>
        )
    }
    ```
2. Modificar el componente padre **mi-primera-app\src\App.js**:
    ```js
    import logo from './logo.svg';
    import './App.css';
    import Saludar from './components/Saludar'

    function App() { 
        const user = {
            nombre: "Pedro Bazó",
            edad: 49,
            color: "Azul"
        }

        const saludarFn = name => {
            /* console.log("Hola Petrix") */
            console.log("Hola " + name)
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
    ```
3. Commit Video 028:
    + $ git add .
    + $ git commit -m "Pasando funciones entre componente por los props"
    + $ git push -u origin main

### 029. El uso de la Asignación por Destructuring
1. Modificar el componente **mi-primera-app\src\components\Saludar.js**:
    ```js
    export default function Saludar(props){
        const { userInfo, saludarFn} = props
        const { nombre } = userInfo
        console.log(props)
        console.log(userInfo)
        console.log(saludarFn)

        return(
            <div>
                <button onClick={() => saludarFn(nombre)}>Saludar</button>
            </div>
        )
    }
    ```
2. Commit Video 029:
    + $ git add .
    + $ git commit -m "El uso de la Asignación por Destructuring"
    + $ git push -u origin main

### 030. Props por defecto
1. Modificar el componente **mi-primera-app\src\components\Saludar.js**:
    ```js
    export default function Saludar(props){
        const { userInfo, saludarFn} = props
        const { nombre = "Petrix" } = userInfo
        console.log(props)
        console.log(userInfo)
        console.log(saludarFn)

        return(
            <div>
                <button onClick={() => saludarFn(nombre)}>Saludar</button>
            </div>
        )
    }
    ```
2. Modificar el componente padre **mi-primera-app\src\App.js**:
    ```js
    import logo from './logo.svg';
    import './App.css';
    import Saludar from './components/Saludar'

    function App() { 
        const user = {
            /* nombre: "Pedro Bazó", */
            edad: 49,
            color: "Azul"
        }

        const saludarFn = name => {
            /* console.log("Hola Petrix") */
            console.log("Hola " + name)
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
    ```
3. Commit Video 030:
    + $ git add .
    + $ git commit -m "Props por defecto"
    + $ git push -u origin main

### 031. Template Strings
1. Modificar el componente padre **mi-primera-app\src\App.js**:
    ```js
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
    ```
2. Commit Video 031:
    + $ git add .
    + $ git commit -m "Template Strings"
    + $ git push -u origin main

### 032. Hook de estado - useState
1. Modificar el componente padre **mi-primera-app\src\App.js**:
    ```js
    import { useState } from 'react'
    import logo from './logo.svg';
    import './App.css';

    function App() {
        const [stateCar, setStateCar] = useState(false)

        const encenderApagar = () => {
            /* console.log("Encender / Apagar") */
            /* setStateCar(!stateCar) */
            setStateCar(preValue => !preValue)
        }

        return (
            <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h3>El coche esta: {stateCar ? 'Encendido' : 'Apagado'}</h3>
                <button onClick={encenderApagar}>Encender / Apagar</button>
            </header>
            </div>
        );
    }

    export default App;
    ```
2. Commit Video 032:
    + $ git add .
    + $ git commit -m "Hook de estado - useState"
    + $ git push -u origin main

### 033. Hook de efecto - useEffect
1. Modificar el componente padre **mi-primera-app\src\App.js**:
    ```js
    import { useState, useEffect } from 'react'
    import logo from './logo.svg';
    import './App.css';

    function App() {
        const [stateCar, setStateCar] = useState(false)
        const [contar, setContar] = useState(0)

        useEffect(() => {
            console.log("Total: " + contar)
        }, [contar])

        const encenderApagar = () => {
            setStateCar(!stateCar)
            setContar(contar + 1)
        }

        return (
            <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h3>El coche esta: {stateCar ? 'Encendido' : 'Apagado'}</h3>
                <h4>Clicks: {contar}</h4>
                <button onClick={encenderApagar}>Encender / Apagar</button>
            </header>
            </div>
        );
    }

    export default App;
    ```
2. Commit Video 033:
    + $ git add .
    + $ git commit -m "Hook de efecto - useEffect"
    + $ git push -u origin main

## Sección 04: Iniciando el proyecto

### 034. Creando el proyecto cliente en React JS
1. Crear el proyecto cliente (frontend):
    + $ npx create-react-app client
2. Ejecutar:
    + $ cd client
    + $ yarn
3. Modificar **client\package.json**:
    ```json
    "scripts": {
        "dev": "react-scripts start",
        "build": "react-scripts build",
        "test": "react-scripts test",
        "eject": "react-scripts eject"
    },
    ```
    + **Nota**: ahora para levantar el proyecto será con:
        + $ yarn dev
4. Modificar el componente padre **client\src\App.js**:
    ```js
    import './App.css';

    function App() {
        return (
            <div className="App">
                <h1>Web Personal - Client</h1>
            </div>
        );
    }

    export default App;
    ```
5. Commit Video 033:
    + $ git add .
    + $ git commit -m "Creando el proyecto cliente en React JS"
    + $ git push -u origin main

### 035. Añadiendo SASS al proyecto
+ https://sass-lang.com
+ https://yarnpkg.com
1. Instalar **node-sass** al proyecto **client**:
    + $ yarn add sass
2. Eliminar el archivo de estilo **client\src\App.css**.
3. Crear el archivo de estilo **client\src\App.scss**:
    ```js
    @import './scss/index';

    /* .app {
        color: red;
    } */

    /* .app h1 {
        color: red;
    }

    .app h2 {
        color: green;
    } */

    .app{
        h1 {
            /* color: red; */
            color: $primary-color;
        }
        
        h2 {
            color: green;
        }
    }
    ```
4. Modificar el componente padre **client\src\App.js**:
    ```js
    import './App.scss';

    function App() {
        return (
            <div className="app">
                <h1>Web Personal - Client</h1>
                <h2>Proyecto</h2>
            </div>
        );
    }

    export default App;
    ```
5. Crear archivo **client\src\scss\index.scss**:
    ```js
    @import './variables';
    ```
6. Crear archivo **client\src\scss\_variables.scss**:
    ```js
    $primary-color: #0098d3;
    ```
7. Para la ejecución de la aplicación **client** en caso de que este corriendo y ejecutar:
    + $ yarn cache clean
    + $ yarn
    + $ yarn run dev
8. Commit Video 035:
    + $ git add .
    + $ git commit -m "Añadiendo SASS al proyecto"
    + $ git push -u origin main

### 036. Añadiendo la librería Ant Design al proyecto
1. Instalar libreria de CSS **Ant Design**:
    + $ yarn add antd
2. Modificar el componente padre **client\src\App.js**:
    ```js
    import './App.scss';
    import { DatePicker, Card } from 'antd';
    import 'antd/dist/antd.css';

    function App() {
        const test = (date, dateString) => {
            console.log(date, dateString)
        }

        return (
            <div className="app">
                <h1>Web Personal - Client</h1>
                <h2>Proyecto</h2>

                <DatePicker onChange={test}/>
                
                <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
            </div>
        );
    }

    export default App;
    ```
3. Commit Video 036:
    + $ git add .
    + $ git commit -m "Añadiendo la librería Ant Design al proyecto"
    + $ git push -u origin main

### 037. Creando la estructura del proyecto server
1. Crear carpeta **server** para la aplicación servidor.
2. Ubicados en **server**, ejecutar:
    + $ yarn init
        + question name (31MERN): solucionesppBackend
        + question version (1.0.0): 0.0.1
        + question description: Backend para la web www.solucionesppBackend.com
        + question entry point (index.js): ENTER
        + question repository url (https://github.com/petrix12/web_mern_2021.git): ENTER
        + question author (Pedro Bazó <bazo.pedro@gmail.com>): ENTER
        + question license (MIT): ENTER
        + question private: ENTER
    + $ yarn
3. Crear la estructura base del proyecto:
    + Estructura de directorios
        + controllers
        + middleware
        + models
        + routers
        + services
    + Estructura de ficheros:
        + index.js
        + app.js
        + config.js
4. Commit Video 037:
    + $ git add .
    + $ git commit -m "Creando la estructura del proyecto server"
    + $ git push -u origin main

### 038. Instalando las dependencias que usaremos
1. Modificar **server\package.json**:
    ```json
    {
        "name": "solucionespp-backend",
        ≡
    }
    ```
2. Instalar las siguientes dependencias:
    + $ yarn add bcrypt-node
    + $ yarn add body-parser
    + $ yarn add connect-multiparty
    + $ yarn add express
    + $ yarn add jwt-simple
    + $ yarn add moment
    + $ yarn add mongoose
    + $ yarn add nodemon
3. Ejecutar:
    + $ yarn
4. Crear archivo **server\.gitignore**:
    ```gitignore
    # dependencies
    /node_modules
    ```
5. Commit Video 038:
    + $ git add .
    + $ git commit -m "Instalando las dependencias que usaremos"
    + $ git push -u origin main

### 039. 1/2 Conectando el proyecto server con MongoDB usando Mongoose
1. Verificar que esta iniciado el servicio de MongoDB, en caso de no estarlo:
    + $ mongod
2. Programar la configuración básica de **server\config.js**:
    ```js
    const API_VERSION = "v1"
    const IP_SERVER = "localhost"
    const PORT_DB = 27017

    module.exports = {
        API_VERSION,
        IP_SERVER,
        PORT_DB
    }
    ```
3. Programar la configuración básica de **server\app.js**:
    ```js
    const express = require("express")
    const bodyParser = require("body-parser")

    const app = express()
    const { API_VERSION } = require('./config')

    // Load routings
    // ....

    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())

    // Configure Header HTTP
    // ....

    // Basic Routers
    // ....

    module.exports = app
    ```
4. Programar la configuración básica de **server\index.js**:
    ```js
    const mongoose = require("mongoose")
    const app = require("./app")
    const port = process.env.PORT || 3977
    const { API_VERSION, IP_SERVER, PORT_DB } = require("./config")

    mongoose.connect(`mongodb://${IP_SERVER}:${PORT_DB}/solucionespp`, {useNewUrlParser: true}, (err, res) => {
        if(err){
            throw err
        }else{
            console.log('Conexión exitosa a MongoDB')
            app.listen(port, () => {
                console.log("########################")
                console.log("####### API REST #######")
                console.log("########################")
                console.log(`http://${IP_SERVER}:${PORT_DB}/api/${API_VERSION}/`)
            })
        }
    });
    ```
5. Comprobar la conexión ejecutando:
    + $ node index.js
6. Commit Video 039:
    + $ git add .
    + $ git commit -m "1/2 Conectando el proyecto server con MongoDB usando Mongoose"
    + $ git push -u origin main

### 040. 2/2 Conectando el proyecto server con MongoDB usando Mongoose
1. Modificar **server\index.js**:
    ```js
    const mongoose = require("mongoose")
    const app = require("./app")
    const port = process.env.PORT || 3977
    const { API_VERSION, IP_SERVER, PORT_DB } = require("./config")

    mongoose.connect(`mongodb://${IP_SERVER}:${PORT_DB}/solucionespp`, 
        {useNewUrlParser: true, useUnifiedTopology: true}, (err, res) => {
        if(err){
            throw err
        }else{
            console.log('Conexión exitosa a MongoDB')
            app.listen(port, () => {
                console.log("########################")
                console.log("####### API REST #######")
                console.log("########################")
                console.log(`http://${IP_SERVER}:${port}/api/${API_VERSION}/`)
            })
        }
    });
    ```
2. Agregar script en **server\package.json** para iniciar servidor:
    ```json
    {
        ≡
        "scripts": {
            "start": "node index.js"
        }
    }
    ```
3. Commit Video 040:
    + $ git add .
    + $ git commit -m "2/2 Conectando el proyecto server con MongoDB usando Mongoose"
    + $ git push -u origin main

### 041. Cambiando el proyecto para que lea los cambios de código automáticamente
1. Modificar **server\package.json**:
    ```json
    {
        ≡
        "scripts": {
            "start": "nodemon index.js"
        }
    }
    ```
2. Commit Video 041:
    + $ git add .
    + $ git commit -m "Cambiando el proyecto para que lea los cambios de código automáticamente"
    + $ git push -u origin main

### 042. Solucionando error DeprecationWarning useFindAndModify
1. Modificar **server\index.js**:
    ```js
    const mongoose = require("mongoose")
    const app = require("./app")
    const port = process.env.PORT || 3977
    const { API_VERSION, IP_SERVER, PORT_DB } = require("./config")

    /* mongoose.set("useFindAndModify", false) */

    mongoose.connect(`mongodb://${IP_SERVER}:${PORT_DB}/solucionespp`, 
        {useNewUrlParser: true, useUnifiedTopology: true}, (err, res) => {
        if(err){
            throw err
        }else{
            console.log('Conexión exitosa a MongoDB')
            app.listen(port, () => {
                console.log("########################")
                console.log("####### API REST #######")
                console.log("########################")
                console.log(`http://${IP_SERVER}:${port}/api/${API_VERSION}/`)
            })
        }
    });
    ```
    + Nota: ya no es necesario éscribir la línea de código:
    ```js
    mongoose.set("useFindAndModify", false)
    ```
2. Commit Video 042:
    + $ git add .
    + $ git commit -m "Solucionando error DeprecationWarning useFindAndModify"
    + $ git push -u origin main

## Sección 05: Sistema de rutas

### 043. Instalando el Package react-router-dom
+ https://reactrouter.com/docs/en/v6/getting-started/installation
1. Ir al proyecto **client** e instalar React Router Dom:
    + $ yarn add react-router-dom
2. Commit Video 043:
    + $ git add .
    + $ git commit -m "Instalando el Package react-router-dom"
    + $ git push -u origin main

### 044. Ejemplo de uso React Router Dom
1. Modificar **client\src\index.js**:
    ```js
    import React from 'react';
    import ReactDOM from 'react-dom';
    import { BrowserRouter } from "react-router-dom";
    ≡

    ReactDOM.render(
        <BrowserRouter>
            <App />
        </BrowserRouter>,
        document.getElementById('root')
    );
    ≡
    ```
2. Modificar componente padre **client\src\App.js**:
    ```js
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
    ```
3. Commit Video 043:
    + $ git add .
    + $ git commit -m "Ejemplo de uso React Router Dom"
    + $ git push -u origin main

### 045. Creando paginas básicas para usar en las rutas
1. Crear página **client\src\pages\Admin\Admin.js**:
    ```js
    export default function Admin(){
        return(
            <div>
                <h1>Estamos en Admin</h1>
            </div>
        )
    }
    ```
2. Crear página **client\src\pages\Admin\index.js**:
    ```js
    export { default } from "./Admin"
    ```
3. Crear página **client\src\pages\Admin\SignIn.js**:
    ```js
    export default function SignIn(){
        return(
            <div>
                <h1>Estamos en SignIn</h1>
            </div>
        )
    }
    ```
4. Crear página principal **client\src\pages\Home.js**:
    ```js
    export default function Home(){
        return(
            <div>
                <h1>Estamos en Home</h1>
            </div>
        )
    }
    ```
5. Crear página **client\src\pages\Contact.js**:
    ```js
    export default function Contact(){
        return(
            <div>
                <h1>Estamos en Contact</h1>
            </div>
        )
    }
    ```
6. Modificar componente padre **client\src\App.js**:
    ```js
    import Admin from './pages/Admin'
    import SignIn from './pages/Admin/SignIn'
    import Home from './pages/Home'
    import Contact from './pages/Contact'

    import './App.scss'

    function App() {
        return (
            <div>
                <h1>Estamos en App.js</h1>
                <Admin />
                <SignIn />
                <Home />
                <Contact />
            </div>
        )
    }

    export default App;
    ```
7. Commit Video 045:
    + $ git add .
    + $ git commit -m "Creando paginas básicas para usar en las rutas"
    + $ git push -u origin main

### 046. Creando Layouts de los cuales partirán la sección de usuario y admin
1. Crear layout **client\src\layouts\LayoutAdmin.js**:
    ```js
    import { Layout } from "antd"

    export default function LayoutAdmin() {
        return (
            <Layout>
                <h2>Menú Sider</h2>
                <div>
                    Contenido...
                </div>
                <h5>Footer...</h5>
            </Layout>
        )
    }
    ```
2. Crear layout **client\src\layouts\LayoutBasic.js**:
    ```js
    import { Layout } from "antd"

    export default function LayoutBasic() {
        return (
            <Layout>
                <h2>Menú Sider</h2>
                <div>
                    Contenido...
                </div>
                <h5>Footer...</h5>
            </Layout>
        )
    }
    ```
3. Commit Video 046:
    + $ git add .
    + $ git commit -m "Creando Layouts de los cuales partirán la sección de usuario y admin"
    + $ git push -u origin main

### 047. Creando la configuración de rutas para el Panel de Administrador
1. Crear archivo de rutas **client\src\config\routes.js**:
    ```js
    // Layout
    import LayoutAdmin from "../layouts/LayoutAdmin"

    // Admin Pages
    import AdminHome from "../pages/Admin"
    import AdminSingIn from "../pages/Admin/SignIn"

    // Sistema de rutas
    const routes = [
        {
            path: "/admin",
            component: LayoutAdmin,
            exact: false,
            routes: [
                {
                    path: "/admin",
                    component: AdminHome, 
                    exact: true
                },
                {
                    path: "/admin/login",
                    component: AdminSingIn, 
                    exact: true
                }
            ]
        }
    ]

    export default routes
    ```
2. Commit Video 047:
    + $ git add .
    + $ git commit -m "Creando la configuración de rutas para el Panel de Administrador"
    + $ git push -u origin main

### 048. Programando el sistema de rutas para renderizar el Layout correspondiente
1. Regresar a la versión 5 de react router:
    + $ yarn remove react-router-dom
    + $ yarn add react-router-dom@5
2. Modificar el componente padre **client\src\App.js**:
    ```js
    import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
    import routes from "./config/routes"

    import './App.scss';

    function App() {
        return (
            <Router>
                <Switch>
                    {routes.map((route, index) => (
                        <RouteWithSubRoutes key={index} {...route}/>
                    ))}
                </Switch>
            </Router>
        )
    }

    function RouteWithSubRoutes(route) {
    console.log(route)
        return (
            <Route
                path={route.path}
                exact={route.exact}
                render={props => <route.component routes={route.routes} {...props} />}
            />
        )
    }

    export default App;
    ```
3. Commit Video 048:
    + $ git add .
    + $ git commit -m "Programando el sistema de rutas para renderizar el Layout correspondiente"
    + $ git push -u origin main

### 049. Programando el sistema de rutas para cargar las páginas dentro del LayoutAdmin
1. Crear archivo de estilo **client\src\layouts\LayoutAdmin.scss** (por ahora lo dejaremos vacio).
2. Modificar layout **client\src\layouts\LayoutAdmin.js**:
    ```js
    import { Route } from 'react-router-dom'
    import { Layout } from "antd"
    import 'antd/dist/antd.css'
    import "./LayoutAdmin.scss"

    export default function LayoutAdmin(props) {
        const { routes } = props
        const { Header, Content, Footer } = Layout
        /* console.log(props) */

        return (
            <Layout>
                <h2>Menú Sider Admin</h2>
                <Layout>
                    <Header>Header...</Header>
                    <Content>
                        <LoadRoutes routes={routes}/>
                    </Content>
                    <Footer>Soluciones++ 2021</Footer>
                </Layout>
            </Layout>
        )
    }

    function LoadRoutes({ routes }){
        /* console.log(routes) */
        return routes.map((route, index) => (
            <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.component}
            />
        ))
    }
    ```
3. Commit Video 049:
    + $ git add .
    + $ git commit -m "Programando el sistema de rutas para cargar las páginas dentro del LayoutAdmin"
    + $ git push -u origin main

### 050. Añadiendo la configuración de rutas para usuarios normales
1. Modificar archivo de rutas **client\src\config\routes.js**:
    ```js
    // Layout
    ≡
    import LayoutBasic from "../layouts/LayoutBasic"


    // Admin Pages
    ≡

    // Pages
    import Home from '../pages/Home'
    import Contact from '../pages/Contact'

    // Sistema de rutas
    const routes = [
        {
            path: "/admin",
            ≡
        },
        {
            path: "/",
            component: LayoutBasic,
            exact: false,
            routes: [
                {
                    path: "/",
                    component: Home, 
                    exact: true
                },
                {
                    path: "/contact",
                    component: Contact, 
                    exact: true
                }
            ]

        }
    ]

    export default routes
    ```
2. Commit Video 050:
    + $ git add .
    + $ git commit -m "Añadiendo la configuración de rutas para usuarios normales"
    + $ git push -u origin main

### 051. Programando el sistema de rutas para cargar las páginas dentro del LayoutBasic
1. Crear archivo de estilo **client\src\layouts\LayoutBasic.scss** (por ahora lo dejaremos vacio).
2. Modificar layout **client\src\layouts\LayoutBasic.js**:
    ```js
    import { Route } from "react-router-dom"
    import { Layout } from "antd"
    import './LayoutBasic.scss'

    export default function LayoutBasic(props) {
        const { routes } = props
        const { Content, Footer } = Layout
        console.log(routes)

        return (
            <Layout>
                <h2>Menú...</h2>
                <Layout>
                    <Content>
                        <LoadRoutes routes={routes}/>
                    </Content>
                    <Footer>Soluciones++</Footer>
                </Layout>
            </Layout>
        )
    }

    function LoadRoutes({ routes }){
        /* console.log(routes) */
        return routes.map((route, index) => (
            <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.component}
            />
        ))
    }
    ```
3. Commit Video 051:
    + $ git add .
    + $ git commit -m "Programando el sistema de rutas para cargar las páginas dentro del LayoutBasic"
    + $ git push -u origin main

### 052. Página Error404
1. Crear página **client\src\pages\Error404.js**:
    ```js
    export default function Error404(){
        return(
            <div>
                <h1>Estamos en Error404</h1>
            </div>
        )
    }
    ```
2. Modificar archivo de rutas **client\src\config\routes.js**:
    ```js
    // Layout
    ≡


    // Admin Pages
    ≡

    // Pages
    ≡

    // Otros
    import Error404 from '../pages/Error404'

    // Sistema de rutas
    const routes = [
        {
            path: "/admin",
            ≡
            routes: [
                ≡
                {
                    component: Error404
                }
            ]
        },
        {
            ≡
            routes: [
                ≡
                {
                    component: Error404
                }
            ]

        }
    ]

    export default routes
    ```
3. Modificar layout **client\src\layouts\LayoutAdmin.js**:
    ```js
    import { Route, Switch } from 'react-router-dom'
    ≡

    export default function LayoutAdmin(props) {
        ≡
    }

    function LoadRoutes({ routes }){
        return (
            <Switch>
                {routes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.component}
                    />
                ))}
            </Switch>
        )
    }
    ```
4. Modificar layout **client\src\layouts\LayoutBasic.js**:
    ```js
    import { Route, Switch } from "react-router-dom"
    ≡

    export default function LayoutBasic(props) {
        ≡
    }

    function LoadRoutes({ routes }){
        return (
            <Switch>
                {routes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.component}
                    />
                ))}
            </Switch>
        )
    }
    ```
5. Commit Video 052:
    + $ git add .
    + $ git commit -m "Página Error404"
    + $ git push -u origin main

### 053. Fin de la sección
+ **Contenido**: corrección de error en layout **client\src\layouts\LayoutAdmin.js**.
1. Commit Video 053:
    + $ git add .
    + $ git commit -m "Fin de la sección"
    + $ git push -u origin main

## Sección 06: Maquetación del LayoutAdmin

### 054. Creando variables de colores y tamaños SASS para reutilizarlas en componentes
1. Modificar el archivo de estilos client\src\scss\_variables.scss:
    ```scss
    $defaultFontSize: 16px;

    $primary-color: #0098d3;
    $primary-color-hover: #0280b3;

    $menu-color: #252527;

    $font-light: #fff;
    $font-grey-light: #e8e8e8;
    $font-grey: #808080;
    $font-grey-dark: #000;
    $font-dark-light: #252527;
    $font-dark: #000;

    $border-light: #fff;
    $border-grey-light: #e8e8e8;
    $border-grey: #808080;
    $border-grey-dark: #595959;
    $border-dark-light: #252527;
    $border-dark: #000;

    $background-light: #fff;
    $background-grey-light: #e8e8e8;
    $background-grey: #808080;
    $background-grey-dark: #595959;
    $background-dark-light: #252527;
    $background-dark: #000;
    $background-success: #84b84c1f;
    $background-error: #ff00001f;
    $background-dark-web: #16202b;
    $background-dark-light-web: #1a2734;

    $success: #84b84c;
    $error: #f00;

    // Social Color
    $youtube: #cd201f;
    $twitter: #1da1f2;
    $facebook: #3b5998;
    $linkedin: #0077b5;

    // Responsive down size
    $media-breackpoint-down-xs: 413.98px;
    $media-breackpoint-down-sm: 573.98px;
    $media-breackpoint-down-md: 767.98px;
    $media-breackpoint-down-lg: 991.98px;
    $media-breackpoint-down-xl: 1199.98px;

    // Responsive up size
    $media-breackpoint-up-xs: 320px;
    $media-breackpoint-up-sm: 576px;
    $media-breackpoint-up-md: 768px;
    $media-breackpoint-up-lg: 992px;
    $media-breackpoint-up-xl: 1200px;
    ```
2. Commit Video 05:
    + $ git add .
    + $ git commit -m "Creando variables de colores y tamaños SASS para reutilizarlas en componentes"
    + $ git push -u origin main

### 055. Dando estilos al LayoutAdmin
1. Establecer estilos en client\src\layouts\LayoutAdmin.scss:
    ```scss
    @import "../scss/index.scss";

    .layout-admin {
        transition: margin-left 0.2s;

        &__header {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            display: flex;
            padding: 0;
            height: 65px;
        }

        &__content {
            min-height: calc(100vh - 65px);
            padding: 90px 25px 25px 25px;
        }

        &__footer {
            padding: 20px;
        }
    }
    ```
2. Modificar **client\src\layouts\LayoutAdmin.js**:
    ```js
    ≡

    export default function LayoutAdmin(props) {
        const { routes } = props
        const { Header, Content, Footer } = Layout

        return (
            <Layout>
                {/* TO DO: Menú Saider */}
                <Layout className="layout-admin">
                    <Header className="layout-admin__header">
                        {/* TO DO: Menú Top */}
                    </Header>
                    <Content className="layout-admin__content">
                        <LoadRoutes routes={routes}/>
                    </Content>
                    <Footer className="layout-admin__footer">Soluciones++ 2021</Footer>
                </Layout>
            </Layout>
        )
    }

    function LoadRoutes({ routes }){
        ≡
    }
    ```
3. Commit Video 055:
    + $ git add .
    + $ git commit -m "Dando estilos al LayoutAdmin"
    + $ git push -u origin main

### 056. Creando el componente MenuTop
1. Colocar logo de la aplicación en **client\src\assets\img\png\logo.png**.
2. Instalar iconos de Ant Design:
    + $ yarn add @ant-design/icons
3. Crear **client\src\components\Admin\MenuTop\index.js**:
    ```js
    export { default } from "./MenuTop";
    ```
4. Crear componente **client\src\components\Admin\MenuTop\MenuTop.js**:
    ```js
    import { BarsOutlined, PoweroffOutlined } from '@ant-design/icons';
    import 'antd/dist/antd.css';
    import LogoSolucionespp from '../../../assets/img/png/logo.png'
    import './MenuTop.scss'

    export default function MenuTop(){
        return (
            <div className="menu-top">
                <div className="menu-top__left">
                    <img 
                        className="menu-top__left-logo"
                        src={LogoSolucionespp}
                        alt="Logo Soluciones++"
                    />
                    <BarsOutlined className="menu-top__button" type="link" onClick={() => console.log('Click')} />
                </div>

                <div className="menu-top__right">
                    <PoweroffOutlined className="menu-top__button" type="link" onClick={() => console.log('Desconexión')} />
                </div>
            </div>
        )
    }
    ``` 
5. Crear archivo de estilos **client\src\components\Admin\MenuTop\MenuTop.scss**:
    ```scss
    @import "../../../scss/index.scss";

    .menu-top {
        display: flex;

        button {
            color: $font-light;

            &:hover {
                color: $primary-color;
            }
            &:focus,
            &:active {
                color: $font-light;
            }
        }

        &__button {
            color: $font-light;

            &:hover {
                color: $primary-color;
            }
            &:focus,
            &:active {
                color: $font-light;
            }
        }

        &__left {
            &-logo {
                width: 200px;
                padding: 0 10px;
            }
        }

        &__right {
            position: absolute;
            right: 10px;
        }
    }
    ```
6. Modificar layout **client\src\layouts\LayoutAdmin.js**:
    ```js
    import { Route, Switch } from 'react-router-dom'
    import { Layout } from "antd"
    import 'antd/dist/antd.css'
    import MenuTop from '../components/Admin/MenuTop'
    import "./LayoutAdmin.scss"

    export default function LayoutAdmin(props) {
        const { routes } = props
        const { Header, Content, Footer } = Layout

        return (
            <Layout>
                {/* TO DO: Menú Saider */}
                <Layout className="layout-admin">
                    <Header className="layout-admin__header">
                        <MenuTop />
                    </Header>
                    <Content className="layout-admin__content">
                        <LoadRoutes routes={routes}/>
                    </Content>
                    <Footer className="layout-admin__footer">Soluciones++ 2021</Footer>
                </Layout>
            </Layout>
        )
    }

    function LoadRoutes({ routes }){
        ≡
    }
    ```
7. Commit Video 056:
    + $ git add .
    + $ git commit -m "Creando el componente MenuTop"
    + $ git push -u origin main

### 057. Creando el componente MenuSider
1. Crear **client\src\components\Admin\MenuSider\index.js**:
    ```js
    export { default } from "./MenuSider";
    ```
2. Crear componente **client\src\components\Admin\MenuSider\MenuSider.js**:
    ```js
    import { Link, withRouter } from "react-router-dom"
    import { Layout, Menu } from "antd"
    import { HomeOutlined, MenuFoldOutlined } from '@ant-design/icons'
    import 'antd/dist/antd.css';

    import "./MenuSider.scss";

    function MenuSider(props) {
        const { Sider } = Layout;

        return (
            <Sider className="admin-sider" >
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={["1"]}
                >
                    <Menu.Item key="1">
                        <Link to="/admin">
                            <HomeOutlined />
                            <span className="nav-text">Home</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="/admin/menu-web">
                            <MenuFoldOutlined />
                            <span className="nav-text">Menú Web</span>
                        </Link>
                    </Menu.Item>
                </Menu>
            </Sider>
        )
    }

    export default withRouter(MenuSider);
    ```
3. Crear archivo de estilos **client\src\components\Admin\MenuSider\MenuSider.scss**:
    ```js
    @import "../../../scss/index.scss";

    .admin-sider {
        position: fixed;
        left: 0;
        top: 65px;
        height: 100vh;
        overflow: auto;
    }
    ```
4. Modificar layout **client\src\layouts\LayoutAdmin.js** para incorporar el componente **MenuSider**:
    ```js
    ≡
    import MenuTop from '../components/Admin/MenuTop'
    import MenuSider from '../components/Admin/MenuSider/MenuSider'
    import "./LayoutAdmin.scss"

    export default function LayoutAdmin(props) {
        const { routes } = props
        const { Header, Content, Footer } = Layout

        return (
            <Layout>
                <MenuSider />
                <Layout className="layout-admin">
                    ≡
                </Layout>
            </Layout>
        )
    }

    function LoadRoutes({ routes }){
        ≡
    }
    ```
5. Commit Video 057:
    + $ git add .
    + $ git commit -m "Creando el componente MenuSider"
    + $ git push -u origin main

### 058. Centrando Contenido y añadiendo funcionalidad al botón de abrir el MenuSider
1. Modificar layout **client\src\layouts\LayoutAdmin.js**:
    ```js
    import { useState } from "react"
    ≡

    export default function LayoutAdmin(props) {
        const { routes } = props
        const [menuCollapsed, setMenuCollapsed] = useState(false)
        const { Header, Content, Footer } = Layout

        return (
            <Layout>
                <MenuSider menuCollapsed={menuCollapsed} />
                <Layout className="layout-admin" style={{ marginLeft: menuCollapsed ? "80px" : "200px" }} >
                    <Header className="layout-admin__header">
                        <MenuTop menuCollapsed={menuCollapsed} setMenuCollapsed={setMenuCollapsed} />
                    </Header>
                    <Content className="layout-admin__content">
                        <LoadRoutes routes={routes}/>
                    </Content>
                    <Footer className="layout-admin__footer">Soluciones++ 2021</Footer>
                </Layout>
            </Layout>
        )
    }

    function LoadRoutes({ routes }){
        ≡
    }
    ```
2. Modificar componente **client\src\components\Admin\MenuSider\MenuSider.js**:
    ```js
    ≡

    function MenuSider(props) {
        /* console.log(props) */
        const { menuCollapsed } = props
        const { Sider } = Layout;

        return (
            <Sider className="admin-sider" collapsed={menuCollapsed} >
                ≡
            </Sider>
        )
    }

    export default withRouter(MenuSider);
    ```
3. Modificar componente **client\src\components\Admin\MenuTop\MenuTop.js**:
    ```js
    import { MenuFoldOutlined, MenuUnfoldOutlined, PoweroffOutlined } from '@ant-design/icons';
    import 'antd/dist/antd.css';
    import LogoSolucionespp from '../../../assets/img/png/logo.png'
    import './MenuTop.scss'

    export default function MenuTop(props){
        /* console.log(props) */
        const { menuCollapsed, setMenuCollapsed } = props 
        return (
            <div className="menu-top">
                <div className="menu-top__left">
                    <a href="/">
                        <img 
                            className="menu-top__left-logo"
                            src={LogoSolucionespp}
                            alt="Logo Soluciones++"
                        />
                    </a>
                    {menuCollapsed ?
                        <MenuUnfoldOutlined className="menu-top__button" type="link" onClick={() => setMenuCollapsed(!menuCollapsed)} /> :
                        <MenuFoldOutlined className="menu-top__button" type="link" onClick={() => setMenuCollapsed(!menuCollapsed)} />
                    }
                </div>

                <div className="menu-top__right" >
                    <PoweroffOutlined className="menu-top__button" type="link" onClick={() => console.log('Desconexión')} />
                </div>
            </div>
        )
    }
    ```
4. Commit Video 058:
    + $ git add .
    + $ git commit -m "Centrando Contenido y añadiendo funcionalidad al botón de abrir el MenuSider"
    + $ git push -u origin main

## Sección 07: Creación del registro de nuevos usuarios

### 059. Creación del controlador, modelo y ruta para los usuarios
1. Ir al proyecto **server**.
2. Crear modelo **server\models\user.js**:
    ```js
    const mongoose = require("mongoose")
    const Schema = mongoose.Schema

    const UserSchame = Schema({
        name: String,
        lastname: String,
        email: {
            type: String,
            unique: true
        },
        password: String,
        role: String,
        active: Boolean
    })

    module.exports = mongoose.model("User", UserSchame)
    ```
3. Crear controlador **server\controllers\user.js**:
    ```js
    const bcrypt = require("bcrypt-node")
    const User = require("../models/user")

    function signUp(req, res){
        console.log('Endpoint de signUp ejecutado')
    }

    module.exports = {
        signUp
    }
    ```
4. Crear archivo de rutas **server\routers\user.js**:
    ```js
    const express = require("express")
    const UserController = require("../controllers/user")

    const api = express.Router()

    api.post("/sign-up", UserController.signUp)

    module.exports = api
    ```
5. Modificar **server\app.js**:
    ```js
    ≡

    // Load routings
    const userRoutes = require('./routers/user')

    ≡

    // Configure Header HTTP
    // ....

    // Basic Routers
    app.use(`/api/${API_VERSION}`, userRoutes)

    module.exports = app
    ```
6. Prueba http:
    + Iniciar aplicación servidor:
        + $ yarn start
    + Realizar petición http:
        + Método: post
        + URL: http://localhost:3977/api/v1/sign-up
    + Guardar endpoint como: **sign-up**
7. Commit Video 05:
    + $ git add .
    + $ git commit -m "Creación del controlador, modelo y ruta para los usuarios"
    + $ git push -u origin main

### 060. 1/2 - Endpoint para crear nuevos usuarios
1. Modificar controlador **server\controllers\user.js**:
    ```js
    ≡
    function signUp(req, res){
        const user = new User()
        console.log(req.body)
        const { email, password, repeatPassword } = req.body
        user.mail = email
        user.role = "admin"
        user.active = false
        if(!password || !repeatPassword){
            res.status(404).send({message: "Las contraseñas son requeridas"})
        }else{
            if(password !== repeatPassword){
                res.status(404).send({message: "Las contraseñas tienen que ser iguales"})
            }else{
                // res.status(200).send({message: "Todo bien ..."})
                bcrypt.hash(password, null, null, function(err, hash) {
                    
                })
            }
        }
    }
    ≡
    ```
2. Realizar petición http (sign-up):
    + Método: post
    + URL: http://localhost:3977/api/v1/sign-up
        + Body:
            ```json
            {
                "email": "bazo.pedro@gmail.com",
                "password": "12345678",
                "repeatPassword": "12345678"
            }
            ```
3. Commit Video 060:
    + $ git add .
    + $ git commit -m "1/2 - Endpoint para crear nuevos usuarios"
    + $ git push -u origin main

### 061. 2/2 - Endpoint para crear nuevos usuarios
1. Modificar controlador **server\controllers\user.js**:
    ```js
    const bcrypt = require("bcrypt-node")
    const User = require("../models/user")

    function signUp(req, res){
        const user = new User()
        console.log(req.body)
        const { name, lastname, email, password, repeatPassword } = req.body
        user.name = name    
        user.lastname = lastname
        user.email = email
        user.role = "admin"
        user.active = false
        if(!password || !repeatPassword){
            res.status(404).send({message: "Las contraseñas son requeridas"})
        }else{
            if(password !== repeatPassword){
                res.status(404).send({message: "Las contraseñas tienen que ser iguales"})
            }else{
                // res.status(200).send({message: "Todo bien ..."})
                bcrypt.hash(password, null, null, function(err, hash) {
                    if(err){
                        res.status(500).send({message: "Error al encriptar la contraseña"})
                    }else{
                        // res.status(200).send({message: hash})
                        user.password = hash
                        user.save((err, userStored) => {
                            if(err){
                                res.status(500).send({message: "Error del servidor al crear nuevo usuario. Error: " + err })
                            }else{
                                if(!userStored){
                                    res.status(404).send({message: "Error al crear nuevo usuario"})
                                }else{
                                    res.status(200).send({user: userStored})
                                }
                            }
                        })
                    }
                })
            }
        }
    }

    module.exports = {
        signUp
    }
    ```
2. Realizar petición http (sign-up):
    + Método: post
    + URL: http://localhost:3977/api/v1/sign-up
        + Body:
            ```json
            {
                "name": "Pedro Jesús",
                "lastname": "Bazó Canelón",
                "email": "bazo.pedro@gmail.com",
                "password": "12345678",
                "repeatPassword": "12345678"
            }
            ```
3. Commit Video 061:
    + $ git add .
    + $ git commit -m "2/2 - Endpoint para crear nuevos usuarios"
    + $ git push -u origin main

### 062. 1/2 - Creando la estructura básica de la pagina de SignIn con Tabs
1. Modificar **client\src\layouts\LayoutAdmin.js**:
    ```js
    import { useState } from "react"
    import { Route, Switch, Redirect } from 'react-router-dom'
    import { Layout } from "antd"
    import 'antd/dist/antd.css'
    import MenuTop from '../components/Admin/MenuTop'
    import MenuSider from '../components/Admin/MenuSider/MenuSider'
    import AdminSignIn from '../pages/Admin/SignIn/SignIn'
    import "./LayoutAdmin.scss"

    export default function LayoutAdmin(props) {
        const { routes } = props
        const [menuCollapsed, setMenuCollapsed] = useState(false)
        const { Header, Content, Footer } = Layout

        const user = null
        if(!user){
            return (
                <>
                    <Route path="/admin/login" component={AdminSignIn} />
                    <Redirect to="/admin/login" />
                </>
            )
        }

        return (
            ≡
        )
    }

    function LoadRoutes({ routes }){
        ≡
    }
    ```
2. Mover **SignIn.js**:
    + De: client\src\pages\Admin\
    + A: client\src\pages\Admin\SignIn\
3. Modificar vista **client\src\pages\Admin\SignIn\SignIn.js**:
    ```js
    import { Layout, Tabs } from "antd"
    import 'antd/dist/antd.css'
    import { Redirect } from "react-router-dom"
    import Logo from "../../../assets/img/png/logo.png"

    import "./SingIn.scss"

    export default function SignIn() {
        const { Content } = Layout;
        const { TabPane } = Tabs;

        return (
            <Layout className="sign-in">
                <Content className="sign-in__content">
                    <h1 className="sign-in__content-logo">
                        <img src={Logo} alt="Soluciones++" />
                    </h1>
                </Content>
            </Layout>
        )
    }
    ```
4. Crear **client\src\pages\Admin\SignIn\index.js**:
    ```js
    export { default } from "./SignIn"
    ```
5. Crear archivo de estilo **client\src\pages\Admin\SignIn\SingIn.scss**:
    ```scss
    @import "../../../scss/index.scss";

    .sign-in {
        background-image: url("../../../assets/img/png/background-v1.jpg");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;

        &__content {
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 100vh;
        }
    }
    ```
6. Ubicar una imagen de fondo negro y almacenarla en **client\src\assets\img\png\background-v1.jpg**.
7. Commit Video 062:
    + $ git add .
    + $ git commit -m "1/2 - Creando la estructura básica de la pagina de SignIn con Tabs"
    + $ git push -u origin main

### 063. 2/2 - Creando la estructura básica de la pagina de SignIn con Tabs
1. Modificar el archivo de estilos **client\src\pages\Admin\SignIn\SingIn.scss**:
    ```scss
    @import "../../../scss/index.scss";

    .sign-in {
        background-image: url("../../../assets/img/png/background-v1.jpg");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;

        &__content {
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 100vh;

            &-logo {
                padding: 60px 20px;
                img {
                    width: 100%;
                }
            }

            &-tabs {
                background-color: $background-light;

                .ant-tabs {
                    width: 90vw;
                    @media (min-width: $media-breackpoint-up-lg) {
                        width: auto;
                    }
                }

                .ant-tabs-nav-container {
                    height: 60px !important;
                }

                .ant-tabs-nav {
                    width: 100%;
                }

                .ant-tabs-tab {
                    width: 50%;
                    height: 60px !important;
                    text-align: center;
                    font-size: 0em + 19px / $defaultFontSize;
                    border-top: 4px solid $border-grey !important;
                    border-radius: 0 !important;
                    margin: 0 !important;
                    @media (min-width: $media-breackpoint-up-lg) {
                        width: 220px;
                        font-size: 0em + 23px / $defaultFontSize;
                    }

                    &:hover {
                        color: $font-grey-dark;
                    }
                    &:before {
                        content: none;
                    }
                    span {
                        height: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                }

                .ant-tabs-tab-active {
                    color: $primary-color !important;
                    border-top: 4px solid $primary-color !important;
                    border-radius: 0 !important;
                    border-right: 0 !important;
                    border-left: 0 !important;
                }

                .ant-tabs-content {
                    padding: 0 16px 16px 16px;
                    text-align: center;
                }
            }
        }
    }
    ```
2. Modificar componente **client\src\pages\Admin\SignIn\SignIn.js**:
    ```js
    ≡
    export default function SignIn() {
        const { Content } = Layout;
        const { TabPane } = Tabs;

        return (
            <Layout className="sign-in">
                <Content className="sign-in__content">
                    <h1 className="sign-in__content-logo">
                        <img src={Logo} alt="Soluciones++" />
                    </h1>

                    <div className="sign-in__content-tabs">
                        <Tabs type="card">
                            <TabPane tab={<span>Entrar</span>} key="1">
                                Componente LonginForm
                            </TabPane>
                            <TabPane tab={<span>Nuevo usuario</span>} key="2">
                                Componente RegisterForm
                            </TabPane>
                        </Tabs>
                    </div> 
                </Content>
            </Layout>
        )
    }
    ```
3. Commit Video 063:
    + $ git add .
    + $ git commit -m "2/2 - Creando la estructura básica de la pagina de SignIn con Tabs"
    + $ git push -u origin main

### 064. Creando la estructura del formulario de registro en la pagina SignIn
1. Crear **client\src\components\Admin\RegisterForm\index.js**:
    ```js
    export { default } from "./RegisterForm"
    ```
2. Crear componente **client\src\components\Admin\RegisterForm\RegisterForm.js**:
    ```js
    import { useState } from "react";
    import { Form, Input, Button, Checkbox, notification } from "antd"
    import { UserOutlined, LockOutlined } from '@ant-design/icons'
    import 'antd/dist/antd.css'
    import "./RegisterForm.scss";

    export default function RegisterForm() {
        return (
            <Form className="register-form" >
                <Form.Item>
                    <Input
                        prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
                        type="email"
                        name="email"
                        placeholder="Correo electrónico"
                        className="register-form__input"
                    />
                </Form.Item>
                <Form.Item>
                    <Input
                        prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
                        type="password"
                        name="password"
                        placeholder="Contraseña"
                        className="register-form__input"
                    />
                </Form.Item>
                <Form.Item>
                    <Input
                        prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
                        type="password"
                        name="repeatPassword"
                        placeholder="Repetir contraseña"
                        className="register-form__input"
                    />
                </Form.Item>
                <Form.Item>
                    <Checkbox
                        name="privacyPolicy"
                    >
                        He leído y acepto la política de privacidad.
                    </Checkbox>
                </Form.Item>
                <Form.Item>
                    <Button htmlType="submit" className="register-form__button">
                        Crear cuenta
                    </Button>
                </Form.Item>
            </Form>
        )
    }
    ```
3. Modificar vista **client\src\pages\Admin\SignIn\SignIn.js**:
    ```js
    ≡
    import RegisterForm from "../../../components/Admin/RegisterForm"
    import "./SingIn.scss"

    export default function SignIn() {
        ≡
        return (
            <Layout className="sign-in">
                <Content className="sign-in__content">
                    ≡
                    <div className="sign-in__content-tabs">
                        <Tabs type="card">
                            ≡
                            <TabPane tab={<span>Nuevo usuario</span>} key="2">
                                <RegisterForm />
                            </TabPane>
                        </Tabs>
                    </div> 
                </Content>
            </Layout>
        )
    }
    ```
4. Commit Video 064:
    + $ git add .
    + $ git commit -m "Creando la estructura del formulario de registro en la pagina SignIn"
    + $ git push -u origin main

### 065. Escribiendo el SASS del formulario de registro en la pagina SignIn
1. Crear archivo de estilo **client\src\components\Admin\RegisterForm\RegisterForm.scss**:
    ```scss
    @import "../../../scss/index.scss";

    .register-form {
        text-align: left;

        .ant-form-item {
            &:nth-child(3),
            &:last-of-type {
                margin: 0;
            }
        }

        &__input {
            .ant-input-prefix {
                i {
                    font-size: 0em + 22px / $defaultFontSize;
                }
            }

            input {
                font-size: 0em + 18px / $defaultFontSize;
                padding: 5px 5px 5px 10px !important;
                &:focus {
                    border-color: $primary-color;
                    box-shadow: none;
                }
            }
        }

    &__button {
            width: 100%;
            font-size: 0em + 22px / $defaultFontSize;
            background-color: $primary-color;
            color: $font-light;
            height: 42px;

            &:hover {
                background-color: $primary-color-hover;
                color: $font-light;
            }
            &:focus,
            &:active {
                background-color: $primary-color;
                color: $font-light;
                border: 0;
            }
        }
    }   
    ```
2. Commit Video 065:
    + $ git add .
    + $ git commit -m "Escribiendo el SASS del formulario de registro en la pagina SignIn"
    + $ git push -u origin main

### 066. Guardando la información del formulario de registro en un estado con useState
1. Modificar componente **client\src\components\Admin\RegisterForm\RegisterForm.js**:
    ```js
    import { useState } from "react";
    import { Form, Input, Button, Checkbox, notification } from "antd"
    import { UserOutlined, LockOutlined } from '@ant-design/icons'
    import 'antd/dist/antd.css'
    import "./RegisterForm.scss";

    export default function RegisterForm() {
        const [inputs, setInputs] = useState({
            email: "",
            password: "",
            repeatPassword: "",
            privacyPolicy: false
        });

        const changeForm = e => {
            if (e.target.name === "privacyPolicy") {
                setInputs({
                    ...inputs,
                    [e.target.name]: e.target.checked
                });
            } else {
                setInputs({
                    ...inputs,
                    [e.target.name]: e.target.value
                });
            }
        }

        const register = e => {
            e.preventDefault()
            console.log(inputs)
        }

        return (
            <Form className="register-form" onSubmit={register} onChange={changeForm} >
                <Form.Item>
                    <Input
                        prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
                        type="email"
                        name="email"
                        placeholder="Correo electrónico"
                        className="register-form__input"
                        value={inputs.email}
                    />
                </Form.Item>
                <Form.Item>
                    <Input
                        prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
                        type="password"
                        name="password"
                        placeholder="Contraseña"
                        className="register-form__input"
                        value={inputs.password}
                    />
                </Form.Item>
                <Form.Item>
                    <Input
                        prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
                        type="password"
                        name="repeatPassword"
                        placeholder="Repetir contraseña"
                        className="register-form__input"
                        value={inputs.repeatPassword}
                    />
                </Form.Item>
                <Form.Item>
                    <Checkbox
                        name="privacyPolicy"
                        checked={inputs.privacyPolicy}
                    >
                        He leído y acepto la política de privacidad.
                    </Checkbox>
                </Form.Item>
                <Form.Item>
                    <Button htmlType="submit" className="register-form__button">
                        Crear cuenta
                    </Button>
                </Form.Item>
            </Form>
        )
    }
    ```
2. Commit Video 066:
    + $ git add .
    + $ git commit -m "Guardando la información del formulario de registro en un estado con useState"
    + $ git push -u origin main

### 067. Creando funciones reutilizables de validaciones
1. Crear **client\src\utils\formValidation.js**:
    ```js
    export function minLengthValidation(inputData, minLength) {
        const { value } = inputData

        removeClassErrorSuccess(inputData)

        if (value.length >= minLength) {
            inputData.classList.add("success")
            return true
        } else {
            inputData.classList.add("error")
            return false
        }
    }

    export function emailValidation(inputData) {
        // eslint-disable-next-line no-useless-escape
        const emailValid = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
        const { value } = inputData

        removeClassErrorSuccess(inputData)

        const resultValidation = emailValid.test(value)
        if (resultValidation) {
            inputData.classList.add("success");
            return true;
        } else {
            inputData.classList.add("error");
            return false;
        }
    }

    function removeClassErrorSuccess(inputData) {
        inputData.classList.remove("success")
        inputData.classList.remove("error")
    }
    ```
2. Commit Video 067:
    + $ git add .
    + $ git commit -m "Creando funciones reutilizables de validaciones"
    + $ git push -u origin main

### 068. Reutilizando las funciónes de validación en el formulario de registro de usuario
1. Modificar componente **client\src\components\Admin\RegisterForm\RegisterForm.js**:
    ```js
    import { useState } from "react";
    import { Form, Input, Button, Checkbox, notification } from "antd"
    import { UserOutlined, LockOutlined } from '@ant-design/icons'
    import 'antd/dist/antd.css'
    import { emailValidation, minLengthValidation } from "../../../utils/formValidation"
    import "./RegisterForm.scss";

    export default function RegisterForm() {
        const [inputs, setInputs] = useState({
            email: "",
            password: "",
            repeatPassword: "",
            privacyPolicy: false
        })

        const [formValid, setFormValid] = useState({
            email: false,
            password: false,
            repeatPassword: false,
            privacyPolicy: false
        })

        const changeForm = e => {
            if (e.target.name === "privacyPolicy") {
                setInputs({
                    ...inputs,
                    [e.target.name]: e.target.checked
                });
            } else {
                setInputs({
                    ...inputs,
                    [e.target.name]: e.target.value
                });
            }
        }

        const inputValidation = e => {
            /* console.log('Validando...') */
            const { type, name } = e.target;

            if (type === "email") {
                setFormValid({ ...formValid, [name]: emailValidation(e.target) });
            }
            if (type === "password") {
                setFormValid({ ...formValid, [name]: minLengthValidation(e.target, 6) });
            }
            if (type === "checkbox") {
                setFormValid({ ...formValid, [name]: e.target.checked });
            }
        }

        const register = /* async */ e => {
            e.preventDefault()
            console.log(inputs)
        }

        return (
            <Form className="register-form" onSubmit={register} onChange={changeForm} >
                <Form.Item>
                    <Input
                        prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
                        type="email"
                        name="email"
                        placeholder="Correo electrónico"
                        className="register-form__input"
                        onChange={inputValidation}
                        value={inputs.email}
                    />
                </Form.Item>
                <Form.Item>
                    <Input
                        prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
                        type="password"
                        name="password"
                        placeholder="Contraseña"
                        className="register-form__input"
                        onChange={inputValidation}
                        value={inputs.password}
                    />
                </Form.Item>
                <Form.Item>
                    <Input
                        prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
                        type="password"
                        name="repeatPassword"
                        placeholder="Repetir contraseña"
                        className="register-form__input"
                        onChange={inputValidation}
                        value={inputs.repeatPassword}
                    />
                </Form.Item>
                <Form.Item>
                    <Checkbox
                        name="privacyPolicy"
                        onChange={inputValidation}
                        checked={inputs.privacyPolicy}
                    >
                        He leído y acepto la política de privacidad.
                    </Checkbox>
                </Form.Item>
                <Form.Item>
                    <Button htmlType="submit" className="register-form__button">
                        Crear cuenta
                    </Button>
                </Form.Item>
            </Form>
        )
    }
    ```
2. Commit Video 068:
    + $ git add .
    + $ git commit -m "Reutilizando las funciónes de validación en el formulario de registro de usuario"
    + $ git push -u origin main

### 069. Terminando la validando del formulario de registro de usuarios
1. Modificar el archivo de estilos **client\src\App.scss**:
    ```js
    @import "./scss/index.scss";

    .success {
        border: 1px solid $success;
        background-color: $background-success;
    }

    .error {
        border: 1px solid $error;
        background-color: $background-error;
    }
    ```
2. Modificar componente **client\src\components\Admin\RegisterForm\RegisterForm.js**:
    ```js
    import { useState } from "react";
    import { Form, Input, Button, Checkbox, notification } from "antd"
    import { UserOutlined, LockOutlined } from '@ant-design/icons'
    import 'antd/dist/antd.css'
    import { emailValidation, minLengthValidation } from "../../../utils/formValidation"
    import "./RegisterForm.scss";

    export default function RegisterForm() {
        const [inputs, setInputs] = useState({
            email: "",
            password: "",
            repeatPassword: "",
            privacyPolicy: false
        })

        const [formValid, setFormValid] = useState({
            email: false,
            password: false,
            repeatPassword: false,
            privacyPolicy: false
        })

        const changeForm = e => {
            if (e.target.name === "privacyPolicy") {
                setInputs({
                    ...inputs,
                    [e.target.name]: e.target.checked
                });
            } else {
                setInputs({
                    ...inputs,
                    [e.target.name]: e.target.value
                });
            }
        }

        const inputValidation = e => {
            /* console.log('Validando...') */
            const { type, name } = e.target;

            if (type === "email") {
                setFormValid({ ...formValid, [name]: emailValidation(e.target) });
            }
            if (type === "password") {
                setFormValid({ ...formValid, [name]: minLengthValidation(e.target, 6) });
            }
            if (type === "checkbox") {
                setFormValid({ ...formValid, [name]: e.target.checked });
            }
        }

        const register = e => {
            /* e.preventDefault() */
            const emailVal = inputs.email;
            const passwordVal = inputs.password;
            const repeatPasswordVal = inputs.repeatPassword;
            const privacyPolicyVal = inputs.privacyPolicy;

            if (!emailVal || !passwordVal || !repeatPasswordVal || !privacyPolicyVal) {
                notification["error"]({
                    message: "Todos los campos son obligatorios"
                });
            } else {
                if (passwordVal !== repeatPasswordVal) {
                    notification["error"]({
                        message: "Las contraseñas tienen que ser iguales."
                    });
                } else {
                    // TO DO: Conectar con el API y registrar el usuario
                }                       
            } 
        }

        return (
            <Form className="register-form" onFinish={register} onChange={changeForm} >
                <Form.Item>
                    <Input
                        prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
                        type="email"
                        name="email"
                        placeholder="Correo electrónico"
                        className="register-form__input"
                        onChange={inputValidation}
                        value={inputs.email}
                    />
                </Form.Item>
                <Form.Item>
                    <Input
                        prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
                        type="password"
                        name="password"
                        placeholder="Contraseña"
                        className="register-form__input"
                        onChange={inputValidation}
                        value={inputs.password}
                    />
                </Form.Item>
                <Form.Item>
                    <Input
                        prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
                        type="password"
                        name="repeatPassword"
                        placeholder="Repetir contraseña"
                        className="register-form__input"
                        onChange={inputValidation}
                        value={inputs.repeatPassword}
                    />
                </Form.Item>
                <Form.Item>
                    <Checkbox
                        name="privacyPolicy"
                        onChange={inputValidation}
                        checked={inputs.privacyPolicy}
                    >
                        He leído y acepto la política de privacidad.
                    </Checkbox>
                </Form.Item>
                <Form.Item>
                    <Button htmlType="submit" className="register-form__button" type="primary">
                        Crear cuenta
                    </Button>
                </Form.Item>
            </Form>
        )
    }
    ```
3. Commit Video 069:
    + $ git add .
    + $ git commit -m "Terminando la validando del formulario de registro de usuarios"
    + $ git push -u origin main

### 070. 1/2 - Conectando con el Enpoint de registro de usuario y creando el usuario
1. Crear archivo **client\src\api\config.js**:
    ```js
    export const basePath = "http://localhost:3977/api"
    export const apiVersion = "v1"
    ```
2. Crear archivo **client\src\api\user.js**:
    ```js
    import { basePath, apiVersion } from "./config";

    export function signUpApi(data) {
        const url = `${basePath}/${apiVersion}/sign-up`
        const params = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }

        fetch(url, params).then(response => {
            console.log(response)
        })
    }
    ```
3. Modificar componente **client\src\components\Admin\RegisterForm\RegisterForm.js**:
    ```js
    ≡
    import { signUpApi } from "../../../api/user"
    import "./RegisterForm.scss";

    export default function RegisterForm() {
        ≡
        const register = e => {
            ≡
            if (!emailVal || !passwordVal || !repeatPasswordVal || !privacyPolicyVal) {
                ≡
            } else {
                if (passwordVal !== repeatPasswordVal) {
                    ≡
                } else {
                    const result = signUpApi(inputs);
                }                       
            } 
        }

        return (
            ≡
        )
    }
    ```
4. Para evitar el error de **Failed to fetch** que se produce cuando se ejecuta la aplicación el local, instalar la extensión de **Google Chrome**:
    + Moesif Origin & CORS Changer
5. Commit Video 070:
    + $ git add .
    + $ git commit -m "1/2 - Conectando con el Enpoint de registro de usuario y creando el usuario"
    + $ git push -u origin main

### 071. 2/2 - Conectando con el Enpoint de registro de usuario y creando el usuario
1. Modificar **client\src\api\user.js**:
    ```js
    ≡
    export function signUpApi(data) {
        ≡
        return fetch(url, params)
            .then(response => {
                return response.json();
            })
            .then(result => {
                if (result.user) {
                    return { ok: true, message: "Usuario creado correctamente" }
                }
                return { ok: false, message: result.message }
            })
            .catch(err => {
                return { ok: false, message: err.message }
            })
    }
    ```
2. Modificar componente **client\src\components\Admin\RegisterForm\RegisterForm.js**:
    ```js
    const register = async e => {
        ≡
        if (!emailVal || !passwordVal || !repeatPasswordVal || !privacyPolicyVal) {
            notification["error"]({
                message: "Todos los campos son obligatorios"
            });
        } else {
            if (passwordVal !== repeatPasswordVal) {
                notification["error"]({
                    message: "Las contraseñas tienen que ser iguales."
                })
            } else {
                const result = await signUpApi(inputs)
                /* console.log(result) */
                if (!result.ok) {
                    notification["error"]({
                        message: result.message
                    });
                } else {
                    notification["success"]({
                        message: result.message
                    });
                }
            }                       
        } 
    }
    ```
3. Commit Video 071:
    + $ git add .
    + $ git commit -m "2/2 - Conectando con el Enpoint de registro de usuario y creando el usuario"
    + $ git push -u origin main

### 072. Reseteando el formulario cuando el registro es correcto
1. Modificar componente **client\src\components\Admin\RegisterForm\RegisterForm.js**:
    ```js
    const register = async e => {
        ≡
        if (!emailVal || !passwordVal || !repeatPasswordVal || !privacyPolicyVal) {
            ≡
        } else {
            if (passwordVal !== repeatPasswordVal) {
                ≡
            } else {
                ≡
                if (!result.ok) {
                    ≡
                } else {
                    notification["success"]({
                        message: result.message
                    });
                    resetForm()
                }
            }                       
        } 
    }

    const resetForm = () => {
        const inputs = document.getElementsByTagName("input");

        for (let i = 0; i < inputs.length; i++) {
            inputs[i].classList.remove("success")
            inputs[i].classList.remove("error")
        }

        setInputs({
            email: "",
            password: "",
            repeatPassword: "",
            privacyPolicy: false
        })

        setFormValid({
            email: false,
            password: false,
            repeatPassword: false,
            privacyPolicy: false
        })
    }
    ≡
    ```
2. Commit Video 072:
    + $ git add .
    + $ git commit -m "Reseteando el formulario cuando el registro es correcto"
    + $ git push -u origin main

### 073. Formateando Email de registro con toLowerCase
1. Modificar el controlador **server\controllers\user.js** para colocar todos los caracteres del campo **email** en minúsculas:
    ```js
    ≡
    user.email = email.toLowerCase()
    ≡
    ```
2. Commit Video 073:
    + $ git add .
    + $ git commit -m "Formateando Email de registro con toLowerCase"
    + $ git push -u origin main

## Sección 08: Creación del login de usuario con JWT y el sistema de auth con TOKENS

### 074. Creando el servicio para la creación de los tokens
+ **Documentación**:
    + https://momentjs.com/docs
    + https://yarnpkg.com/package/jwt-simple
1. Crear archivo **server\services\jwt.js**:
    ```js
    const jwt = require("jwt-simple")
    const moment = require("moment")

    const SECRET_KEY = "alsjsla85sd55s55WWf444f55svvvs555s22As"

    
    exports.createAccessToken = function(user) {
        const payload = {
            id: user._id,
            name: user.name,
            lastname: user.lastname,
            email: user.email,
            role: user.role,
            createToken: moment().unix(),
            exp: moment().add(3, "hours").unix()
        }

        return jwt.encode(payload, SECRET_KEY)
    }

    exports.createRefreshToken = function(user) {
        const payload = {
            id: user._id,
            exp: moment().add(30, "days").unix()
        }

        return jwt.encode(payload, SECRET_KEY)
    }

    exports.decodedToken = function(token) {
        return jwt.decode(token, SECRET_KEY, true)
    }
    ```
2. Commit Video 074:
    + $ git add .
    + $ git commit -m "Creando el servicio para la creación de los tokens"
    + $ git push -u origin main

### 075. 1/2 - Creación del ENDPOINT para hacer login
1. Modificar controlador **server\controllers\user.js**:
    ```js
    const bcrypt = require("bcrypt-node")
    const jwt = require("../services/jwt")
    const User = require("../models/user")

    function signUp(req, res){
        ≡
    }

    function signIn(req, res){
        const params = req.body
        const email = params.email.toLowerCase()
        const password = params.password

        User.findOne({email}, (err, userStored) => {
            if(err){
            res.status(500).send({message: "Error del servidor."}) 
            } else {
                if(!userStored){
                    res.status(404).send({message: "Usuario no encontrado."})
                } else {
                    bcrypt.compare(password, userStored.password, (err, check) => {
                        if(err){
                            res.status(500).send({message: "Error del servidor."})
                        } else {
                            if(!userStored.active){
                                res.status(200).send({code: 200, message: "El usuario no está activo."})
                            } else {
                                res.status(200).send({
                                    accessToken: jwt.createAccessToken(userStored),
                                    refreshToken: jwt.createRefreshToken(userStored)
                                })
                            }
                        }
                    })
                }
            }
            
        })
    }

    module.exports = {
        signUp,
        signIn
    }
    ```
2. Modificar archivo de rutas **server\routers\user.js**:
    ```js
    ≡
    api.post("/sign-up", UserController.signUp)
    api.post("/sign-in", UserController.signIn)
    ≡
    ```
3. Prueba http:
    + Realizar petición http:
        + Método: post
        + URL: http://localhost:3977/api/v1/sign-in
        + Body:
            ```json
            {
                "email": "bazo.pedro@gmail.com",
                "password": "12345678"
            }
            ```
    + Guardar endpoint como: **sign-in**
4. Commit Video 075:
    + $ git add .
    + $ git commit -m "1/2 - Creación del ENDPOINT para hacer login"
    + $ git push -u origin main

### 076. 2/2 - Creación del ENDPOINT para hacer login
1. Modificar la función **signIn** del controlador **server\controllers\user.js**:
    ```js
    function signIn(req, res){
        const params = req.body
        const email = params.email.toLowerCase()
        const password = params.password

        User.findOne({email}, (err, userStored) => {
            if(err){
            res.status(500).send({message: "Error del servidor."}) 
            } else {
                if(!userStored){
                    res.status(404).send({message: "Usuario no encontrado."})
                } else {
                    bcrypt.compare(password, userStored.password, (err, check) => {
                        if(err){
                            res.status(500).send({message: "Error del servidor."})
                        } else if(!check) {
                            res.status(404).send({message: "La contraseña es incorrecta."})
                        } else {
                            if(!userStored.active){
                                res.status(200).send({code: 200, message: "El usuario no está activo."})
                            } else {
                                res.status(200).send({
                                    accessToken: jwt.createAccessToken(userStored),
                                    refreshToken: jwt.createRefreshToken(userStored)
                                })
                            }
                        }
                    })
                }
            }
            
        })
    }
    ```
2. Commit Video 076:
    + $ git add .
    + $ git commit -m "2/2 - Creación del ENDPOINT para hacer login"
    + $ git push -u origin main

### 077. Creando estructura del formulario de login
1. Crear **client\src\components\Admin\LoginForm\index.js**:
    ```js
    export { default } from "./LoginForm"
    ```
2. Crear componente **client\src\components\Admin\LoginForm\LoginForm.js**:
    ```js
    import { useState } from "react"
    import { Form, Input, Button, notification } from "antd"
    import { UserOutlined, LockOutlined } from '@ant-design/icons'
    import 'antd/dist/antd.css'
    import "./LoginForm.scss"

    export default function LoginForm() {
        return (
            <Form className="login-form" >
                <Form.Item>
                    <Input
                        prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
                        type="email"
                        name="email"
                        placeholder="Correo electrónico"
                        className="login-form__input"
                    />
                </Form.Item>
                <Form.Item>
                    <Input
                        prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
                        type="password"
                        name="password"
                        placeholder="Contraseña"
                        className="login-form__input"
                    />
                </Form.Item>
                <Form.Item>
                    <Button htmlType="submit" className="login-form__button">
                        Entrar
                    </Button>
                </Form.Item>
            </Form>
        )
    }
    ```
3. Crear componente **client\src\components\Admin\LoginForm\LoginForm.scss**:
    ```scss
    @import "../../../scss/index.scss";

    .login-form {
        text-align: left;

        .ant-form-item:last-of-type {
            margin: 0;
        }

        //font-size: size(22)
        &__input {
            .ant-input-prefix {
                i {
                    font-size: 0em + 22px / $defaultFontSize;
                }
            }

            input {
                font-size: 0em + 18px / $defaultFontSize;
                padding: 5px 5px 5px 10px !important;
                &:focus {
                    border-color: $primary-color;
                    box-shadow: none;
                }
            }
        }

        &__button {
            width: 100%;
            font-size: 0em + 22px / $defaultFontSize;
            background-color: $primary-color;
            color: $font-light;
            height: 42px;
            margin-top: 20px;

            &:hover {
                background-color: $primary-color-hover;
                color: $font-light;
            }
            &:focus,
            &:active {
                background-color: $primary-color;
                color: $font-light;
                border: 0;
            }
        }
    }
    ```
4. Agregar componente **LoginForm** a la vista **client\src\pages\Admin\SignIn\SignIn.js**:
    ```js
    ≡
    import LoginForm from "../../../components/Admin/LoginForm"
    import "./SingIn.scss"

    export default function SignIn() {
        ≡
        return (
            <Layout className="sign-in">
                <Content className="sign-in__content">
                    ≡
                    <div className="sign-in__content-tabs">
                        <Tabs type="card">
                            <TabPane tab={<span>Entrar</span>} key="1">
                                <LoginForm />
                            </TabPane>
                            ≡
                        </Tabs>
                    </div> 
                </Content>
            </Layout>
        )
    }
    ```
5. Commit Video 077:
    + $ git add .
    + $ git commit -m "Creando estructura del formulario de login"
    + $ git push -u origin main

### 078. Guardando datos del formulario en el estado del componente
1. Modificar componente **client\src\components\Admin\LoginForm\LoginForm.js**:
    ```js
    import { useState } from "react"
    import { Form, Input, Button, notification } from "antd"
    import { UserOutlined, LockOutlined } from '@ant-design/icons'
    import 'antd/dist/antd.css'
    import "./LoginForm.scss"

    export default function LoginForm() {
        const [inputs, setInputs] = useState({
            email: "",
            password: ""
        })
    
        const changeForm = e => {
            setInputs({
                ...inputs,
                [e.target.name]: e.target.value
            })
        };

        const login = /* async */ e => {
            /* e.preventDefault() */
            console.log(inputs)
        }
        
        return (
            <Form className="login-form"  onChange={changeForm} onFinish={login} >
                <Form.Item>
                    <Input
                        prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
                        type="email"
                        name="email"
                        placeholder="Correo electrónico"
                        className="login-form__input"
                    />
                </Form.Item>
                <Form.Item>
                    <Input
                        prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
                        type="password"
                        name="password"
                        placeholder="Contraseña"
                        className="login-form__input"
                    />
                </Form.Item>
                <Form.Item>
                    <Button htmlType="submit" className="login-form__button">
                        Entrar
                    </Button>
                </Form.Item>
            </Form>
        )
    }
    ```
2. Commit Video 078:
    + $ git add .
    + $ git commit -m "Guardando datos del formulario en el estado del componente"
    + $ git push -u origin main

### 079. Creando función para logear usuario que conecte con el api
1. Crear función **signInApi** en **client\src\api\user.js**:
    ```js
    export function signInApi(data) {
        const url = `${basePath}/${apiVersion}/sign-in`;
        console.log(data, 'url')
        const params = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        };
        
        return fetch(url, params)
            .then(response => {
                return response.json()
            })
            .then(result => {
                console.log(result)
                return result
            })
            .catch(err => {
                return err.message
            })
    }
    ```
2. Modificar componente **client\src\components\Admin\LoginForm\LoginForm.js**:
    ```js
    import { useState } from "react"
    import { Form, Input, Button, notification } from "antd"
    import { UserOutlined, LockOutlined } from '@ant-design/icons'
    import 'antd/dist/antd.css'
    import { signInApi } from "../../../api/user"

    import "./LoginForm.scss"

    export default function LoginForm() {
        const [inputs, setInputs] = useState({
            email: "",
            password: ""
        })
    
        const changeForm = e => {
            setInputs({
                ...inputs,
                [e.target.name]: e.target.value
            })
        };

        const login = e => {
            /* e.preventDefault() */
            signInApi(inputs)
        }
        
        return (
            <Form className="login-form"  onChange={changeForm} onFinish={login} >
                <Form.Item>
                    <Input
                        prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
                        type="email"
                        name="email"
                        placeholder="Correo electrónico"
                        className="login-form__input"
                    />
                </Form.Item>
                <Form.Item>
                    <Input
                        prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
                        type="password"
                        name="password"
                        placeholder="Contraseña"
                        className="login-form__input"
                    />
                </Form.Item>
                <Form.Item>
                    <Button htmlType="submit" className="login-form__button">
                        Entrar
                    </Button>
                </Form.Item>
            </Form>
        )
    }
    ```
3. Commit Video 079:
    + $ git add .
    + $ git commit -m "Creando función para logear usuario que conecte con el api"
    + $ git push -u origin main

### 080. Guardando los Tokens en el localStorage y creando constantes para ello
1. Crear **client\src\utils\constants.js**:
    ```js
    export const ACCESS_TOKEN = "accessToken"
    export const REFRESH_TOKEN = "refreshToken"
    ```
2. Modificar componente **client\src\components\Admin\LoginForm\LoginForm.js**:
    ```js
    ≡
    import 'antd/dist/antd.css'
    import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../../utils/constants"
    ≡

    export default function LoginForm() {
        ≡
        const login = async e => {
            /* e.preventDefault() */    
            const result = await signInApi(inputs)
            if (result.message) {
                notification["error"]({
                    message: result.message
                });
            } else {
                const { accessToken, refreshToken } = result;
                localStorage.setItem(ACCESS_TOKEN, accessToken);
                localStorage.setItem(REFRESH_TOKEN, refreshToken);

                notification["success"]({
                    message: "Login correcto."
                });
                window.location.href = "/admin"
            }
        }
        
        return (
            ≡
        )
    }
    ```
3. Commit Video 080:
    + $ git add .
    + $ git commit -m "Guardando los Tokens en el localStorage y creando constantes para ello"
    + $ git push -u origin main

### 081. Creando las funciones para obtener AccessToken y RefreshToken
1. Parar la ejecución de la aplicación cliente e instalar **jwt-decode** (decodificador para los tokens):
    + $ yarn add jwt-decode
    + Reiniciar la aplicación:
        + $ yarn dev
2. Crear **client\src\api\auth.js**:
    ```js
    import { basePath, apiVersion } from "./config"
    import { ACCESS_TOKEN, REFRESH_TOKEN } from "../utils/constants"
    import jwtDecode from "jwt-decode"

    export function getAccessToken() {
        const accessToken = localStorage.getItem(ACCESS_TOKEN)

        if (!accessToken || accessToken === "null") {
            return null;
        }
        
        return willExpireToken(accessToken) ? null : accessToken
    }

    export function getRefreshToken() {
        const refreshToken = localStorage.getItem(REFRESH_TOKEN)

        if (!refreshToken || refreshToken === "null") {
            return null;
        }

        return willExpireToken(refreshToken) ? null : refreshToken
    }

    function willExpireToken(token) {
        const seconds = 60
        const metaToken = jwtDecode(token)
        const { exp } = metaToken
        const now = (Date.now() + seconds) / 1000
        return now > exp
    }
    ```
3. Commit Video 081:
    + $ git add .
    + $ git commit -m "Creando las funciones para obtener AccessToken y RefreshToken"
    + $ git push -u origin main

### 082. Creando endpoint para refrescar el AccessToken
1. Ir al proyecto **server** y crear controlador **server\controllers\auth.js**:
    ```js
    const jwt = require("../services/jwt")
    const moment = require("moment")
    const User = require("../models/user")

    function willExpireToken(token) {
        const { exp } = jwt.decodedToken(token)
        const currentDate = moment().unix()

        if (currentDate > exp) {
            return true
        }
        return false
    }

    function refreshAccessToken(req, res) {
        const { refreshToken } = req.body;
        const isTokenExpired = willExpireToken(refreshToken);

        if (isTokenExpired) {
            res.status(404).send({ message: "El refreshToken ha expirado" })
        } else {
            const { id } = jwt.decodedToken(refreshToken)

            User.findOne({ _id: id }, (err, userStored) => {
                if (err) {
                    res.status(500).send({ message: "Error del servidor." })
                } else {
                    if (!userStored) {
                        res.status(404).send({ message: "Usuario no encontrado." })
                    } else {
                        res.status(200).send({
                            accessToken: jwt.createAccessToken(userStored),
                            refreshToken: refreshToken
                        })
                    }
                }
            })
        }
    }

    module.exports = {
        refreshAccessToken
    }
    ```
2. Crear archivo de rutas **server\routers\auth.js**:
    ```js
    const express = require("express")
    const AuthController = require("../controllers/auth")

    const api = express.Router()

    api.post("/refresh-access-token", AuthController.refreshAccessToken)

    module.exports = api
    ```
3. Modificar **server\app.js**:
    ```js
    ≡
    // Load routings
    const authRoutes = require('./routers/auth')
    ≡
    // Basic Routers
    app.use(`/api/${API_VERSION}`, authRoutes)
    ≡
    ```
4. Prueba http:
    + Realizar petición http:
        + Método: post
        + URL: http://localhost:3977/api/v1/refresh-access-token
        + Body:
            ```json
            {
                "refreshToken": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjYxYTNjZDRkNWY3YzY1Y2JhYzEzMjNmYyIsImV4cCI6MTY0MDczMDkyOH0.IqF5cXVVDwOQtxjJ4SvHrMyJCA0N5T4c_7ZhvqTpVZU"
            }
            ```
    + Guardar endpoint como: **refresh-access-token**
5. Commit Video 082:
    + $ git add .
    + $ git commit -m "Creando endpoint para refrescar el AccessToken"
    + $ git push -u origin main

### 083. Creando función para refrescar el AccessToken desde el cliente
1. Ir al proyecto **client** y modificar **client\src\api\auth.js**:
    ```js
    ≡
    export function getAccessTokenApi() {
        const accessToken = localStorage.getItem(ACCESS_TOKEN)

        if (!accessToken || accessToken === "null") {
            return null;
        }
        
        return willExpireToken(accessToken) ? null : accessToken
    }

    export function getRefreshTokenApi() {
        const refreshToken = localStorage.getItem(REFRESH_TOKEN)

        if (!refreshToken || refreshToken === "null") {
            return null;
        }

        return willExpireToken(refreshToken) ? null : refreshToken
    }

    export function refreshAccessTokenApi(refreshToken) {
        const url = `${basePath}/${apiVersion}/refresh-access-token`
        const bodyObj = {
            refreshToken: refreshToken
        }
        const params = {
            method: "POST",
            body: JSON.stringify(bodyObj),
            headers: {
                "Content-Type": "application/json"
            }
        }

        fetch(url, params)
            .then(response => {
                if (response.status !== 200) {
                    return null;
                }
                return response.json()
            })
            .then(result => {
                if (!result) {
                    // TO DO: Desloguear usuario
                } else {
                    const { accessToken, refreshToken } = result
                    localStorage.setItem(ACCESS_TOKEN, accessToken)
                    localStorage.setItem(REFRESH_TOKEN, refreshToken)
                }
            })
    }
    ≡
    ```
2. Commit Video 083:
    + $ git add .
    + $ git commit -m "Creando función para refrescar el AccessToken desde el cliente"
    + $ git push -u origin main

### 084. Función para deslogear un usuario
1. Modificar **client\src\api\auth.js**:
    ```js
    ≡
    export function refreshAccessTokenApi(refreshToken) {
        ≡
        fetch(url, params)
            .then(response => {
                ≡
            })
            .then(result => {
                if (!result) {
                    logout()
                } else {
                    ≡
                }
            })
    }

    export function logout() {
        localStorage.removeItem(ACCESS_TOKEN)
        localStorage.removeItem(REFRESH_TOKEN)
    }
    ≡
    ```
2. Commit Video 084:
    + $ git add .
    + $ git commit -m "Función para deslogear un usuario"
    + $ git push -u origin main

### 085. Hook para comprobar si el usuario esta logeado o refrescar el token
1. Crear hook **client\src\hooks\useAuth.js**:
    ```js
    import { useContext } from "react"
    import { AuthContext } from "../providers/AuthProvider"

    export default () => useContext(AuthContext)
    ```
2. Crear provider **client\src\providers\AuthProvider.js**:
    ```js
    import { ConsoleSqlOutlined } from "@ant-design/icons"
    import { useState, useEffect, createContext } from "react"
    import { getAccessTokenApi, getRefreshTokenApi, refreshAccessTokenApi, logout } from "../api/auth"

    export const AuthContext = createContext()

    export default function AuthProvider(props) {
        const { children } = props
        const [user, setUser] = useState({
            user: null,
            isLoading: true
        })

        return <AuthContext.Provider value={user}>{children}</AuthContext.Provider> 
    }
    ```
3. Modificar **client\src\App.js**:
    ```js
    ≡
    import AuthProvider from "./providers/AuthProvider"
    import './App.scss';

    function App() {
        return (
            <AuthProvider>
                <Router>
                    <Switch>
                        {routes.map((route, index) => (
                            <RouteWithSubRoutes key={index} {...route}/>
                        ))}
                    </Switch>
                </Router>
            </AuthProvider>
        )
    }
    ≡
    ```
4. Modificar layout **client\src\layouts\LayoutAdmin.js**:
    ```js
    ≡
    import 'antd/dist/antd.css'
    import useAuth from "../hooks/useAuth"
    ≡
    export default function LayoutAdmin(props) {
        ≡
        const { Header, Content, Footer } = Layout
        const { user, isLoading } = useAuth()
        ≡
    }
    ≡
    ```
5. Commit Video 085:
    + $ git add .
    + $ git commit -m "Hook para comprobar si el usuario esta logeado o refrescar el token"
    + $ git push -u origin main

### 086. Escribiendo la lógica del AuthProvider
1. Modificar provider **client\src\providers\AuthProvider.js**:
    ```js
    import { ConsoleSqlOutlined } from "@ant-design/icons"
    import { useState, useEffect, createContext } from "react"
    import jwtDecode from "jwt-decode"
    import { getAccessTokenApi, getRefreshTokenApi, refreshAccessTokenApi, logout } from "../api/auth"

    export const AuthContext = createContext()

    export default function AuthProvider(props) {
        const { children } = props
        const [user, setUser] = useState({
            user: null,
            isLoading: true
        })

        useEffect(() => {
            checkUserLogin(setUser)
        }, [])

        return <AuthContext.Provider value={user}>{children}</AuthContext.Provider> 
    }

    function checkUserLogin(setUser) {
        const accessToken = getAccessTokenApi()

        if (!accessToken) {
            const refreshToken = getRefreshTokenApi()

            if (!refreshToken) {
                logout()
                setUser({
                    user: null,
                    isLoading: false
                })
            } else {
                refreshAccessTokenApi(refreshToken)
            }
        } else {
            setUser({
                isLoading: false,
                user: jwtDecode(accessToken)
            })
        }
    }
    ```
2. Commit Video 086:
    + $ git add .
    + $ git commit -m "Escribiendo la lógica del AuthProvider"
    + $ git push -u origin main
    ```

### 087. Bloqueando la página de login para usuarios logeados
1. Modificar vista **client\src\pages\Admin\SignIn\SignIn.js**:
    ```js
    ≡
    import LoginForm from "../../../components/Admin/LoginForm"
    import { getAccessTokenApi } from "../../../api/auth"
    import "./SingIn.scss"

    export default function SignIn() {
        ≡

        if (getAccessTokenApi()) {
            return <Redirect to="/admin" />
        }
        
        return (
            ≡
        )
    }
    ```
2. Modificar layout **client\src\layouts\LayoutAdmin.js**:
    ```js
    import { useState } from "react"
    import { Route, Switch, Redirect } from 'react-router-dom'
    import { Layout } from "antd"
    import 'antd/dist/antd.css'
    import useAuth from "../hooks/useAuth"
    import MenuTop from '../components/Admin/MenuTop'
    import MenuSider from '../components/Admin/MenuSider/MenuSider'
    import AdminSignIn from '../pages/Admin/SignIn'
    import "./LayoutAdmin.scss"

    export default function LayoutAdmin(props) {
        const { routes } = props
        const [menuCollapsed, setMenuCollapsed] = useState(false)
        const { Header, Content, Footer } = Layout
        const { user, isLoading } = useAuth()

        if(!user && !isLoading){
            return (
                <>
                    <Route path="/admin/login" component={AdminSignIn} />
                    <Redirect to="/admin/login" />
                </>
            )
        }

        if(user && !isLoading){
            return (
                <Layout>
                    <MenuSider menuCollapsed={menuCollapsed} />
                    <Layout className="layout-admin" style={{ marginLeft: menuCollapsed ? "80px" : "200px" }} >
                        <Header className="layout-admin__header">
                            <MenuTop menuCollapsed={menuCollapsed} setMenuCollapsed={setMenuCollapsed} />
                        </Header>
                        <Content className="layout-admin__content">
                            <LoadRoutes routes={routes}/>
                        </Content>
                        <Footer className="layout-admin__footer">Soluciones++ 2021</Footer>
                    </Layout>
                </Layout>
            )
        }

        return null
    }

    function LoadRoutes({ routes }){
        return (
            <Switch>
                {routes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.component}
                    />
                ))}
            </Switch>
        )
    }
    ```
3. Commit Video 087:
    + $ git add .
    + $ git commit -m "Bloqueando la página de login para usuarios logeados"
    + $ git push -u origin main

### 088. Añadiendo funcionalidad al botón de logout
1. Modificar el componente **client\src\components\Admin\MenuTop\MenuTop.js** para implementar la funcionalidad de logout:
    ```js
    ≡
    import { logout } from "../../../api/auth"
    import './MenuTop.scss'

    export default function MenuTop(props){
        const { menuCollapsed, setMenuCollapsed } = props

        const logoutUser = () => {
            logout()
            window.location.reload()
        }

        return (
            <div className="menu-top">
                ≡
                <div className="menu-top__right" >
                    <PoweroffOutlined className="menu-top__button" type="link" onClick={logoutUser} />
                </div>
            </div>
        )
    }
    ```
2. Commit Video 088:
    + $ git add .
    + $ git commit -m "Añadiendo funcionalidad al botón de logout"
    + $ git push -u origin main

### 089. Activando Usuario desactivado
+ **Contenido**: por ahora para activar a los usuarios se realizará directamente desde la base de datos.
1. Commit Video 089:
    + $ git add .
    + $ git commit -m "Activando Usuario desactivado"
    + $ git push -u origin main

## Sección 09: Panel de Administración de usuarios

### 090. Creando el menú de usuarios
1. Crear **client\src\pages\Admin\Users\index.js**:
    ```js
    export { default } from "./Users"
    ```
2. Crear vista **client\src\pages\Admin\Users\Users.js**:
    ```js
    import "./Users.scss"

    export default function Users() {

        return (
            <div>
                <h1>Lista de usuarios</h1>
            </div>
        )
    }
    ```
3. Crear archivo de estilos **client\src\pages\Admin\Users\Users.scss**:
    ```scss
    .users {
    }
    ```
4. Modificar **client\src\config\routes.js**:
    ```js
    // Layout
    ≡

    // Admin Pages
    ≡
    import AdminUsers from "../pages/Admin/Users"

    // Pages
    ≡

    // Otros
    ≡

    // Sistema de rutas
    const routes = [
        {
            path: "/admin",
            component: LayoutAdmin,
            exact: false,
            routes: [
                ≡
                {
                    path: "/admin/users",
                    component: AdminUsers, 
                    exact: true
                },
                {
                    component: Error404
                }
            ]
        },
        {
            ≡
        }
    ]

    export default routes
    ```
5. Modificar componente **client\src\components\Admin\MenuSider\MenuSider.js**:
    ```js
    import { Link, withRouter } from "react-router-dom"
    import { Layout, Menu } from "antd"
    import { HomeOutlined, UserOutlined } from '@ant-design/icons'
    import 'antd/dist/antd.css'
    import "./MenuSider.scss"

    function MenuSider(props) {
        /* console.log(props) */
        const { menuCollapsed } = props
        const { Sider } = Layout;

        return (
            <Sider className="admin-sider" collapsed={menuCollapsed} >
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={["1"]}
                >
                    <Menu.Item key="1">
                        <Link to="/admin">
                            <HomeOutlined />
                            <span className="nav-text">Home</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="/admin/users">
                            <UserOutlined />
                            <span className="nav-text">Usuarios</span>
                        </Link>
                    </Menu.Item>
                </Menu>
            </Sider>
        )
    }

    export default withRouter(MenuSider)
    ```
6. Commit Video 090:
    + $ git add .
    + $ git commit -m "Creando el menú de usuarios"
    + $ git push -u origin main

### 091. Solucionando cambio del menú al recargar la página
1. Modificar compoentne **client\src\components\Admin\MenuSider\MenuSider.js**:
    ```js
    import { Link, withRouter } from "react-router-dom"
    import { Layout, Menu } from "antd"
    import { HomeOutlined, UserOutlined } from '@ant-design/icons'
    import 'antd/dist/antd.css'
    import "./MenuSider.scss"

    function MenuSider(props) {
        const { menuCollapsed, location } = props
        const { Sider } = Layout;

        return (
            <Sider className="admin-sider" collapsed={menuCollapsed} >
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={[location.pathname]}
                >
                    <Menu.Item key="/admin">
                        <Link to="/admin">
                            <HomeOutlined />
                            <span className="nav-text">Home</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="/admin/users">
                        <Link to="/admin/users">
                            <UserOutlined />
                            <span className="nav-text">Usuarios</span>
                        </Link>
                    </Menu.Item>
                </Menu>
            </Sider>
        )
    }

    export default withRouter(MenuSider)
    ```
2. Commit Video 091:
    + $ git add .
    + $ git commit -m "Solucionando cambio del menú al recargar la página"
    + $ git push -u origin main

### 092. Creando Endpoint para obtener todos los usuarios
1. Ir al proyecto **server** y modificar el controlador **server\controllers\user.js** para incorporar la función **getUsers**:
    ```js
    ≡
    function getUsers(req, res) {
        User.find().then(users => {
            if(!users){
                res.status(404).send({ message: "No se ha encontrado ningún usuario."})
            } else {
                res.status(200).send({ users })
            }
        })
    }

    module.exports = {
        signUp,
        signIn,
        getUsers
    }
    ```
2. Incorporar la ruta ssss en **server\routers\user.js**:
    ```js
    ≡
    api.post("/sign-in", UserController.signIn)
    api.get("/users", UserController.getUsers)
    ≡
    ```
3. Prueba http:
    + Realizar petición http:
        + Método: get
        + URL: http://localhost:3977/api/v1/users
    + Guardar endpoint como: **get-users**
4. Commit Video 092:
    + $ git add .
    + $ git commit -m "Creando Endpoint para obtener todos los usuarios"
    + $ git push -u origin main

### 093. Creando un Middlewares para bloquear url a usuarios no logeados
1. Crear middleware **server\middlewares\authenticated.js**:
    ```js
    const jwt = require("jwt-simple")
    const moment = require("moment")

    /* Debe ser exactamente la misma de server\services\jwt.js */
    const SECRET_KEY = "alsjsla85sd55s55WWf444f55svvvs555s22As"

    exports.ensureAuth = (req, res, next) => {
        if (!req.headers.authorization) {
            return res
                .status(403)
                .send({ message: "La peticion no tiene la cabecera de Autenticacion." })
        }

        const token = req.headers.authorization.replace(/['"]+/g, "")

        try {
            var payload = jwt.decode(token, SECRET_KEY)

            if (payload.exp <= moment().unix()) {
                return res.status(404).send({ message: "El token ha expirado." })
            }
        } catch (ex) {
            console.log(ex)
            return res.status(404).send({ message: "Token invalido." })
        }
        req.user = payload
        next()
    }
    ```
2. Modificar archivo de rutas **server\routers\user.js**:
    ```js
    const express = require("express")
    const UserController = require("../controllers/user")
    const md_auth = require("../middlewares/authenticated")

    const api = express.Router()

    api.post("/sign-up", UserController.signUp)
    api.post("/sign-in", UserController.signIn)
    api.get("/users",[md_auth.ensureAuth] , UserController.getUsers)

    module.exports = api
    ```
3. Realizar petición http (get-users):
    + Método: get
    + URL: http://localhost:3977/api/v1/users
        + Headers:
            ```
            Content-Type: application/json
            Authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjYxYTNjZDRkNWY3YzY1Y2JhYzEzMjNmYyIsImVtYWlsIjoiYmF6by5wZWRyb0BnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJjcmVhdGVUb2tlbiI6MTYzODIxNzU3OCwiZXhwIjoxNjM4MjI4Mzc4fQ.JBN0wZ_q6TNd4Or-uLgZEpuJNFrquK0OVneEM1mYFR8
            ```
4. Commit Video 093:
    + $ git add .
    + $ git commit -m "Creando un Middlewares para bloquear url a usuarios no logeados"
    + $ git push -u origin main

### 094. Añadiendo configuración de Headers a nuestro servidor
1. Modificar **server\app.js**:
    ```js
    ≡
    // Configure Header HTTP
    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*")
        res.header(
            "Access-Control-Allow-Headers",
            "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
        )
        res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE")
        res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE")
        next()
    })
    ≡
    ```
2. Reiniciar los servicios de Frontend y Backend.
3. Commit Video 094:
    + $ git add .
    + $ git commit -m "Añadiendo configuración de Headers a nuestro servidor"
    + $ git push -u origin main

### 095. Función para ejecutar el Enpoint y obtener todos los usuarios registrados
1. Modificar vista **client\src\pages\Admin\Users\Users.js**:
    ```js
    import { useState, useEffect } from "react"
    import { getAccessTokenApi } from "../../../api/auth"
    import { getUsersApi } from "../../../api/user"
    import "./Users.scss"

    export default function Users() {
        const [users, setUsers] = useState([])
        const token = getAccessTokenApi()
        console.log(users)

        useEffect(() => {
            getUsersApi(token).then(response => {
                setUsers(response)
            })
        }, [token])

        return (
            <div>
                <h1>Lista de usuarios</h1>
            </div>
        )
    }
    ```
2. Modificar **client\src\api\user.js**:
    ```js
    ≡
    export function getUsersApi(token) {
        const url = `${basePath}/${apiVersion}/users`

        const params = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: token
            }
        };

        return fetch(url, params)
            .then(response => {
                return response.json();
            })
            .then(result => {
                return result;
            })
            .catch(err => {
                return err.message;
            });
    }
    ≡
    ```
3. Commit Video 095:
    + $ git add .
    + $ git commit -m "Función para ejecutar el Enpoint y obtener todos los usuarios registrados"
    + $ git push -u origin main

### 096. Endpoint para obtener usuarios Activado o Inactivos y recuperarlos en el cliente
1. Modificar el controlador **server\controllers\user.js** para incorporar la función **getUsersActive**:
    ```js
    ≡
    function getUsersActive(req, res) {
        const query = req.query

        User.find({ active: query.active }).then(users => {
            if(!users){
                res.status(404).send({ message: "No se ha encontrado ningún usuario."})
            } else {
                res.status(200).send({ users })
            }
        })
    }

    module.exports = {
        signUp,
        signIn,
        getUsers,
        getUsersActive
    }
    ```
2. Crear endpoint **users-active** en **server\routers\user.js**:
    ```js
    ≡
    api.get("/users",[md_auth.ensureAuth] , UserController.getUsers)
    api.get("/users-active",[md_auth.ensureAuth] , UserController.getUsersActive)
    ≡
    ```
3. Prueba http:
    + Realizar petición http:
        + Método: get
        + URL: http://localhost:3977/api/v1/users-active?active=true
        + Headers:
            ```
            Content-Type: application/json
            Authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjYxYTNjZDRkNWY3YzY1Y2JhYzEzMjNmYyIsImV4cCI6MTY0MDgxMTIzN30.98h32bj3VPXJvKnjy-BK-wtPO8Vbhc4Z7ZM8diEtSc8
            ```
    + Guardar endpoint como: **get-users-active**.

4. Crear función **getUsersActiveApi** en **client\src\api\user.js**:
    ```js
    export function getUsersActiveApi(token, status) {
        const url = `${basePath}/${apiVersion}/users-active?active=${status}`

        const params = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: token
            }
        }

        return fetch(url, params)
            .then(response => {
                return response.json()
            })
            .then(result => {
                return result
            })
            .catch(err => {
                return err.message
            })
    }
    ```
5. Modificar la vista **client\src\pages\Admin\Users\Users.js**:
    ```js
    import { useState, useEffect } from "react"
    import { getAccessTokenApi } from "../../../api/auth"
    import { getUsersActiveApi } from "../../../api/user"
    import "./Users.scss"

    export default function Users() {
        const [usersActive, setUsersActive] = useState([])
        const [usersInactive, setUsersInactive] = useState([])
        const token = getAccessTokenApi()
        console.log('usersActive:' + usersActive)
        console.log('usersInactive:' + usersInactive)

        useEffect(() => {
            getUsersActiveApi(token, true).then(response => {
                setUsersActive(response.users)
            })
            getUsersActiveApi(token, false).then(response => {
                setUsersInactive(response.users)
            })
        }, [token])

        return (
            <div>
                <h1>Lista de usuarios</h1>
            </div>
        )
    }
    ```
6. Commit Video 096:
    + $ git add .
    + $ git commit -m "Endpoint para obtener usuarios Activado o Inactivos y recuperarlos en el cliente"
    + $ git push -u origin main

### 097. Creando un Componente para mostrar usuarios activo o inactivos
1. Crear **client\src\components\Admin\Users\ListUsers\index.js**:
    ```js
    export { default } from "./ListUsers"
    ```
2. Crear componente **client\src\components\Admin\Users\ListUsers\ListUsers.js**:
    ```js
    import { useState, useEffect } from "react"
    import { Switch, List, Avatar, Button } from "antd"
    import NoAvatar from "../../../../assets/img/png/no-avatar.png"
    import "./ListUsers.scss"

    export default function ListUsers(props){
        const { usersActive, usersInactive } = props;
        const [viewUsersActives, setViewUsersActives] = useState(true)

        return (
            <div className="list-users">
                <div className="list-users__header">
                    <div className="list-users__switch">
                        <Switch
                            defaultChecked
                            onChange={() => setViewUsersActives(!viewUsersActives)}
                        />
                        <span>
                            {viewUsersActives ? "Usuarios Activos" : "Usuarios Inactivos"}
                        </span>
                    </div>
                    { viewUsersActives ? <UsersActive /> : <UsersInactive /> }
                </div>
            </div>
        )
    }

    function UsersActive() {
        return <h3>Lista de usuarios activos</h3>
    }

    function UsersInactive() {
        return <h3>Lista de usuarios inactivos</h3>
    }
    ```
3. Crear archivo de estilo **client\src\components\Admin\Users\ListUsers\ListUsers.scss**:
    ```scss
    .list-users {
    }
    ```
4. Suministrar imagen para usuarios que no tengan avatar y ubicarla en **client\src\assets\img\png\no-avatar.png**.
5. Modificar vista **client\src\pages\Admin\Users\Users.js**:
    ```js
    import { useState, useEffect } from "react"
    import { getAccessTokenApi } from "../../../api/auth"
    import { getUsersActiveApi } from "../../../api/user"
    import ListUsers from "../../../components/Admin/Users/ListUsers"
    import "./Users.scss"

    export default function Users() {
        const [usersActive, setUsersActive] = useState([])
        const [usersInactive, setUsersInactive] = useState([])
        const token = getAccessTokenApi()

        useEffect(() => {
            getUsersActiveApi(token, true).then(response => {
                setUsersActive(response.users)
            })
            getUsersActiveApi(token, false).then(response => {
                setUsersInactive(response.users)
            })
        }, [token])

        return (
            <div className="users">
                <ListUsers usersActive={usersActive} usersInactive={usersInactive} />
            </div>
        )
    }
    ```
6. Commit Video 097:
    + $ git add .
    + $ git commit -m "Creando un Componente para mostrar usuarios activo o inactivos"
    + $ git push -u origin main

### 098. Renderizando lista de usuarios Activos y Inactivos
1. Modificar componente **client\src\components\Admin\Users\ListUsers\ListUsers.js**:
    ```js
    import { useState, useEffect } from "react"
    import { Switch, List, Avatar, Button } from "antd"
    import { EditOutlined, StopOutlined, DeleteOutlined, CheckOutlined } from '@ant-design/icons'
    import 'antd/dist/antd.css'
    import NoAvatar from "../../../../assets/img/png/no-avatar.png"
    import "./ListUsers.scss"

    export default function ListUsers(props){
        const { usersActive, usersInactive } = props;
        const [viewUsersActives, setViewUsersActives] = useState(true)

        return (
            <div className="list-users">
                <div className="list-users__header">
                    <div className="list-users__switch">
                        <Switch
                            defaultChecked
                            onChange={() => setViewUsersActives(!viewUsersActives)}
                        />
                        <span>
                            {viewUsersActives ? "Usuarios Activos" : "Usuarios Inactivos"}
                        </span>
                    </div>
                    {viewUsersActives ? <UsersActive usersActive={usersActive} /> : <UsersInactive usersInactive={usersInactive} />}
                </div>
            </div>
        )
    }

    function UsersActive(props) {
        const { usersActive } = props

        return (
            <List
                className="users-active"
                itemLayout="horizontal"
                dataSource={usersActive}
                renderItem={user => (
                    <List.Item
                        actions={[
                            <Button
                                type="primary"
                                onClick={() => console.log('Editar usuario')}
                            >
                                <EditOutlined />
                            </Button>,
                            <Button
                                type="danger"
                                onClick={() => console.log('Desactivar usuario')}
                            >
                                <StopOutlined />
                            </Button>,
                            <Button
                                type="danger"
                                onClick={() => console.log('Eliminar usuario')}
                            >
                                <DeleteOutlined />
                            </Button>
                        ]}
                    >
                        <List.Item.Meta
                            avatar={<Avatar src={user.avatar ? user.avatar : NoAvatar} />}
                            title={`
                                ${user.name ? user.name : '...'}
                                ${user.lastname ? user.lastname : '...'}
                            `}
                            description={user.email}
                        />
                    </List.Item>
                )}
            />
        )
    }

    function UsersInactive(props) {
        const { usersInactive } = props

        return (
            <List
                className="users-active"
                itemLayout="horizontal"
                dataSource={usersInactive}
                renderItem={user => (
                    <List.Item
                        actions={[
                            <Button
                                type="primary"
                                onClick={() => console.log('Activar usuario')}
                            >
                                <CheckOutlined />
                            </Button>,
                            <Button
                                type="danger"
                                onClick={() => console.log('Eliminar usuario')}
                            >
                                <DeleteOutlined />
                            </Button>
                        ]}
                    >
                        <List.Item.Meta 
                            avatar={<Avatar src={user.avatar ? user.avatar : NoAvatar} />}
                            title={`
                                ${user.name ? user.name : '...'}
                                ${user.lastname ? user.lastname : '...'}
                            `}
                            description={user.email}
                        />
                    </List.Item>
                )}
            />
        )
    }
    ```
2. Modificar archivo de estilo **client\src\components\Admin\Users\ListUsers\ListUsers.scss**:
    ```js
    .list-users {
        &__switch {
            display: flex;
            align-items: center;
            margin-bottom: 20px;

            > button {
                margin-right: 20px;
            }
        }

        .users-active {
            background-color: #fff;
            padding: 10px 20px;

            .ant-list-item-meta {
                display: flex;
                align-items: center;
            }
        }
    }
    ```
3. Commit Video 098:
    + $ git add .
    + $ git commit -m "Renderizando lista de usuarios Activos y Inactivos"
    + $ git push -u origin main

### 099. Añadiendo Avatar al modelo de datos de usuarios en el server
1. Modifica modelo **server\models\user.js** para agregar el campo **avatar**:
    ```js
    ≡
    const UserSchame = Schema({
        ≡
        active: Boolean,
        avatar: String
    })
    ≡
    ```
2. Commit Video 099:
    + $ git add .
    + $ git commit -m "Añadiendo Avatar al modelo de datos de usuarios en el server"
    + $ git push -u origin main

### 100. Creando el componente Modal
1. Crear **client\src\components\Modal\index.js**:
    ```js
    export { default } from "./Modal"
    ```
2. Crear componente **client\src\components\Modal\Modal.js**:
    ```js
    import { Modal as ModalAntd } from "antd"
    import 'antd/dist/antd.css'

    export default function Modal(props) {
        const { children, title, isVisible, setIsVisible } = props;

        return (
            <ModalAntd
                title={title}
                centered
                visible={isVisible}
                onCancel={() => setIsVisible(false)}
                footer={false}
            >
                {children}
            </ModalAntd>
        );
    }
    ```
3. Modificar componente **client\src\components\Admin\Users\ListUsers\ListUsers.js**:
    ```js
    ≡
    import NoAvatar from "../../../../assets/img/png/no-avatar.png"
    import Modal from "../../../Modal"
    import "./ListUsers.scss"

    export default function ListUsers(props){
        ≡

        return (
            <div className="list-users">
                <div className="list-users__header">
                    <div className="list-users__switch">
                        ≡
                    </div>
                    {viewUsersActives ? <UsersActive usersActive={usersActive} /> : <UsersInactive usersInactive={usersInactive} />}
                    <Modal
                        title="Mi modal"
                        isVisible={true}
                        setIsVisible={() => console.log('ssss')}
                    >
                        Prueba ventana modal
                    </Modal>
                </div>
            </div>
        )
    }
    ```
4. Commit Video 100:
    + $ git add .
    + $ git commit -m "Creando el componente Modal"
    + $ git push -u origin main

### 101. Abriendo el Modal al hacer click en Editar, mostrando el componente EditUserForm
1. Modificar componente **client\src\components\Admin\Users\ListUsers\ListUsers.js**:
    ```js
    import { useState, useEffect } from "react"
    import { Switch, List, Avatar, Button } from "antd"
    import { EditOutlined, StopOutlined, DeleteOutlined, CheckOutlined } from '@ant-design/icons'
    import 'antd/dist/antd.css'
    import NoAvatar from "../../../../assets/img/png/no-avatar.png"
    import Modal from "../../../Modal"
    import EditUserForm from "../EditUserForm"
    import "./ListUsers.scss"

    export default function ListUsers(props){
        const { usersActive, usersInactive } = props;
        const [viewUsersActives, setViewUsersActives] = useState(true)
        const [isVisibleModal, setIsVisibleModal] = useState(false)
        const [modalTitle, setModalTitle] = useState("")
        const [modalContent, setModalContent] = useState(null)

        return (
            <div className="list-users">
                <div className="list-users__header">
                    <div className="list-users__switch">
                        <Switch
                            defaultChecked
                            onChange={() => setViewUsersActives(!viewUsersActives)}
                        />
                        <span>
                            {viewUsersActives ? "Usuarios Activos" : "Usuarios Inactivos"}
                        </span>
                    </div>
                    {viewUsersActives ? (
                            <UsersActive
                                usersActive={usersActive}
                                setIsVisibleModal={setIsVisibleModal}
                                setModalTitle={setModalTitle}
                                setModalContent={setModalContent}
                            />
                        ) : (
                            <UsersInactive
                                usersInactive={usersInactive}
                            />
                    )}
                    <Modal
                        title={modalTitle}
                        isVisible={isVisibleModal}
                        setIsVisible={setIsVisibleModal}
                    >
                        {modalContent}
                    </Modal>
                </div>
            </div>
        )
    }

    function UsersActive(props) {
        const { usersActive, setIsVisibleModal, setModalTitle, setModalContent } = props
        
        const editUser = user => {
            setIsVisibleModal(true);
            setModalTitle(`Editar ${user.name ? user.name : "..."} ${user.lastname ? user.lastname : "..."}`)
            setModalContent('Formulario para editar usuario')
            setModalContent(
                <EditUserForm
                    user={user}
                />
            )
        }

        return (
            <List
                className="users-active"
                itemLayout="horizontal"
                dataSource={usersActive}
                renderItem={user => (
                    <List.Item
                        actions={[
                            <Button
                                type="primary"
                                onClick={() => editUser(user)}
                            >
                                <EditOutlined />
                            </Button>,
                            ≡
                        ]}
                    >
                        ≡
                    </List.Item>
                )}
            />
        )
    }

    function UsersInactive(props) {
        ≡
    }
    ```
2. Crear **client\src\components\Admin\Users\EditUserForm\index.js**:
    ```js
    export { default } from "./EditUserForm"
    ```
3. Crear componente **client\src\components\Admin\Users\EditUserForm\EditUserForm.js**:
    ```js
    import "./EditUserForm.scss";

    export default function EditUserForm(props) {
        const { user } = props

        return (
            <div>
                <h1>Formualario para la edición de usuario</h1>
                <h2>{user.email}</h2>
            </div>
        );
    }
    ```
4. Crear archivo de estilo **client\src\components\Admin\Users\EditUserForm\EditUserForm.scss**:
    ```scss
     .edit-user-form {
     }
    ```
5. Commit Video 101:
    + $ git add .
    + $ git commit -m "Abriendo el Modal al hacer click en Editar, mostrando el componente EditUserForm"
    + $ git push -u origin main

### 102. Usando React Dropzone para subir el avatar del usuario
+ https://react-dropzone.js.org
1. Instalar **react-dropzone** en el proyecto **client**:
    + $ yarn add react-dropzone
2. Modificar componente **client\src\components\Admin\Users\EditUserForm\EditUserForm.js**:
    ```js
    import { useState, useCallback } from "react"
    import { Avatar, Form, Input, Select, Button, Row, Col, notification } from "antd"
    import 'antd/dist/antd.css'
    import { useDropzone } from "react-dropzone"
    import NoAvatar from "../../../../assets/img/png/no-avatar.png"
    import "./EditUserForm.scss";

    export default function EditUserForm(props) {
        const { user } = props
        const [avatar, setAvatar] = useState(null)

        return (
            <div className="edit-user-form">
                <UploadAvatar avatar={avatar} setAvatar={setAvatar} />
                <h2>{user.email}</h2>
            </div>
        );
    }

    function UploadAvatar(props) {
        const { avatar, setAvatar } = props;
        const onDrop = useCallback(
            acceptedFiles => {
                const file = acceptedFiles[0];
                setAvatar({ file, preview: URL.createObjectURL(file) });
            },
            [setAvatar]
        )
        
        const { getRootProps, getInputProps, isDragActive } = useDropzone({
            accept: "image/jpeg, image/png",
            noKeyboard: true,
            onDrop
        });

        return (
            <div className="upload-avatar" {...getRootProps()}>
                <input {...getInputProps()} />
                {isDragActive ? (
                    <Avatar size={150} src={NoAvatar} />
                ) : (
                    <Avatar size={150} src={avatar ? avatar.preview : NoAvatar} />
                )}
            </div>
        )
    }
    ```
3. Modificar archivo de estilo **client\src\components\Admin\Users\EditUserForm\EditUserForm.scss**:
    ```scss
    .edit-user-form {
        .upload-avatar {
            display: table;
            margin: 0 auto;
            border: 2px solid #9a9a9a;
            border-style: dashed;
            border-radius: 100px;
            padding: 10px;
            margin-bottom: 20px;
        }
    }
    ```
4. Commit Video 102:
    + $ git add .
    + $ git commit -m "Usando React Dropzone para subir el avatar del usuario"
    + $ git push -u origin main

### 103. 1/2 - Creando Formulario para editar los datos del usuario
1. Modificar componente **client\src\components\Admin\Users\EditUserForm\EditUserForm.js**:
    ```js
    import { useState, useCallback } from "react"
    import { Avatar, Form, Input, Select, Button, Row, Col, notification } from "antd"
    import { UserOutlined, MailOutlined } from '@ant-design/icons'
    import 'antd/dist/antd.css'
    import { useDropzone } from "react-dropzone"
    import NoAvatar from "../../../../assets/img/png/no-avatar.png"
    import "./EditUserForm.scss";

    export default function EditUserForm(props) {
        const { user } = props
        const [avatar, setAvatar] = useState(null)
        const [userData, setUserData] = useState({
            name: user.name,
            lastname: user.lastname,
            email: user.email,
            role: user.role,
            avatar: user.avatar
        })

        const updateUser = e => {
            /* e.preventDefault() */
            console.log(userData)
        }

        return (
            <div className="edit-user-form">
                <UploadAvatar avatar={avatar} setAvatar={setAvatar} /> 
                <EditForm
                    userData={userData}
                    setUserData={setUserData}
                    updateUser={updateUser}
                />
            </div>
        );
    }

    function UploadAvatar(props) {
        const { avatar, setAvatar } = props;

        const onDrop = useCallback(
            acceptedFiles => {
                const file = acceptedFiles[0];
                setAvatar({ file, preview: URL.createObjectURL(file) });
            },
            [setAvatar]
        )
        
        const { getRootProps, getInputProps, isDragActive } = useDropzone({
            accept: "image/jpeg, image/png",
            noKeyboard: true,
            onDrop
        });

        return (
            <div className="upload-avatar" {...getRootProps()}>
                <input {...getInputProps()} />
                {isDragActive ? (
                    <Avatar size={150} src={NoAvatar} />
                ) : (
                    <Avatar size={150} src={avatar ? avatar.preview : NoAvatar} />
                )}
            </div>
        )
    }


    function EditForm(props) {
        const { userData, setUserData, updateUser } = props
        const { Option } = Select

        return (
            <Form className="form-edit" onFinish ={updateUser}>
                <Row gutter={24}>
                    <Col span={12}>
                        <Form.Item>
                            <Input
                                prefix={<UserOutlined />}
                                placeholder="Nombre"
                                value={userData.name}
                                onChange={e => setUserData({ ...userData, name: e.target.value })}
                            />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item>
                            <Input
                                prefix={<UserOutlined />}
                                placeholder="Apellidos"
                                value={userData.lastname}
                                onChange={e =>
                                    setUserData({ ...userData, lastname: e.target.value })
                                }
                            />
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={24}>
                    <Col span={12}>
                        <Form.Item>
                            <Input
                                prefix={<MailOutlined />}
                                placeholder="Correo electrónico"
                                value={userData.email}
                                onChange={e =>
                                    setUserData({ ...userData, email: e.target.value })
                                }
                            />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                    </Col>
                </Row>

                <Row gutter={24}>
                    <Col span={12}>
                    </Col>
                    <Col span={12}>
                    </Col>
                </Row>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="btn-submit">
                        Actualizar Usuario
                    </Button>
                </Form.Item>
            </Form>
        )
    } 
    ```
2. Commit Video 103:
    + $ git add .
    + $ git commit -m "1/2 - Creando Formulario para editar los datos del usuario"
    + $ git push -u origin main

### 104. 2/2 - Creando Formulario para editar los datos del usuario
1. Modificar componente **client\src\components\Admin\Users\EditUserForm\EditUserForm.js**:
    ```js
    import { useState, useEffect, useCallback } from "react"
    import { Avatar, Form, Input, Select, Button, Row, Col, notification } from "antd"
    import { UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons'
    import 'antd/dist/antd.css'
    import { useDropzone } from "react-dropzone"
    import NoAvatar from "../../../../assets/img/png/no-avatar.png"
    import "./EditUserForm.scss";

    export default function EditUserForm(props) {
        const { user } = props
        const [avatar, setAvatar] = useState(null)
        const [userData, setUserData] = useState({
            name: user.name,
            lastname: user.lastname,
            email: user.email,
            role: user.role,
            avatar: user.avatar
        })

        useEffect(() => {
            if(avatar){
                setUserData({ ...userData, avatar })
            }
        }, [avatar])

        const updateUser = e => {
            console.log(userData)
        }

        return (
            <div className="edit-user-form">
                <UploadAvatar avatar={avatar} setAvatar={setAvatar} /> 
                <EditForm
                    userData={userData}
                    setUserData={setUserData}
                    updateUser={updateUser}
                />
            </div>
        );
    }

    function UploadAvatar(props) {
        const { avatar, setAvatar } = props;

        const onDrop = useCallback(
            acceptedFiles => {
                const file = acceptedFiles[0];
                setAvatar({ file, preview: URL.createObjectURL(file) });
            },
            [setAvatar]
        )
        
        const { getRootProps, getInputProps, isDragActive } = useDropzone({
            accept: "image/jpeg, image/png",
            noKeyboard: true,
            onDrop
        });

        return (
            <div className="upload-avatar" {...getRootProps()}>
                <input {...getInputProps()} />
                {isDragActive ? (
                    <Avatar size={150} src={NoAvatar} />
                ) : (
                    <Avatar size={150} src={avatar ? avatar.preview : NoAvatar} />
                )}
            </div>
        )
    }


    function EditForm(props) {
        const { userData, setUserData, updateUser } = props
        const { Option } = Select

        return (
            <Form className="form-edit" onFinish ={updateUser}>
                <Row gutter={24}>
                    <Col span={12}>
                        <Form.Item>
                            <Input
                                prefix={<UserOutlined />}
                                placeholder="Nombre"
                                value={userData.name}
                                onChange={e => setUserData({ ...userData, name: e.target.value })}
                            />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item>
                            <Input
                                prefix={<UserOutlined />}
                                placeholder="Apellidos"
                                value={userData.lastname}
                                onChange={e =>
                                    setUserData({ ...userData, lastname: e.target.value })
                                }
                            />
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={24}>
                    <Col span={12}>
                        <Form.Item>
                            <Input
                                prefix={<MailOutlined />}
                                placeholder="Correo electrónico"
                                value={userData.email}
                                onChange={e =>
                                    setUserData({ ...userData, email: e.target.value })
                                }
                            />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item>
                            <Select
                                placeholder="Selecciona una rol"
                                onChange={e => setUserData({ ...userData, role: e })}
                                value={userData.role}
                            >
                                <Option value="admin">Administrador</Option>
                                <Option value="editor">Editor</Option>
                                <Option value="reviewr">Revisor</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={24}>
                    <Col span={12}>
                        <Form.Item>
                            <Input
                                prefix={<LockOutlined />}
                                type="password"
                                placeholder="Contraseña"
                                onChange={e =>
                                    setUserData({ ...userData, password: e.target.value })
                                }
                            />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item>
                            <Input
                                prefix={<LockOutlined />}
                                type="password"
                                placeholder="Repetir contraseña"
                                onChange={e =>
                                    setUserData({ ...userData, repeatPassword: e.target.value })
                                }
                            />
                        </Form.Item>
                    </Col>
                </Row>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="btn-submit">
                        Actualizar Usuario
                    </Button>
                </Form.Item>
            </Form>
        )
    }
    ```
2. Modificar archivo de estilo **client\src\components\Admin\Users\EditUserForm\EditUserForm.scss**:
    ```scss
    .edit-user-form {
        .upload-avatar {
            display: table;
            margin: 0 auto;
            border: 2px solid #9a9a9a;
            border-style: dashed;
            border-radius: 100px;
            padding: 10px;
            margin-bottom: 20px;
        }

    .form-edit {
            text-align: center;

            .ant-form-item {
                margin-top: 5px;
                margin-bottom: 5px;

                i {
                    color: rgba(0, 0, 0, 0.25);
                }
            }

            .btn-submit {
                width: 100%;
            }
        }
    }
    ```
3. Commit Video 104:
    + $ git add .
    + $ git commit -m "2/2 - Creando Formulario para editar los datos del usuario"
    + $ git push -u origin main

### 105. 1/2 - Endpoint para subir la imagen al servidor
1. Modificar el controlador **server\controllers\user.js** para incorporar la función **uploadAvatar**:
    ```js
    const fs = require("fs")
    const path = require("path")
    const bcrypt = require("bcrypt-node")
    const jwt = require("../services/jwt")
    const User = require("../models/user")
    const { query } = require("express")

    function signUp(req, res){
        ≡
    }

    function signIn(req, res){
        ≡
    }

    function getUsers(req, res) {
        ≡
    }

    function getUsersActive(req, res) {
        ≡
    }

    function uploadAvatar(req, res) {
        const params = req.params
        User.findById({ _id: params.id }, (err, userData) => {
            if(err){
                res.status(500).send({ message: "Error del servidor."})
            } else {
                if(!userData){
                    res.status(404).send({ message: "No se ha encontrado ningún usuario."})
                } else {
                    let user = userData
                    console.log(user)
                    console.log(req.files)
                }
            }
        })
    }

    module.exports = {
        signUp,
        signIn,
        getUsers,
        getUsersActive,
        uploadAvatar
    }
    ```
2. Crear ruta **upload-avatar** tipo **put** en **server\routers\user.js**:
    ```js
    const express = require("express")
    const UserController = require("../controllers/user")
    const multipart = require("connect-multiparty")

    const md_auth = require("../middlewares/authenticated")
    const md_upload_avatar = multipart({ uploadDir: "./uploads/avatar"})

    const api = express.Router()

    api.post("/sign-up", UserController.signUp)
    api.post("/sign-in", UserController.signIn)
    api.get("/users",[md_auth.ensureAuth] , UserController.getUsers)
    api.get("/users-active",[md_auth.ensureAuth] , UserController.getUsersActive)
    api.put("/upload-avatar/:id",[md_auth.ensureAuth, md_upload_avatar] , UserController.uploadAvatar)

    module.exports = api
    ```
    + **Nota**: crear la ruta **server\uploads\avatar**.
3. Prueba http:
    + Realizar petición http:
        + Método: put
        + URL: http://localhost:3977/api/v1/upload-avatar/61a250adddce36f5e06d3e74
        + Headers:
            ```
            Content-Type: application/json
            Authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjYxYTNjZDRkNWY3YzY1Y2JhYzEzMjNmYyIsImVtYWlsIjoiYmF6by5wZWRyb0BnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJjcmVhdGVUb2tlbiI6MTYzODM1NzczNywiZXhwIjoxNjM4MzY4NTM3fQ.U1waRE19KG_a8jGfRQ_AgRNtdgVHKeGs32tsbKcWHLE
            ```
    + Guardar endpoint como: **upload-avatar**
4. Commit Video 105:
    + $ git add .
    + $ git commit -m "1/2 - Endpoint para subir la imagen al servidor"
    + $ git push -u origin main

### 106. 2/2 - Endpoint para subir la imagen al servidor
1. Modificar controlador **server\controllers\user.js**:
    ```js
    ≡
    function uploadAvatar(req, res) {
        const params = req.params

        User.findById({ _id: params.id }, (err, userData) => {
            if (err) {
                res.status(500).send({ message: "Error del servidor." })
            } else {
                if (!userData) {
                res.status(404).send({ message: "Nose ha encontrado ningun usuario." })
                } else {
                    let user = userData

                    if (req.files) {
                        let filePath = req.files.avatar.path
                        let fileSplit = filePath.split("\\")
                        /* let fileSplit = filePath.split("/") */
                        let fileName = fileSplit[2]
                        let extSplit = fileName.split(".")
                        let fileExt = extSplit[1]

                        if (fileExt !== "png" && fileExt !== "jpg") {
                            res.status(400).send({message:"La extension de la imagen no es valida. (Extensiones permitidas: .png y .jpg)"})
                        } else {
                            user.avatar = fileName
                            User.findByIdAndUpdate({ _id: params.id }, user, (err, userResult) => {
                                if (err) {
                                    res.status(500).send({ message: "Error del servidor." })
                                } else {
                                    if (!userResult) {
                                        res.status(404).send({ message: "No se ha encontrado ningun usuario." })
                                    } else {
                                        res.status(200).send({ avatarName: fileName })
                                    }
                                }
                            })
                        }
                    }
                }
            }
        })
    }
    ≡
    ```
2. Commit Video 106:
    + $ git add .
    + $ git commit -m "2/2 - Endpoint para subir la imagen al servidor"
    + $ git push -u origin main

### 107. Endpoint para recuperar la URL del avatar
1. Modificar el controlador **server\controllers\user.js** para incorporar la función **getAvatar**:
    ```js
    ≡
    function getAvatar(req, res) {
        const avatarName = req.params.avatarName
        const filePath = "./uploads/avatar/" + avatarName
        fs.exists(filePath, exists => {
            if(!exists){
                res.status(404).send({message: "El avatar que buscas no existe."})
            } else {
                res.sendFile(path.resolve(filePath))
            }
        })
    }

    module.exports = {
        signUp,
        signIn,
        getUsers,
        getUsersActive,
        uploadAvatar,
        getAvatar
    }
    ```
2. Crear ruta **get-avatar** en **server\routers\user.js**:
    ```js
    ≡
    api.put("/upload-avatar/:id",[md_auth.ensureAuth, md_upload_avatar], UserController.uploadAvatar)
    api.get("/get-avatar/:avatarName", UserController.getAvatar)
    ≡
    ```
3. Prueba http:
    + Realizar petición http:
        + Método: get
        + URL: http://localhost:3977/api/v1/get-avatar/6JNvMBP9OerEj6j7Q0i4mhQe.png
    + Guardar endpoint como: **get-avatar**
4. Commit Video 107:
    + $ git add .
    + $ git commit -m "Endpoint para actualizar el usuario"
    + $ git push -u origin main

### 108. Endpoint para actualizar el usuario
1. Modificar el controlador **server\controllers\user.js** para incorporar la función **updateUser**:
    ```js
    ≡
    function updateUser(req, res) {
        const userData = req.body
        const params = req.params

        User.findByIdAndUpdate({ _id: params.id }, userData, (err, userUpdate) => {
            if(err){
                res.status(500).send({message: "Error del servidor."})
            } else {
                if(!userUpdate){
                    res.status(404).send({message: "No se ha encontrado ningún usuario."})
                } else {
                    res.status(200).send({message: "Usuario actualizado correctamente."})
                }
            }
            
        })
    }

    module.exports = {
        signUp,
        signIn,
        getUsers,
        getUsersActive,
        uploadAvatar,
        getAvatar,
        updateUser
    }
    ```
2. Crear ruta **update-user** en **server\routers\user.js**:
    ```js
    ≡
    api.get("/get-avatar/:avatarName", UserController.getAvatar)
    api.put("/update-user/:id",[md_auth.ensureAuth] , UserController.updateUser)
    ```
3. Prueba http:
    + Realizar petición http:
        + Método: put
        + URL: http://localhost:3977/api/v1/update-user/61a250adddce36f5e06d3e74
        + Headers:
            ```
            Content-Type: application/json
            Authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjYxYTNjZDRkNWY3YzY1Y2JhYzEzMjNmYyIsImVtYWlsIjoiYmF6by5wZWRyb0BnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJjcmVhdGVUb2tlbiI6MTYzODQ0NTg0OSwiZXhwIjoxNjM4NDU2NjQ5fQ.ROvS9zsl9OWL9BB7seMqYDKZhgqE3SOSKzLtd5_JHsc
            ```
        + Body:
            ```json
            {
                "name": "Pedro Actualizado",
                "lastname": "Bazó Actualizado"
            }
            ```
    + Guardar endpoint como: **update-user**
4. Commit Video 108:
    + $ git add .
    + $ git commit -m "Endpoint para actualizar el usuario"
    + $ git push -u origin main

### 109. Creando funciones Subir Avatar, Obtener Avatar y Actualizar Usuario en cliente
1. Ir al proyecto **client** y modificar **client\src\api\user.js** para incorporar las funciones **uploadAvatarApi**, **getAvatarApi** y **updateUserApi**:
    ```js
    ≡
    export function uploadAvatarApi(token, avatar, userId) {
        const url = `${basePath}/${apiVersion}/upload-avatar/${userId}`

        const formData = new FormData();
        formData.append("avatar", avatar, avatar.name)

        const params = {
            method: "PUT",
            body: formData,
            headers: {
                Authorization: token
            }
        }

        return fetch(url, params)
            .then(response => {
                return response.json()
            })
            .then(result => {
                return result
            })
            .catch(err => {
                return err.message
            })
    }

    export function getAvatarApi(avatarName) {
        const url = `${basePath}/${apiVersion}/get-avatar/${avatarName}`

        return fetch(url)
            .then(response => {
                return response.url
            })
            .catch(err => {
                return err.message
            })
    }

    export function updateUserApi(token, user, userId) {
        const url = `${basePath}/${apiVersion}/update-user/${userId}`

        const params = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: token
            },
            body: JSON.stringify(user)
        }

        return fetch(url, params)
            .then(response => {
                return response.json()
            })
            .then(result => {
                return result
            })
            .catch(err => {
                return err.message
            })
    }
    ```
2. Commit Video 109:
    + $ git add .
    + $ git commit -m "Creando funciones Subir Avatar, Obtener Avatar y Actualizar Usuario en cliente"
    + $ git push -u origin main

### 110. Mostrando el Avatar del usuario si existe en la base de datos
1. Modificar componente **client\src\components\Admin\Users\EditUserForm\EditUserForm.js**:
    ```js
    import { useState, useEffect, useCallback } from "react"
    import { Avatar, Form, Input, Select, Button, Row, Col, notification } from "antd"
    import { UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons'
    import 'antd/dist/antd.css'
    import { useDropzone } from "react-dropzone"
    import NoAvatar from "../../../../assets/img/png/no-avatar.png"
    import { getAvatarApi } from "../../../../api/user"
    import "./EditUserForm.scss";

    export default function EditUserForm(props) {
        const { user } = props
        const [avatar, setAvatar] = useState(null)
        const [userData, setUserData] = useState({})
        
        useEffect(() => {
            setUserData({
                name: user.name,
                lastname: user.lastname,
                email: user.email,
                role: user.role,
                avatar: user.avatar
            })
        }, [user])

        useEffect(() => {
            if (user.avatar) {
                getAvatarApi(user.avatar).then(response => {
                    setAvatar(response);
                })
            } else {
                setAvatar(null);
            }
        }, [user])

        useEffect(() => {
            if(avatar){
                setUserData({ ...userData, avatar: avatar.file })
            }
        }, [avatar])

        const updateUser = e => {
            /* e.preventDefault() */
            console.log(userData)
        }

        return (
            <div className="edit-user-form">
                <UploadAvatar avatar={avatar} setAvatar={setAvatar} /> 
                <EditForm
                    userData={userData}
                    setUserData={setUserData}
                    updateUser={updateUser}
                />
            </div>
        );
    }

    function UploadAvatar(props) {
        const { avatar, setAvatar } = props;
        const [avatarUrl, setAvatarUrl] = useState(null);

        useEffect(() => {
            if (avatar) {
                if (avatar.preview) {
                    setAvatarUrl(avatar.preview)
                } else {
                    setAvatarUrl(avatar)
                }
            } else {
                setAvatarUrl(null)
            }
        }, [avatar])
        
        const onDrop = useCallback(
            acceptedFiles => {
                const file = acceptedFiles[0];
                setAvatar({ file, preview: URL.createObjectURL(file) });
            },
            [setAvatar]
        )
        
        const { getRootProps, getInputProps, isDragActive } = useDropzone({
            accept: "image/jpeg, image/png",
            noKeyboard: true,
            onDrop
        });

        return (
            <div className="upload-avatar" {...getRootProps()}>
                <input {...getInputProps()} />
                {isDragActive ? (
                    <Avatar size={150} src={NoAvatar} />
                ) : (
                    <Avatar size={150} src={avatarUrl ? avatarUrl : NoAvatar} />
                )}
            </div>
        )
    }


    function EditForm(props) {
        const { userData, setUserData, updateUser } = props
        const { Option } = Select

        return (
            <Form className="form-edit" onFinish ={updateUser}>
                <Row gutter={24}>
                    <Col span={12}>
                        <Form.Item>
                            <Input
                                prefix={<UserOutlined />}
                                placeholder="Nombre"
                                value={userData.name}
                                onChange={e => setUserData({ ...userData, name: e.target.value })}
                            />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item>
                            <Input
                                prefix={<UserOutlined />}
                                placeholder="Apellidos"
                                value={userData.lastname}
                                onChange={e =>
                                    setUserData({ ...userData, lastname: e.target.value })
                                }
                            />
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={24}>
                    <Col span={12}>
                        <Form.Item>
                            <Input
                                prefix={<MailOutlined />}
                                placeholder="Correo electrónico"
                                value={userData.email}
                                onChange={e =>
                                    setUserData({ ...userData, email: e.target.value })
                                }
                            />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item>
                            <Select
                                placeholder="Selecciona una rol"
                                onChange={e => setUserData({ ...userData, role: e })}
                                value={userData.role}
                            >
                                <Option value="admin">Administrador</Option>
                                <Option value="editor">Editor</Option>
                                <Option value="reviewr">Revisor</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={24}>
                    <Col span={12}>
                        <Form.Item>
                            <Input
                                prefix={<LockOutlined />}
                                type="password"
                                placeholder="Contraseña"
                                onChange={e =>
                                    setUserData({ ...userData, password: e.target.value })
                                }
                            />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item>
                            <Input
                                prefix={<LockOutlined />}
                                type="password"
                                placeholder="Repetir contraseña"
                                onChange={e =>
                                    setUserData({ ...userData, repeatPassword: e.target.value })
                                }
                            />
                        </Form.Item>
                    </Col>
                </Row>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="btn-submit">
                        Actualizar Usuario
                    </Button>
                </Form.Item>
            </Form>
        )
    }
    ```
2. Modificar componente **client\src\components\Admin\Users\ListUsers\ListUsers.js**:
    ```js
    import { useState, useEffect } from "react"
    import { Switch, List, Avatar, Button } from "antd"
    import { EditOutlined, StopOutlined, DeleteOutlined, CheckOutlined } from '@ant-design/icons'
    import 'antd/dist/antd.css'
    import NoAvatar from "../../../../assets/img/png/no-avatar.png"
    import Modal from "../../../Modal"
    import EditUserForm from "../EditUserForm"
    import { getAvatarApi } from "../../../../api/user"
    import "./ListUsers.scss"

    export default function ListUsers(props){
        const { usersActive, usersInactive } = props;
        const [viewUsersActives, setViewUsersActives] = useState(true)
        const [isVisibleModal, setIsVisibleModal] = useState(false)
        const [modalTitle, setModalTitle] = useState("")
        const [modalContent, setModalContent] = useState(null)

        return (
            <div className="list-users">
                <div className="list-users__header">
                    <div className="list-users__switch">
                        <Switch
                            defaultChecked
                            onChange={() => setViewUsersActives(!viewUsersActives)}
                        />
                        <span>
                            {viewUsersActives ? "Usuarios Activos" : "Usuarios Inactivos"}
                        </span>
                    </div>
                    {viewUsersActives ? (
                            <UsersActive
                                usersActive={usersActive}
                                setIsVisibleModal={setIsVisibleModal}
                                setModalTitle={setModalTitle}
                                setModalContent={setModalContent}
                            />
                        ) : (
                            <UsersInactive
                                usersInactive={usersInactive}
                            />
                    )}
                    <Modal
                        title={modalTitle}
                        isVisible={isVisibleModal}
                        setIsVisible={setIsVisibleModal}
                    >
                        {modalContent}
                    </Modal>
                </div>
            </div>
        )
    }

    function UsersActive(props) {
        const { usersActive, setIsVisibleModal, setModalTitle, setModalContent } = props
        
        const editUser = user => {
            setIsVisibleModal(true);
            setModalTitle(`Editar ${user.name ? user.name : "..."} ${user.lastname ? user.lastname : "..."}`)
            setModalContent('Formulario para editar usuario')
            setModalContent(
                <EditUserForm
                    user={user}
                />
            )
        }

        return (
            <List
                className="users-active"
                itemLayout="horizontal"
                dataSource={usersActive}
                renderItem={user => <UserActive user={user} editUser={editUser} />}
            />
        )
    }

    function UserActive(props) {
        const { user, editUser } = props
        const [avatar, setAvatar] = useState(null)

        useEffect(() => {
            if (user.avatar) {
                getAvatarApi(user.avatar).then(response => {
                    setAvatar(response)
                })
            } else {
                setAvatar(null)
            }
        }, [user])

        return (
            <List.Item
                actions={[
                    <Button
                        type="primary"
                        onClick={() => editUser(user)}
                    >
                        <EditOutlined />
                    </Button>,
                    <Button
                        type="danger"
                        onClick={() => console.log('Desactivar usuario')}
                    >
                        <StopOutlined />
                    </Button>,
                    <Button
                        type="danger"
                        onClick={() => console.log('Eliminar usuario')}
                    >
                        <DeleteOutlined />
                    </Button>
                ]}
            >
                <List.Item.Meta
                    avatar={<Avatar src={avatar ? avatar : NoAvatar} />}
                    title={`
                        ${user.name ? user.name : '...'}
                        ${user.lastname ? user.lastname : '...'}
                    `}
                    description={user.email}
                />
            </List.Item>
        )
    }

    function UsersInactive(props) {
        const { usersInactive } = props

        return (
            <List
                className="users-active"
                itemLayout="horizontal"
                dataSource={usersInactive}
                renderItem={user => <UserInactive user={user} />}
            />
        )
    }

    function UserInactive(props) {
        const { user } = props
        const [avatar, setAvatar] = useState(null)

        useEffect(() => {
            if (user.avatar) {
                getAvatarApi(user.avatar).then(response => {
                    setAvatar(response)
                })
            } else {
                setAvatar(null)
            }
        }, [user])

        return (
            <List.Item
                actions={[
                    <Button
                        type="primary"
                        onClick={() => console.log('Activar usuario')}
                    >
                        <CheckOutlined />
                    </Button>,
                    <Button
                        type="danger"
                        onClick={() => console.log('Eliminar usuario')}
                    >
                        <DeleteOutlined />
                    </Button>
                ]}
            >
                <List.Item.Meta 
                    avatar={<Avatar src={avatar ? avatar : NoAvatar} />}
                    title={`
                        ${user.name ? user.name : '...'}
                        ${user.lastname ? user.lastname : '...'}
                    `}
                    description={user.email}
                />
            </List.Item>
        )
    }
    ```
3. Commit Video 110:
    + $ git add .
    + $ git commit -m "Mostrando el Avatar del usuario si existe en la base de datos"
    + $ git push -u origin main

### 111. 1/2 - Actualizando datos del usuario
1. Modificar componente **client\src\components\Admin\Users\EditUserForm\EditUserForm.js**:
    ```js
    import { useState, useEffect, useCallback } from "react"
    import { Avatar, Form, Input, Select, Button, Row, Col, notification } from "antd"
    import { UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons'
    import 'antd/dist/antd.css'
    import { useDropzone } from "react-dropzone"
    import NoAvatar from "../../../../assets/img/png/no-avatar.png"
    import { updateUserApi, uploadAvatarApi, getAvatarApi } from "../../../../api/user"
    import { getAccessTokenApi } from "../../../../api/auth"
    import "./EditUserForm.scss";

    export default function EditUserForm(props) {
        const { user } = props
        const [avatar, setAvatar] = useState(null)
        const [userData, setUserData] = useState({})
        
        useEffect(() => {
            setUserData({
                name: user.name,
                lastname: user.lastname,
                email: user.email,
                role: user.role,
                avatar: user.avatar
            })
        }, [user])

        useEffect(() => {
            if (user.avatar) {
                getAvatarApi(user.avatar).then(response => {
                    setAvatar(response);
                })
            } else {
                setAvatar(null);
            }
        }, [user])

        useEffect(() => {
            if(avatar){
                setUserData({ ...userData, avatar: avatar.file })
            }
        }, [avatar])

        const updateUser = e => {
            const token = getAccessTokenApi()
            let userUpdate = userData

            if (userUpdate.password || userUpdate.repeatPassword) {
                if (userUpdate.password !== userUpdate.repeatPassword) {
                    notification["error"]({
                        message: "Las contraseñas tienen que ser iguales."
                    })
                    return
                }
            }
    
            if (!userUpdate.name || !userUpdate.lastname || !userUpdate.email) {
                notification["error"]({ message: "El nombre, apellidos y email son obligatorios." })
                return
            }

            if (typeof userUpdate.avatar === "object") {
                uploadAvatarApi(token, userUpdate.avatar, user._id).then(response => {
                    userUpdate.avatar = response.avatarName
                    updateUserApi(token, userUpdate, user._id).then(result => {
                        notification["success"]({message: result.message})/
                    })
                })
            } else {
                updateUserApi(token, userUpdate, user._id).then(result => {
                    notification["success"]({message: result.message})
                })
            }
        }

        return (
            <div className="edit-user-form">
                <UploadAvatar avatar={avatar} setAvatar={setAvatar} /> 
                <EditForm
                    userData={userData}
                    setUserData={setUserData}
                    updateUser={updateUser}
                />
            </div>
        )
    }

    function UploadAvatar(props) {
        ≡
    }


    function EditForm(props) {
        ≡
    }
    ```
2. Commit Video 111:
    + $ git add .
    + $ git commit -m "1/2 - Actualizando datos del usuario"
    + $ git push -u origin main

### 112. 2/2 - Actualizando datos del usuario
1. Modificar componente **client\src\components\Admin\Users\ListUsers\ListUsers.js**:
    ```js
    import { useState, useEffect } from "react"
    import { Switch, List, Avatar, Button } from "antd"
    import { EditOutlined, StopOutlined, DeleteOutlined, CheckOutlined } from '@ant-design/icons'
    import 'antd/dist/antd.css'
    import NoAvatar from "../../../../assets/img/png/no-avatar.png"
    import Modal from "../../../Modal"
    import EditUserForm from "../EditUserForm"
    import { getAvatarApi } from "../../../../api/user"
    import "./ListUsers.scss"

    export default function ListUsers(props){
        const { usersActive, usersInactive, setReloadUsers } = props;
        const [viewUsersActives, setViewUsersActives] = useState(true)
        const [isVisibleModal, setIsVisibleModal] = useState(false)
        const [modalTitle, setModalTitle] = useState("")
        const [modalContent, setModalContent] = useState(null)

        return (
            <div className="list-users">
                <div className="list-users__header">
                    <div className="list-users__switch">
                        <Switch
                            defaultChecked
                            onChange={() => setViewUsersActives(!viewUsersActives)}
                        />
                        <span>
                            {viewUsersActives ? "Usuarios Activos" : "Usuarios Inactivos"}
                        </span>
                    </div>
                    {viewUsersActives ? (
                            <UsersActive
                                usersActive={usersActive}
                                setIsVisibleModal={setIsVisibleModal}
                                setModalTitle={setModalTitle}
                                setModalContent={setModalContent}
                                setReloadUsers={setReloadUsers}
                            />
                        ) : (
                            <UsersInactive
                                usersInactive={usersInactive}
                            />
                    )}
                    <Modal
                        title={modalTitle}
                        isVisible={isVisibleModal}
                        setIsVisible={setIsVisibleModal}
                    >
                        {modalContent}
                    </Modal>
                </div>
            </div>
        )
    }

    function UsersActive(props) {
        const { usersActive, setIsVisibleModal, setModalTitle, setModalContent, setReloadUsers } = props
        
        const editUser = user => {
            setIsVisibleModal(true);
            setModalTitle(`Editar ${user.name ? user.name : "..."} ${user.lastname ? user.lastname : "..."}`)
            setModalContent('Formulario para editar usuario')
            setModalContent(
                <EditUserForm
                    user={user}
                    setIsVisibleModal={setIsVisibleModal}
                    setReloadUsers={setReloadUsers}
                />
            )
        }

        return (
            <List
                className="users-active"
                itemLayout="horizontal"
                dataSource={usersActive}
                renderItem={user => <UserActive user={user} editUser={editUser} />}
            />
        )
    }

    function UserActive(props) {
        const { user, editUser } = props
        const [avatar, setAvatar] = useState(null)

        useEffect(() => {
            if (user.avatar) {
                getAvatarApi(user.avatar).then(response => {
                    setAvatar(response)
                })
            } else {
                setAvatar(null)
            }
        }, [user])

        return (
            <List.Item
                actions={[
                    <Button
                        type="primary"
                        onClick={() => editUser(user)}
                    >
                        <EditOutlined />
                    </Button>,
                    <Button
                        type="danger"
                        onClick={() => console.log('Desactivar usuario')}
                    >
                        <StopOutlined />
                    </Button>,
                    <Button
                        type="danger"
                        onClick={() => console.log('Eliminar usuario')}
                    >
                        <DeleteOutlined />
                    </Button>
                ]}
            >
                <List.Item.Meta
                    avatar={<Avatar src={avatar ? avatar : NoAvatar} />}
                    title={`
                        ${user.name ? user.name : '...'}
                        ${user.lastname ? user.lastname : '...'}
                    `}
                    description={user.email}
                />
            </List.Item>
        )
    }

    function UsersInactive(props) {
        const { usersInactive } = props

        return (
            <List
                className="users-active"
                itemLayout="horizontal"
                dataSource={usersInactive}
                renderItem={user => <UserInactive user={user} />}
            />
        )
    }

    function UserInactive(props) {
        const { user } = props
        const [avatar, setAvatar] = useState(null)

        useEffect(() => {
            if (user.avatar) {
                getAvatarApi(user.avatar).then(response => {
                    setAvatar(response)
                })
            } else {
                setAvatar(null)
            }
        }, [user])

        return (
            <List.Item
                actions={[
                    <Button
                        type="primary"
                        onClick={() => console.log('Activar usuario')}
                    >
                        <CheckOutlined />
                    </Button>,
                    <Button
                        type="danger"
                        onClick={() => console.log('Eliminar usuario')}
                    >
                        <DeleteOutlined />
                    </Button>
                ]}
            >
                <List.Item.Meta 
                    avatar={<Avatar src={avatar ? avatar : NoAvatar} />}
                    title={`
                        ${user.name ? user.name : '...'}
                        ${user.lastname ? user.lastname : '...'}
                    `}
                    description={user.email}
                />
            </List.Item>
        )
    }
    ```
2. Modificar componente **client\src\components\Admin\Users\EditUserForm\EditUserForm.js**:
    ```js
    import { useState, useEffect, useCallback } from "react"
    import { Avatar, Form, Input, Select, Button, Row, Col, notification } from "antd"
    import { UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons'
    import 'antd/dist/antd.css'
    import { useDropzone } from "react-dropzone"
    import NoAvatar from "../../../../assets/img/png/no-avatar.png"
    import { updateUserApi, uploadAvatarApi, getAvatarApi } from "../../../../api/user"
    import { getAccessTokenApi } from "../../../../api/auth"
    import "./EditUserForm.scss";

    export default function EditUserForm(props) {
        const { user , setIsVisibleModal, setReloadUsers } = props
        const [avatar, setAvatar] = useState(null)
        const [userData, setUserData] = useState({})
        
        useEffect(() => {
            setUserData({
                name: user.name,
                lastname: user.lastname,
                email: user.email,
                role: user.role,
                avatar: user.avatar
            })
        }, [user])

        useEffect(() => {
            if (user.avatar) {
                getAvatarApi(user.avatar).then(response => {
                    setAvatar(response)
                })
            } else {
                setAvatar(null)
            }
        }, [user])

        useEffect(() => {
            if(avatar){
                setUserData({ ...userData, avatar: avatar.file })
            }
        }, [avatar])

        const updateUser = e => {
            const token = getAccessTokenApi()
            let userUpdate = userData

            if (userUpdate.password || userUpdate.repeatPassword) {
                if (userUpdate.password !== userUpdate.repeatPassword) {
                    notification["error"]({
                        message: "Las contraseñas tienen que ser iguales."
                    })
                    return
                }
            }
    
            if (!userUpdate.name || !userUpdate.lastname || !userUpdate.email) {
                notification["error"]({ message: "El nombre, apellidos y email son obligatorios." })
                return
            }

            if (typeof userUpdate.avatar === "object") {
                uploadAvatarApi(token, userUpdate.avatar, user._id).then(response => {
                    userUpdate.avatar = response.avatarName
                    updateUserApi(token, userUpdate, user._id).then(result => {
                        notification["success"]({message: result.message})
                        setIsVisibleModal(false)
                        setReloadUsers(true)
                    })
                });
            } else {
                updateUserApi(token, userUpdate, user._id).then(result => {
                    notification["success"]({message: result.message})
                    setIsVisibleModal(false)
                    setReloadUsers(true)
                })
            }
        }

        return (
            <div className="edit-user-form">
                <UploadAvatar avatar={avatar} setAvatar={setAvatar} /> 
                <EditForm
                    userData={userData}
                    setUserData={setUserData}
                    updateUser={updateUser}
                />
            </div>
        );
    }

    function UploadAvatar(props) {
        const { avatar, setAvatar } = props;
        const [avatarUrl, setAvatarUrl] = useState(null);

        useEffect(() => {
            if (avatar) {
                if (avatar.preview) {
                    setAvatarUrl(avatar.preview)
                } else {
                    setAvatarUrl(avatar)
                }
            } else {
                setAvatarUrl(null)
            }
        }, [avatar])
        
        const onDrop = useCallback(
            acceptedFiles => {
                const file = acceptedFiles[0];
                setAvatar({ file, preview: URL.createObjectURL(file) });
            },
            [setAvatar]
        )
        
        const { getRootProps, getInputProps, isDragActive } = useDropzone({
            accept: "image/jpeg, image/png",
            noKeyboard: true,
            onDrop
        });

        return (
            <div className="upload-avatar" {...getRootProps()}>
                <input {...getInputProps()} />
                {isDragActive ? (
                    <Avatar size={150} src={NoAvatar} />
                ) : (
                    <Avatar size={150} src={avatarUrl ? avatarUrl : NoAvatar} />
                )}
            </div>
        )
    }

    function EditForm(props) {
        const { userData, setUserData, updateUser } = props
        const { Option } = Select

        return (
            <Form className="form-edit" onFinish ={updateUser}>
                <Row gutter={24}>
                    <Col span={12}>
                        <Form.Item>
                            <Input
                                prefix={<UserOutlined />}
                                placeholder="Nombre"
                                value={userData.name}
                                onChange={e => setUserData({ ...userData, name: e.target.value })}
                            />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item>
                            <Input
                                prefix={<UserOutlined />}
                                placeholder="Apellidos"
                                value={userData.lastname}
                                onChange={e =>
                                    setUserData({ ...userData, lastname: e.target.value })
                                }
                            />
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={24}>
                    <Col span={12}>
                        <Form.Item>
                            <Input
                                prefix={<MailOutlined />}
                                placeholder="Correo electrónico"
                                value={userData.email}
                                onChange={e =>
                                    setUserData({ ...userData, email: e.target.value })
                                }
                            />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item>
                            <Select
                                placeholder="Selecciona una rol"
                                onChange={e => setUserData({ ...userData, role: e })}
                                value={userData.role}
                            >
                                <Option value="admin">Administrador</Option>
                                <Option value="editor">Editor</Option>
                                <Option value="reviewr">Revisor</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={24}>
                    <Col span={12}>
                        <Form.Item>
                            <Input
                                prefix={<LockOutlined />}
                                type="password"
                                placeholder="Contraseña"
                                onChange={e =>
                                    setUserData({ ...userData, password: e.target.value })
                                }
                            />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item>
                            <Input
                                prefix={<LockOutlined />}
                                type="password"
                                placeholder="Repetir contraseña"
                                onChange={e =>
                                    setUserData({ ...userData, repeatPassword: e.target.value })
                                }
                            />
                        </Form.Item>
                    </Col>
                </Row>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="btn-submit">
                        Actualizar Usuario
                    </Button>
                </Form.Item>
            </Form>
        )
    }
    ```
3. Modificar vista **client\src\pages\Admin\Users\Users.js**:
    ```js
    import { useState, useEffect } from "react"
    import { getAccessTokenApi } from "../../../api/auth"
    import { getUsersActiveApi } from "../../../api/user"
    import ListUsers from "../../../components/Admin/Users/ListUsers"
    import "./Users.scss"

    export default function Users() {
        const [usersActive, setUsersActive] = useState([])
        const [usersInactive, setUsersInactive] = useState([])
        const [reloadUsers, setReloadUsers] = useState(false)
        const token = getAccessTokenApi()

        useEffect(() => {
            getUsersActiveApi(token, true).then(response => {
                setUsersActive(response.users)
            })
            getUsersActiveApi(token, false).then(response => {
                setUsersInactive(response.users)
            })
            setReloadUsers(false)
        }, [token, reloadUsers])

        return (
            <div className="users">
                <ListUsers usersActive={usersActive} usersInactive={usersInactive} setReloadUsers={setReloadUsers} />
            </div>
        )
    }
    ```
4. Modificar controlador **server\controllers\user.js**:
    ```js
    ≡
    function updateUser(req, res) {
        let userData = req.body
        userData.email = req.body.email.toLowerCase()
        const params = req.params
        ≡
    }
    ≡
    ```
5. Commit Video 112:
    + $ git add .
    + $ git commit -m "2/2 - Actualizando datos del usuario"
    + $ git push -u origin main

### 113. Actualizar contraseña del usuario
1. Modificar el componente **client\src\components\Admin\Users\EditUserForm\EditUserForm.js**:
    ```js
    ≡
    export default function EditUserForm(props) {
        ≡
        const updateUser = e => {
            const token = getAccessTokenApi()
            let userUpdate = userData

            if (userUpdate.password || userUpdate.repeatPassword) {
                if (userUpdate.password !== userUpdate.repeatPassword) {
                    notification["error"]({message: "Las contraseñas tienen que ser iguales."})
                    return
                } else {
                    delete userUpdate.repeatPassword
                }
            }
            ≡
        }
        ≡
    }
    ```
2. Modificar controlador **server\controllers\user.js**:
    ```js
    ≡
    async function updateUser(req, res) {
        let userData = req.body
        userData.email = req.body.email.toLowerCase()
        const params = req.params

        if(userData.password){
            await bcrypt.hash(userData.password, null, null, (err, hash) => {
                if(err){
                    res.status(500).send({message: "Error al encriptar la contraseña."})
                } else {
                    userData.password = hash
                }
            })
        }
        ≡
    }
    ≡
    ```
3. Commit Video 113:
    + $ git add .
    + $ git commit -m "Actualizar contraseña del usuario"
    + $ git push -u origin main

### 114. Creando Endpoint para activar y desactivar usuarios
1. Modificar el controlador **server\controllers\user.js** para incorporar la función **activateUser**:
    ```js
    ≡
    function activateUser(req, res) {
        const { id } = req.params
        const { active } = req.body

        User.findByIdAndUpdate(id, { active }, (err, userStored) => {
            if(err){
                res.status(500).send({message: "Error al activar / desactivar usuario"})
            } else {
                if (!userStored){
                    res.status(404).send({message: "No se ha encontrado el usuario."})
                } else {
                    if(active === true){
                        res.status(200).send({message: "Usuario activado correctamente."})
                    } else {
                        res.status(200).send({message: "Usuario desactivado correctamente."})
                    }
                }
            }
        })
    }

    module.exports = {
        signUp,
        signIn,
        getUsers,
        getUsersActive,
        uploadAvatar,
        getAvatar,
        updateUser,
        activateUser
    }
    ```
2. Crear ruta **activate-user** en **server\routers\user.js**:
    ```js
    ≡
    api.put("/activate-user/:id",[md_auth.ensureAuth] , UserController.activateUser)

    module.exports = api
    ```
3. Prueba http:
    + Realizar petición http:
        + Método: put
        + URL: http://localhost:3977/api/v1/activate-user/61a250adddce36f5e06d3e74
        + Headers:
            ```
            Content-Type: application/json
            Authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjYxYTNjZDRkNWY3YzY1Y2JhYzEzMjNmYyIsIm5hbWUiOiJDdWlkcm8iLCJsYXN0bmFtZSI6Ik1jQ2xvdXQiLCJlbWFpbCI6ImJhem8ucGVkcm9AZ21haWwuY29tIiwicm9sZSI6ImFkbWluIiwiY3JlYXRlVG9rZW4iOjE2Mzg1NjQ3MTksImV4cCI6MTYzODU3NTUxOX0.1ok8Hao-OcS5OUqrliejAkKsG_RpJCOkCruHnYQrw2w
            ```
        + Body:
            ```json
            {
                "active": false
            }
            ```
    + Guardar endpoint como: **activate-user**
4. Commit Video 114:
    + $ git add .
    + $ git commit -m "Creando Endpoint para activar y desactivar usuarios"
    + $ git push -u origin main

### 115. Añadiendo la funcionalidad de activar y desactivar usuario en el panel de admin
1. Modificar **client\src\api\user.js** para agregar la función **activateUserApi**:
    ```js
    ≡
    export function activateUserApi(token, userId, status) {
        const url = `${basePath}/${apiVersion}/activate-user/${userId}`

        const params = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: token
            },
            body: JSON.stringify({
                active: status
            })
        }

        return fetch(url, params)
            .then(response => {
                return response.json()
            })
            .then(result => {
                return result.message
            })
            .catch(err => {
                return err.message
            })
    }
    ```
2. Modificar el componente **client\src\components\Admin\Users\ListUsers\ListUsers.js**:
    ```js
    import { useState, useEffect } from "react"
    import { Switch, List, Avatar, Button, notification } from "antd"
    import { EditOutlined, StopOutlined, DeleteOutlined, CheckOutlined } from '@ant-design/icons'
    import 'antd/dist/antd.css'
    import NoAvatar from "../../../../assets/img/png/no-avatar.png"
    import Modal from "../../../Modal"
    import EditUserForm from "../EditUserForm"
    import { getAvatarApi, activateUserApi } from "../../../../api/user"
    import { getAccessTokenApi } from "../../../../api/auth"
    import "./ListUsers.scss"

    export default function ListUsers(props){
        const { usersActive, usersInactive, setReloadUsers } = props;
        const [viewUsersActives, setViewUsersActives] = useState(true)
        const [isVisibleModal, setIsVisibleModal] = useState(false)
        const [modalTitle, setModalTitle] = useState("")
        const [modalContent, setModalContent] = useState(null)

        return (
            <div className="list-users">
                <div className="list-users__header">
                    <div className="list-users__switch">
                        <Switch
                            defaultChecked
                            onChange={() => setViewUsersActives(!viewUsersActives)}
                        />
                        <span>
                            {viewUsersActives ? "Usuarios Activos" : "Usuarios Inactivos"}
                        </span>
                    </div>
                    {viewUsersActives ? (
                            <UsersActive
                                usersActive={usersActive}
                                setIsVisibleModal={setIsVisibleModal}
                                setModalTitle={setModalTitle}
                                setModalContent={setModalContent}
                                setReloadUsers={setReloadUsers}
                            />
                        ) : (
                            <UsersInactive usersInactive={usersInactive} setReloadUsers={setReloadUsers} />
                    )}
                    <Modal
                        title={modalTitle}
                        isVisible={isVisibleModal}
                        setIsVisible={setIsVisibleModal}
                    >
                        {modalContent}
                    </Modal>
                </div>
            </div>
        )
    }

    function UsersActive(props) {
        const { usersActive, setIsVisibleModal, setModalTitle, setModalContent, setReloadUsers } = props
        
        const editUser = user => {
            setIsVisibleModal(true);
            setModalTitle(`Editar ${user.name ? user.name : "..."} ${user.lastname ? user.lastname : "..."}`)
            setModalContent('Formulario para editar usuario')
            setModalContent(
                <EditUserForm
                    user={user}
                    setIsVisibleModal={setIsVisibleModal}
                    setReloadUsers={setReloadUsers}
                />
            )
        }

        return (
            <List
                className="users-active"
                itemLayout="horizontal"
                dataSource={usersActive}
                renderItem={user => <UserActive user={user} editUser={editUser} setReloadUsers={setReloadUsers} />}
            />
        )
    }

    function UserActive(props) {
        const { user, editUser, setReloadUsers } = props
        const [avatar, setAvatar] = useState(null)

        useEffect(() => {
            if (user.avatar) {
                getAvatarApi(user.avatar).then(response => {
                    setAvatar(response)
                })
            } else {
                setAvatar(null)
            }
        }, [user])

        const desactivateUser = () => {
            const accesToken = getAccessTokenApi()
            activateUserApi(accesToken, user._id, false)
                .then(response => {
                    notification["success"]({message: response})
                    setReloadUsers(true)
                })
                .catch(err => {
                    notification["error"]({message: err})
                })
        }

        return (
            <List.Item
                actions={[
                    <Button
                        type="primary"
                        onClick={() => editUser(user)}
                    >
                        <EditOutlined />
                    </Button>,
                    <Button type="danger" onClick={desactivateUser} >
                        <StopOutlined />
                    </Button>,
                    <Button
                        type="danger"
                        onClick={() => console.log('Eliminar usuario')}
                    >
                        <DeleteOutlined />
                    </Button>
                ]}
            >
                <List.Item.Meta
                    avatar={<Avatar src={avatar ? avatar : NoAvatar} />}
                    title={`
                        ${user.name ? user.name : '...'}
                        ${user.lastname ? user.lastname : '...'}
                    `}
                    description={user.email}
                />
            </List.Item>
        )
    }

    function UsersInactive(props) {
        const { usersInactive, setReloadUsers } = props

        return (
            <List
                className="users-active"
                itemLayout="horizontal"
                dataSource={usersInactive}
                renderItem={user => <UserInactive user={user} setReloadUsers={setReloadUsers} />}
            />
        )
    }

    function UserInactive(props) {
        const { user, setReloadUsers } = props
        const [avatar, setAvatar] = useState(null)

        useEffect(() => {
            if (user.avatar) {
                getAvatarApi(user.avatar).then(response => {
                    setAvatar(response)
                })
            } else {
                setAvatar(null)
            }
        }, [user])

        const activateUser = () => {
            const accesToken = getAccessTokenApi()
            activateUserApi(accesToken, user._id, true)
                .then(response => {
                    notification["success"]({message: response})
                    setReloadUsers(true)
                })
                .catch(err => {
                    notification["error"]({message: err})
                })
        }

        return (
            <List.Item
                actions={[
                    <Button type="primary" onClick={activateUser} >
                        <CheckOutlined />
                    </Button>,
                    <Button
                        type="danger"
                        onClick={() => console.log('Eliminar usuario')}
                    >
                        <DeleteOutlined />
                    </Button>
                ]}
            >
                <List.Item.Meta 
                    avatar={<Avatar src={avatar ? avatar : NoAvatar} />}
                    title={`
                        ${user.name ? user.name : '...'}
                        ${user.lastname ? user.lastname : '...'}
                    `}
                    description={user.email}
                />
            </List.Item>
        )
    }
    ```
3. Commit Video 115:
    + $ git add .
    + $ git commit -m "Añadiendo la funcionalidad de activar y desactivar usuario en el panel de admin"
    + $ git push -u origin main

### 116. Creando Endpoint para eliminar usuarios
1. Modificar controlador **server\controllers\user.js** para incorporar la función **deleteUser**:
    ```js
    function deleteUser(req, res) {
        const { id } = req.params

        User.findByIdAndRemove(id, (err, userDelete) => {
            if(err){
                res.status(500).send({message: "Error al eliminar usuario"})
            } else {
                if (!userDelete){
                    res.status(404).send({message: "No se ha encontrado el usuario."})
                } else {
                    res.status(200).send({message: "Usuario se eliminó correctamente."})
                }
            }
        })
    }

    module.exports = {
        signUp,
        signIn,
        getUsers,
        getUsersActive,
        uploadAvatar,
        getAvatar,
        updateUser,
        activateUser,
        deleteUser
    }
    ```
2. Crear la ruta **delete-user** en **server\routers\user.js**:
    ```js
    ≡
    api.delete("/delete-user/:id",[md_auth.ensureAuth] , UserController.deleteUser)

    module.exports = api
    ```
3. Prueba http:
    + Realizar petición http:
        + Método: delete
        + URL: http://localhost:3977/api/v1/delete-user/61abf44e5d3c4e21f778a71a
        + Headers:
            ```
            Content-Type: application/json
            Authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjYxYTNjZDRkNWY3YzY1Y2JhYzEzMjNmYyIsIm5hbWUiOiJDdWlkcm8iLCJsYXN0bmFtZSI6Ik1jQ2xvdXQiLCJlbWFpbCI6ImJhem8ucGVkcm9AZ21haWwuY29tIiwicm9sZSI6ImFkbWluIiwiY3JlYXRlVG9rZW4iOjE2Mzg2NDg5NzYsImV4cCI6MTYzODY1OTc3Nn0.a_48f6S1XDfvw2GTdZdaScx3gQPjwYB5QQhvuvgvwu4
            ```
    + Guardar endpoint como: **delete-user**
5. Commit Video 116:
    + $ git add .
    + $ git commit -m "Creando Endpoint para eliminar usuarios"
    + $ git push -u origin main

### 117. 1/2 - Añadiendo la funcionalidad para eliminar usuario en el panel de admin
1. Modificar **client\src\api\user.js** para incorporar la función **deleteUserApi**:
    ```js
    ≡
    export function deleteUserApi(token, userId) {
        const url = `${basePath}/${apiVersion}/delete-user/${userId}`

        const params = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: token
            }
        }

        return fetch(url, params)
            .then(response => {
                return response.json()
            })
            .then(result => {
                return result.message
            })
            .catch(err => {
                return err.message
            })
    }
    ```
2. Modificar componente **client\src\components\Admin\Users\ListUsers\ListUsers.js**:
    ```js
    import { useState, useEffect } from "react"
    import { Switch, List, Avatar, Button, Modal as ModalAntd, notification } from "antd"
    import { EditOutlined, StopOutlined, DeleteOutlined, CheckOutlined } from '@ant-design/icons'
    import 'antd/dist/antd.css'
    import NoAvatar from "../../../../assets/img/png/no-avatar.png"
    import Modal from "../../../Modal"
    ≡

    export default function ListUsers(props){
        ≡
    }

    function UsersActive(props) {
        ≡
    }

    function UserActive(props) {
        const { user, editUser, setReloadUsers } = props
        const [avatar, setAvatar] = useState(null)

        useEffect(() => {
            ≡
        }, [user])

        const desactivateUser = () => {
            ≡
        }

        const showDeleteConfirm = () => {
            const accesToken = getAccessTokenApi()

            ModalAntd.confirmconfirm({
                title: "Eliminando usuario",
                content: `¿Estas seguro que quieres eliminar a ${user.email}?`
            }) 
        }

        return (
            ≡
        )
    }
    ```
3. Commit Video 117:
    + $ git add .
    + $ git commit -m "1/2 - Añadiendo la funcionalidad para eliminar usuario en el panel de admin"
    + $ git push -u origin main

### 118. 2/2 - Añadiendo la funcionalidad para eliminar usuario en el panel de admin
1. Modificar componente **client\src\components\Admin\Users\ListUsers\ListUsers.js**:
    ```js
    ≡
    export default function ListUsers(props){
        ≡
    }

    function UsersActive(props) {
        ≡
    }

    function UserActive(props) {
        ≡
        const showDeleteConfirm = () => {
            const accesToken = getAccessTokenApi()

            ModalAntd.confirm({
                title: "Eliminando usuario",
                content: `¿Estas seguro que quieres eliminar a ${user.email}?`,
                okText: "Eliminar",
                okType: "danger",
                cancelText: "Cancelar",
                onOk() {
                    deleteUserApi(accesToken, user._id)
                        .then(response => {
                            notification["success"]({
                                message: response
                            })
                            setReloadUsers(true)
                        })
                        .catch(err => {
                            notification["error"]({
                                message: err
                            })
                        })
                }
            }) 
        }

        return (
            <List.Item
                actions={[
                    <Button type="primary" onClick={() => editUser(user)} >
                        <EditOutlined />
                    </Button>,
                    <Button type="danger" onClick={desactivateUser} >
                        <StopOutlined />
                    </Button>,
                    <Button type="danger" onClick={showDeleteConfirm} >
                        <DeleteOutlined />
                    </Button>
                ]}
            >
                <List.Item.Meta
                    avatar={<Avatar src={avatar ? avatar : NoAvatar} />}
                    title={`
                        ${user.name ? user.name : '...'}
                        ${user.lastname ? user.lastname : '...'}
                    `}
                    description={user.email}
                />
            </List.Item>
        )
    }

    function UsersInactive(props) {
        ≡
    }

    function UserInactive(props) {
        ≡
        const showDeleteConfirm = () => {
            const accesToken = getAccessTokenApi()

            ModalAntd.confirm({
                title: "Eliminando usuario",
                content: `¿Estas seguro que quieres eliminar a ${user.email}?`,
                okText: "Eliminar",
                okType: "danger",
                cancelText: "Cancelar",
                onOk() {
                    deleteUserApi(accesToken, user._id)
                        .then(response => {
                            notification["success"]({
                                message: response
                            })
                            setReloadUsers(true)
                        })
                        .catch(err => {
                            notification["error"]({
                                message: err
                            })
                        })
                }
            }) 
        }

        return (
            <List.Item
                actions={[
                    <Button type="primary" onClick={activateUser} >
                        <CheckOutlined />
                    </Button>,
                    <Button
                        type="danger"
                        onClick={showDeleteConfirm}
                    >
                        <DeleteOutlined />
                    </Button>
                ]}
            >
                <List.Item.Meta 
                    avatar={<Avatar src={avatar ? avatar : NoAvatar} />}
                    title={`
                        ${user.name ? user.name : '...'}
                        ${user.lastname ? user.lastname : '...'}
                    `}
                    description={user.email}
                />
            </List.Item>
        )
    }
    ```
2. Commit Video 118:
    + $ git add .
    + $ git commit -m "2/2 - Añadiendo la funcionalidad para eliminar usuario en el panel de admin"
    + $ git push -u origin main

### 119. Creando Endpoint para crear usuarios desde el panel de Administrador
1. Modificar el controlador **server\controllers\user.js** para incorporar la función **signUpAdmin**:
    ```js
    ≡
    function signUpAdmin(req, res) {
        const user = new User()
        const { name, lastname, email, role, password } = req.body
        user.name = name    
        user.lastname = lastname
        user.email = email.toLowerCase()
        user.role = role
        user.active = true

        if(!password){
            res.status(500).send({message: "La contraseña es obligatoria"})
        } else {
            bcrypt.hash(password, null, null, function(err, hash) {
                if(err){
                    res.status(500).send({message: "Error al encriptar la contraseña"})
                }else{
                    // res.status(200).send({message: hash})
                    user.password = hash
                    user.save((err, userStored) => {
                        if(err){
                            res.status(500).send({message: "Error del servidor al crear nuevo usuario. Error: " + err })
                        }else{
                            user.password = hash
                            user.save((err, userStored) => {
                                if(err){
                                    res.status(500).send({message: "El usuario ya existe."})
                                }else{
                                    if(!userStored){
                                        res.status(500).send({message: "Error al crear el nuevo usuario."})
                                    } else {
                                        res.status(200).send({user: userStored})
                                    }
                                }
                            })
                        }
                    })
                }
            })
        }
    }

    module.exports = {
        signUp,
        signIn,
        getUsers,
        getUsersActive,
        uploadAvatar,
        getAvatar,
        updateUser,
        activateUser,
        deleteUser,
        signUpAdmin
    }
    ```
2. Crear ruta **sign-up-admin** en **server\routers\user.js**:
    ```js
    ≡
    api.post("/sign-up-admin",[md_auth.ensureAuth] , UserController.signUpAdmin)

    module.exports = api
    ```
3. Prueba http:
    + Realizar petición http:
        + Método: post
        + URL: http://localhost:3977/api/v1/sign-up-admin
        + Headers:
            ```
            Content-Type: application/json
            Authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjYxYTNjZDRkNWY3YzY1Y2JhYzEzMjNmYyIsIm5hbWUiOiJDdWlkcm8iLCJsYXN0bmFtZSI6Ik1jQ2xvdXQiLCJlbWFpbCI6ImJhem8ucGVkcm9AZ21haWwuY29tIiwicm9sZSI6ImFkbWluIiwiY3JlYXRlVG9rZW4iOjE2Mzg3OTc1MDgsImV4cCI6MTYzODgwODMwOH0.TuwafOwa9sSZpDKNSsjkLhGSF6yDivqT1H-zxVHQrGw
            ```
        + Body:
            ```json
            {
                "name": "Pepito",    
                "lastname": "Pérez",
                "email": "Pepito.perez@gmail.com",
                "role": "admin",
                "password": "12345678"
            }
            ```
    + Guardar endpoint como: **sign-up-admin**
4. Commit Video 119:
    + $ git add .
    + $ git commit -m "Creando Endpoint para crear usuarios desde el panel de Administrador"
    + $ git push -u origin main

### 120. Añadiendo botón para crear nuevos usuarios
1. Modificar componente **client\src\components\Admin\Users\ListUsers\ListUsers.js**:
    ```js
    ≡
    export default function ListUsers(props){
        const { usersActive, usersInactive, setReloadUsers } = props;
        const [viewUsersActives, setViewUsersActives] = useState(true)
        const [isVisibleModal, setIsVisibleModal] = useState(false)
        const [modalTitle, setModalTitle] = useState("")
        const [modalContent, setModalContent] = useState(null)

        const addUserModal = () => {
            setIsVisibleModal(true)
            setModalTitle("Creando nuevo usuario")
            setModalContent(
                <div>
                    <h1>Formularo creación de usuario</h1>
                    <h2>ADMIN</h2>
                </div>
            )
        }

        return (
            <div className="list-users">
                <div className="list-users__header">
                    <div className="list-users__switch">
                        <Switch
                            defaultChecked
                            onChange={() => setViewUsersActives(!viewUsersActives)}
                        />
                        <span>
                            {viewUsersActives ? "Usuarios Activos" : "Usuarios Inactivos"}
                        </span>
                    </div>
                    <Button type="primary" onClick={addUserModal}>
                        Nuevo usuario
                    </Button>
                </div>
                {viewUsersActives ? (
                        <UsersActive
                            usersActive={usersActive}
                            setIsVisibleModal={setIsVisibleModal}
                            setModalTitle={setModalTitle}
                            setModalContent={setModalContent}
                            setReloadUsers={setReloadUsers}
                        />
                    ) : (
                        <UsersInactive usersInactive={usersInactive} setReloadUsers={setReloadUsers} />
                )}
                <Modal
                    title={modalTitle}
                    isVisible={isVisibleModal}
                    setIsVisible={setIsVisibleModal}
                >
                    {modalContent}
                </Modal>
            </div>
        )
    }
    ≡
    ```
2. Modificar archivo de estilo **client\src\components\Admin\Users\ListUsers\ListUsers.scss**:
    ```scss
    .list-users {
        &__header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 20px;
        }

        &__switch {
            display: flex;
            align-items: center;
            /* margin-bottom: 20px; */

            > button {
                margin-right: 20px;
            }
        }

        .users-active {
            background-color: #fff;
            padding: 10px 20px;

            .ant-list-item-meta {
                display: flex;
                align-items: center;
            }
        }
    }
    ```
3. Commit Video 120:
    + $ git add .
    + $ git commit -m "Añadiendo botón para crear nuevos usuarios"
    + $ git push -u origin main

### 121. 1/2 - Formulario para crear nuevos usuarios
1. Crear función **signUpAdminApi** en **client\src\api\user.js** para conectar con el backent:
    ```js
    ≡
    export function signUpAdminApi(token, data) {
        const url = `${basePath}/${apiVersion}/sign-up-admin`

        const params = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: token
            },
            body: JSON.stringify(data)
        }

        return fetch(url, params)
            .then(response => {
                return response.json()
            })
            .then(result => {
                return result.message
            })
            .catch(err => {
                return err.message
            })
    }
    ```
2. Crear archivo **client\src\components\Admin\Users\AddUserForm\index.js**:
    ```js
    export { default } from "./AddUserForm"
    ```
3. Crear componente **client\src\components\Admin\Users\AddUserForm\AddUserForm.js**:
    ```js
    import { useState } from "react"
    import { Form, Input, Select, Button, Row, Col, notification } from "antd"
    import 'antd/dist/antd.css'
    import { signUpAdminApi } from "../../../../api/user"
    import { getAccessTokenApi } from "../../../../api/auth"
    import "./AddUserForm.scss"

    export default function EditUserForm(props) {
        
        const { setIsVisibleModal, setReloadUsers } = props
        const [userData, setUserData] = useState({})

        const addUser = event => {
            event.preventDefault()
            console.log('Creando usuario....')
        }

        return (
            <div className="add-user-form">
                <AddForm userData={userData} setUserData={setUserData} addUser={addUser} />
            </div>
        );
    }

    function AddForm(props) {
        const { userData, setUserData, addUser } = props
        const { Option } = Select

        return (
            <Form className="form-add" onFinish={addUser}>
                <Row gutter={24}>
                </Row>
            </Form>
        )
    }
    ```
4. Modificar componente client\src\components\Admin\Users\ListUsers\ListUsers.js:
    ```js
    import { useState, useEffect } from "react"
    import { Switch, List, Avatar, Button, Modal as ModalAntd, Space, notification } from "antd"
    import { EditOutlined, StopOutlined, DeleteOutlined, CheckOutlined } from '@ant-design/icons'
    import 'antd/dist/antd.css'
    import NoAvatar from "../../../../assets/img/png/no-avatar.png"
    import Modal from "../../../Modal"
    import EditUserForm from "../EditUserForm"
    import AddUserForm from "../AddUserForm"
    import { getAvatarApi, activateUserApi, deleteUserApi } from "../../../../api/user"
    import { getAccessTokenApi } from "../../../../api/auth"
    import "./ListUsers.scss"

    const { confirm } = ModalAntd

    export default function ListUsers(props){
        const { usersActive, usersInactive, setReloadUsers } = props;
        const [viewUsersActives, setViewUsersActives] = useState(true)
        const [isVisibleModal, setIsVisibleModal] = useState(false)
        const [modalTitle, setModalTitle] = useState("")
        const [modalContent, setModalContent] = useState(null)

        const addUserModal = () => {
            setIsVisibleModal(true)
            setModalTitle("Creando nuevo usuario")
            setModalContent(
                <AddUserForm setIsVisibleModal={setIsVisibleModal} setReloadUsers={setReloadUsers} />
            )
        }

        return (
            <div className="list-users">
                <div className="list-users__header">
                    <div className="list-users__switch">
                        <Switch
                            defaultChecked
                            onChange={() => setViewUsersActives(!viewUsersActives)}
                        />
                        <span>
                            {viewUsersActives ? "Usuarios Activos" : "Usuarios Inactivos"}
                        </span>
                    </div>
                    <Button type="primary" onClick={addUserModal}>
                        Nuevo usuario
                    </Button>
                </div>
                {viewUsersActives ? (
                        <UsersActive
                            usersActive={usersActive}
                            setIsVisibleModal={setIsVisibleModal}
                            setModalTitle={setModalTitle}
                            setModalContent={setModalContent}
                            setReloadUsers={setReloadUsers}
                        />
                    ) : (
                        <UsersInactive usersInactive={usersInactive} setReloadUsers={setReloadUsers} />
                )}
                <Modal
                    title={modalTitle}
                    isVisible={isVisibleModal}
                    setIsVisible={setIsVisibleModal}
                >
                    {modalContent}
                </Modal>
            </div>
        )
    }

    function UsersActive(props) {
        const { usersActive, setIsVisibleModal, setModalTitle, setModalContent, setReloadUsers } = props
        
        const editUser = user => {
            setIsVisibleModal(true);
            setModalTitle(`Editar ${user.name ? user.name : "..."} ${user.lastname ? user.lastname : "..."}`)
            setModalContent('Formulario para editar usuario')
            setModalContent(
                <EditUserForm
                    user={user}
                    setIsVisibleModal={setIsVisibleModal}
                    setReloadUsers={setReloadUsers}
                />
            )
        }

        return (
            <List
                className="users-active"
                itemLayout="horizontal"
                dataSource={usersActive}
                renderItem={user => <UserActive user={user} editUser={editUser} setReloadUsers={setReloadUsers} />}
            />
        )
    }

    function UserActive(props) {
        const { user, editUser, setReloadUsers } = props
        const [avatar, setAvatar] = useState(null)

        useEffect(() => {
            if (user.avatar) {
                getAvatarApi(user.avatar).then(response => {
                    setAvatar(response)
                })
            } else {
                setAvatar(null)
            }
        }, [user])

        const desactivateUser = () => {
            const accesToken = getAccessTokenApi()
            activateUserApi(accesToken, user._id, false)
                .then(response => {
                    notification["success"]({message: response})
                    setReloadUsers(true)
                })
                .catch(err => {
                    notification["error"]({message: err})
                })
        }

        const showDeleteConfirm = () => {
            const accesToken = getAccessTokenApi()

            confirm({
                title: "Eliminando usuario",
                content: `¿Estas seguro que quieres eliminar a ${user.email}?`,
                okText: "Eliminar",
                okType: "danger",
                cancelText: "Cancelar",
                onOk() {
                    deleteUserApi(accesToken, user._id)
                        .then(response => {
                            notification["success"]({
                                message: response
                            })
                            setReloadUsers(true)
                        })
                        .catch(err => {
                            notification["error"]({
                                message: err
                            })
                        })
                }
            }) 
        }

        return (
            <List.Item
                actions={[
                    <Button type="primary" onClick={() => editUser(user)} >
                        <EditOutlined />
                    </Button>,
                    <Button type="danger" onClick={desactivateUser} >
                        <StopOutlined />
                    </Button>,
                    <Button type="danger" onClick={showDeleteConfirm} >
                        <DeleteOutlined />
                    </Button>
                ]}
            >
                <List.Item.Meta
                    avatar={<Avatar src={avatar ? avatar : NoAvatar} />}
                    title={`
                        ${user.name ? user.name : '...'}
                        ${user.lastname ? user.lastname : '...'}
                    `}
                    description={user.email}
                />
            </List.Item>
        )
    }

    function UsersInactive(props) {
        const { usersInactive, setReloadUsers } = props

        return (
            <List
                className="users-active"
                itemLayout="horizontal"
                dataSource={usersInactive}
                renderItem={user => <UserInactive user={user} setReloadUsers={setReloadUsers} />}
            />
        )
    }

    function UserInactive(props) {
        const { user, setReloadUsers } = props
        const [avatar, setAvatar] = useState(null)

        useEffect(() => {
            if (user.avatar) {
                getAvatarApi(user.avatar).then(response => {
                    setAvatar(response)
                })
            } else {
                setAvatar(null)
            }
        }, [user])

        const activateUser = () => {
            const accesToken = getAccessTokenApi()
            activateUserApi(accesToken, user._id, true)
                .then(response => {
                    notification["success"]({message: response})
                    setReloadUsers(true)
                })
                .catch(err => {
                    notification["error"]({message: err})
                })
        }

        const showDeleteConfirm = () => {
            const accesToken = getAccessTokenApi()

            confirm({
                title: "Eliminando usuario",
                content: `¿Estas seguro que quieres eliminar a ${user.email}?`,
                okText: "Eliminar",
                okType: "danger",
                cancelText: "Cancelar",
                onOk() {
                    deleteUserApi(accesToken, user._id)
                        .then(response => {
                            notification["success"]({
                                message: response
                            })
                            setReloadUsers(true)
                        })
                        .catch(err => {
                            notification["error"]({
                                message: err
                            })
                        })
                }
            }) 
        }

        return (
            <List.Item
                actions={[
                    <Button type="primary" onClick={activateUser} >
                        <CheckOutlined />
                    </Button>,
                    <Button
                        type="danger"
                        onClick={showDeleteConfirm}
                    >
                        <DeleteOutlined />
                    </Button>
                ]}
            >
                <List.Item.Meta 
                    avatar={<Avatar src={avatar ? avatar : NoAvatar} />}
                    title={`
                        ${user.name ? user.name : '...'}
                        ${user.lastname ? user.lastname : '...'}
                    `}
                    description={user.email}
                />
            </List.Item>
        )
    }
    ```
5. Commit Video 121:
    + $ git add .
    + $ git commit -m "1/2 - Formulario para crear nuevos usuarios"
    + $ git push -u origin main

### 122. 2/2 - Formulario para crear nuevos usuarios
1. Modificar componente **client\src\components\Admin\Users\AddUserForm\AddUserForm.js**:
    ```js
    import { useState } from "react"
    import { Form, Input, Select, Button, Row, Col, notification } from "antd"
    import { UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons'
    import 'antd/dist/antd.css'
    import { signUpAdminApi } from "../../../../api/user"
    import { getAccessTokenApi } from "../../../../api/auth"
    import "./AddUserForm.scss"

    export default function EditUserForm(props) {
        ≡
    }

    function AddForm(props) {
        const { userData, setUserData, addUser } = props
        const { Option } = Select

        return (
            <Form className="form-add" onFinish={addUser}>
                <Row gutter={24}>
                    <Col span={12}>
                        <Form.Item>
                            <Input
                                prefix={<UserOutlined />}
                                placeholder="Nombre"
                                value={userData.name}
                                onChange={e => setUserData({ ...userData, name: e.target.value })}
                            />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item>
                            <Input
                                prefix={<UserOutlined />}
                                placeholder="Apellidos"
                                value={userData.lastname}
                                onChange={e =>
                                    setUserData({ ...userData, lastname: e.target.value })
                                }
                            />
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={24}>
                    <Col span={12}>
                        <Form.Item>
                            <Input
                                prefix={<MailOutlined />}
                                placeholder="Correlo electrónico"
                                value={userData.email}
                                onChange={e =>
                                    setUserData({ ...userData, email: e.target.value })
                                }
                            />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item>
                            <Select
                                placeholder="Selecióna un rol"
                                onChange={e => setUserData({ ...userData, role: e })}
                                value={userData.role}
                            >
                                <Option value="admin">Administrador</Option>
                                <Option value="editor">Editor</Option>
                                <Option value="reviwer">Revisor</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={24}>
                    <Col span={12}>
                        <Form.Item>
                            <Input
                                prefix={<LockOutlined />}
                                type="password"
                                placeholder="Contraseña"
                                value={userData.password}
                                onChange={e =>
                                    setUserData({ ...userData, password: e.target.value })
                                }
                            />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item>
                            <Input
                                prefix={<LockOutlined />}
                                type="password"
                                placeholder="Repetir contraseña"
                                value={userData.repeatPassword}
                                onChange={e =>
                                    setUserData({ ...userData, repeatPassword: e.target.value })
                                }
                            />
                        </Form.Item>
                    </Col>
                </Row>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="btn-submit">
                        Crear Usuario
                    </Button>
                </Form.Item>
            </Form>
        )
    }
    ```
2. Crear archivo de estilo **client\src\components\Admin\Users\AddUserForm\AddUserForm.scss**:
    ```scss
    .add-user-form {
        .form-add {
            text-align: center;

            .ant-form-item {
                margin-top: 5px;
                margin-bottom: 5px;

                i {
                    color: rgba(0, 0, 0, 0.25);
                }
            }

            .btn-submit {
                width: 100%;
            }
        }
    }
    ```
3. Commit Video 122:
    + $ git add .
    + $ git commit -m "2/2 - Formulario para crear nuevos usuarios"
    + $ git push -u origin main

### 123. Creando la función para crear nuevos usuarios
1. Modificar componente **client\src\components\Admin\Users\AddUserForm\AddUserForm.js**:
    ```js
    import { useState } from "react"
    import { Form, Input, Select, Button, Row, Col, notification } from "antd"
    import { UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons'
    import 'antd/dist/antd.css'
    import { signUpAdminApi } from "../../../../api/user"
    import { getAccessTokenApi } from "../../../../api/auth"
    import "./AddUserForm.scss"

    export default function EditUserForm(props) {
        
        const { setIsVisibleModal, setReloadUsers } = props
        const [userData, setUserData] = useState({})

        const addUser = event => {
            if (
                !userData.name ||
                !userData.lastname ||
                !userData.role ||
                !userData.email ||
                !userData.password ||
                !userData.repeatPassword
            ) {
                notification["error"]({ message: "Todos los campos son obligatorios." })
            } else if (userData.password !== userData.repeatPassword) {
                notification["error"]({ message: "Las contraseñas tienen que ser iguale." })
            } else {
                const accesToken = getAccessTokenApi()

                signUpAdminApi(accesToken, userData)
                    .then(response => {
                        notification["success"]({ message: response })
                        setIsVisibleModal(false)
                        setReloadUsers(true)
                        setUserData({})
                    })
                    .catch(err => { notification["error"]({ message: err }) })
            }
        }

        return (
            <div className="add-user-form">
                <AddForm userData={userData} setUserData={setUserData} addUser={addUser} />
            </div>
        )
    }

    function AddForm(props) {
        const { userData, setUserData, addUser } = props
        const { Option } = Select

        return (
            <Form className="form-add" onFinish={addUser}>
                <Row gutter={24}>
                    <Col span={12}>
                        <Form.Item>
                            <Input
                                prefix={<UserOutlined />}
                                placeholder="Nombre"
                                value={userData.name}
                                onChange={e => setUserData({ ...userData, name: e.target.value })}
                            />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item>
                            <Input
                                prefix={<UserOutlined />}
                                placeholder="Apellidos"
                                value={userData.lastname}
                                onChange={e =>
                                    setUserData({ ...userData, lastname: e.target.value })
                                }
                            />
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={24}>
                    <Col span={12}>
                        <Form.Item>
                            <Input
                                prefix={<MailOutlined />}
                                placeholder="Correlo electrónico"
                                value={userData.email}
                                onChange={e =>
                                    setUserData({ ...userData, email: e.target.value })
                                }
                            />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item>
                            <Select
                                placeholder="Selecióna un rol"
                                onChange={e => setUserData({ ...userData, role: e })}
                                value={userData.role}
                            >
                                <Option value="admin">Administrador</Option>
                                <Option value="editor">Editor</Option>
                                <Option value="reviwer">Revisor</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={24}>
                    <Col span={12}>
                        <Form.Item>
                            <Input
                                prefix={<LockOutlined />}
                                type="password"
                                placeholder="Contraseña"
                                value={userData.password}
                                onChange={e =>
                                    setUserData({ ...userData, password: e.target.value })
                                }
                            />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item>
                            <Input
                                prefix={<LockOutlined />}
                                type="password"
                                placeholder="Repetir contraseña"
                                value={userData.repeatPassword}
                                onChange={e =>
                                    setUserData({ ...userData, repeatPassword: e.target.value })
                                }
                            />
                        </Form.Item>
                    </Col>
                </Row>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="btn-submit">
                        Crear Usuario
                    </Button>
                </Form.Item>
            </Form>
        )
    }
    ```
2. Commit Video 123:
    + $ git add .
    + $ git commit -m "Creando la función para crear nuevos usuarios"
    + $ git push -u origin main

## Sección 10: Menú Web

### 124. Creando sección Menú Web en el panel de Administrador
1. Crear archivo **client\src\pages\Admin\MenuWeb\index.js**:
    ```js
    export { default } from "./MenuWeb"
    ```
2. Crear vista **client\src\pages\Admin\MenuWeb\MenuWeb.js**:
    ```js
    import { useState, useEffect } from "react"

    export default function MenuWeb() {

        return (
            <div className="menu-web">
                <h1>Menú web...</h1>
            </div>
        );
    }
    ```
3. Agregar la ruta de menú en **client\src\config\routes.js**:
    ```js
    // Layout
    ≡

    // Admin Pages
    ≡
    import AdminMenuWeb from "../pages/Admin/MenuWeb"

    // Pages
    ≡

    // Otros
    ≡

    // Sistema de rutas
    const routes = [
        {
            path: "/admin",
            component: LayoutAdmin,
            exact: false,
            routes: [
                ≡
                {
                    path: "/admin/menu",
                    component: AdminMenuWeb, 
                    exact: true
                },
                {
                    component: Error404
                }
            ]
        },
        {
            ≡
        }
    ]

    export default routes
    ```
4. Modificar componente **client\src\components\Admin\MenuSider\MenuSider.js** para agregar el menú:
    ```js
    import { Link, withRouter } from "react-router-dom"
    import { Layout, Menu } from "antd"
    import { HomeOutlined, UserOutlined, MenuOutlined } from '@ant-design/icons'
    import 'antd/dist/antd.css'
    import "./MenuSider.scss"

    function MenuSider(props) {
        ≡
        return (
            <Sider className="admin-sider" collapsed={menuCollapsed} >
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={[location.pathname]}
                >
                    ≡
                    <Menu.Item key="/admin/menu">
                        <Link to="/admin/menu">
                            <MenuOutlined />
                            <span className="nav-text">Menú</span>
                        </Link>
                    </Menu.Item>
                </Menu>
            </Sider>
        )
    }
    ≡
    ```
5. Commit Video 124:
    + $ git add .
    + $ git commit -m "Creando sección Menú Web en el panel de Administrador"
    + $ git push -u origin main

### 125. Creando estructura del menú en el server
1. Crear modelo **server\models\menu.js**:
    ```js
    const mongoose = require("mongoose")
    const Schema = mongoose.Schema

    const MenuSchema = Schema({
        title: String,
        url: String,
        order: Number,
        active: Boolean
    })

    module.exports = mongoose.model("Menu", MenuSchema)
    ```
2. Crear controlador **server\controllers\menu.js**:
    ```js
    const Menu = require("../models/menu")

    function addMenu(req, res) {
        console.log("Add Menu...")
    }

    module.exports = {
        addMenu
    }
    ```
3. Crear archivo de rutas **server\routers\menu.js**:
    ```js
    const express = require("express")
    const MenuController = require("../controllers/menu")
    const md_auth = require("../middlewares/authenticated")

    const api = express.Router()

    api.post("/add-menu", [md_auth.ensureAuth], MenuController.addMenu)

    module.exports = api
    ```
4. Modificar **server\app.js**:
    ```js
    ≡

    // Load routings
    ≡
    const menuRoutes = require('./routers/menu')

    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())

    // Configure Header HTTP
    ≡

    // Basic Routers
    ≡
    app.use(`/api/${API_VERSION}`, menuRoutes)

    module.exports = app
    ```
5. Prueba http:
    + Realizar petición http:
        + Método: post
        + URL: http://localhost:3977/api/v1/add-menu
        + Headers:
            ```
            Content-Type: application/json
            Authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjYxYTNjZDRkNWY3YzY1Y2JhYzEzMjNmYyIsIm5hbWUiOiJDdWlkcm8iLCJsYXN0bmFtZSI6Ik1jQ2xvdXQiLCJlbWFpbCI6ImJhem8ucGVkcm9AZ21haWwuY29tIiwicm9sZSI6ImFkbWluIiwiY3JlYXRlVG9rZW4iOjE2Mzg5MTQ2OTAsImV4cCI6MTYzODkyNTQ5MH0.TYoRMP5tizkZ4fG1W14jhdzwf8TPXuYWG6HgLEANoTk
            ```
    + Guardar endpoint como: **add-menu**
6. Commit Video 125:
    + $ git add .
    + $ git commit -m "Creando estructura del menú en el server"
    + $ git push -u origin main

### 126. Endpoint para crear nuevos menús
1. Programar la función addMenu del controlador **server\controllers\menu.js**:
    ```js
    ```
2. Prueba http:
    + Realizar petición http:
        + Método: post
        + URL: http://localhost:3977/api/v1/add-menu
        + Headers:
            ```
            Content-Type: application/json
            Authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjYxYTNjZDRkNWY3YzY1Y2JhYzEzMjNmYyIsIm5hbWUiOiJDdWlkcm8iLCJsYXN0bmFtZSI6Ik1jQ2xvdXQiLCJlbWFpbCI6ImJhem8ucGVkcm9AZ21haWwuY29tIiwicm9sZSI6ImFkbWluIiwiY3JlYXRlVG9rZW4iOjE2Mzg5NjY5ODMsImV4cCI6MTYzODk3Nzc4M30.6JUsp-GpmkWCkbF0fCG6qmbkHpq1ST5vLjaCkQVUIBY
            ```
        + Body:
            ```json
            {
                "title": "Blog",
                "url": "https://solucionespp.com/blog",
                "order": 0,
                "active": true
            }
            ```
3. Commit Video 126:
    + $ git add .
    + $ git commit -m "Endpoint para crear nuevos menús"
    + $ git push -u origin main

### 127. Endpoint para obtener todos los menús
1. Modificar el controlador **server\controllers\menu.js** para incorporar la función **getMenus**:
    ```js
    ≡
    function getMenus(req, res) {
        Menu.find()
            .sort({ order: 'asc' })
            .exec((err, menusStored) => {
                if(err){
                    res.status(500).send({message: "Error del servidor."})
                } else {
                    if(!menusStored) {
                        res.status(404).send({message: "No se ha encontrado ningún registro en la base de datos."})
                    } else {
                        res.status(200).send({ menu: menusStored})
                    }
                }
            })
    }

    module.exports = {
        addMenu,
        getMenus
    }
    ```
2. Crear endpoint **get-menus** en el archivo de rutas **server\routers\menu.js**:
    ```js
    api.get("/get-menus", MenuController.getMenus)
    ```
3. Prueba http:
    + Realizar petición http:
        + Método: get
        + URL: http://localhost:3977/api/v1/get-menus
    + Guardar endpoint como: **get-menus**
4. Commit Video 127:
    + $ git add .
    + $ git commit -m "Endpoint para obtener todos los menús"
    + $ git push -u origin main

### 128. Obteniendo todos los menús en el client y listándolos
1. Crear archivo **client\src\api\menu.js**:
    ```js
    import { basePath, apiVersion } from "./config"

    export function getMenuApi() {
        const url = `${basePath}/${apiVersion}/get-menus`

        return fetch(url)
        .then(response => {
            return response.json()
        })
        .then(result => {
            return result;
        })
        .catch(err => {
            return err.message
        })
    }
    ```
2. Modificar vista **client\src\pages\Admin\MenuWeb\MenuWeb.js**:
    ```js
    import { useState, useEffect } from "react"
    import { getMenuApi } from "../../../api/menu"
    import MenuWebList from "../../../components/Admin/MenuWeb/MenuWebList"

    export default function MenuWeb() {
        const [menu, setMenu] = useState([])
        const [reloadMenuWeb, setReloadMenuWeb] = useState(false)

        useEffect(() => {
            getMenuApi().then(response => {
                setMenu(response.menu)
            })
            setReloadMenuWeb(false)
        }, [reloadMenuWeb])

        return (
            <div className="menu-web">
                <MenuWebList menu={menu} setReloadMenuWeb={setReloadMenuWeb} />
            </div>
        )
    }
    ```
3. Crear **client\src\components\Admin\MenuWeb\MenuWebList\index.js**:
    ```js
    export { default } from "./MenuWebList"
    ```
4. Crear componente **client\src\components\Admin\MenuWeb\MenuWebList\MenuWebList.js**:
    ```js
    import { useState, useEffect} from 'react'

    export default function MenuWebList(props) {
        const { menu, setReloadMenuWeb } = props

        return (
            <div>
                <h1>Lista Menú web...</h1>
            </div>
        )
    }
    ```
5. Crear archivo de estilo **client\src\components\Admin\MenuWeb\MenuWebList\MenuWebList.scss**:
    ```scss
    .menu-web-list {
    }
    ```
6. Commit Video 128:
    + $ git add .
    + $ git commit -m "Obteniendo todos los menús en el client y listándolos"
    + $ git push -u origin main

### 129. 1/2 - Listando Menús con acción de Drag and drop
+ https://classic.yarnpkg.com/en/package/react-drag-sortable
1. Instalar **react-drag-sortable**:
    + $ yarn add react-drag-sortable
    + **Nota**: para importar luego el componente:
        ```js
        import DragSortableList from 'react-drag-sortable'
        ```
2. Modificar componente **client\src\components\Admin\MenuWeb\MenuWebList\MenuWebList.js**:
    ```js
    import { useState, useEffect} from 'react'
    import { Switch, List, Button, Modal as ModalAntd, notification } from 'antd'
    import Modal from '../../../Modal'
    import DragSortableList from 'react-drag-sortable'
    import './MenuWebList.scss'

    export default function MenuWebList(props) {
        const { menu, setReloadMenuWeb } = props
        const [isVisibleModal, setIsVisibleModal] = useState(false)
        const [modalTitle, setModalTitle] = useState("")

        useEffect(() => {
            const listItemsArray = []
            menu.forEach(item => {
                listItemsArray.push({
                    content: (<div><p>{item.title}</p></div>)
                })
            })
        }, [menu])

        const onSort = (sortedList, dropEvent) => {
            console.log(sortedList)
        }

        return (
            <div className="menu-web-list">
                <div className="menu-web-list__header">
                    <Button typ="primary">
                        Nuevo menú
                    </Button>
                </div>
                <div className="menu-web-list__items">
                    <DragSortableList />
                </div>
            </div>
        )
    }
    ```
3. Commit Video 129:
    + $ git add .
    + $ git commit -m "1/2 - Listando Menús con acción de Drag and drop"
    + $ git push -u origin main

### 130. 2/2 - Listando Menús con acción de Drag and drop
1. Modificar componente **client\src\components\Admin\MenuWeb\MenuWebList\MenuWebList.js**:
    ```js
    import { useState, useEffect} from 'react'
    import { Switch, List, Button, Modal as ModalAntd, notification } from 'antd'
    import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
    import 'antd/dist/antd.css'
    import Modal from '../../../Modal'
    import DragSortableList from 'react-drag-sortable'
    import './MenuWebList.scss'

    export default function MenuWebList(props) {
        const { menu, setReloadMenuWeb } = props
        const [listItems, setListItems] = useState([])
        const [isVisibleModal, setIsVisibleModal] = useState(false)
        const [modalTitle, setModalTitle] = useState("")
        const [modalContent, setModalContent] = useState(null)

        useEffect(() => {
            const listItemsArray = []
            menu.forEach(item => {
                listItemsArray.push({
                    content: (
                        <MenuItem item={item}/>
                    )
                })
            })
            setListItems(listItemsArray)
        }, [menu])

        const onSort = (sortedList, dropEvent) => {
            console.log(sortedList)
        }

        return (
            <div className="menu-web-list">
                <div className="menu-web-list__header">
                    <Button type="primary">
                        Nuevo menú
                    </Button>
                </div>
                <div className="menu-web-list__items">
                    <DragSortableList items={listItems} onSort={onSort} type="vertical" />
                </div>
            </div>
        )
    }

    function MenuItem(props) {
        const { item } = props
        return (
            <List.Item
                actions={[
                    <Switch defaultChecked={item.active} />,
                    <Button type="primary">
                        <EditOutlined />
                    </Button>,
                    <Button type="danger">
                        <DeleteOutlined />
                    </Button>
                ]}
            >
                <List.Item.Meta title={item.title} description={item.url} />  
            </List.Item>
        )
    }
    ```
2. Modificar el archivo de estilo **client\src\components\Admin\MenuWeb\MenuWebList\MenuWebList.scss**:
    ```scss
    .menu-web-list {
        &__header {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            margin-bottom: 20px;
        }

        &__items {
            background-color: #fff;
            padding: 10px 20px;
            .List {
                position: relative;
                .draggable {
                    width: 100%;
                    background-color: rgba(255, 255, 255, 0.5);
                    &:hover {
                        cursor: pointer;
                    }
                    &.dragged {
                        border: 1px solid #e2e2e2;
                        padding: 0 10px;
                    }
                }
            }

            .ant-list-item-meta {
                display: flex;
                align-items: center;
            }
        }
    }
    ```
3. Commit Video 130:
    + $ git add .
    + $ git commit -m "2/2 - Listando Menús con acción de Drag and drop"
    + $ git push -u origin main

### 131. Endpoint para actualizar el orden de del menú
1. Modificar el controlador **server\controllers\menu.js** para incorporar la función **updateMenu**:
    ```js
    function updateMenu(req, res) {
        let menuData = req.body
        const params = req.params

        Menu.findByIdAndUpdate(params.id, menuData, (err, menuUpdate) => {
            if(err) {
                res.status(500).send({ message: "Error del servidor."})
            } else {
                if(!menuUpdate) {
                    res.status(404).send({ message: "No se ha encontrado ningún menú."})
                } else {
                    res.status(200).send({ message: "Menú actualizado correctamente."})
                }
            }
        })
    }

    module.exports = {
        addMenu,
        getMenus,
        updateMenu
    }
    ```
2. Agregar ruta **update-menu** en **server\routers\menu.js**:
    ```js
    ≡
    api.put("/update-menu/:id", [md_auth.ensureAuth], MenuController.updateMenu)

    module.exports = api
    ```
3. Prueba http:
    + Realizar petición http:
        + Método: put
        + URL: http://localhost:3977/api/v1/update-menu/61b0a782baadd4e0ff27d39d
        + Headers:
            ```
            Content-Type: application/json
            Authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjYxYTNjZDRkNWY3YzY1Y2JhYzEzMjNmYyIsIm5hbWUiOiJDdWlkcm8iLCJsYXN0bmFtZSI6Ik1jQ2xvdXQiLCJlbWFpbCI6ImJhem8ucGVkcm9AZ21haWwuY29tIiwicm9sZSI6ImFkbWluIiwiY3JlYXRlVG9rZW4iOjE2MzkwNzM3MDEsImV4cCI6MTYzOTA4NDUwMX0.6GTyK0Ci_oQqymfjiW7TphNEgXFC_UFwSdwNGPYfuGg
            ```
        + Body:
            ```json
            {
                "active": false
            }
            ```
    + Guardar endpoint como: **update-menu**
4. Commit Video 131:
    + $ git add .
    + $ git commit -m "Endpoint para actualizar el orden de del menú"
    + $ git push -u origin main

### 132. Actualizando el orden del menú en la BBDD cuando se cambie en el cliente
1. Agregar función **updateMenuApi** en **client\src\api\menu.js**:
    ```js
    export function updateMenuApi(token, menuId, data) {
        const url = `${basePath}/${apiVersion}/update-menu/${menuId}`

        const params = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: token
            },
            body: JSON.stringify(data)
        }

        return fetch(url, params)
            .then(response => {
                return response.json()
            })
            .then(result => {
                return result.message
            })
            .catch(err => {
                return err.message
            })
    }
    ```
2. Modificar componente **client\src\components\Admin\MenuWeb\MenuWebList\MenuWebList.js**:
    ```js
    ≡
    import { updateMenuApi } from '../../../../api/menu'
    import { getAccessTokenApi } from '../../../../api/auth'
    import './MenuWebList.scss'

    export default function MenuWebList(props) {
        ≡
        const onSort = (sortedList, dropEvent) => {
            const accesToken = getAccessTokenApi()
            sortedList.forEach(item => {
                const { _id } = item.content.props.item
                const order = item.rank
                updateMenuApi(accesToken, _id, { order })
            })
        }

        return (
            ≡
        )
    }

    function MenuItem(props) {
        ≡
    }
    ```
3. Commit Video 132:
    + $ git add .
    + $ git commit -m "Actualizando el orden del menú en la BBDD cuando se cambie en el cliente"
    + $ git push -u origin main

### 133. Endpoint para activar y desactivar cualquier menú
1. Crear función **activateMenu** en el controlador **server\controllers\menu.js**:
    ```js
    ≡
    function activateMenu(req, res) {
        const { id } = req.params
        const { active } = req.body

        Menu.findByIdAndUpdate(id, { active }, (err, menuStored) => {
            if(err) {
                res.status(500).send({ message: "Error del servidor."})
            } else {
                if(!menuStored) {
                    res.status(404).send({ message: "No se ha encontrado el menú"})
                } else {
                    if(active === true){
                        res.status(200).send({ message: "Menú activado correctamente."})
                    } else {
                        
                        res.status(200).send({ message: "Menú desactivado correctamente."})
                    }
                }
            }
        })
    }

    module.exports = {
        addMenu,
        getMenus,
        updateMenu,
        activateMenu
    }
    ```
2. Crear ruta **activate-menu** en **server\routers\menu.js**:
    ```js
    ≡
    api.put("/activate-menu/:id", [md_auth.ensureAuth], MenuController.activateMenu)

    module.exports = api
    ```
3. Prueba http:
    + Realizar petición http:
        + Método: put
        + URL: http://localhost:3977/api/v1/activate-menu/61b0a782baadd4e0ff27d39d
        + Headers:
            ```
            Content-Type: application/json
            Authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjYxYTNjZDRkNWY3YzY1Y2JhYzEzMjNmYyIsIm5hbWUiOiJDdWlkcm8iLCJsYXN0bmFtZSI6Ik1jQ2xvdXQiLCJlbWFpbCI6ImJhem8ucGVkcm9AZ21haWwuY29tIiwicm9sZSI6ImFkbWluIiwiY3JlYXRlVG9rZW4iOjE2MzkwODY0NzcsImV4cCI6MTYzOTA5NzI3N30.C46eXCw77rLmLO91N2a_7_b6BqR7RS8WUICEkFT7934
            ```
        + Body:
            ```json
            {
                "active": true
            }
            ```
    + Guardar endpoint como: **activate-menu**
4. Commit Video 133:
    + $ git add .
    + $ git commit -m "Endpoint para activar y desactivar cualquier menú"
    + $ git push -u origin main

### 134. Añadiendo funcionalidad al Switch para activar o desactiva el menú
1. Crear función **activateMenuApi** en **client\src\api\menu.js**:
    ```js
    export function activateMenuApi(token, menuId, status) {
        const url = `${basePath}/${apiVersion}/activate-menu/${menuId}`

        const params = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: token
            },
            body: JSON.stringify({ active: status })
        }

        return fetch(url, params)
            .then(response => {
                return response.json()
            })
            .then(result => {
                return result.message
            })
            .catch(err => {
                return err.message
            })
    }
    ```
2. Modificar componente **client\src\components\Admin\MenuWeb\MenuWebList\MenuWebList.js**:
    ```js
    import { useState, useEffect} from 'react'
    import { Switch, List, Button, Modal as ModalAntd, notification } from 'antd'
    import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
    import 'antd/dist/antd.css'
    import Modal from '../../../Modal'
    import DragSortableList from 'react-drag-sortable'
    import { updateMenuApi, activateMenuApi } from '../../../../api/menu'
    import { getAccessTokenApi } from '../../../../api/auth'
    import './MenuWebList.scss'

    export default function MenuWebList(props) {
        const { menu, setReloadMenuWeb } = props
        const [listItems, setListItems] = useState([])
        const [isVisibleModal, setIsVisibleModal] = useState(false)
        const [modalTitle, setModalTitle] = useState("")
        const [modalContent, setModalContent] = useState(null)

        useEffect(() => {
            const listItemsArray = []
            menu.forEach(item => {
                listItemsArray.push({
                    content: (
                        <MenuItem item={item} activateMenu={activateMenu} />
                    )
                })
            })
            setListItems(listItemsArray)
        }, [menu])

        const activateMenu = (menu, status) => {
            const accesToken = getAccessTokenApi()
            activateMenuApi(accesToken, menu._id, status).then(response => {
                notification["success"]({
                    message: response
                })
            })
        }

        const onSort = (sortedList, dropEvent) => {
            const accesToken = getAccessTokenApi()
            sortedList.forEach(item => {
                const { _id } = item.content.props.item
                const order = item.rank
                updateMenuApi(accesToken, _id, { order })
            })
        }

        return (
            <div className="menu-web-list">
                <div className="menu-web-list__header">
                    <Button type="primary">
                        Nuevo menú
                    </Button>
                </div>
                <div className="menu-web-list__items">
                    <DragSortableList items={listItems} onSort={onSort} type="vertical" />
                </div>
            </div>
        )
    }

    function MenuItem(props) {
        const { item, activateMenu } = props
        return (
            <List.Item
                actions={[
                    <Switch defaultChecked={item.active} onChange={e => activateMenu(item, e)} />,
                    <Button type="primary">
                        <EditOutlined />
                    </Button>,
                    <Button type="danger">
                        <DeleteOutlined />
                    </Button>
                ]}
            >
                <List.Item.Meta title={item.title} description={item.url} />  
            </List.Item>
        )
    }
    ```
3. Commit Video 134:
    + $ git add .
    + $ git commit -m "Añadiendo funcionalidad al Switch para activar o desactiva el menú"
    + $ git push -u origin main

### 135. Añadiendo funcionalidad la botón de crear nuevo menú
1. Modificar componente **client\src\components\Admin\MenuWeb\MenuWebList\MenuWebList.js**:
    ```js
    import { useState, useEffect} from 'react'
    import { Switch, List, Button, Modal as ModalAntd, notification } from 'antd'
    import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
    import 'antd/dist/antd.css'
    import Modal from '../../../Modal'
    import DragSortableList from 'react-drag-sortable'
    import { updateMenuApi, activateMenuApi } from '../../../../api/menu'
    import { getAccessTokenApi } from '../../../../api/auth'
    import AddMenuWebForm from '../AddMenuWebForm'
    import './MenuWebList.scss'

    export default function MenuWebList(props) {
        const { menu, setReloadMenuWeb } = props
        const [listItems, setListItems] = useState([])
        const [isVisibleModal, setIsVisibleModal] = useState(false)
        const [modalTitle, setModalTitle] = useState("")
        const [modalContent, setModalContent] = useState(null)

        useEffect(() => {
            const listItemsArray = []
            menu.forEach(item => {
                listItemsArray.push({
                    content: (
                        <MenuItem item={item} activateMenu={activateMenu} />
                    )
                })
            })
            setListItems(listItemsArray)
        }, [menu])

        const activateMenu = (menu, status) => {
            const accesToken = getAccessTokenApi()
            activateMenuApi(accesToken, menu._id, status).then(response => {
                notification["success"]({
                    message: response
                })
            })
        }

        const onSort = (sortedList, dropEvent) => {
            const accesToken = getAccessTokenApi()
            sortedList.forEach(item => {
                const { _id } = item.content.props.item
                const order = item.rank
                updateMenuApi(accesToken, _id, { order })
            })
        }

        const addMenuWebModal = () => {
            setIsVisibleModal(true)
            setModalTitle('Creando nuevo menú')
            setModalContent(
                <AddMenuWebForm />
            )
        }

        return (
            <div className="menu-web-list">
                <div className="menu-web-list__header">
                    <Button type="primary" onClick={addMenuWebModal}>
                        Nuevo menú
                    </Button>
                </div>
                <div className="menu-web-list__items">
                    <DragSortableList items={listItems} onSort={onSort} type="vertical" />
                </div>

                <Modal
                    title={modalTitle}
                    isVisible={isVisibleModal}
                    setIsVisible={setIsVisibleModal}
                >
                    {modalContent}
                </Modal>
            </div>
        )
    }

    function MenuItem(props) {
        const { item, activateMenu } = props
        return (
            <List.Item
                actions={[
                    <Switch defaultChecked={item.active} onChange={e => activateMenu(item, e)} />,
                    <Button type="primary">
                        <EditOutlined />
                    </Button>,
                    <Button type="danger">
                        <DeleteOutlined />
                    </Button>
                ]}
            >
                <List.Item.Meta title={item.title} description={item.url} />  
            </List.Item>
        )
    }
    ```
2. Crear **client\src\components\Admin\MenuWeb\AddMenuWebForm\index.js**:
    ```js
    export { default } from "./AddMenuWebForm"
    ```
3. Crear componente **client\src\components\Admin\MenuWeb\AddMenuWebForm\AddMenuWebForm.js**:
    ```js
    import { useState } from 'react'
    import { Form, Input, Button, Select, notification } from 'antd'
    import { FontSizeOutlined } from '@ant-design/icons'
    import 'antd/dist/antd.css'
    import "./AddMenuWebForm.scss"

    export default function AddMenuWebForm(props) {
        return (
            <div className="add-menu-web-form">
                <AddForm />
            </div>
        )
    }

    function AddForm(props) {
        const { Option } = Select

        const selectBefore = (
            <Select
                defaultValue="http://"
                style={{ width: 90 }}
                //onChange={e => setMenuWebData({ ...menuWebData, http: e })}
            >
                <Option value="http://">http://</Option>
                <Option value="https://">https://</Option>
            </Select>
        );
        

        return (
            <Form className="form-add">
                <Form.Item>
                    <Input
                        prefix={<FontSizeOutlined />}
                        placeholder="Título"
                        //value={}
                        //onChange={}
                    />
                </Form.Item>
                <Form.Item>
                    <Input
                        addonBefore={selectBefore}
                        placeholder="URL"
                        //value={}
                        //onChange={}
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="btn-submit">
                        Crear menú
                    </Button>
                </Form.Item>
            </Form>
        )
    }
    ```
4. Crear archivo de estilo **client\src\components\Admin\MenuWeb\AddMenuWebForm\AddMenuWebForm.scss**:
    ```scss
    .add-menu-web-form {
        text-align: center;

        .ant-form-item {
            margin-top: 5px;
            margin-bottom: 5px;

            i {
                color: rgba(0, 0, 0, 0.25);
            }
        }

        .btn-submit {
            width: 100%;
        }
    }
    ```
5. Commit Video 135:
    + $ git add .
    + $ git commit -m "Añadiendo funcionalidad la botón de crear nuevo menú"
    + $ git push -u origin main

### 136. Creando lógica para crear nuevos menús
1. Crear función **addMenuApi** en **client\src\api\menu.js**:
    ```js
    export function addMenuApi(token, menu) {
        const url = `${basePath}/${apiVersion}/add-menu`

        const params = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Authorization: token
            },
            body: JSON.stringify(menu)
        }

        return fetch(url, params)
            .then(response => {
                return response.json()
            })
            .then(result => {
                return result.message
            })
            .catch(err => {
                return err.message
            })
    }
    ```
2. Modificar componente **client\src\components\Admin\MenuWeb\MenuWebList\MenuWebList.js**:
    ```js
    import { useState, useEffect} from 'react'
    import { Switch, List, Button, Modal as ModalAntd, notification } from 'antd'
    import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
    import 'antd/dist/antd.css'
    import Modal from '../../../Modal'
    import DragSortableList from 'react-drag-sortable'
    import { updateMenuApi, activateMenuApi } from '../../../../api/menu'
    import { getAccessTokenApi } from '../../../../api/auth'
    import AddMenuWebForm from '../AddMenuWebForm'
    import './MenuWebList.scss'

    export default function MenuWebList(props) {
        const { menu, setReloadMenuWeb } = props
        const [listItems, setListItems] = useState([])
        const [isVisibleModal, setIsVisibleModal] = useState(false)
        const [modalTitle, setModalTitle] = useState("")
        const [modalContent, setModalContent] = useState(null)

        useEffect(() => {
            const listItemsArray = []
            menu.forEach(item => {
                listItemsArray.push({
                    content: (
                        <MenuItem item={item} activateMenu={activateMenu} />
                    )
                })
            })
            setListItems(listItemsArray)
        }, [menu])

        const activateMenu = (menu, status) => {
            const accesToken = getAccessTokenApi()
            activateMenuApi(accesToken, menu._id, status).then(response => {
                notification["success"]({
                    message: response
                })
            })
        }

        const onSort = (sortedList, dropEvent) => {
            const accesToken = getAccessTokenApi()
            sortedList.forEach(item => {
                const { _id } = item.content.props.item
                const order = item.rank
                updateMenuApi(accesToken, _id, { order })
            })
        }

        const addMenuWebModal = () => {
            setIsVisibleModal(true)
            setModalTitle('Creando nuevo menú')
            setModalContent(
                <AddMenuWebForm 
                    setIsVisibleModal={setIsVisibleModal}
                    setReloadMenuWeb={setReloadMenuWeb}
                />
            )
        }

        return (
            <div className="menu-web-list">
                <div className="menu-web-list__header">
                    <Button type="primary" onClick={addMenuWebModal}>
                        Nuevo menú
                    </Button>
                </div>
                <div className="menu-web-list__items">
                    <DragSortableList items={listItems} onSort={onSort} type="vertical" />
                </div>

                <Modal
                    title={modalTitle}
                    isVisible={isVisibleModal}
                    setIsVisible={setIsVisibleModal}
                >
                    {modalContent}
                </Modal>
            </div>
        )
    }

    function MenuItem(props) {
        const { item, activateMenu } = props
        return (
            <List.Item
                actions={[
                    <Switch defaultChecked={item.active} onChange={e => activateMenu(item, e)} />,
                    <Button type="primary">
                        <EditOutlined />
                    </Button>,
                    <Button type="danger">
                        <DeleteOutlined />
                    </Button>
                ]}
            >
                <List.Item.Meta title={item.title} description={item.url} />  
            </List.Item>
        )
    }    
    ```
3. Modificar componente **client\src\components\Admin\MenuWeb\AddMenuWebForm\AddMenuWebForm.js**:
    ```js
    import { useState } from 'react'
    import { Form, Input, Button, Select, notification } from 'antd'
    import { FontSizeOutlined } from '@ant-design/icons'
    import 'antd/dist/antd.css'
    import { addMenuApi } from "../../../../api/menu"
    import { getAccessTokenApi } from "../../../../api/auth"
    import "./AddMenuWebForm.scss"

    export default function AddMenuWebForm(props) {
        const { setIsVisibleModal, setReloadMenuWeb } = props
        const [menuWebData, setMenuWebData] = useState({})

        const addMenu = event => {
            let finalData = {
                title: menuWebData.title,
                url: (menuWebData.http ? menuWebData.http : "http://") + menuWebData.url
            }
            if(!finalData.title || !finalData.url || !menuWebData.title || !menuWebData.url){
                notification["error"]({ message: "Todos los campos son obligatorios." })
            } else {
                const accessToken = getAccessTokenApi()
                finalData.active = false
                finalData.order = 1000

                addMenuApi(accessToken, finalData)
                    .then(response => {
                        notification["success"]({ message: response })
                        setIsVisibleModal(false)
                        setReloadMenuWeb(true)
                        setMenuWebData({})
                        finalData = {}
                    })
                    .catch(() => {
                        notification["error"]({ message: "Error en el servidor."})
                    })
            }
        }

        return (
            <div className="add-menu-web-form">
                <AddForm 
                    menuWebData={menuWebData}
                    setMenuWebData={setMenuWebData}
                    addMenu={addMenu}
                />
            </div>
        )
    }

    function AddForm(props) {
        const { menuWebData, setMenuWebData, addMenu } = props
        const { Option } = Select

        const selectBefore = (
            <Select
                defaultValue="http://"
                style={{ width: 90 }}
                onChange={e => setMenuWebData({ ...menuWebData, http: e })}
            >
                <Option value="http://">http://</Option>
                <Option value="https://">https://</Option>
            </Select>
        );
        

        return (
            <Form className="form-add" onFinish={addMenu}>
                <Form.Item>
                    <Input
                        prefix={<FontSizeOutlined />}
                        placeholder="Título"
                        value={menuWebData.title}
                        onChange={e => setMenuWebData({ ...menuWebData, title: e.target.value })}
                    />
                </Form.Item>
                <Form.Item>
                    <Input
                        addonBefore={selectBefore}
                        placeholder="URL"
                        value={menuWebData.url}
                        onChange={e => setMenuWebData({ ...menuWebData, url: e.target.value })}
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="btn-submit">
                        Crear menú
                    </Button>
                </Form.Item>
            </Form>
        )
    }
    ```
4. Commit Video 136:
    + $ git add .
    + $ git commit -m "Creando lógica para crear nuevos menús"
    + $ git push -u origin main

### 137. Creando formulario para editar cualquier menú
1. Crear archivo **client\src\components\Admin\MenuWeb\EditMenuWebForm\index.js**:
    ```js
    export { default } from "./EditMenuWebForm"
    ```
2. Crear archivo de estilo **client\src\components\Admin\MenuWeb\EditMenuWebForm\EditMenuWebForm.scss**:
    ```scss
    .edit-menu-web-form {
        .form-edit {
            text-align: center;

            .ant-form-item {
                margin-top: 5px;
                margin-bottom: 5px;

                i {
                    color: rgba(0, 0, 0, 0.25);
                }
            }

            .btn-submit {
                width: 100%;
            }
        }
    }
    ```
3. Crear componente **client\src\components\Admin\MenuWeb\EditMenuWebForm\EditMenuWebForm.js**:
    ```js
    import { useState, useEffect} from 'react'
    import { Form, Input, Button, notification } from 'antd'
    import { FontSizeOutlined, LinkOutlined } from '@ant-design/icons'
    import 'antd/dist/antd.css'
    import { updateMenuApi } from '../../../../api/menu'
    import { getAccessTokenApi } from '../../../../api/auth'
    import "./EditMenuWebForm.scss"

    export default function EditMenuWebForm(props) {
        const { setIsVisibleModal, setReloadMenuWeb, menu } = props

        return (
        <div className="edit-menu-web-form">
            <EditForm />
        </div> 
        )
    }

    function EditForm(props) {

        return (
            <Form className="form-edit">
                <Form.Item>
                    <Input
                        prefix={<FontSizeOutlined />}
                        placeholder="Título"
                    />
                </Form.Item>
                <Form.Item>
                    <Input
                        prefix={<LinkOutlined />}
                        placeholder="URL"
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="btn-submit">
                        Actualizar menú
                    </Button>
                </Form.Item>
            </Form>
        )
    }
    ```
4. Modificar componente **client\src\components\Admin\MenuWeb\MenuWebList\MenuWebList.js**:
    ```js
    import { useState, useEffect} from 'react'
    import { Switch, List, Button, Modal as ModalAntd, notification } from 'antd'
    import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
    import 'antd/dist/antd.css'
    import Modal from '../../../Modal'
    import DragSortableList from 'react-drag-sortable'
    import { updateMenuApi, activateMenuApi } from '../../../../api/menu'
    import { getAccessTokenApi } from '../../../../api/auth'
    import AddMenuWebForm from '../AddMenuWebForm'
    import EditMenuWebForm from '../EditMenuWebForm'
    import './MenuWebList.scss'

    export default function MenuWebList(props) {
        const { menu, setReloadMenuWeb } = props
        const [listItems, setListItems] = useState([])
        const [isVisibleModal, setIsVisibleModal] = useState(false)
        const [modalTitle, setModalTitle] = useState("")
        const [modalContent, setModalContent] = useState(null)

        useEffect(() => {
            const listItemsArray = []
            menu.forEach(item => {
                listItemsArray.push({
                    content: (
                        <MenuItem item={item} activateMenu={activateMenu} editMenuWebModal={editMenuWebModal} />
                    )
                })
            })
            setListItems(listItemsArray)
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [menu])

        const activateMenu = (menu, status) => {
            const accesToken = getAccessTokenApi()
            activateMenuApi(accesToken, menu._id, status).then(response => {
                notification["success"]({
                    message: response
                })
            })
        }

        const onSort = (sortedList, dropEvent) => {
            const accesToken = getAccessTokenApi()
            sortedList.forEach(item => {
                const { _id } = item.content.props.item
                const order = item.rank
                updateMenuApi(accesToken, _id, { order })
            })
        }

        const addMenuWebModal = () => {
            setIsVisibleModal(true)
            setModalTitle('Creando nuevo menú')
            setModalContent(
                <AddMenuWebForm 
                    setIsVisibleModal={setIsVisibleModal}
                    setReloadMenuWeb={setReloadMenuWeb}
                />
            )
        }

        const editMenuWebModal = menu => {
            setIsVisibleModal(true)
            setModalTitle(`Editando menú: ${menu.title}`)
            setModalContent(
                <EditMenuWebForm
                    setIsVisibleModal={setIsVisibleModal}
                    setReloadMenuWeb={setReloadMenuWeb}
                    menu={menu}
                />
            )
        }

        return (
            <div className="menu-web-list">
                <div className="menu-web-list__header">
                    <Button type="primary" onClick={addMenuWebModal}>
                        Nuevo menú
                    </Button>
                </div>
                <div className="menu-web-list__items">
                    <DragSortableList items={listItems} onSort={onSort} type="vertical" />
                </div>

                <Modal
                    title={modalTitle}
                    isVisible={isVisibleModal}
                    setIsVisible={setIsVisibleModal}
                >
                    {modalContent}
                </Modal>
            </div>
        )
    }

    function MenuItem(props) {
        const { item, activateMenu, editMenuWebModal } = props
        return (
            <List.Item
                actions={[
                    <Switch defaultChecked={item.active} onChange={e => activateMenu(item, e)} />,
                    <Button type="primary" onClick={e => editMenuWebModal(item)} >
                        <EditOutlined />
                    </Button>,
                    <Button type="danger">
                        <DeleteOutlined />
                    </Button>
                ]}
            >
                <List.Item.Meta title={item.title} description={item.url} />  
            </List.Item>
        )
    }
    ```
5. Commit Video 137:
    + $ git add .
    + $ git commit -m "Creando formulario para editar cualquier menú"
    + $ git push -u origin main

### 138. Lógica para actualizar el menú que estamos editando
1. Modificar componente **client\src\components\Admin\MenuWeb\EditMenuWebForm\EditMenuWebForm.js**:
    ```js
    import { useState, useEffect} from 'react'
    import { Form, Input, Button, notification } from 'antd'
    import { FontSizeOutlined, LinkOutlined } from '@ant-design/icons'
    import 'antd/dist/antd.css'
    import { updateMenuApi } from '../../../../api/menu'
    import { getAccessTokenApi } from '../../../../api/auth'
    import "./EditMenuWebForm.scss"

    export default function EditMenuWebForm(props) {
        const { setIsVisibleModal, setReloadMenuWeb, menu } = props
        const [menuWebData, setMenuWebData] = useState(menu)

        useEffect(() => {
            setMenuWebData(menu)
        }, [menu])

        const editMenu = event => {
            if(!menuWebData.title || !menuWebData.url){
                notification["error"]({ message: "Todos los campos son obligatorios."})
            } else {
                const accesToken = getAccessTokenApi()
                updateMenuApi(accesToken, menuWebData._id, menuWebData)
                    .then(response => { 
                        notification["success"]({message: response})
                        setIsVisibleModal(false)
                        setReloadMenuWeb(true)
                    })
                    .catch(() => {
                        notification["error"]({message: "Error del servidor, intentelo más tarde."})
                    })
            }
        }

        return (
            <div className="edit-menu-web-form">
                <EditForm 
                    menuWebData={menuWebData}
                    setMenuWebData={setMenuWebData}
                    editMenu={editMenu}
                />
            </div> 
        )
    }

    function EditForm(props) {
        const { menuWebData, setMenuWebData, editMenu } = props

        return (
            <Form className="form-edit" onFinish={editMenu} >
                <Form.Item>
                    <Input
                        prefix={<FontSizeOutlined />}
                        placeholder="Título"
                        value={menuWebData.title}
                        onChange={e => setMenuWebData({ ...menuWebData, title: e.target.value })}
                    />
                </Form.Item>
                <Form.Item>
                    <Input
                        prefix={<LinkOutlined />}
                        placeholder="URL"
                        value={menuWebData.url}
                        onChange={e => setMenuWebData({ ...menuWebData, url: e.target.value })}
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="btn-submit">
                        Actualizar menú
                    </Button>
                </Form.Item>
            </Form>
        )
    }
    ```
2. Commit Video 138:
    + $ git add .
    + $ git commit -m "Lógica para actualizar el menú que estamos editando"
    + $ git push -u origin main

### 139. Endpoint para poder eliminar menús
1. Agregar la función **deleteMenu** en el controlador **server\controllers\menu.js**:
    ```js
    ≡
    function deleteMenu(req,res) {
        const { id } = req.params

        Menu.findByIdAndRemove(id, (err, menuDelete) => {
            if(err){
                res.status(500).send({message: "Error al eliminar menú."})
            } else {
                if (!menuDelete){
                    res.status(404).send({message: "No se ha encontrado el menú."})
                } else {
                    res.status(200).send({message: "El menú se eliminó correctamente."})
                }
            }
        })
    }

    module.exports = {
        addMenu,
        getMenus,
        updateMenu,
        activateMenu,
        deleteMenu
    }
    ```
2. Crear ruta **delete-menu** en **server\routers\menu.js**:
    ```js
    ≡
    api.delete("/delete-menu/:id",[md_auth.ensureAuth] , MenuController.deleteMenu)

    module.exports = api
    ```
3. Prueba http:
    + Realizar petición http:
        + Método: delete
        + URL: http://localhost:3977/api/v1/delete-menu/61b4efeeb78d955ce2e7bf76
        + Headers:
            ```
            Content-Type: application/json
            Authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjYxYTNjZDRkNWY3YzY1Y2JhYzEzMjNmYyIsIm5hbWUiOiJDdWlkcm8iLCJsYXN0bmFtZSI6Ik1jQ2xvdXQiLCJlbWFpbCI6ImJhem8ucGVkcm9AZ21haWwuY29tIiwicm9sZSI6ImFkbWluIiwiY3JlYXRlVG9rZW4iOjE2MzkyNDYzNDMsImV4cCI6MTYzOTI1NzE0M30.2IBLwK02WkvmHYf8A4v7fJVP4Gv_xwktYhzbEunU9Uc
            ```
    + Guardar endpoint como: **delete-menu**
4. Commit Video 139:
    + $ git add .
    + $ git commit -m "Endpoint para poder eliminar menús"
    + $ git push -u origin main

### 140. Lógica para hacer funcionar el botón de eliminar menú
1. Crear función **deleteMenuApi** en **client\src\api\menu.js**:
    ```js
    ≡
    export function deleteMenuApi(token, menuId) {
        const url = `${basePath}/${apiVersion}/delete-menu/${menuId}`

        const params = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: token
            }
        }

        return fetch(url, params)
            .then(response => {
                return response.json()
            })
            .then(result => {
                return result.message
            })
            .catch(err => {
                return err.message
            })
    }
    ```
2. Modificar componente **client\src\components\Admin\MenuWeb\MenuWebList\MenuWebList.js**:
    ```js
    import { useState, useEffect} from 'react'
    import { Switch, List, Button, Modal as ModalAntd, notification } from 'antd'
    import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
    import 'antd/dist/antd.css'
    import Modal from '../../../Modal'
    import DragSortableList from 'react-drag-sortable'
    import { updateMenuApi, activateMenuApi, deleteMenuApi } from '../../../../api/menu'
    import { getAccessTokenApi } from '../../../../api/auth'
    import AddMenuWebForm from '../AddMenuWebForm'
    import EditMenuWebForm from '../EditMenuWebForm'
    import './MenuWebList.scss'

    const { confirm } = ModalAntd;

    export default function MenuWebList(props) {
        const { menu, setReloadMenuWeb } = props
        const [listItems, setListItems] = useState([])
        const [isVisibleModal, setIsVisibleModal] = useState(false)
        const [modalTitle, setModalTitle] = useState("")
        const [modalContent, setModalContent] = useState(null)

        useEffect(() => {
            const listItemsArray = []
            menu.forEach(item => {
                listItemsArray.push({
                    content: (
                        <MenuItem 
                            item={item} 
                            activateMenu={activateMenu} 
                            editMenuWebModal={editMenuWebModal} 
                            deleteMenu={deleteMenu}
                        />
                    )
                })
            })
            setListItems(listItemsArray)
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [menu])

        const activateMenu = (menu, status) => {
            const accesToken = getAccessTokenApi()
            activateMenuApi(accesToken, menu._id, status).then(response => {
                notification["success"]({
                    message: response
                })
            })
        }

        const onSort = (sortedList, dropEvent) => {
            const accesToken = getAccessTokenApi()
            sortedList.forEach(item => {
                const { _id } = item.content.props.item
                const order = item.rank
                updateMenuApi(accesToken, _id, { order })
            })
        }

        const addMenuWebModal = () => {
            setIsVisibleModal(true)
            setModalTitle('Creando nuevo menú')
            setModalContent(
                <AddMenuWebForm 
                    setIsVisibleModal={setIsVisibleModal}
                    setReloadMenuWeb={setReloadMenuWeb}
                />
            )
        }

        const deleteMenu = menu => {
            const accesToken = getAccessTokenApi()
            confirm({
                title: 'Eliminando menú',
                content: `¿Estas seguro de querer eliminar el menú ${menu.title}?`,
                okText: "Eliminar",
                okType: "danger",
                cancelText: "Cancelar",
                onOk() {
                    deleteMenuApi(accesToken, menu._id).then(response => {
                        notification["success"]({message: response})
                        setReloadMenuWeb(true)
                    }).catch(() => {
                        notification["error"]({message: 'Error del servidor, intentelo más tarde.'})
                    })
                }
            })
        }

        const editMenuWebModal = menu => {
            setIsVisibleModal(true)
            setModalTitle(`Editando menú: ${menu.title}`)
            setModalContent(
                <EditMenuWebForm
                    setIsVisibleModal={setIsVisibleModal}
                    setReloadMenuWeb={setReloadMenuWeb}
                    menu={menu}
                />
            )
        }

        return (
            <div className="menu-web-list">
                <div className="menu-web-list__header">
                    <Button type="primary" onClick={addMenuWebModal}>
                        Nuevo menú
                    </Button>
                </div>
                <div className="menu-web-list__items">
                    <DragSortableList items={listItems} onSort={onSort} type="vertical" />
                </div>

                <Modal
                    title={modalTitle}
                    isVisible={isVisibleModal}
                    setIsVisible={setIsVisibleModal}
                >
                    {modalContent}
                </Modal>
            </div>
        )
    }

    function MenuItem(props) {
        const { item, activateMenu, editMenuWebModal, deleteMenu } = props
        return (
            <List.Item
                actions={[
                    <Switch defaultChecked={item.active} onChange={e => activateMenu(item, e)} />,
                    <Button type="primary" onClick={e => editMenuWebModal(item)} >
                        <EditOutlined />
                    </Button>,
                    <Button type="danger" onClick={() => deleteMenu(item)} >
                        <DeleteOutlined />
                    </Button>
                ]}
            >
                <List.Item.Meta title={item.title} description={item.url} />  
            </List.Item>
        )
    }
    ```
3. Commit Video 140:
    + $ git add .
    + $ git commit -m "Lógica para hacer funcionar el botón de eliminar menú"
    + $ git push -u origin main

### 141. Creando la estructura del menu web
1. Modificar **client\src\index.js**:
    ```js
    import React from 'react';
    import ReactDOM from 'react-dom';
    import { BrowserRouter } from "react-router-dom";
    import './index.scss';
    import App from './App';
    import reportWebVitals from './reportWebVitals';

    ReactDOM.render(
        <BrowserRouter>
            <App />
        </BrowserRouter>,
        document.getElementById('root')
    );

    // If you want to start measuring performance in your app, pass a function
    // to log results (for example: reportWebVitals(console.log))
    // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
    reportWebVitals();
    ```
2. Renombrar **client\src\index.css** a **client\src\index.scss** y modificarlo:
    ```scss
    @import "./scss/index.scss";

    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: $background-dark-web;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    }
    ```
3. Modificar **client\src\layouts\LayoutBasic.js**:
    ```js
    import { Route, Switch } from "react-router-dom"
    import { Layout, Row, Col } from "antd"
    import 'antd/dist/antd.css'
    import MenuTop from '../components/Web/MenuTop'
    import './LayoutBasic.scss'
    import '../index.scss'

    export default function LayoutBasic(props) {
        const { routes } = props
        const { Footer } = Layout

        return (
            <Row>
                <Col lg={4} />
                <Col lg={16} >
                    <MenuTop />
                    <LoadRoutes routes={routes}/>
                    <Footer>Soluciones++</Footer>
                </Col>
                <Col lg={4} />
            </Row>
        )
    }

    function LoadRoutes({ routes }){
        return (
            <Switch>
                {routes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.component}
                    />
                ))}
            </Switch>
        )
    }
    ```
4. Crear **client\src\components\Web\MenuTop\index.js**:
    ```js
    export { default } from './MenuTop'
    ```
5. Crear componente **client\src\components\Web\MenuTop\MenuTop.js**:
    ```js
    import { useState, useEffect } from 'react'
    import { Menu } from 'antd'
    import 'antd/dist/antd.css'
    import { Link } from 'react-router-dom'
    import './MenuTop.scss'

    export default function MenuTop() {
        return (
            <Menu className="menu-top" mode="horizontal">
                <Menu.Item className="menu-top__logo">
                    Logo...
                </Menu.Item>
                <Menu.Item className="menu-top__item">
                    <Link to={"/"}>Home</Link>
                </Menu.Item>
                <Menu.Item className="menu-top__item">
                    <Link to={"/contact"}>Contacto</Link>
                </Menu.Item>
                <div>Social Media......</div>
            </Menu>
        )
    }
    ```
6. Crear archivo de estilo client\src\components\Web\MenuTop\MenuTop.scss:
    ```scss
    @import "../../../scss/index.scss";

    .menu-top-web {
        position: sticky;
        top: 0;
        background-color: $background-dark-web;
        border: 0;
        display: flex;
        align-items: center;

        li {
            border: 0 !important;

            a {
                color: #fff !important;
                font-weight: bold;

                &:hover {
                    color: $primary-color !important;
                }
            }
        }

        &__logo {
            padding: 10px;

            img {
                width: 200px;
            }
        }
    }
    ```
7. Commit Video 141:
    + $ git add .
    + $ git commit -m "Creando la estructura del menu web"
    + $ git push -u origin main

### 142. Añadiendo el logo de la web al menú
5. Commit Video 142:
    + $ git add .
    + $ git commit -m ""
    + $ git push -u origin main

    ≡
    ```js
    ```

### 143. Obteniendo el menu de la base de datos
5. Commit Video 143:
    + $ git add .
    + $ git commit -m ""
    + $ git push -u origin main

    ≡
    ```js
    ```

### 144. Añadiendo Redes Sociales al menú
5. Commit Video 144:
    + $ git add .
    + $ git commit -m ""
    + $ git push -u origin main

    ≡
    ```js
    ```

### 145. Creando el banner principal de la home page
5. Commit Video 14:
    + $ git add .
    + $ git commit -m ""
    + $ git push -u origin main

    ≡
    ```js
    ```

### 146. 1/3 - Componente para mostrar los mejores cursos
### 147. 2/3 - Componente para mostrar los mejores cursos
### 148. 3/3 - Componente para mostrar los mejores cursos
### 149. 1/2 - Componente para mostrar como funcionan los cursos
### 150. 2/2 - Componente para mostrar como funcionan los cursos
### 151. 1/2 - Añadiendo sección de reviews de usuarios
### 152. 2/2 - Añadiendo sección de reviews de usuarios
### 153. Estructura del footer
### 154. Añadiendo Mi información al footer y SocialLinks
### 155. Creando una navegación en el footer
### 156. Configurando el Backend para añadir una Newsletter
### 157. Creando endopoint para guardar los emails de la newsletter en la base de datos
### 158. Creando estructura y formulario de la Newsletter
### 159. Conectando formulario con el enpoint que registra emails
### 160. Configuración para crear endpoint de cursos
### 161. Endpoint para crear cursos
### 162. Endpoint para obtener todos los cursos ordenados
### 163. Endpont para eliminar cursos
### 164. Enpoint para actualizar cursos
### 165. Añadiendo sección del curso en el back office
### 166. Obteniendo todos los cursos de la base de datos
### 167. Obteniendo los datos de los cursos de la API Udemy
### 168. 1/2 - Pintando un listado con todos los cursos en el back office
### 169. 2/2 - Pintando un listado con todos los cursos en el back office
### 170. Añadiendo funcionalidad de eliminar curso
### 171. Creando formulario para crear y editar curso
### 172. Añadiendo funcionalidad para crear cursos
### 173. Añadiendo funcionalidad para actualizar cursos
### 174. Cambiando orden de los cursos
### 175. Creando estructura de la página de cursos
### 176. Creando PresentationCourses
### 177. Obteniendo todos los cursos de la base de datos
### 178. Obteniendo la información publica de cada curso de la API de Udemy
### 179. 1/2 - Pintando todos los curso por pantalla
### 180. 2/2 - Pintando todos los curso por pantalla
### 181. Borrar inputs al haber editado un curso previamente
### 182. Estructura del Blog en el servidor
### 183. Endpoint para crear nuevos posts
### 184. Endpoint para obtener todos los posts de la base de datos paginados
### 185. Endpoint para actualizar posts
### 186. Endpoint para eliminar posts
### 187. Endpoint para obtener post especifico
### 188. Creando la sección del blog en el panel de administrador
### 189. Creando la estructura básica de la sección del blog
### 190. Obteniendo los post de la base de datos con paginación
### 191. Pintando los posts obtenidos en el admin
### 192. Añadiendo sistema de paginación
### 193. Eliminando posts
### 194. 1/3 - Estructura del formulario con editor TinyMCE
### 195. 2/3 - Estructura del formulario con editor TinyMCE
### 196. 3/3 - Estructura del formulario con editor TinyMCE
### 197. 1/2 - Creando nuevos posts
### 198. 2/2 - Creando nuevos posts
### 199. Editando posts
### 200. Rutas del blog de la parte web del usuario
### 201. 1/2 - Mostrando el listado de todos los posts
### 202. 2/2 - Mostrando el listado de todos los posts
### 203. Mostrando la información del post seleccionado
### 204. Instalando React Helmet y Actualizando todos los títulos de la web
### 205. Actualizando las meta descripciones
### 206. Cambiando el favicon
### 207. Subiendo base de datos a MongoDB Atlas
### 208. Subiendo Servidor a Heroku
### 209. Subiendo Cliente a Netlify
### 210. Repositorio de la aplicación
### 211. Clase Extra

## Equivalencias entre yarn y npm
+ https://shift.infinite.red/npm-vs-yarn-cheat-sheet-8755b092e5cc
+ npm install === yarn
+ npm install taco --save === yarn add taco
+ npm uninstall taco --save === yarn remove taco
+ npm install taco --save-dev === yarn add taco --dev
+ npm update --save === yarn upgrade
+ npm install taco@latest --save === yarn add taco
+ npm install taco --global === yarn global add taco
+ npm init === yarn init
+ npm link === yarn link
+ npm outdated === yarn outdated
+ npm publish === yarn publish
+ npm run === yarn run
+ npm cache clean === yarn cache clean
+ npm login === yarn login (and logout)
+ npm test === yarn test
+ npm install --production === yarn --production

## Reiniciar aplicación cliente
+ $ yarn cache clean
+ $ yarn
+ $ yarn run dev

## Iniciar proyecto en local
+ Nota: cada uno de los servicios debe ejecutarse en una terminal distinta.
+ Iniciar servidor
    + $ cd server
    + $ yarn start
+ Iniciar base de datos
    + $ mongod
+ Iniciar cliente
    + $ cd client
    + $ yarn dev