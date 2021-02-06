import { createStore } from 'vuex'

export default createStore({
  state: {
    experienciaLaboral: '',
    formacionAcademica: ''
  },
  mutations: {
    setExperienciaLaboral(state,getExperienciaLaboral){
      state.experienciaLaboral = getExperienciaLaboral;
    },
    setFormacionAcademica(state,getFormacionAcademica){
      state.formacionAcademica = getFormacionAcademica;
    }
  },
  actions: {
    async getExperienciaLaboral({commit}){
      const datos = await fetch('https://raw.githubusercontent.com/webferrol/json/master/experiencia-laboral.json');
      commit('setExperienciaLaboral',await datos.json());

    },
    async getFormacionAcademica({commit}){
      const datos = await fetch('https://raw.githubusercontent.com/webferrol/json/master/formacion-academica.json');
      commit('setFormacionAcademica',await datos.json());
    }
  },
  modules: {
  }
})
