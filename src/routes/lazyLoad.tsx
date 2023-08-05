/*
 * @Author: qsm 348867341@qq.com
 * @Date: 2023-08-06 05:39:47
 * @LastEditors: qsm 348867341@qq.com
 * @LastEditTime: 2023-08-06 05:42:31
 * @FilePath: /eslint-react-vite-ts-template/src/routes/lazyLoad.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Suspense } from 'react'
import { Spin } from 'antd'

// Suspense只需要包裹懒加载的组件即可 不需要全局包裹
const lazyLoad = (Component: React.LazyExoticComponent<() => JSX.Element>) => {
    return (
        <Suspense
            fallback={
                <Spin
                    size='large'
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                />
            }
        >
            <Component />
        </Suspense>
    )
}

export default lazyLoad
