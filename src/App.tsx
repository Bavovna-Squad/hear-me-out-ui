import { Layout } from 'antd';
import { Button } from 'antd';
import { Typography } from 'antd';
import React, { FunctionComponent } from 'react';

const { Header } = Layout;

export const App: FunctionComponent = () => {
    return (
        <Layout>
            <Header style={{ textAlign: 'center' }}>
                <Button type="text" size="large" style={{ textTransform: 'uppercase' }}>
                    <Typography style={{ fontWeight: 'bold' }}>
                        Hear Me <span className="sexy-style">Out</span>
                    </Typography>
                </Button>
            </Header>
        </Layout>
    );
};
