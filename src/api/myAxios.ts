import axios from 'axios';
import {ElNotification} from "element-plus";

const myAxios = axios.create({
    baseURL: '/api',
    timeout: 5000
})
// 添加响应拦截器
myAxios.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    errorHandle(error)
    return Promise.reject(error);
});
const codeMessage = {
    200: '服务器成功返回请求的数据。',
    201: '新建或修改数据成功。',
    202: '一个请求已经进入后台排队（异步任务）。',
    204: '删除数据成功。',
    400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
    401: '用户没有权限（令牌、用户名、密码错误）。',
    403: '用户得到授权，但是访问是被禁止的。',
    404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
    406: '请求的格式不可得。',
    410: '请求的资源被永久删除，且不会再得到的。',
    422: '当创建一个对象时，发生一个验证错误。',
    500: '服务器发生错误，请检查服务器。',
    502: '网关错误。',
    503: '服务不可用，服务器暂时过载或维护。',
    504: '网关超时。',
};

function errorHandle(error: any) {
    if (error.response) {
        const {status} = error.response;
        if (status) {
            const errorText = codeMessage[status as keyof typeof codeMessage]
            ElNotification({
                title: 'Error',
                message: errorText,
                type: 'error',
            })
        }
    } else {
        ElNotification({
            title: 'Error',
            message: "请求失败",
            type: 'error',
        })
    }
}

export default myAxios