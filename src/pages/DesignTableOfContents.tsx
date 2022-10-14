import React, { FunctionComponent } from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { MainLayout } from '../layouts/MainLayout';
import { LinkOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key?: React.Key | null,
    icon?: React.ReactNode,
    children?: MenuItem[]
): MenuItem {
    return {
        key,
        icon,
        children,
        label
    } as MenuItem;
}

export const DesignTableOfContents: FunctionComponent = () => {
    const homePageMenuItems = [
        getItem(
            <Link to="/home-empty">Home Empty</Link>,
            'home-empty',
            <LinkOutlined />)
    ];

    const menuItems = [
        getItem(
            <Link to="/landing">Landing</Link>,
            'landing',
            <LinkOutlined />),
        getItem('Home', 'home', <MenuUnfoldOutlined />, homePageMenuItems),
        getItem(
            <Link to="/not-found-page">Not Found Page</Link>,
            'not-found-page',
            <LinkOutlined />)
    ] as MenuItem[];

    return (
        <MainLayout>
            <Menu
                mode="inline"
                items={menuItems}
            />
        </MainLayout>
    );
};
