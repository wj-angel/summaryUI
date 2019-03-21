<template>
    <!-- header -->
    <header>
        <a class="ui" href="index.html"><img src="../../../static/images/indexlogo.png"/>summary</a>
        <div class="nav">
            <a href="index.html">首页</a>
            <a href="##" style="color:#1989fa">组件库</a>
            <h5>案例
                <div class="anli">
                    <a href="pc.html">PC</a>
                    <a href="yidong.html">移动</a>
                    <a href="xiaochengxu.html">小程序</a>
                </div>
            </h5>
            <a href="##">后台管理</a>
            <a href="bigdata.html">大数据展示</a>
            <a href="team.html">团队</a>
        </div>
    </header>
</template>
<script>
export default {
    name:"SuComponentsHeader"
}
</script>
<style>
/* header */
header{
    height: 60px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    display: flex;
    justify-content: space-between;
    background:url(../../../static/images/bg.jpg);
    background-size: cover;
    margin-bottom: 20px;
}
header img{
    width: 50px;
    height: 50px;
    margin-top:5px;
    margin-left: 50px;
    margin-right: 20px;
    position: relative;
    transform-style: preserve-3d;
    animation: box_ani 6s linear infinite;
}
header .ui{
    display: flex;
    align-items: center;
    font-size: 30px;
    font-weight: 600;
    color: cyan;
}

@keyframes box_ani{
    0%{
        transform:rotateZ(0deg);
    }
    100%{
        transform:rotateZ(360deg);
    }
}
header .anli{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    top: 60px;
    left: -12px;
    background: #496e9a;
    height: 0px;
    overflow: hidden;
    border-radius: 0 0 5px 5px;
}
header .anli a{
    width: 100px;
    display: block;
    line-height: 40px;
    border-bottom: none;
}
header .anli a:hover{
    border-bottom: none;
}
.nav{
    float: right;
    margin-right: 30px;
}
.nav a{
    float: left;
    padding: 0 20px;
    height: 60px;
    color: white;
    font-size: 17px;
    text-align:center;
    line-height: 60px;
}
.nav a:hover{
    color: #1dafec;
    border-bottom: 3px solid #1dafec;
}
.nav h5{
    float: left;
    padding: 0 20px;
    height: 60px;
    color: white;
    font-size: 17px;
    text-align:center;
    line-height: 60px;
    font-weight: 100;
    position: relative;
}
.nav h5:hover{
    color: #1dafec;
    border-bottom: 3px solid #1dafec;
}
.nav h5:hover .anli{
    height: 120px;
    transition: all 2s;
}
</style>


