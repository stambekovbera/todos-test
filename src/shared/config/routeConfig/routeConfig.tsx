import { MainPage } from '@/pages';
import { Navigate, RouteProps } from 'react-router-dom';

export type Routes = 'main' | 'not_found';

export const RoutePath: Record<Routes, string> = {
    main: '/',
    not_found: '*',
};

export const RouteConfig: Record<Routes, RouteProps> = {
    main: {
        path: RoutePath.main,
        element: (
            <MainPage/>
        ),
    },
    not_found: {
        path: RoutePath.not_found,
        element: (
            <Navigate
                to={ RoutePath.main }
                replace
            />
        ),
    },
};
