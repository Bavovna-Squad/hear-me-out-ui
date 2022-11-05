import React, { FunctionComponent } from 'react';
import { MainLayout } from '../../../layouts/MainLayout';
import { Avatar, Card, Divider, List, Statistic, Tag } from 'antd';
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
            <section className="flex flex-col px-4 gap-6">
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
                            <div className="flex justify-around flex-col gap-2 sm:flex-row sm:gap-0">
                                <Statistic title="Total songs" value={60} />
                                <Statistic title="Total authors" value={20} />
                                <Statistic title="Attempts" value="5 per day" />
                            </div>
                            <Divider />
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad beatae
                            dolorum ducimus fuga harum id ipsam maxime molestias natus placeat
                            <Divider />
                            <div className="flex flex-wrap gap-2">
                                <Tag color="lime">Rock</Tag>
                                <Tag color="red">Metal</Tag>
                                <Tag color="cyan">Metalcore</Tag>
                                <Tag color="gold">Hard rock</Tag>
                                <Tag color="geekblue">Ambient</Tag>
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
