import React, { FunctionComponent } from 'react';
import { Empty, Typography } from 'antd';
import { MainLayout } from '../../../layouts/MainLayout';

const { Title } = Typography;

export const NotFoundPage: FunctionComponent = () => {
    return (
        <MainLayout>
            <section className="max-w-[800px] text-center mx-auto pt-16 px-4">
                <Empty
                    description={
                        <Title>
                            Oops, this <span className="hmo-accented-text">page</span> wasn't found
                        </Title>
                    }
                />
            </section>
        </MainLayout>
    );
};
