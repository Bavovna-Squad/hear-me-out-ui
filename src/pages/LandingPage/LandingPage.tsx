import React, { FunctionComponent } from 'react';
import './LandingPage.css';
import { Button, Card, Typography } from 'antd';
import { CaretRightFilled, SmileTwoTone } from '@ant-design/icons';
import { MainLayout } from '../../layouts/MainLayout';
import { useNavigate } from 'react-router-dom';
import { routePaths } from '../../constants/routes';

const { Title } = Typography;

export const LandingPage: FunctionComponent = () => {
    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate(routePaths.home);
    };

    return (
        <MainLayout>
            <section className="max-w-[800px] text-center mx-auto pt-16 px-4">
                <Title>
                    Don't know what to do? <br />
                    Try to <span className="hmo-accented-text">guess a song</span>
                </Title>
                <Title level={5}>
                    Hear Me Out is a mini-game, that brings fun and cool experience to you,
                    especially when you want to guess some songs
                </Title>
                <Button
                    size="large"
                    shape="circle"
                    type="primary"
                    className="!w-[80px] !h-[80px] !m-8"
                    icon={<CaretRightFilled className="!text-[35px]" />}
                    onClick={navigateToHome}
                >
                </Button>
            </section>
            <section
                className="max-w-[800px] text-center mx-auto px-4 pt-4 pb-4"
            >
                <Title level={2}>
                    Just look what our game will bring
                    to <span className="hmo-accented-text">you!</span>
                </Title>
                <div className="landing-grid">
                    <Card
                        title={
                            <div className="flex items-center justify-center gap-2">
                                <SmileTwoTone className="text-[2rem]" />
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
                            <div className="flex items-center justify-center gap-2">
                                <SmileTwoTone className="text-[2rem]" />
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
                            <div className="flex items-center justify-center gap-2">
                                <SmileTwoTone className="text-[2rem]" />
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
