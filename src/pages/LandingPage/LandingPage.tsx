import React, { FunctionComponent } from 'react';
import './LandingPage.css';
import { Button, Card, Typography } from 'antd';
import { CaretRightFilled, SmileTwoTone } from '@ant-design/icons';
import { MainLayout } from '../../layouts/MainLayout';

const { Title } = Typography;

export const LandingPage: FunctionComponent = () => {
    return (
        <MainLayout>
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
                <div className="landing-grid">
                    <Card
                        title={
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '0.5em'
                                }}
                            >
                                <SmileTwoTone style={{ fontSize: '2em' }} />
                                <Typography>Fun</Typography>
                            </div>
                        }
                    >
                        <Typography>
                            All sadness will go away. Don't believe us? Try yourself!
                        </Typography>
                    </Card>
                    <Card
                        title={
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '0.5em'
                                }}
                            >
                                <SmileTwoTone style={{ fontSize: '2em' }} />
                                <Typography>Fun</Typography>
                            </div>
                        }
                    >
                        <Typography>
                            All sadness will go away. Don't believe us? Try yourself!
                        </Typography>
                    </Card>
                    <Card
                        title={
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '0.5em'
                                }}
                            >
                                <SmileTwoTone style={{ fontSize: '2em' }} />
                                <Typography>Fun</Typography>
                            </div>
                        }
                    >
                        <Typography>
                            All sadness will go away. Don't believe us? Try yourself!
                        </Typography>
                    </Card>
                </div>
            </section>
        </MainLayout>
    );
};
