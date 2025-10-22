import {createBrowserRouter, Navigate, Outlet, RouteObject} from "react-router-dom";
import {Error404} from "../components/pages/Error404.tsx";
import {PageOne} from "../components/pages/PageOne.tsx";
import {PageTwo} from "../components/pages/PageTwo.tsx";
import {PageThree} from "../components/pages/PageThree.tsx";
import {Prices} from "../components/pages/Prices.tsx";
import {App} from "../App.tsx";
import Models from "../components/pages/models/Models.tsx";
import ProtectedPage from "../components/pages/ProtectedPage.tsx";
import Login from "../components/pages/models/Login.tsx";

const PATH = {
    ADIDAS: '/adidas',
    PUMA: '/puma',
    ABIBAS: '/abibas',
    ERROR: '/error404',
    PRICE: '/price',
    MODEL: '/:model/:id',
    LOGIN: '/login',
    ProtectedPage: '/ProtectedPage',

} as const

const publicRoute: RouteObject[] = [
    {
        path: PATH.ADIDAS,
        element: <PageOne />,
    },
    {
        path: PATH.PUMA,
        element: <PageTwo />,
    },
    {
        path: PATH.ABIBAS,
        element: <PageThree />,
    },
    {
        path: PATH.PRICE,
        element: <Prices />,
    },
    {
        path: PATH.MODEL,
        element: <Models />,
    },

    {
        path: PATH.ERROR,
        element: <Error404 />,
    },

    {
        path: PATH.LOGIN,
        element: <Login />,
    },
]

const privateRoute: RouteObject[] = [
    {
        path: PATH.ProtectedPage,
        element:  <ProtectedPage />
    },
]

export const PrivateRoute = () => {
    const isAuth = true
    return isAuth ? <Outlet/> : <Navigate to = {'/login'} />
};

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/> ,
        errorElement: <Navigate to={PATH.ERROR}/>,
        children: [
            {
                element: <PrivateRoute/>,
                children: privateRoute
            },
            ...publicRoute,
        ]
    }
]);

