import React, { FunctionComponent, ReactNode } from 'react';
import { Button, Layout, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Header, Content } = Layout;

type MainLayoutProps = {
    children: ReactNode
}

export const MainLayout: FunctionComponent<MainLayoutProps> = ({ children }) => {
    const navigate = useNavigate();

    const navigateToRoot = () => {
        navigate('/');
    };

    return (
        <Layout>
            <Header style={{ textAlign: 'center' }}>
                <Button
                    type="text"
                    size="large"
                    onClick={navigateToRoot}
                    style={{ textTransform: 'uppercase' }}
                >
                    <Typography style={{ fontWeight: 'bold' }}>
                        Hear Me <span className="sexy-style">Out</span>
                    </Typography>
                </Button>
            </Header>
            <Content>
                {children}
            </Content>
        </Layout>
    );
};
