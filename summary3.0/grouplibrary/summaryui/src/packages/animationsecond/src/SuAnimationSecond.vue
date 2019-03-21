<template>
  <div>
    <!--loading circle-->
    <div class="circle" :style="{borderLeftColor:blcolor,borderRightColor:brcolor}"></div>
  </div>
</template>

<script>
  export default {
    name: "SuAnimationSecond",
    props:{
      blcolor:{
        type:String,
        default:''
      },
      brcolor:{
        type:String,
        default: ""
      }
    }
  }
</script>

<style scoped>
  @import "../../libs/theme/animationsecond.css";
</style>

