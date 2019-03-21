import SuNavigation from "./src/SuNavigation"

SuNavigation.install = function (Vue,opts) {
  Vue.component(SuNavigation.name,SuNavigation)
}

export default SuNavigation

