import React, { FunctionComponent } from 'react';
import { RecoilRoot } from 'recoil';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routePaths } from './constants/routes';
import { DesignTableOfContents } from './pages/DesignTableOfContents';
import { LandingPage } from './pages/design/landing/LandingPage';
import { HomeEmptyPage } from './pages/design/home/HomeEmptyPage';
import { HomeFullPage } from './pages/design/home/HomeFullPage';
import { NotFoundPage } from './pages/design/not-found/NotFoundPage';

const router = createBrowserRouter([
    {
        path: routePaths.root,
        element: <DesignTableOfContents />,
    },
    {
        path: routePaths.landingAlternative,
        element: <LandingPage />
    },
    {
        path: '/home-empty',
        element: <HomeEmptyPage />
    },
    {
        path: '/home-full',
        element: <HomeFullPage />
    },
    {
        path: '/not-found-page',
        element: <NotFoundPage />
    },
    {
        path: '*',
        element: <NotFoundPage />
    }
]);

export const App: FunctionComponent = () => {
    return (
        <RecoilRoot>
            <RouterProvider router={router} fallbackElement={<NotFoundPage />} />
        </RecoilRoot>
    );
};
