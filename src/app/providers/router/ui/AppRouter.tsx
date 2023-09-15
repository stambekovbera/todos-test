import React from 'react';
import { PageLoader } from '@/widgets/PageLoader';
import { Route, Routes } from 'react-router-dom';
import { RouteConfig } from '@/shared/config/routeConfig/routeConfig.tsx';

const AppRouter = () => {
    return (
        <React.Suspense fallback={ <PageLoader/> }>
            <Routes>
                { Object.values( RouteConfig ).map( ({ path, element }) => (
                    <Route
                        key={ path }
                        path={ path }
                        element={ ( <div className="page-wrapper">{ element }</div> ) }
                    />
                ) ) }
            </Routes>
        </React.Suspense>
    );
};

export default AppRouter;
