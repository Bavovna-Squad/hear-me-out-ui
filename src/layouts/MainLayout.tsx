import React, { FunctionComponent, ReactNode } from 'react';
import { Avatar, Button, Layout, Tooltip, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { routePaths } from '../constants/routes';
import { PlusOutlined, SearchOutlined } from '@ant-design/icons';

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
            <Header className="grid grid-cols-2 md:grid-cols-3 place-items-center z-10 !px-4">
                <Button
                    type="text"
                    size="large"
                    onClick={navigateToRoot}
                    className="justify-self-start md:justify-self-center md:col-start-2 uppercase"
                >
                    <Typography className="font-bold">
                        Hear Me <span className="hmo-accented-text">Out</span>
                    </Typography>
                </Button>
                <div className="flex gap-3 justify-self-end pr-2">
                    <Tooltip title="search">
                        <Button shape="circle" icon={<SearchOutlined />} />
                    </Tooltip>
                    <Tooltip title="create">
                        <Button shape="circle" icon={<PlusOutlined />} />
                    </Tooltip>
                    <Avatar gap={4} className="!bg-emerald-500">U</Avatar>
                </div>
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
