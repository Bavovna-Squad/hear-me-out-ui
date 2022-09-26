import React, { FunctionComponent } from 'react';
import { RecoilRoot } from 'recoil';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { routePaths } from './constants/routes';
import { HomePage } from './pages/HomePage';

const router = createBrowserRouter([
    {
        path: routePaths.root,
        element: <LandingPage />
    },
    {
        path: routePaths.landingAlternative,
        element: <LandingPage />
    },
    {
        path: routePaths.home,
        element: <HomePage />
    }
]);

export const App: FunctionComponent = () => {
    return (
        <RecoilRoot>
            <RouterProvider router={router} />
        </RecoilRoot>
    );
};
