/*
 * @Author: qsm 348867341@qq.com
 * @Date: 2023-08-09 04:37:38
 * @LastEditors: qsm 348867341@qq.com
 * @LastEditTime: 2023-08-10 05:22:09
 * @FilePath: /eslint-react-vite-ts-template/src/api/demo/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from '@/utils/axios'

export default {
    postDemoApi() {
        return request.get('/demo/api/api-wenan-anwei/index.php', {
            params: {
                type: 'json'
            }
        })
    }
}
