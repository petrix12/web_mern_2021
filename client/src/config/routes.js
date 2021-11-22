// Layout
import LayoutAdmin from "../layouts/LayoutAdmin"

// Admin Pages
import AdminHome from "../pages/Admin"
import AdminSingIn from "../pages/Admin/SignIn"

// Sistema de rutas
const routes = [
    {
        path: "/admin",
        component: LayoutAdmin,
        exact: false,
        routes: [
            {
                path: "/admin",
                component: AdminHome, 
                exact: true
            },
            {
                path: "/admin/login",
                component: AdminSingIn, 
                exact: true
            }
        ]
    }
]

export default routes