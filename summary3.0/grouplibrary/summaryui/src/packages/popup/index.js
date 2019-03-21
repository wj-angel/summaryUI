import SuPopup from "./src/SuPopup"

SuPopup.install = function (Vue,opts) {
  Vue.component(SuPopup.name,SuPopup)
}

export default SuPopup

