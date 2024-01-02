import { useState } from 'react'
// import api from '@/api/demo'
// import Styles from './index.module.less'
// import useCountdown from '@/components/hook/useCountdown.ts'
/*
 * @Author: qsm 348867341@qq.com
 * @Date: 2023-07-18 03:13:29
 * @LastEditors: qsm 348867341@qq.com
 * @LastEditTime: 2023-11-01 04:30:24
 * @FilePath: /eslint-react-vite-ts-template/src/App.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
function App() {
    const [value, setValue] = useState(100)
    function clickHandler() {
        // 1.传入常量，state会合并
        setValue(value + 1)
        setValue(value + 1)
        console.log(1, value) // 100
        // 2.传入函数，state不会合并
        setValue(value => value + 1)
        // setValue(value => value + 1)
        console.log(2, value) // 100

        // // 3.setTimeout中，React18也开始合并state（之前版本会同步更新、不合并）
        setTimeout(() => {
            setValue(value + 1)
            setValue(value + 1)
            setValue(value + 1)
            console.log(3, value) // 100
        })

        // // 4.同理 setTimeout中，传入函数不合并
        setTimeout(() => {
            setValue(value => value + 1)
            setValue(value => value + 1)
            console.log(4, value) // 100
        })
    }
    return <button onClick={clickHandler}>点击 {value}</button>
}

export default App
