import SuApi from './src/SuApi'

SuApi.install = function (Vue,opts) {
  Vue.component(SuApi.name,SuApi)
}

export default SuApi
