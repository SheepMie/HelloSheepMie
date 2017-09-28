import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

//const debug = process.env.NODE_ENV !== 'production';
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
	mutations
})