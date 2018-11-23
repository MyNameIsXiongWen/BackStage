import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        navindex: 0,
        navDataList: ['111','222']
    },
    mutations: {
        selectnav (state, payload) {
            state.navindex = payload;
        },
        add (state, payload) {
            state.navDataList.push(payload);
        }
    },
    getters: {
        
    }
})

export default store