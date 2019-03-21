<template>
  <keep-alive>
  <div class="side-right">
      <component :is="tabView1" v-highlight-a></component>
    <div class="fixed-top">
      <a href="javascript:;" class="back-top"></a>
    </div>
  </div>
  </keep-alive>
</template>

<script>
    import $ from "jquery"
    import SuRightSummary1 from "./SuRightSummary";
    import SuRightSummary2 from "./SuRightSutwo";
    import SuRightSummary3 from "./SuRightSuthree";
    import SuRightSummary4 from "./SuRightSufour";
    import SuRightSummary5 from "./SuRightSufive";
    import SuRightSummary6 from "./SuRightSwiper";
    import SuRightSummary7 from "./SuRightClassify";
    import SuRightSummary8 from "./SuRightHeader";
    import SuRightSummary9 from "./SuRightFooter";
    import SuRightSummary10 from "./SuRightMultiplex";
    import SuRightSummary11 from "./SuRightFullClass";
    import SuRightSummary12 from  "./SuRightTab"
    import SuRightSummary13 from  "./SuRightManageHeader"
    import SuRightSummary14 from  "./SuRightStyleList"
    import SuRightSummary15 from  "./SuRightPopop"
    import SuRightSummary16 from  "./SuRightHistogram"
    import SuRightSummary17 from  "./SuRightMap"
    import SuRightSummary18 from  "./SuRightLineCharts"
    import SuRightSummary19 from  "./SuRightPieChart"
    import SuRightSummary20 from  "./SuRightRoseDigram"
    import SuRightSummary21 from  "./SuRightMember"
    export default {
        name: "SuAssemblyRight",
      props:["tabView1"],
      components: {SuRightSummary2, SuRightSummary1,SuRightSummary3,SuRightSummary4,SuRightSummary5,SuRightSummary6,
        SuRightSummary7,SuRightSummary8,SuRightSummary9,SuRightSummary10,SuRightSummary11,SuRightSummary12,SuRightSummary13,
        SuRightSummary14,SuRightSummary15,SuRightSummary16,SuRightSummary17,SuRightSummary18,SuRightSummary19,
        SuRightSummary20,SuRightSummary21
        },
      mounted(){
        $(".back-top")[0].onclick = function(){
           document.body.scrollTop = document.documentElement.scrollTop = 0;
           }
          window.onscroll=function () {
            var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
            if (scrollTop>385){
                $(".back-top").css({
                  "display":"block"
                })
            }else {
              $(".back-top").css({
                "display":"none"
              })
            }
          }
      }
    }
</script>

<style scoped>
  .side-right{
    width: 100%;
    height: 100%;
    padding: 0 50px 20px;
    position: relative;
  }
  .fixed-top{
    position: fixed;
    top: 438px;
    z-index: 99;
    right: -1px;
    display: block;
  }
   .back-top{
    display: none;
    width: 40px;
    height: 40px;
    border-radius: 2px;
    border: 1px solid #bbb;
    margin: 2px 0 0;
    background: #bbb url("https://fanyi.bdstatic.com/static/translation/img/footer/scroll_up_f37cc5e.png") center center no-repeat;
  }
</style>
