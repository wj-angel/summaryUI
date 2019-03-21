<template>
  <div class="inputs">
    <input type="text" id="su-input" :placeholder="lis" :disabled="disabled">
    <i class="icon" v-if="kong !=undefined"></i>
  </div>

</template>

<script>
      export default {
        name: "SuInput",
        props:["disabled","lis","kong"],
        mounted(){
          $(".inputs").each(function (i) {
            $(this).find(".icon").click(()=> {
              $(this).find("input").val("")
            })
          })
        },

    }
</script>

<style scoped>
  @import "../../libs/theme/input.css";

</style>
