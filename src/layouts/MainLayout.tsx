import React, { FunctionComponent, ReactNode } from 'react';
import { Button, Layout, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { routePaths } from '../constants/routes';

const { Header, Content } = Layout;

type MainLayoutProps = {
    children: ReactNode
}

export const MainLayout: FunctionComponent<MainLayoutProps> = ({ children }) => {
    const navigate = useNavigate();

    const navigateToRoot = () => {
        navigate(routePaths.root);
    };

    return (
        <Layout>
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
        </Layout>
    );
};
