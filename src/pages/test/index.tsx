import { useEffect, useState } from 'react'
import api from '@/api/demo'
import Styles from './index.module.less'
import useCountdown from '@/components/hook/useCountdown.ts'
/*
 * @Author: qsm 348867341@qq.com
 * @Date: 2023-07-18 03:13:29
 * @LastEditors: qsm 348867341@qq.com
 * @LastEditTime: 2023-10-25 04:31:28
 * @FilePath: /eslint-react-vite-ts-template/src/App.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
function App() {
    const [state, setState] = useState(0)
    const [de2, setDe2] = useState(0)
    const { time, startCount } = useCountdown({
        initValue: 4,
        endHandler() {
            console.log('结束了')
        }
    })

    useEffect(() => {
        api.postDemoApi().then(res => {
            console.log(res)
        })
    }, [])

    useEffect(() => {
        console.log(time)
    }, [time])

    const hah = () => {
        console.log(state)
        setDe2(s => {
            return (s = s + state)
        })
    }

    return (
        <div className='text-sky-400/100 w-[10px] text-3xl font-bold underline text-cyan-100'>
            22222
            <div onClick={() => setState(s => (s += 1))}>div1</div>
            {state}
            <div onClick={hah}>
                div2<br></br>
                {de2}
            </div>
            <div onClick={() => startCount()} className={Styles.color}>
                我是红色
                {time}
            </div>
        </div>
    )
}

export default App
