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