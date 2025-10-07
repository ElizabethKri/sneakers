import {createBrowserRouter,} from "react-router-dom";
import {Error404} from "../components/pages/Error404.tsx";
import {PageOne} from "../components/pages/PageOne.tsx";
import {PageTwo} from "../components/pages/PageTwo.tsx";
import {PageThree} from "../components/pages/PageThree.tsx";
import {Prices} from "../components/pages/Prices.tsx";
import {App} from "../App.tsx";
import Models from "../components/pages/models/Models.tsx";

const PATH = {
    ADIDAS: '/adidas',
    PUMA: '/puma',
    ABIBAS: '/abibas',
    ERROR: '/error404',
    PRICE: '/price',
    MODEL: '/:model/:id'
} as const

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/> ,
        errorElement: <Error404/>,
        children: [
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

        ]
    }
]);

