import React, { FunctionComponent, useState } from 'react';
import { MainLayout } from '../../../layouts/MainLayout';
import { Button, message, Steps } from 'antd';
import { Form, Input } from 'antd';

export const NewChallengePage: FunctionComponent = () => {
    const steps = [
        {
            title: 'Description',
            content: (
                <div className="pt-12 mx-auto">
                    <Form.Item
                        name={['user', 'name']}
                        label="Title"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 8 }}
                        rules={[{ required: true }]}
                    >
                        <Input className="grid grid-cols-[1fr_2fr_1fr]" />
                    </Form.Item>
                    <Form.Item
                        name={['user', 'description']}
                        label="Description"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 8 }}
                    >
                        <Input.TextArea />
                    </Form.Item>
                </div>
            )
        },
        {
            title: 'Songs',
            content: 'Second-content'
        },
        {
            title: 'Limitations',
            content: 'Last-content'
        }
    ];

    const [current, setCurrent] = useState(0);

    const next = () => setCurrent(current + 1);
    const prev = () => setCurrent(current - 1);
    const items = steps.map(item => ({ key: item.title, title: item.title }));

    return (
        <MainLayout>
            <section className="container max-w-[800px] pt-8 mx-auto">
                <Form name="challenge">
                    <Steps current={current} items={items} />
                    <div className="steps-content">{steps[current].content}</div>
                    <div className="steps-action flex justify-center">
                        {current > 0 && (
                            <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                                Previous
                            </Button>
                        )}
                        {current < steps.length - 1 && (
                            <Button type="primary" onClick={() => next()}>
                                Next
                            </Button>
                        )}
                        {current === steps.length - 1 && (
                            <Button
                                type="primary"
                                onClick={() => message.success('Processing complete!')}
                            >
                                Done
                            </Button>
                        )}
                    </div>
                </Form>
            </section>
        </MainLayout>
    );
};
