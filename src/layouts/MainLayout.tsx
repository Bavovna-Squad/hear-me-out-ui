import React, { FunctionComponent, ReactNode } from 'react';
import { Button, Layout, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { routePaths } from '../constants/routes';

const { Header, Content, Footer } = Layout;

type MainLayoutProps = {
    children: ReactNode
}

export const MainLayout: FunctionComponent<MainLayoutProps> = ({ children }) => {
    const navigate = useNavigate();

    const navigateToRoot = () => {
        navigate(routePaths.root);
    };

    return (
        <Layout className="grid grid-rows-[auto 1fr auto] !min-h-full">
            <Header style={{ textAlign: 'center' }}>
                <Button
                    type="text"
                    size="large"
                    onClick={navigateToRoot}
                    className="uppercase"
                >
                    <Typography className="font-bold">
                        Hear Me <span className="hmo-accented-text">Out</span>
                    </Typography>
                </Button>
            </Header>
            <Content>
                {children}
            </Content>
            <Footer className="text-center">
                Hear Me Out ©2022 Created by Bavovna Squad
            </Footer>
        </Layout>
    );
};
