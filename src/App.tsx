import React, { FunctionComponent } from 'react';
import { RecoilRoot } from 'recoil';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LandingPage } from './pages/design/landing/LandingPage';
import { routePaths } from './constants/routes';
import { HomeEmptyPage } from './pages/design/home/HomeEmptyPage';

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
        path: '/home-empty',
        element: <HomeEmptyPage />
    }
]);

export const App: FunctionComponent = () => {
    return (
        <RecoilRoot>
            <RouterProvider router={router} />
        </RecoilRoot>
    );
};
