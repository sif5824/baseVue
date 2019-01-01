import axios from 'axios'
import {
    Message
} from 'element-ui'
import Config from '../../config/webConfig'
let _Axios = axios.create()
_Axios.defaults.withCredentials = true // 是否携带cookie
_Axios.defaults.timeout = 6000
_Axios.interceptors.response.use(function(res) {
    if (res.status === 200) {
        return res.data
    }
}, function(error) {
    return Promise.reject(error)
})

let methods = {
    /**
     * [description]
     * @param  {[type]}   url      请求地址
     * @param  {[type]}   data     请求参数
     * @param  {Function} callback 相应回调
     * @param  {[type]}   test     测试数据，mock专用
     * @return {[type]}            [description]
     */
    get: function(url, data, callback) {
        let reqUrl = Config.api + url 
        _Axios.get(reqUrl, {
                params: data
            })
            .then((response) => {
                if (response.status === 1) {
                    callback(response.body)
                } else {
                    Message({
                        type: 'error',
                        message: response.errorMessage
                    })
                    callback(null, response.errorMessage)
                }
            })
            .catch((error) => {
                console.log(error)
            })
    },
    post: function(url, data, callback) {
        let reqUrl = Config.api + url 
        _Axios.post(reqUrl, data, {
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'
                    // 'token': token
                }
            })
            .then((response) => {
                if (response.status !== 0) {
                    callback(response.body)
                } else {
                    Message({
                        type: 'error',
                        message: response.errorMessage
                    })
                    callback(null, response.errorMessage)
                }
            })
            .catch((error) => {
                console.log(error)
            })
    },
    ajaxGet: function (url, data) {
        return new Promise((resolve, reject) => {
            let reqUrl = Config.api + url 
            _Axios.get(reqUrl, {
                params: data
            })
            .then((response) => {
                if (response.status === 1) {
                    resolve(response.body)
                } else {
                    Message({
                        type: 'error',
                        message: response.errorMessage
                    })
                    resolve(null, response.errorMessage)
                }
            })
            .catch((error) => {
                console.log(error)
                reject(error)
            })
        })
    }
}
export default methods
