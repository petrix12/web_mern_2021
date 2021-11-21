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