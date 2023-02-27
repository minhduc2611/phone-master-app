import { lazy } from "react";

export const Routes = [
    {
        name: 'Home',
        title: 'Home',
        conponent: lazy(() => import('../screens/Home'))
    },
    {
        name: 'Expenses',
        title: 'Expenses',
        conponent: lazy(() => import('../screens/Expenses'))

    },
    {
        name: 'Todos',
        title: 'Todos',
        conponent: lazy(() => import('../screens/Todos'))

    }
]