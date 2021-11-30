import { useState, useEffect } from "react"
import { getAccessTokenApi } from "../../../api/auth"
import { getUsersActiveApi } from "../../../api/user"
import ListUsers from "../../../components/Admin/Users/ListUsers"
import "./Users.scss"

export default function Users() {
    const [usersActive, setUsersActive] = useState([])
    const [usersInactive, setUsersInactive] = useState([])
    /* const [reloadUsers, setReloadUsers] = useState(false) */
    const token = getAccessTokenApi()

    /* console.log('usersActive:' + usersActive)
    console.log('usersInactive:' + usersInactive) */

    useEffect(() => {
        getUsersActiveApi(token, true).then(response => {
            setUsersActive(response)
        })
        getUsersActiveApi(token, false).then(response => {
            setUsersInactive(response)
        })
        /*setReloadUsers(false)*/
    }, [token])

    return (
        <div className="users">
            <ListUsers usersActive={usersActive} usersInactive={usersInactive} /* setReloadUsers={setReloadUsers} */ />
        </div>
    )
}