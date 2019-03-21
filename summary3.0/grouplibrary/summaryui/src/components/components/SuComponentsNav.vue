<template>
    <nav>
        <div class="tab">
            <div class="tabs">
                <div class="tab_menu">
                    <div>
                      <div>
                          <div class="basics">开发者指南</div>
                      </div>
                      <ul>
                        <li class="selected"><a href="javascript:;">安装</a></li>
                        <li><a href="javascript:;">使用</a></li>
                        <li><a href="javascript:;">参与贡献</a></li>
                        <li><a href="javascript:;">支持Summary-UI</a></li>
                        <li><a href="javascript:;">更新日志</a></li>
                      </ul>
                        <a href="javascript:;" class="zujian">组件</a>
                        <div>
                            <div class="basics">基础组件</div>
                        </div>
                        <ul>
                            <li><a href="javascript:;">Button<span>按钮</span></a></li>
                            <li><a href="javascript:;">input框</a></li>
                            <li><a href="javascript:;">表单</a></li>
                            <li><a href="javascript:;">导航</a></li>
                            <li><a href="javascript:;">面包屑</a></li>
                            <li><a href="javascript:;">选项卡</a></li>
                            <li><a href="javascript:;">进度条</a></li>
                            <li><a href="javascript:;">验证码</a></li>
                            <li><a href="javascript:;">星星评分</a></li>
                            <li><a href="javascript:;">登陆验证</a></li>
                            <li><a href="javascript:;">静态表格</a></li>
                            <li><a href="javascript:;">动画</a></li>
                        </ul>
                    </div>
                    <div>
                        <div>
                            <div class="basics">组件示例</div>
                        </div>
                        <ul>
                            <li><a href="javascript:;">弹出层</a></li>
                            <li><a href="javascript:;">购物车</a></li>
                            <li><a href="javascript:;">提示框</a></li>
                            <li><a href="javascript:;">手风琴</a></li>
                            <li><a href="javascript:;">下拉菜单</a></li>
                            <li><a href="javascript:;">折叠效果</a></li>
                            <li><a href="javascript:;">日期与时间选择</a></li>
                            <li><a href="javascript:;">即时通讯</a></li>
                            <li><a href="javascript:;">轮播图</a></li>
                            <li><a href="javascript:;">分页</a></li>
                            <li><a href="javascript:;">文件上传</a></li>
                            <li><a href="javascript:;">颜色选择器</a></li>
                            <li><a href="javascript:;">滑块</a></li>
                            <li><a href="javascript:;">加载</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="tab_boxs">
              <div class="tab_box" v-highlight-a>
                    <div class="quick">
                      <su-right-summary></su-right-summary>
                    </div>
                    <div class="hide">
                      <su-right-sutwo></su-right-sutwo>
                    </div>
                    <div class="hide">
                      <su-right-suthree></su-right-suthree>
                    </div>
                    <div class="hide">
                      <su-right-sufour></su-right-sufour>
                    </div>
                    <div class="hide">
                      <su-right-sufive></su-right-sufive>
                    </div>
                    <div class="hide">
                      <su-button-show></su-button-show>
                    </div>
                    <div class="hide">
                      <su-inputshow></su-inputshow>
                    </div>
                    <div class="hide">
                      <su-the-form-show></su-the-form-show>
                    </div>
                    <div class="hide">
                      <su-navigation-show></su-navigation-show>
                    </div>
                    <div class="hide">
                      <su-bread-curmbs-show></su-bread-curmbs-show>
                    </div>
                    <div class="hide">
                      <su-tab-show></su-tab-show>
                    </div>
                    <div class="hide">
                      <su-progress-bar-show></su-progress-bar-show>
                    </div>
                    <div class="hide">
                        <su-yzm-input-show></su-yzm-input-show>
                    </div>
                    <div class="hide">
                        <su-rate-show></su-rate-show>
                    </div>
                    <div class="hide">
                      <su-checkuser-show></su-checkuser-show>
                    </div>
                    <div class="hide">
                      <su-table-show></su-table-show>
                    </div>
                    <div class="hide">
                      <su-shuffing-show></su-shuffing-show>
                    </div>
                    <div class="hide">
                      <su-popup-show></su-popup-show>
                    </div>
                    <div class="hide">
                      <su-shop-cart-show></su-shop-cart-show>
                    </div>
                    <div class="hide">
                        <su-prompt-box-show></su-prompt-box-show>
                    </div>
                    <div class="hide">
                     <su-accordion-show></su-accordion-show>
                    </div>
                    <div class="hide">
                      <su-dorp-down-menu-show></su-dorp-down-menu-show>
                    </div>
                    <div class="hide">
                      <su-flod-show></su-flod-show>
                    </div>
                    <div class="hide">
                      <su-date-show></su-date-show>
                    </div>
                    <div class="hide">
                      <su-comm-show></su-comm-show>
                    </div>
                    <div class="hide">
                      <su-slider-some-show></su-slider-some-show>
                    </div>
                    <div class="hide">
                      <su-paging-show></su-paging-show>
                    </div>
                    <div class="hide">
                      <su-uploader-show></su-uploader-show>
                    </div>
                    <div class="hide">
                      <su-color-picker-show></su-color-picker-show>
                    </div>
                    <div class="hide">
                      <su-row>
                          <su-yzm-hua-show></su-yzm-hua-show>
                      </su-row>
                    </div>
                    <div class="hide">
                      <su-animation-show></su-animation-show>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>
<script>
import $ from '../../../static/js/jquery';
import SuButtonShow from "../SuGroupLibrary/SuButtonShow";
import SuShopCartShow from "../SuGroupLibrary/SuShopCartShow";
import SuInputshow from "../SuGroupLibrary/SuInputshow";
import SuDorpDownMenuShow from "../SuGroupLibrary/SuDorpDownMenuShow";
import SuFlodShow from "../SuGroupLibrary/SuFlodShow";
import SuDateShow from "../SuGroupLibrary/SuDateShow";
import SuYzmHuaShow from "../SuGroupLibrary/SuYzmHuaShow";
import SuYzmInputShow from "../SuGroupLibrary/SuYzmInputShow";
import SuAccordionShow from "../SuGroupLibrary/SuAccordionShow";
import SuRateShow from "../SuGroupLibrary/SuRateShow";
import SuCommShow from "../SuGroupLibrary/SuCommShow";
import SuUploaderShow from "../SuGroupLibrary/SuUploaderShow";
import SuColorPickerShow from "../SuGroupLibrary/SuColorPickerShow";
import SuAnimationShow from "../SuGroupLibrary/SuAnimationShow";
import SuTableShow from "../SuGroupLibrary/SuTableShow";
import SuTabShow from "../SuGroupLibrary/SuTabShow";
import SuProgressBarShow from "../SuGroupLibrary/SuProgressBarShow";
import SuPopupShow from "../SuGroupLibrary/SuPopupShow";
import SuShuffingShow from "../SuGroupLibrary/SuShuffingShow";
import SuCheckuserShow from "../SuGroupLibrary/SuCheckuserShow";
import SuRightSummary from "../assembly/SuRightSummary";
import SuRightSutwo from "../assembly/SuRightSutwo";
import SuRightSuthree from "../assembly/SuRightSuthree";
import SuRightSufour from "../assembly/SuRightSufour";
import SuRightSufive from "../assembly/SuRightSufive";
import SuSliderSomeShow from "../SuGroupLibrary/SuSliderSomeShow";
import SuPagingShow from "../SuGroupLibrary/SuPagingShow";
import SuTheFormShow from "../SuGroupLibrary/SuTheFormShow";
import SuPromptBoxShow from "../SuGroupLibrary/SuPromptBoxShow";
import SuNavigationShow from "../SuGroupLibrary/SuNavigationShow";
import SuBreadCurmbsShow from "../SuGroupLibrary/SuBreadCurmbsShow";


export default {
    name:"SuComponentsNav",
  components: {
    SuBreadCurmbsShow,
    SuNavigationShow,
    SuPromptBoxShow,
    SuTheFormShow,
    SuPagingShow,
    SuSliderSomeShow,
    SuRightSufive,
    SuRightSufour,
    SuRightSuthree,
    SuRightSutwo,
    SuRightSummary,
    SuCheckuserShow,
    SuShuffingShow,
    SuPopupShow,
    SuProgressBarShow,
    SuTabShow,
    SuTableShow,
    SuAnimationShow,
    SuColorPickerShow,
    SuUploaderShow,
    SuCommShow,
    SuRateShow,
    SuAccordionShow,
    SuYzmInputShow,
    SuYzmHuaShow,
    SuDateShow, SuFlodShow, SuDorpDownMenuShow, SuInputshow, SuShopCartShow, SuButtonShow},
  mounted:function(){
         var $div_li = $("div.tab_menu ul li");
    $div_li.click(function () {             //定义了tan_menu对应的单击事件，也就是类别的单击事件。
        $(this).addClass("selected")
        .siblings().removeClass("selected");
        var index = $div_li.index(this);
        $("div.tab_box>div").eq(index).show()
        .siblings().hide();
    }).hover(function () {                 //定义了鼠标滑过特效
        $(this).addClass("hover");
    }, function () {
        $(this).removeClass("hover");
    });
      $(".show").each(function (i) {
        $(this).find("a").click(()=> {
          $(this).next().slideToggle(1000)
        })
      })
    }
}
</script>
<style>
/* nav */
nav{
    width: 100%;
    height: 100%;
    background:gray;
}
.tab{
    width: 100%;
    height: 100%;
    display:flex;
}
.tabs{
    width: 220px;
    height: 100%;
    background: white;
    border-radius: 5px;
    padding-top: 20px;
    padding-bottom: 20px;
    overflow-y: auto;
    float: left;
}
.tabs::-webkit-scrollbar {display:none}
.tab_menu{
    height:100%;
}
.zujian{
    margin: 0;
    display: block;
    color: #455a64;
    font-size: 16px;
    padding: 10px 20px 10px 40px;
    line-height: 24px;
    font-weight: 700;
}
.basics {
    font-size: 12px;
    line-height: 40px;
    padding-left: 40px;
    color: rgba(69,90,100,.6);
}
.tab_menu ul{
    display: block;
    width: 100%;
}
.tab_menu ul li {
    display: block;
    width: 100%;
    height: 50px;
    line-height: 50px;
    padding-left: 37px;
}
.tab_menu ul li a{
    display: block;
    height: 50px;
    font-size: 18px;
    color:#455a64;
}
.tab_menu ul li a span{
    font-size: 16px;
    opacity: .6;
}
.tab_menu ul .selected a{
    color: #13e7e0;
}
.tab_menu ul li a:hover{
    color: #13e7e0;
}
.tab_boxs{
    float: left;
    width: 100%;
    overflow-y: auto;
}
.tab_box{
    float: left;
    width: 100%;
    height: 100%;
    word-wrap:break-word;
    word-break:normal;
}
.quick{
    width: 100%;
    padding-top: 10px;
    padding-left: 20px;
    padding-right: 15px;
  overflow: hidden;
}
.hide{
    width: 100%;
    padding-top: 10px;
    padding-left: 20px;
    padding-right: 15px;
    display: none;
  }
</style>
