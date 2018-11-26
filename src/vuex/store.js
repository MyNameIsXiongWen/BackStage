import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        navindex: 0,
        navDataList: []
    },
    mutations: {
        selectnav (state, payload) {
            state.navindex = payload;
        },
        addHistory (state, payload) {
            if (state.navDataList.indexOf(payload) !== -1) {
                state.navDataList.splice(state.navDataList.indexOf(payload), 1);
            }
            state.navDataList.push(payload);
        },
        deleteHistory (state, payload) {
            state.navDataList.splice(payload, 1);
        }
    },
    getters: {
        
    }
})

export default store