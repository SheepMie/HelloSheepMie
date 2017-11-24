import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'

import auth from './modules/auth'
import articleList from './modules/articleList'

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const state={
    isReplyBox:false
} 
const mutations={
    replyMaster(state) {
        state.isReplyBox = !state.isReplyBox
    },
    closeReply(){
    	state.isReplyBox = false;
    }
}
export default new Vuex.Store({
	state,
	mutations,
	getters,
	modules: {
		auth,
		articleList
	},
	strict: debug
})