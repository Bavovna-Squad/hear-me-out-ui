import { Card, Layout } from 'antd';
import { Button } from 'antd';
import { Typography } from 'antd';
import { CaretRightFilled, SmileTwoTone } from '@ant-design/icons';
import React, { FunctionComponent } from 'react';

const { Header, Content } = Layout;
const { Title } = Typography;

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
            <Content>
                <section
                    style={{
                        margin: '0 auto',
                        maxWidth: '800px',
                        textAlign: 'center',
                        padding: '5em 1em 1em 1em'
                    }}
                >
                    <Title>
                        Don't know what to do? <br />
                        Try to <span className="sexy-style">guess a song</span>
                    </Title>
                    <Title level={5}>
                        Hear Me Out is a mini-game, that brings fun and cool experience to you,
                        especially when you want to guess some songs
                    </Title>
                    <Button
                        size="large"
                        shape="circle"
                        type="primary"
                        icon={<CaretRightFilled style={{ fontSize: '35px' }} />}
                        style={{
                            width: '80px',
                            height: '80px',
                            margin: '2em'
                        }}
                    >
                    </Button>
                </section>
                <section
                    style={{
                        margin: '0 auto',
                        maxWidth: '800px',
                        textAlign: 'center',
                        padding: '0em 1em 1em 1em'
                    }}
                >
                    <Title level={2}>
                        Just look what our game will bring to <span className="sexy-style">you!</span>
                    </Title>
                    <div
                        style={{
                            marginTop: '2em',
                            display: 'grid',
                            gridTemplateColumns: 'repeat(3, 1fr)',
                            gap: '1.5em'
                        }}
                    >
                        <Card
                            title={
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5em' }}>
                                    <SmileTwoTone style={{ fontSize: '2em' }} />
                                    <Typography>Fun</Typography>
                                </div>
                            }
                        >
                            <Typography>All sadness will go away. Don't believe us? Try yourself!</Typography>
                        </Card>
                        <Card
                            title={
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5em' }}>
                                    <SmileTwoTone style={{ fontSize: '2em' }} />
                                    <Typography>Fun</Typography>
                                </div>
                            }
                        >
                            <Typography>All sadness will go away. Don't believe us? Try yourself!</Typography>
                        </Card>
                        <Card
                            title={
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5em' }}>
                                    <SmileTwoTone style={{ fontSize: '2em' }} />
                                    <Typography>Fun</Typography>
                                </div>
                            }
                        >
                            <Typography>All sadness will go away. Don't believe us? Try yourself!</Typography>
                        </Card>
                    </div>
                </section>
            </Content>
        </Layout>
    );
};
