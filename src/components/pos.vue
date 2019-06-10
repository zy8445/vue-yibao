<template>
    <div class="shouye">
        <!-- 轮播 -->
        <div>
            <div class="box">
                <div class="tupian">
                    <img src="./img/2.png">
                </div>
                <div>
                    <span class="leftArrow"></span>
                    <span id="right">></span>
                </div>
                <div>
                    <ul class="zhishiqi">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
            <!-- 中间五个图片 -->
            <div class="tubiao">   
                <ul>
                    <li>
                        <p><img src="./img/3.jpg"></p>
                    </li>
                     <li>
                        <p><img src="./img/4.jpg"></p>
                    </li> <li>
                        <p><img src="./img/5.jpg"></p>
                    </li> <li>
                        <p><img src="./img/6.jpg"></p>
                    </li> <li>
                        <p><img src="./img/7.jpg"></p>
                    </li>
                </ul>               
            </div> 
        </div>             
        <router-view/>
    </div>
    
</template>
<script>
    export default{
        name:"pos.vue"
    }
</script>
<style>
   .box{
     width: 100%;
     height:600px;
     overflow: hidden;
     position: relative;
     margin-bottom: 80px;
     
     }
     .box img{
     width:100%;
     height: 550px;
     }
     .selected{
        background: #008140!important;
     }
     .zhishiqi{
         position: absolute;
         margin-left: 30%;
         bottom: 1px;
     }
     .zhishiqi li{
         width:100px;
         height: 10px;
         background:#bdbebe;
         float: left;
         margin-left: 50px;
         font-size: 20px;
         list-style: none;;
     }
     /* 箭头 */
     .box span{
         position: absolute;
         left: 10px;
         top: 50%;
         margin-top: -40px;
         font-size: 20px;
         color: black;
         font-weight: 900;
         width: 40px;
         height: 60px;
         background: gray;
         display: inline-block;
         text-align: center;
         padding-top: 30px;
         display: none;
     }
     #right{
         right: 10px;
         left: auto;
     }
     .tubiao ul{
         display: flex;
     }
     .tubiao ul li{
        list-style: none;
        padding: 0 40px;
     }
     .tubiao ul li img{
         width: 140px;
     }
     .tubiao ul li:nth-child(1){
         margin-left: 20%;
     }   
</style>
