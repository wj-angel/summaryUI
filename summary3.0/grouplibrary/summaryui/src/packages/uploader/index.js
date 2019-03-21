import SuUploader from "./src/SuUploader"

SuUploader.install = function (Vue,opts) {
  Vue.component(SuUploader.name,SuUploader)
}

export default SuUploader
