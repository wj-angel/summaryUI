<template>
  <div>
    <su-button id="btnsu">点击弹出</su-button>
    <!--有内容,可取消,可确定,可关闭,可拖拽的弹出层(居中显示)-->
    <!--询问层-->
    <div id="su-dia" class="su-dialogp drag" v-drag>
      <div class="su-titlep">信息</div>
      <span class="su-setwindp">
        <a href="javascript:;" class="su-closep"><img src="../../libs/images/az_close.png"></a>
      </span>

      <div class="su-paddingp">
        {{enter}}
      </div>
      <div class="su-btnp">
        <a href="javascript:;" class="su-btnConfirm">确定</a>
        <a href="javascript:;" class="su-btnCancel">取消</a>
      </div>
    </div>
    <!--确认后消息-->
    <div class="su-determineafter">
      <a href="#" class="su-determin">
        <img src="../../libs/images/az_happy.png">
        <span>{{outer}}!</span>
      </a>
    </div>
  </div>
</template>

<script>
  import   '../../libs/jquery.min'
  export default {
    name: "SuPopup",
    props:["enter","outer"],
    directives:{
      drag(el,bindings){
        el.onmousedown = function(e){
          var disx = e.pageX - el.offsetLeft;
          var disy = e.pageY - el.offsetTop;
          document.onmousemove = function (e){
            el.style.left = e.pageX - disx+'px';
            el.style.top = e.pageY - disy+'px';
          };
          document.onmouseup = function(){
            document.onmousemove = document.onmouseup = null;
          }
        }
      }
    },
    mounted(){
      // 有内容,可取消,可确定,可关闭,可拖拽的弹出层(居中显示)
      //取消
      $("#btnsu").click(function () {
        $("#su-dia").show('slow');
      })
      $('.su-btnCancel').click(function(){
        $('.su-dialogp').hide('slow');
      })
      //close
      $('.su-closep').click(function(){
        $('.su-dialogp').hide('slow');
      })
      //确认
      $('.su-btnConfirm').click(function(){
        $('.su-dialogp').hide();
        $('.su-determineafter').show('slow');
        setInterval(function(){
          $('.su-determineafter').hide("slow");
        },2000)
      })
    },
  }
</script>

<style scoped>
  @import "../../libs/theme/popup.css";
</style>
