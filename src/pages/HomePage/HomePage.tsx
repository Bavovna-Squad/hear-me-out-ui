import React, { FunctionComponent } from 'react';
import { Typography, Empty, Button, Tooltip } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { MainLayout } from '../../layouts/MainLayout';

const { Title } = Typography;

export const HomePage: FunctionComponent = () => {
    return (
        <MainLayout>
            <section className="container flex flex-col gap-8 pt-12 pb-4 mx-auto">
                <Title level={3} className="text-center">
                    Hello, <span className="hmo-accented-text">FirstName LastName!</span> Ready to
                    guess?
                </Title>
                <Empty
                    description={<span>You don't have any saved challenges yet.</span>}
                >
                    <Tooltip title="search">
                        <Button
                            shape="circle"
                            type="dashed"
                            icon={<SearchOutlined />}
                            size="large"
                        />
                    </Tooltip>
                </Empty>
            </section>
        </MainLayout>
    );
};
