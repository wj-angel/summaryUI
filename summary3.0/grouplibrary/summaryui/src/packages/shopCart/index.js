import SuShopCart from "./src/SuShopCart"

SuShopCart.install = function (Vue,opts) {
  Vue.component(SuShopCart.name,SuShopCart)
}

export default SuShopCart
