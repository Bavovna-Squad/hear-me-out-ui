import React, { FunctionComponent } from 'react';
import { Layout } from 'antd';
import { Button } from 'antd';
import { Typography } from 'antd';
import { RecoilRoot } from 'recoil';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';

const { Header, Content } = Layout;

const router = createBrowserRouter([
    {
        path: '/',
        element: <LandingPage />
    },
    {
        path: '/landing',
        element: <LandingPage />
    }
]);

export const App: FunctionComponent = () => {
    return (
        <RecoilRoot>
            <Layout>
                <Header style={{ textAlign: 'center' }}>
                    <Button type="text" size="large" style={{ textTransform: 'uppercase' }}>
                        <Typography style={{ fontWeight: 'bold' }}>
                            Hear Me <span className="sexy-style">Out</span>
                        </Typography>
                    </Button>
                </Header>
                <Content>
                    <RouterProvider router={router} />
                </Content>
            </Layout>
        </RecoilRoot>
    );
};
