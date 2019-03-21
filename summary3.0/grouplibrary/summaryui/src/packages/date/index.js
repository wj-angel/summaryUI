import SuDate from "./src/SuDate"

SuDate.install = function (Vue,opts) {
  Vue.component(SuDate.name,SuDate)
}

export default SuDate
