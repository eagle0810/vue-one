import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// 抛出
export default new Vuex.Store({
    state:{
        id:''
    },
    mutations: {
        changeId(state, lazyload) {
            state.id = lazyload
        }
    }
})