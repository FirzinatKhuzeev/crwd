import Home from "../components/Home";
import Shop from "../components/Shop";
import Contacts from "../components/Contacts";
import Auth from "../components/Auth";
import Checkout from "../components/Checkout";

export const NavigationRoutes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/shop',
        component: Shop
    },
    {
        path: '/contact',
        component: Contacts,
    },
    {
        path: '/signin',
        component: Auth,
    },
    {
        path: '/checkout',
        component: Checkout
    }
];