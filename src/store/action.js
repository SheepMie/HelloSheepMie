import api from '../api/index'
import * as types from './types'

export const articleList = ({ commit },data) => {
    commit(types.ARTICLE_STATUS, {status: 1});
    api.articleList(data).then(function (response) {
    	console.log(1)
        const status = response.data.article.length == 10?0:2;
        commit(types.ARTICLE_LIST, {
            list: response.data.article,
            status: status
        })
    })
        .catch(function (error) {
            commit(types.ARTICLE_STATUS, {status: 0});
            if (error.response) {
                showMsg({ commit },{
                    content: error.response.data.errorMsg || '网络故障',
                    type: 'danger'
                })
            }
        });
};