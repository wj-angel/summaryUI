<template>
  <div class="right-cont">
    <div class="header-cont">
      <h1>进度条组件</h1>
    </div>
    <div class="info-side">
      <h1>基础用法</h1>
      <p class="show">例：复制下列代码到所需页面(<a href="javascript:;">点击查看代码</a> )</p>
      <pre class="hlj" v-highlight-a>
        <code class="hjsb">{{link}}</code>
      </pre>
    </div>
    <div class="info-side">
      <h1>展示效果:</h1>
      <div class="hljsl">
        <su-row>
          <su-progress-bar :progresstext="progresstext" width="70%"></su-progress-bar>
          <su-progress-bar-second  :length="lengths" :width="width"></su-progress-bar-second>
          <su-progress-bar-third width="300px"></su-progress-bar-third>
        </su-row>
      </div>
    </div>
    <div class="info-side">
      <h1>参数:</h1>
      <div class="hljsl">
        <su-api :table="table"></su-api>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "SuProgressBarShow",
      data(){
        return{
          lengths:"500",  //总长度
          width:"200",    //所占长度
          progresstext:"70%",   //所占百分比
          table:[
            {
              title:["参数","说明","类型","可选值","默认值"],
              trs:[
                {
                  tr:[
                    {
                      td:["progresstext","第一个进度条百分比数值","String","—","70%"]
                    }
                  ],
                },
                {
                  tr:[
                    {
                      td:["width","第一个进度条宽度","String","—","70%"]
                    }
                  ],
                },
                {
                  tr:[
                    {
                      td:["length","第二个进度条的总长度","String","—","—"]
                    }
                  ],
                },
                {
                  tr:[
                    {
                      td:["width","第二个进度条占比宽度","string","—","—"]
                    }
                  ],
                },
                {
                  tr:[
                    {
                      td:["width","第三个进度条的宽度","string","—","—"]
                    }
                  ],
                }
              ],
            }
          ],
          link:"<su-row>\n" +
            "           <su-progress-bar :progresstext=\"progresstext\" width=\"70%\"></su-progress-bar>\n" +
            "          <su-progress-bar-second  :length=\"lengths\" :width=\"width\"></su-progress-bar-second>\n" +
            "          <su-progress-bar-third width=\"300px\" progressstyle=\"progressstyles\"></su-progress-bar-third>\n" +
            "          <su-progress-bar-third width=\"300px\" progressstyle=\"progressstyles\"></su-progress-bar-third>\n" +
            "</su-row>\n" +
            "data(){\n" +
            "return{\n" +
            "           lengths:\"500\",  //总长度\n" +
            "          width:\"200\",    //所占长度\n" +
            "          progresstext:\"70%\",   //所占百分比,\n" +
            "     }\n" +
            "}\n",
        }
      }
    }
</script>

<style scoped>
  .right-cont{
    width: 100%;
    height: 100%;
  }
  .header-cont{
    width: 100%;
    height: 68px;
    background-color: hsla(0,0%,100%,.8);
    border: 1px solid #eee;
    border-radius: 4px;
    margin-bottom: 22px;
    padding: 0 20px;
  }
  .header-cont h1{
    font-size: 20px;
    font-weight: 600;
    text-align: left;
    line-height: 68px;
  }
  .info-side{
    height: auto;
    background-color: hsla(0,0%,100%,.8);
    border: 1px solid #eee;
    border-radius: 4px;
    margin-bottom: 20px;
  }
  .info-side h1{
    font-size: 25px;
    line-height: 50px;
    padding: 0 20px;
  }
  .info-side-cont h2{
    background-color: hsla(0,0%,100%,.9);
    font-size: 20px;
    line-height: 20px;
    padding: 10px;
  }
  .info-side p{
    background-color: #fff;
    font-size: 10px;
    line-height: 20px;
  }
  .show{
    cursor: pointer;
  }
  .show a{
    color: #c71585;
    font-size: 10px;
    line-height: 20px;
  }
  .show a:hover{
    text-decoration: underline;
  }
  .hlj{
    -ms-word-wrap: normal;
    padding: 5px;
    font-size: 14px;
    background-color: #fff;
    overflow: hidden;
    color: #3a3a3a;
    display: none;
  }
  .hljsl{
    width: 100%;
    height:auto;
    background-color:#fff;
    margin-bottom:.15rem;
    position: relative;
    min-height: 200px;
    _height:200px;
  }
</style>
