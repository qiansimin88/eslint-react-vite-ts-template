/*
 * @Author: qsm 348867341@qq.com
 * @Date: 2023-08-07 04:57:43
 * @LastEditors: qsm 348867341@qq.com
 * @LastEditTime: 2023-10-25 03:41:31
 * @FilePath: /eslint-react-vite-ts-template/src/components/Layout/ErrorBoundary/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useRouteError } from 'react-router-dom'

const ErrorBoundary = () => {
    const error = useRouteError() as any

    return (
        <div style={{ padding: '12px' }}>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i style={{ color: 'red' }}>{error?.statusText || error?.message}</i>
            </p>
        </div>
    )
}

export default ErrorBoundary
