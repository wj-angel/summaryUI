import SuProgressBar from "./src/SuProgressBar"

SuProgressBar.install = function (Vue,opts) {
  Vue.component(SuProgressBar.name,SuProgressBar)
}

export default SuProgressBar

