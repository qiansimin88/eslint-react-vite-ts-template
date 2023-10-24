/*
 * @Author: qsm 348867341@qq.com
 * @Date: 2023-08-09 03:44:46
 * @LastEditors: qsm 348867341@qq.com
 * @LastEditTime: 2023-10-25 03:46:42
 * @FilePath: /eslint-react-vite-ts-template/src/utils/axios/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios from 'axios'
import type {
    AxiosInstance,
    AxiosRequestConfig,
    AxiosResponse,
    CreateAxiosDefaults,
    InternalAxiosRequestConfig
} from 'axios'
import { message } from 'antd'
import { useUserInfoStore } from '@/stores'

// 根据项目实际情况改写
const ProjectLoginPggeUrl = '/login' // 项目的登录页URL
const tokenField = 'cookie' // 项目的token key名

// 项目借口返回的格式
interface ApiResult<T = any> {
    code: number
    data: T
    message: string
}

class Request {
    private instance: AxiosInstance
    // 存放取消请求控制器Map
    // private abortControllerMap: Map<string, AbortController>

    constructor(config: CreateAxiosDefaults) {
        this.instance = axios.create(config)
        // this.abortControllerMap = new Map()

        // 请求拦截
        this.instance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
            const nowPageUrl = config.url || ''
            const token = useUserInfoStore.getState().userInfo?.[tokenField]
            // 如果不是登录页那就添加token进入请求头
            if (nowPageUrl !== ProjectLoginPggeUrl && token) {
                config.headers[tokenField] = token
            }
            return config
        })

        // 响应拦截
        this.instance.interceptors.response.use(
            (res: AxiosResponse) => {
                // 这里根据项目自定义
                const resStatus = res?.data?.status
                if (!resStatus) {
                    return Promise.reject(res?.data)
                }
                return res
            },
            error => {
                // 接口请求报错时，也返回对象，这样使用async/await就不需要加try/catch
                // code为0为请求正常，不为0为请求异常,使用message提示
                // window.alert 这里换成error message组件即可
                message.error(error.message)
                return { message: onErrorReason(error.message) }
            }
        )
    }
    request<T = any>(config: AxiosRequestConfig): Promise<ApiResult<T>> {
        return this.instance.request(config)
    }

    get<T = any>(url: string, config?: AxiosRequestConfig): Promise<ApiResult<T>> {
        return this.instance.get(url, config)
    }

    post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<ApiResult<T>> {
        return this.instance.post(url, data, config)
    }
}

/** 解析http层面请求异常原因 */
function onErrorReason(message: string): string {
    console.log(message)
    if (message.includes('Network Error')) {
        return '网络异常，请检查网络情况!'
    }
    if (message.includes('timeout')) {
        return '请求超时，请重试!'
    }
    return '服务异常,请重试!'
}

const httpClient = new Request({
    timeout: 20 * 1000,
    baseURL: import.meta.env.VITE_API_URL
})

export default httpClient
