import { Typography } from 'antd';
import React, { FunctionComponent } from 'react';

const { Title } = Typography;

export const App: FunctionComponent = () => {
    return (
        <main>
            <Title style={{ textAlign: 'center', padding: '1em' }}>Hear Me Out!</Title>
        </main>
    );
};
