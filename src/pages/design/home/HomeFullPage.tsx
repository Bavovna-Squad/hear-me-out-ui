import React, { FunctionComponent } from 'react';
import { MainLayout } from '../../../layouts/MainLayout';
import { Avatar, Card, Divider, Tag, Typography } from 'antd';
import { DeleteOutlined, EllipsisOutlined, PlayCircleOutlined } from '@ant-design/icons';

const { Title } = Typography;
const { Meta } = Card;

export const HomeFullPage: FunctionComponent = () => {
    return (
        <MainLayout>
            <section className="container flex flex-col gap-8 pt-12 pb-4 mx-auto">
                <Title level={3} className="text-center">
                    Hello, <span className="hmo-accented-text">FirstName LastName!</span> Ready to
                    guess?
                </Title>
                <section className="grid place-items-center grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
                    {Array.from({ length: 8 }).map(() => {
                        return (
                            <Card
                                style={{ width: 300, marginTop: 16 }}
                                actions={[
                                    <PlayCircleOutlined key="play" />,
                                    <DeleteOutlined key="delete" />,
                                    <EllipsisOutlined key="ellipsis" />
                                ]}
                            >
                                <Meta
                                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                                    title="Challenge title"
                                    description="Created by ..."
                                />
                                <Divider />
                                Challenge description
                                <Divider />
                                <div className="flex flex-wrap gap-2">
                                    <Tag color="lime">property</Tag>
                                    <Tag color="red">property</Tag>
                                    <Tag color="cyan">property</Tag>
                                    <Tag color="gold">property</Tag>
                                    <Tag color="geekblue">property</Tag>
                                </div>
                            </Card>
                        );
                    })}
                </section>
            </section>
        </MainLayout>
    );
};
