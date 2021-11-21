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