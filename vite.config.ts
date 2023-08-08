/*
 * @Author: qsm 348867341@qq.com
 * @Date: 2023-07-18 03:13:29
 * @LastEditors: qsm 348867341@qq.com
 * @LastEditTime: 2023-08-09 05:14:07
 * @FilePath: /eslint-react-vite-ts-template/vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    // 解析
    resolve: {
        // 识别不带后缀的文件
        extensions: ['.js', '.tsx', '.ts'],
        // 别名 方便项目引用
        alias: {
            '@': path.resolve(__dirname, './src'),
            // pages: path.resolve(__dirname, 'src/pages'),
            pages: '/src/pages'
        }
    },
    server: {
        proxy: {
            '/demo': {
                target: 'https://api.daily.xinc818.net',
                changeOrigin: true,
                rewrite: path => path.replace(/^\/demo/, '')
            }
        }
    }
})
