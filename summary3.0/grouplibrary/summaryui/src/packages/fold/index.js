import SuFold from "./src/SuFold"

SuFold.install = function (Vue,opts) {
  Vue.component(SuFold.name,SuFold)
}

export default SuFold
