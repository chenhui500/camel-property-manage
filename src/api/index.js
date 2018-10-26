import axios from 'axios';

let base = 'http://api.yx101.cn/hycDevelop';

//登录接口
export const requestLogin = params => { return axios.post(`${base}/login/`, params).then(res => res.data); };
