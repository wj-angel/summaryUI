import SuAnimation from "./src/SuAnimation"

SuAnimation.install = function (Vue,opts) {
  Vue.component(SuAnimation.name,SuAnimation)
}

export default SuAnimation

