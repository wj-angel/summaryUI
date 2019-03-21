<template>
  <div class="right-cont">
    <div class="header-cont">
      <h1>加载/动画组件</h1>
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
        <su-row :style="{height:'400px'}">
            <su-animation :bg="color"></su-animation>
            <su-animation-second :blcolor="color" :brcolor="color"></su-animation-second>
            <su-animation-third></su-animation-third>
            <su-animation-fourth :bg="color" :leftlong="leftlongfourth" :size="size" :toplong="toplong">从下往上滑动</su-animation-fourth>
            <su-animation-fifth  :bg="color" :leftlong="leftlongfifth" :toplong="toplong">稍微从下往上滑动</su-animation-fifth>
            <su-animation-sixteen :bg="color" :leftlong="leftlongsix" :toplong="toplong">平滑放大</su-animation-sixteen>
            <su-animation-sevteen  :bg="color" :leftlong="leftlongsevteen" :toplong="toplong">渐现</su-animation-sevteen>
            <su-animation-eighteen :bg="color" :leftlong="leftlongeighteen" :toplong="toplong">渐隐</su-animation-eighteen>
            <su-animation-nineteen :bg="color" :leftlong="leftlongnineteen" :toplong="toplong">360度旋转</su-animation-nineteen>
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
        name: "SuAnimationShow",
        data(){
        return{
          color:"skyblue",
          toplong:248, //距离顶部的距离
          size:120,    //圆的大小
          leftlongfourth:0,     //距离左边距离
          leftlongfifth:150,
          leftlongsix:300,
          leftlongsevteen:450,
          leftlongeighteen:600,
          leftlongnineteen:750,
          table:[
            {
              title:["参数","说明","类型","可选值","默认值"],
              trs:[
                {
                  tr:[
                    {
                      td:["bg","背景色","String","—","—"]
                    }
                  ],
                },
                {
                  tr:[
                    {
                      td:["blcolor","第二个元素左边border颜色","String","—","—"]
                    }
                  ],
                },
                {
                  tr:[
                    {
                      td:["brcolor","第二个元素右边border颜色","String","—","—"]
                    }
                  ],
                },
                {
                  tr:[
                    {
                      td:["leftlong","距离左边距离","string","—","—"]
                    }
                  ],
                },
                {
                  tr:[
                    {
                      td:["size","圆的大小","string","—","—"]
                    }
                  ],
                },
                {
                  tr:[
                    {
                      td:["toplong","距离顶部的距离","String","—","—"]
                    }
                  ],
                }
              ],
            }
          ],
          link:"<su-row :style=\"{height:'400px'}\">\n" +
            "            <su-animation article=\"articles\"></su-animation>\n" +
            "            <su-animation-second ballsecond=\"ballsecond\"></su-animation-second>\n" +
            "            <su-animation-third></su-animation-third>\n" +
            "            <su-animation-fourth ballfourth=\"ballfourth\" :leftlong=\"leftlongfourth\" :size=\"size\" :toplong=\"toplong\">从下往上滑动</su-animation-fourth>\n" +
            "            <su-animation-fifth ballfifth=\"ballfifth\" :leftlong=\"leftlongfifth\" :toplong=\"toplong\">稍微从下往上滑动</su-animation-fifth>\n" +
            "            <su-animation-sixteen ballsixteen=\"ballsixteen\" :leftlong=\"leftlongsix\" :toplong=\"toplong\">平滑放大</su-animation-sixteen>\n" +
            "            <su-animation-sevteen ballsevteen=\"ballsevteen\" :leftlong=\"leftlongsevteen\" :toplong=\"toplong\">渐现</su-animation-sevteen>\n" +
            "            <su-animation-eighteen balleight=\"balleight\" :leftlong=\"leftlongeighteen\" :toplong=\"toplong\">渐隐</su-animation-eighteen>\n" +
            "            <su-animation-nineteen ballnineteen=\"ballnineteen\" :leftlong=\"leftlongnineteen\" :toplong=\"toplong\">360度旋转</su-animation-nineteen>\n" +
            "</su-row>\n"+
            "          toplong:248, //距离顶部的距离\n" +
            "          size:120,    //圆的大小\n" +
            "          leftlongfourth:0,     //距离左边距离\n" +
            "          leftlongfifth:150,\n" +
            "          leftlongsix:300,\n" +
            "          leftlongsevteen:450,\n" +
            "          leftlongeighteen:600,\n" +
            "          leftlongnineteen:750,\n" +
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
