/*
 * @Author: qsm 348867341@qq.com
 * @Date: 2023-08-07 04:35:15
 * @LastEditors: qsm 348867341@qq.com
 * @LastEditTime: 2023-08-07 04:41:24
 * @FilePath: /eslint-react-vite-ts-template/src/components/Layout/HeadRight/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Avatar, Badge, Button, Dropdown, Space, Input } from 'antd'
import { BellOutlined, SkinOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { shallow } from 'zustand/shallow'
import { useGlobalStore } from '@/stores'
import { useDebounceFn } from 'ahooks'
import styles from './index.module.less'

const HeaderRight = () => {
    const { primaryColor, setColor } = useGlobalStore(
        state => ({
            primaryColor: state.primaryColor,
            setColor: state.setColor
        }),
        shallow
    )

    const { run } = useDebounceFn(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setColor(e.target.value)
        },
        {
            wait: 500
        }
    )

    const items: MenuProps['items'] = [
        {
            key: '1',
            label: <span>退出登录</span>
        },
        {
            key: '2',
            label: '个人中心'
        }
    ]

    return (
        <Space size={20}>
            <span style={{ display: 'flex' }}>
                <Badge count={12}>
                    <BellOutlined style={{ fontSize: 24 }} />
                </Badge>
            </span>
            <div className={styles.skin}>
                <Button type='primary' shape='circle' icon={<SkinOutlined />} />
                <Input
                    type='color'
                    className={styles.skin_input}
                    defaultValue={primaryColor}
                    onChange={run}
                />
            </div>
            <Dropdown menu={{ items }} placement='bottomRight'>
                <Avatar
                    src='https://p3-passport.byteimg.com/img/user-avatar/36aebd145b4f04612071b7fd57e7ad85~64x64.awebp'
                    style={{ cursor: 'pointer' }}
                />
            </Dropdown>
        </Space>
    )
}

export default HeaderRight
