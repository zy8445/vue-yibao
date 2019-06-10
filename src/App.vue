<template>
  <div id="app">
    <!-- 顶部 -->
    <div class="header">
      <div class="header_left"><img src="./components/img/1.png"></div>
      <ul class="header_right">
        <li>
           <i class="icon iconfont icon-e600"></i>
            <span>CR home</span>
        </li>
        <li>
           <i class="icon iconfont icon-e600"></i>
            <span>华润网群</span>
        </li>
        <li>
            <i class="icon iconfont icon-e600"></i>
            <span>繁体版</span>
        </li>
        <li>
           <input type="text">
          <i class="icon iconfont icon-sousuo-copy"></i>
        </li>
         <li style="font-size:20px">
           华润怡宝
        </li>
      </ul>
  </div>
  <!-- 主要内容 -->
  <div class="nav">
    <ul>
      <li><router-link class="a" to="/">首页</router-link></li>
      <li><router-link class="a" to="/cunjing">纯净怡宝</router-link></li>
      <li><router-link class="a" to="/home">怡宝家族</router-link></li>
      <li><router-link class="a" to="/jingcai">怡起精彩</router-link></li>
      <li><router-link class="a" to="/water">水与健康</router-link></li>
      <li><router-link class="a" to="/line">连线怡宝</router-link></li>
    </ul>
    <router-view/>
  </div>
<!-- 底部 -->
    <div class="footer">
        <div class="footerLeft">
            <ul>
                <li>
                <i class="icon iconfont icon-qizi-green"></i>
                <span>服务渠道</span>
                </li>
                <li>
                <i class="icon iconfont icon-qizi-green"></i>
                <span>网站地图</span>
                </li>
                <li>
                <i class="icon iconfont icon-qizi-green"></i>
                <span>隐私与安全</span>
                </li>
                <li>
                <i class="icon iconfont icon-qizi-green"></i>
                <span>版权所有</span>
                </li>
                <li>
                <i class="icon iconfont icon-qizi-green"></i>
                <span>友情链接</span>
                </li>
            </ul>
            <p>Copyright © 华润怡宝饮料（中国）有限公司    备案号：粤ICP备11045133号-6    技术支持：华润集团信息管理部</p>
        </div>
        <div class="footerRight">
            <ul>
                <li>怡宝官方微信</li>
                <li><img src="./components/img/8.jpg"></li>
            </ul>
                <ul>
                <li>怡宝官方微信</li>
                  <li><img src="./components/img/8.jpg"></li>
            </ul>
        </div>
    </div>  
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
 .header{
        display: flex; 
        padding:0px;
        margin: 0px 0 30px;
    }
   .header_left{
       flex: 1;
   }
   .header_left>img{
        width:190px;
        height:66px;
       position: absolute;
       left: 15%;
       top:2%;
   }
   .header_right{
       display: flex; 
       flex: 1;
       list-style: none;
       position: relative;
   }
   .header_right li{
       padding:10px 20px;
   }
   .icon-sousuo-copy{
       position: absolute;
       right:38%;
       top:15px;
   }
  /* nav部分 */
  .nav>ul{
    display: flex;
    font-size: 25px;
    font-weight: bold;
    margin-left: 40%;
  }
.nav>ul>li{
  list-style: none;
  padding: 0 30px;
}
.nav>ul>li>.a{
  color: #423d3d;
  text-decoration: none;
}
.nav>ul>li>.a:hover{
  color: green;
}
/* 底部 */
  .footer{
     display:flex;
    border-top: 6px solid #007e3f;
   }
   .footerLeft{
        flex:2;
   }
   .footerLeft>ul{
     display:flex;
      margin-left: 15%;
      padding-top: 30px;
   }
   .footerLeft>ul>li{
       list-style: none;
       padding:10px 20px 0;
       font-size: 21px; 
       color: #323232;
   }
   .footerLeft>p{
      margin-left: 18%;
      font-size: 22px;
      color: #323232;
     padding-bottom: 30px;
   }
   .footerRight{
       flex:1;
        display:flex;
   }
   .footerRight>ul>li{
       list-style: none;
   }
   .footerRight>ul>li:nth-child(1){
       padding: 0 0 20px;
       font-size: 21px; 
       color:#007e3f;
   }
   .footerRight img{
       width: 120px;
   }
   .icon-qizi-green{
       color:#007e3f;
        font-size: 21px; 
   }
</style>
