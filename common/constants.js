import { lazy } from "react";

export const Routes = [
    {
        name: 'Home',
        title: 'Home',
        icon: 'ios-home',
        conponent: lazy(() => import('../screens/Home'))
    },
    {
        name: 'Expenses',
        title: 'Expenses',
        
        icon: 'ios-cart',
        conponent: lazy(() => import('../screens/Expenses'))

    },
    {
        name: 'Todos',
        title: 'Todos',
        icon: 'ios-list',
        conponent: lazy(() => import('../screens/Todos'))

    },
    {
        name: 'Projects',
        title: 'Projects',
        icon: 'ios-calendar',
        conponent: lazy(() => import('../screens/Projects'))

    }
]