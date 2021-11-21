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