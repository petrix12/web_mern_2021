import { useState, useEffect} from 'react'

export default function MenuWebList(props) {
    const { menu, setReloadMenuWeb } = props

    return (
        <div>
            <h1>Lista Menú web...</h1>
            {/* {menu.map(item => {
                return <p key={item._id}>{item.title}</p>
            })}  */}
        </div>
    )
}