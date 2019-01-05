import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        navIndex: 0,
        navDataList: JSON.parse(localStorage.getItem('navData'))
    },
    mutations: {
        selectNav (state, payload) {
            state.navIndex = payload;
        },
        addHistory (state, payload) {
            if (state.navDataList.indexOf(payload) !== -1) {
                state.navDataList.splice(state.navDataList.indexOf(payload), 1);
            }
            state.navDataList.push(payload);
            localStorage.setItem('navData', JSON.stringify(state.navDataList))
        },
        deleteHistory (state, payload) {
            state.navDataList.splice(payload, 1);
            localStorage.setItem('navData', JSON.stringify(state.navDataList))
        }
    },
    getters: {
        
    }
})

export default store