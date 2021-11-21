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


    ≡
    ```js
    ```

### 023. Estructura de React JS

1. Commit Video 023:
    + $ git add .
    + $ git commit -m "Estructura de React JS"
    + $ git push -u origin main

### 024. Nuestro primer Componente en React JS

1. Commit Video 024:
    + $ git add .
    + $ git commit -m "Nuestro primer Componente en React JS"
    + $ git push -u origin main

### 025. ¿Que son los Props de React?

1. Commit Video 025:
    + $ git add .
    + $ git commit -m "¿Que son los Props de React?"
    + $ git push -u origin main

### 026. Pasando props básicos entre componentes

1. Commit Video 026:
    + $ git add .
    + $ git commit -m "Pasando props básicos entre componentes"
    + $ git push -u origin main

### 027. Pasando variables y objetos entre componentes por los props

1. Commit Video 027:
    + $ git add .
    + $ git commit -m "Pasando variables y objetos entre componentes por los props"
    + $ git push -u origin main

### 028. Pasando funciones entre componente por los props

1. Commit Video 028:
    + $ git add .
    + $ git commit -m "Pasando funciones entre componente por los props"
    + $ git push -u origin main

### 029. El uso de la Asignación por Destructuring

1. Commit Video 029:
    + $ git add .
    + $ git commit -m "El uso de la Asignación por Destructuring"
    + $ git push -u origin main

### 030. Props por defecto

1. Commit Video 030:
    + $ git add .
    + $ git commit -m "Props por defecto"
    + $ git push -u origin main

### 031. Template Strings

1. Commit Video 031:
    + $ git add .
    + $ git commit -m "Template Strings"
    + $ git push -u origin main

### 032. Hook de estado - useState

1. Commit Video 032:
    + $ git add .
    + $ git commit -m "Hook de estado - useState"
    + $ git push -u origin main

### 033. Hook de efecto - useEffect

1. Commit Video 033:
    + $ git add .
    + $ git commit -m "Hook de efecto - useEffect"
    + $ git push -u origin main

## Sección 04: Iniciando el proyecto

### 034. Creando el proyecto cliente en React JS

1. Commit Video 033:
    + $ git add .
    + $ git commit -m ""
    + $ git push -u origin main

### 035. Añadiendo SASS al proyecto
11 min
### 036. Añadiendo la librería Ant Design al proyecto
12 min
### 037. Creando la estructura del proyecto server
9 min
### 038. Instalando las dependencias que usaremos
7 min
### 039. 1/2 Conectando el proyecto server con MongoDB usando Mongoose
15 min
### 040. 2/2 Conectando el proyecto server con MongoDB usando Mongoose
5 min
### 041. Cambiando el proyecto para que lea los cambios de código automáticamente
3 min
### 042. Solucionando error DeprecationWarning useFindAndModify
3 min



### 043. Instalando el Package react-router-dom
5 min
### 044. Ejemplo de uso React Router Dom
15 min
### 045. Creando paginas básicas para usar en las rutas
12 min
### 046. Creando Layouts de los cuales partirán la sección de usuario y admin
8 min
### 047. Creando la configuración de rutas para el Panel de Administrador
10 min
### 048. Programando el sistema de rutas para renderizar el Layout correspondiente
16 min
### 049. Programando el sistema de rutas para cargar las páginas dentro del LayoutAdmin
15 min
### 050. Añadiendo la configuración de rutas para usuarios normales
6 min
### 051. Programando el sistema de rutas para cargar las páginas dentro del LayoutBasic
10 min
### 052. Página Error404
9 min
### 053. Fix de la sección
1 min
### 054. Creando variables de colores y tamaños SASS para reutilizarlas en componentes
11 min
### 055. Dando estilos al LayoutAdmin
9 min
### 056. Creando el componente MenuTop
16 min
### 057. Creando el componente MenuSider
12 min
### 058. Centrando Contenido y añadiendo funcionalidad al botón de abrir el MenuSider
11 min
### 059. Creación del controlador, modelo y ruta para los usuarios
12 min
### 060. 1/2 - Endpoint para crear nuevos usuarios
9 min
### 061. 2/2 - Endpoint para crear nuevos usuarios
11 min
### 062. 1/2 - Creando la estructura básica de la pagina de SignIn con Tabs
14 min
### 063. 2/2 - Creando la estructura básica de la pagina de SignIn con Tabs
18 min
### 064. Creando la estructura del formulario de registro en la pagina SignIn
13 min
### 065. Escribiendo el SASS del formulario de registro en la pagina SignIn
8 min
### 066. Guardando la información del formulario de registro en un estado con useState
13 min
### 067. Creando funciones reutilizables de validaciones
11 min
### 068. Reutilizando las funciónes de validación en el formulario de registro de usuario
14 min
### 069. Terminando la validando del formulario de registro de usuarios
12 min
### 070. 1/2 - Conectando con el Enpoint de registro de usuario y creando el usuario
15 min
### 071. 2/2 - Conectando con el Enpoint de registro de usuario y creando el usuario
14 min
### 072. Reseteando el formulario cuando el registro es correcto
5 min
### 03. Formateando Email de registro con toLowerCase
3 min
### 074. Creando el servicio para la creación de los tokens
12 min
### 075. 1/2 - Creación del ENDPOINT para hacer login
17 min
### 076. 2/2 - Creación del ENDPOINT para hacer login
6 min
### 077. Creando estructura del formulario de login
15 min
### 078. Guardando datos del formulario en el estado del componente
8 min
### 079. Creando función para logear usuario que conecte con el api
9 min
### 080. Guardando los Tokens en el localStorage y creando constantes pata ello
11 min
### 081. Creando las funciones para obtener AccessToken y RefreshToken
17 min
### 082. Creando endpoint para refrescar el AccessToken
19 min
### 083. Creando función para refrescar el AccessToken desde el cliente
7 min
### 084. Función para deslogear un usuario
3 min
### 085. Hook para comprobar si el usuario esta logeado o refrescar el token
17 min
### 086. Escribiendo la logica del AuthProvider
12 min
### 087. Bloqueando la pagina de login para usuarios logeados
7 min
### 088. Añadiendo funcionalidad al botón de logout
4 min
### 089. Activando Usuario desactivado
2 min
### 090. Creando el menu de usuarios
6 min
### 091. Solucionando cambio del menú al recargar la página
5 min
### 092. Creando Endpoint para obtener todos los usuarios
6 min
### 093. Creando un Middlewares para bloquear url a usuarios no logeados
13 min
### 094. Añadiendo configuración de Headers a nuestro servidor
5 min
### 095. Función para ejecutar el Enpoint y obtener todos los usuarios registrados
8 min
### 096. Endpoint para obtener usuarios Activado o Inactivos y recuperarlos en el cliente
12 min
### 097. Creando un Componente para mostrar usuarios activo o inactivos
13 min
### 098. Renderizando lista de usuarios Activos y Inactivos
16 min
### 099. Añadiendo Avatar al modelo de datos de usuarios en el server
1 min
### 100. Creando el componente Modal
7 min
### 101. Abriendo el Modal al hacer click en Editar, mostrando el componente EditUserForm
13 min
### 102. Usando React Dropzone para subir el avatar del usuario
16 min
### 103. 1/2 - Creando Formulario para editar los datos del usuario
12 min
### 104. 2/2 - Creando Formulario para editar los datos del usuario
13 min
### 105. 1/2 - Endpoint para subir la imagen al servidor
15 min
### 106. 2/2 - Endpoint para subir la imagen al servidor
14 min
### 107. Endpoint para recuperar la URL del avatar
9 min
### 108. Endpoint para actualizar el usuario
12 min
### 109. Creando funciones Subir Avatar, Obtener Avatar y Actualizar Usuario en cliente
12 min
### 110. Mostrando el Avatar del usuario si existe en la base de datos
18 min
### 111. 1/2 - Actualizando datos del usuario
9 min
### 112. 2/2 - Actualizando datos del usuario
14 min
### 113. Actualizar contraseña del usuario
8 min
### 114. Creando Endpoint para activar y desactivar usuarios
14 min
### 115. Añadiendo la funcionalidad de activar y desactivar usuario en el panel de admin
17 min
### 116. Creando Endpoint para eliminar usuarios
10 min
### 117. 1/2 - Añadiendo la funcionalidad para eliminar usuario en el panel de admin
11 min
### 118. 2/2 - Añadiendo la funcionalidad para eliminar usuario en el panel de admin
8 min
### 119. Creando Endpoint para crear usuarios desde el panel de Administrador
14 min
### 120. Añadiendo botón para crear nuevos usuarios
8 min
### 121. 1/2 - Formulario para crear nuevos usuarios
11 min
### 122. 2/2 - Formulario para crear nuevos usuarios
11 min
### 123. Creando la función para crear nuevos usuarios
7 min
### 124. Creando sección Menú Web en el panel de Administrador
5 min
### 125. Creando estructura del menú en el server
12 min
### 126. Endpoint para crear nuevos menús
7 min
### 127. Endpoint para obtener todos los menús
8 min
### 128. Obteniendo todos los menús en el client y listándolos
15 min
### 129. 1/2 - Listando Menús con acción de Drag and drop
10 min
### 130. 2/2 - Listando Menús con acción de Drag and drop
11 min
### 131. Endpoint para actualizar el orden de del menú
9 min
### 132. Actualizando el orden del menú en la BBDD cuando se cambie en el cliente
10 min
### 133. Endpoint para activar y desactivar cualquier menú
9 min
### 134. Añadiendo funcionalidad al Switch para activar o desactiva el menú
9 min
### 135. Añadiendo funcionalidad la botón de crear nuevo menú
14 min
### 136. Creando logica para crear nuevos menús
16 min
### 137. Creando formulario para editar cualquier menú
14 min
### 138. Logica para actualizar el menú que estamos editando
### 139. Endpoint para poder eliminar menús
### 140. Logica para hacer funcionar el botón de eliminar menú
### 141. Creando la estructura del menu web
### 142. Añadiendo el logo de la web al menú
### 143. Obteniendo el menu de la base de datos
### 144. Añadiendo Redes Sociales al menú
### 145. Creando el banner principal de la home page
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
