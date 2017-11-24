import { ARTICLE_LIST} from '../types'

const state = {
    list: [],
    status: 0,
    keyword: '',
    tagName: ''
};

const mutations = {
    [ARTICLE_LIST](state, data){
        state.list = state.list.concat(data.list);
        state.status = data.status;
    },

};

export default {
    state,
    mutations
}