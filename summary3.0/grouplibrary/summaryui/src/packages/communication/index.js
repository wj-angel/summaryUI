import SuCommunication from "./src/SuCommunication"

SuCommunication.install = function (Vue,opts) {
  Vue.component(SuCommunication.name,SuCommunication)
}

export default SuCommunication
