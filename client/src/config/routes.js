// Layout
import LayoutAdmin from "../layouts/LayoutAdmin"
import LayoutBasic from "../layouts/LayoutBasic"


// Admin Pages
import AdminHome from "../pages/Admin"
import AdminSingIn from "../pages/Admin/SignIn"

// Pages
import Home from '../pages/Home'
import Contact from '../pages/Contact'

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
    },
    {
        path: "/",
        component: LayoutBasic,
        exact: false,
        routes: [
            {
                path: "/",
                component: Home, 
                exact: true
            },
            {
                path: "/contact",
                component: Contact, 
                exact: true
            }
        ]

    }
]

export default routes