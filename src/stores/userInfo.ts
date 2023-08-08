/*
 * @Author: qsm 348867341@qq.com
 * @Date: 2023-08-06 04:41:19
 * @LastEditors: qsm 348867341@qq.com
 * @LastEditTime: 2023-08-09 05:34:13
 * @FilePath: /eslint-react-vite-ts-template/src/stores/global.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface userInfoState {
    userInfo: Record<string, any> | null
    setUserInfo: (info: userInfoState['userInfo']) => void
}

const useUserInfoStore = create<userInfoState>()(
    persist(
        set => ({
            haha: {
                kk: 22
            },
            userInfo: {
                cookie: 'eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJiNmRhNDUyOC1iYzdhLTQ2NTMtOWEwMy00OTNkNWUyMzBjZWUiLCJpc3MiOiJTU08iLCJpYXQiOjE2OTE1MjYwNDYsInVpZCI6IjIwODgwMDAwMDAwMDI0NTYifQ.YiAlAY01iE8388UNJ77VC5C6rw9SPd_ueRxOisr0jE8;'
            },
            setUserInfo: userInfo => set(() => ({ userInfo }))
        }),
        {
            name: 'userInfo'
            // partialize 过滤属性，存储哪些字段到localStorage
        }
    )
)

export default useUserInfoStore
