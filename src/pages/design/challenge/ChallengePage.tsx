import React, { FunctionComponent } from 'react';
import { MainLayout } from '../../../layouts/MainLayout';
import { Avatar, Card, Divider, List, Tag } from 'antd';
import {
    DeleteOutlined,
    EllipsisOutlined,
    PlayCircleOutlined,
} from '@ant-design/icons';

const { Meta } = Card;

export const ChallengePage: FunctionComponent = () => {
    const data = [
        {
            author: 'Song Author',
            title: 'Song Title'
        },
        {
            author: 'Song Author',
            title: 'Song Title'
        },
        {
            author: 'Song Author',
            title: 'Song Title'
        },
        {
            author: 'Song Author',
            title: 'Song Title'
        },
        {
            author: 'Song Author',
            title: 'Song Title'
        },
    ];

    return (
        <MainLayout>
            <section className="flex flex-col gap-6">
                <div className="relative flex justify-center align-center">
                    <div className="max-w-[500px] py-4 my-4 mx-auto relative z-10">
                        <Card
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
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad beatae
                            dolorum ducimus fuga harum id ipsam maxime molestias natus placeat
                            <Divider />
                            <div className="flex flex-wrap gap-2">
                                <Tag color="lime">property</Tag>
                                <Tag color="red">property</Tag>
                                <Tag color="cyan">property</Tag>
                                <Tag color="gold">property</Tag>
                                <Tag color="geekblue">property</Tag>
                            </div>
                        </Card>
                    </div>
                </div>
                <div className="container max-w-[800px] mx-auto">
                    <List
                        itemLayout="horizontal"
                        dataSource={data}
                        renderItem={item => (
                            <List.Item
                                actions={[<span>open</span>]}
                            >
                                <List.Item.Meta
                                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                                    title={<a href="https://ant.design">{item.author}</a>}
                                    description={item.title}
                                />
                            </List.Item>
                        )}
                    />
                </div>
            </section>
        </MainLayout>
    );
};
