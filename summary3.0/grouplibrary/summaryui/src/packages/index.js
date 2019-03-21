import button from "./button"
import form from "./form"
import popup from "./popup"
import shopCart from "./shopCart"
import suinput from "./input"
import surow from "./row"
import dropDownMenu from "./dropDownMenu"
import sufold from "./fold"
import sudate from "./date"
import tool from "./tool"
import rate from "./rate"
import yzm from "./yzm"
import yzm3 from "./yzm3"
import yzm4 from "./yzm4"
import accordion from "./accordion/"
import sucomm from "./communication"
import suuploader from "./uploader"
import sucolorpicker from "./colorPicker"
import threeShuffing from './threeShuffing'
import tab from './tab'
import progressbar from './progressbar'
import table from './table'
import tablesecond from './tablesecond'
import animation from './animation'
import animationsecond from './animationsecond'
import theslider from './theslider'
import theslidersecond from './theslidersecond'
import animationthird from './animationthird'
import animationfourth from './animationfourth'
import animationfifth from './animationfifth'
import animationsixteen from './animationsixteen'
import animationsevteen from './animationsevteen'
import animationeighteen from './animationeighteen'
import animationnineteen from './animationnineteen'
import progressbarsecond from './progressbarsecond'
import progressbarthird from './progressbarthird'
import slideshow from "./slideshow"
import slideshow2 from "./slideshow2"
import slideshow3 from "./slideshow3"
import paging from "./paging"
import suthefrom from './theform'
import suprombox from './promptbox'
import supromboxsend from './promptboxsecond'
import sunavigativg from './navigation'
import subred from './breadcrumbs'
import api from "./api"

const SummaryUI = {};

SummaryUI.install = function (Vue,opts) {
  Vue.component(button.name,button),
  Vue.component(form.name,form),
  Vue.component(popup.name,popup),
  Vue.component(shopCart.name,shopCart),
  Vue.component(suinput.name,suinput),
  Vue.component(surow.name,surow),
  Vue.component(dropDownMenu.name,dropDownMenu),
  Vue.component(sufold.name,sufold),
  Vue.component(sudate.name,sudate),
  Vue.component(tool.name,tool),
  Vue.component(rate.name,rate),
  Vue.component(yzm.name,yzm),
  Vue.component(yzm3.name,yzm3),
  Vue.component(yzm4.name,yzm4),
  Vue.component(accordion.name,accordion),
  Vue.component(sucomm.name,sucomm),
  Vue.component(suuploader.name,suuploader),
  Vue.component(sucolorpicker.name,sucolorpicker),
  Vue.component(threeShuffing.name,threeShuffing),
  Vue.component(tab.name,tab),
  Vue.component(progressbar.name,progressbar),
  Vue.component(table.name,table),
  Vue.component(animation.name,animation),
  Vue.component(theslider.name,theslider),
  Vue.component(theslidersecond.name,theslidersecond),
  Vue.component(animationsecond.name,animationsecond),
  Vue.component(animationthird.name,animationthird),
  Vue.component(animationfourth.name,animationfourth),
  Vue.component(animationfifth.name,animationfifth),
  Vue.component(animationsixteen.name,animationsixteen),
  Vue.component(animationsevteen.name,animationsevteen),
  Vue.component(animationeighteen.name,animationeighteen),
  Vue.component(animationnineteen.name,animationnineteen),
  Vue.component(progressbarsecond.name,progressbarsecond),
  Vue.component(progressbarthird.name,progressbarthird),
  Vue.component(tablesecond.name,tablesecond),
  Vue.component(slideshow.name,slideshow),
  Vue.component(slideshow2.name,slideshow2),
  Vue.component(slideshow3.name,slideshow3),
  Vue.component(paging.name,paging)
  Vue.component(suthefrom.name,suthefrom)
  Vue.component(suprombox.name,suprombox)
  Vue.component(supromboxsend.name,supromboxsend)
  Vue.component(sunavigativg.name,sunavigativg)
  Vue.component(subred.name,subred)
  Vue.component(api.name,api)
};


export default SummaryUI
