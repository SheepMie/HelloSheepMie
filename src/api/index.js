import axios from 'axios'
const qs = require('querystring');

const ROOT = (process.env.NODE_ENV === 'production')
    ? 'http://api.secretlove.top'
    :'http://localhost:3000';

function config() {
    const base = {
        baseURL: ROOT
    };
    if(localStorage.getItem('user') && !base.headers) {
        base.headers = {Authorization: 'Bearer ' + localStorage.getItem('user').replace(/(^\")|(\"$)/g, '')};
    }
    return base
}

export default {
    authInfo: function () {
        return axios.get('/user/authInfo', config())
    },
    articleList:function (data) {
        return axios.get('/article/articleList/' + data , config())
    },
    
    
}