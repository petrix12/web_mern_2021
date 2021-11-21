export default function Saludar(props){
    const { userInfo, saludarFn} = props
    const { nombre = "Petrix", edad } = userInfo
    console.log(props)
    console.log(userInfo)
    console.log(saludarFn)

    return(
        <div>
            <button onClick={() => saludarFn(nombre, edad)}>Saludar</button>
        </div>
    )
}