/*
 * @Author: qsm 348867341@qq.com
 * @Date: 2023-08-07 03:36:03
 * @LastEditors: qsm 348867341@qq.com
 * @LastEditTime: 2023-08-07 04:40:35
 * @FilePath: /eslint-react-vite-ts-template/src/components/Layout/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

// 总体布局
import React, { useState } from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import { HomeFilled, ShoppingFilled, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import { Button, Layout, Menu, Row, Col, Typography } from 'antd'
import type { MenuProps } from 'antd'
import HeaderRight from './HeadRight'

const { Header, Sider, Content } = Layout

const items: MenuProps['items'] = [
    {
        label: 'home',
        path: '/home',
        icon: HomeFilled
    },
    {
        label: 'about',
        path: '/about',
        icon: ShoppingFilled
    },
    {
        label: 'hot news',
        path: '/hotnews',
        icon: ShoppingFilled
    }
].map(nav => ({
    key: nav.path,
    icon: React.createElement(nav.icon),
    label: nav.label
}))

const BasicLayout = () => {
    const navigate = useNavigate()
    const { pathname } = useLocation()

    const [collapsed, setCollapsed] = useState(false)

    const handleMenuClick: MenuProps['onClick'] = ({ key }) => {
        navigate(key)
    }

    return (
        <Layout style={{ height: '100vh' }}>
            <Sider trigger={null} collapsible collapsed={collapsed} theme='light'>
                <div
                    style={{
                        height: 32,
                        margin: 16,
                        background: 'rgba(0, 0, 0, 0.2)',
                        zIndex: 200
                    }}
                >
                    logo区域
                </div>
                <Menu
                    mode='inline'
                    defaultSelectedKeys={[pathname]}
                    items={items}
                    onClick={handleMenuClick}
                />
            </Sider>
            <Layout style={{ display: 'flex', flexDirection: 'column' }}>
                <Header style={{ background: '#fff', padding: 0 }}>
                    <Row justify='space-between' align='middle' style={{ paddingRight: '24px' }}>
                        <Col>
                            <Button
                                type='text'
                                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                                onClick={() => setCollapsed(!collapsed)}
                                style={{
                                    fontSize: '16px',
                                    width: 64,
                                    height: 64
                                }}
                            />
                        </Col>
                        <Col>
                            <Typography.Text strong style={{ fontSize: 18 }}>
                                react-template-admin
                            </Typography.Text>
                        </Col>
                        <Col style={{ display: 'flex' }}>
                            <HeaderRight />
                        </Col>
                    </Row>
                </Header>
                <Content
                    style={{ padding: '16px', flex: 1, overflowY: 'auto', background: '#fff' }}
                >
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    )
}

export default BasicLayout
