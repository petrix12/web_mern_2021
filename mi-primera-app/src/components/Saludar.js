export default function Saludar(props){
    console.log(props)

    return(
        <div>
            <h2>Hola {props.name}. Tienes {props.edad} años</h2>
        </div>
    )
}