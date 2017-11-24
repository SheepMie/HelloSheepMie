import {AUTH_INFO} from '../types'

const isLoggedIn = function() {
    const token = localStorage.getItem('user');
    if (token) {
        const payload = JSON.parse(window.atob(token.split('.')[1]));
        if( payload.exp > Date.now() / 1000 ){
            return JSON.parse(localStorage.getItem('user'))
        }else{
            localStorage.removeItem('user');
        }
    } else {
        return false;
    }
};

const state = {
    token: isLoggedIn() || null,
    info: null
};

const mutations = {
    [AUTH_INFO](state, data) {
        state.token = data.token;
        state.info = data.info;
    },
};

export default {
    state,
    mutations
}