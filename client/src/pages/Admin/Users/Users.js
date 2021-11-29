import { useState, useEffect } from "react"
import { getAccessTokenApi } from "../../../api/auth"
import { getUsersApi } from "../../../api/user"
/*import ListUsers from "../../../components/Admin/Users/ListUsers"*/
import "./Users.scss"

export default function Users() {
    const [users, setUsers] = useState([])
    /* const [usersInactive, setUsersInactive] = useState([])
    const [reloadUsers, setReloadUsers] = useState(false) */
    const token = getAccessTokenApi()
    console.log(users)

    useEffect(() => {
        getUsersApi(token).then(response => {
            setUsers(response)
        })
/*        getUsersActiveApi(token, false).then(response => {
            setUsersInactive(response.users)
        })
        setReloadUsers(false)*/
    }, [token])

    return (
        <div>
            <h1>Lista de usuarios</h1>
            
        {/* <div className="users">
            <ListUsers
                usersActive={usersActive}
                usersInactive={usersInactive}
                setReloadUsers={setReloadUsers}
            />
        </div> */}
        </div>
    )
}