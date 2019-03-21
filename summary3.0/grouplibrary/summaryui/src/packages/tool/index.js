import SuTool from "./src/SuTool"

SuTool.install = function (Vue,opts) {
  Vue.component(SuTool.name,SuTool)
}

export default SuTool
