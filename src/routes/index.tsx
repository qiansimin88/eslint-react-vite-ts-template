/*
 * @Author: qsm 348867341@qq.com
 * @Date: 2023-08-06 03:39:24
 * @LastEditors: qsm 348867341@qq.com
 * @LastEditTime: 2023-08-06 05:56:00
 * @FilePath: /eslint-react-vite-ts-template/src/routes/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// src/router/index.tsx
import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'
import lazyLoad from './lazyLoad' // 懒加载Suspense组件

export const Test: React.LazyExoticComponent<() => JSX.Element> = lazy(() => import('@/pages/test'))

const routes: RouteObject[] = [
    {
        path: '/',
        children: [
            {
                path: 'test',
                element: lazyLoad(Test)
            }
        ]
    }
]

const routers = createBrowserRouter(routes, {
    basename: '/'
})

export default routers
