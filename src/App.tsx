import React, { FunctionComponent } from 'react';
import { RecoilRoot } from 'recoil';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { routePaths } from './constants/routes';

const router = createBrowserRouter([
    {
        path: routePaths.root,
        element: <LandingPage />
    },
    {
        path: routePaths.landingAlternative,
        element: <LandingPage />
    }
]);

export const App: FunctionComponent = () => {
    return (
        <RecoilRoot>
            <RouterProvider router={router} />
        </RecoilRoot>
    );
};
