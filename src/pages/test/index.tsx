import { useEffect } from 'react'
import api from '@/api/demo'

/*
 * @Author: qsm 348867341@qq.com
 * @Date: 2023-07-18 03:13:29
 * @LastEditors: qsm 348867341@qq.com
 * @LastEditTime: 2023-08-11 07:50:02
 * @FilePath: /eslint-react-vite-ts-template/src/App.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
function App() {
    useEffect(() => {
        api.postDemoApi().then(res => {
            console.log(111, res)
        })
    }, [])

    return (
        <div className='text-sky-400/100 w-[10px] text-3xl font-bold underline text-cyan-100'>
            22222
        </div>
    )
}

export default App
