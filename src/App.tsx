/* eslint-disable @typescript-eslint/no-unsafe-call */
/*
 * @Author: qsm 348867341@qq.com
 * @Date: 2023-07-18 04:48:51
 * @LastEditors: qsm 348867341@qq.com
 * @LastEditTime: 2023-08-06 05:04:13
 * @FilePath: /eslint-react-vite-ts-template/src/App.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { RouterProvider } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import { useGlobalStore } from '@/stores'
import routers from './routes'
import dayjs from 'dayjs'
import zhCN from 'antd/locale/zh_CN'
import 'dayjs/locale/zh-cn'
import 'antd/dist/reset.css'

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
dayjs.locale('zh-cn')

const App = () => {
    const { primaryColor } = useGlobalStore()

    return (
        <ConfigProvider
            locale={zhCN}
            theme={{
                token: {
                    colorPrimary: primaryColor
                }
            }}
        >
            <RouterProvider router={routers} />
        </ConfigProvider>
    )
}

export default App
