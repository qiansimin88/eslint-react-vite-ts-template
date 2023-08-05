/*
 * @Author: qsm 348867341@qq.com
 * @Date: 2023-08-06 04:41:19
 * @LastEditors: qsm 348867341@qq.com
 * @LastEditTime: 2023-08-06 04:41:24
 * @FilePath: /eslint-react-vite-ts-template/src/stores/global.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface GlobalState {
    primaryColor: string
    setColor: (color: string) => void
}

const useGlobalStore = create<GlobalState>()(
    persist(
        set => ({
            primaryColor: '#00b96b',
            setColor: color => set(() => ({ primaryColor: color }))
        }),
        {
            name: 'primaryColor',
            // partialize 过滤属性，存储哪些字段到localStorage
            partialize: state =>
                Object.fromEntries(
                    Object.entries(state).filter(([key]) => ['primaryColor'].includes(key))
                )
        }
    )
)

export default useGlobalStore
