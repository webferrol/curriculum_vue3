import { createStore } from 'vuex'

export default createStore({
  state: {
    experienciaLaboral: ''
  },
  mutations: {
    setExperienciaLaboral(state,getExperienciaLaboral){
      state.experienciaLaboral = getExperienciaLaboral;
    }
  },
  actions: {
    async getExperienciaLaboral({commit}){
      const datos = await fetch('https://raw.githubusercontent.com/webferrol/json/master/experiencia-laboral.json');
      commit('setExperienciaLaboral',await datos.json());

    }
  },
  modules: {
  }
})
