<template>
<div>
    <div>
        <img src="./img/2.png" style="width:130%; height:350px;">
    </div>
    <div class="cMain">
        <el-row>
            <el-col :span='9'>
                <div class="neirong">
                    <ul>
                        <li>
                            >>纯净怡宝
                        </li>
                        <li>
                            <router-link class="a" to="">关于华润怡宝</router-link>                            
                        </li>
                        <li>
                            <router-link class="a" to="/cunjing/story">怡宝故事</router-link>                           
                            </li>
                        <li>
                            <router-link class="a" to="/cunjing/brand">品牌历史</router-link>                            
                        <li>
                            <router-link class="a" to="/cunjing">公司新闻</router-link>                            
                        </li>
                        <li>
                            <router-link class="a" to="/cunjing">怡在影音</router-link>                            
                        </li>
                    </ul>                      
                </div>
            </el-col>
            <!--商品展示-->
            <el-col :span="15">
               
                <router-view/>
                
            </el-col>
        </el-row>                           
    </div>
</div>
  
</template>
<script>
    export default{
        name:"cunjing.vue"
    }
</script>
<style>
    .cMain{
    width:100%;
}
.neirong{
    margin-top:40px;
    
}
.neirong>ul{
    width: 30%;
    margin: 0 36%;
     background: linear-gradient(#d8d8d8,#fff);
}
.neirong li{
    color: black;
    list-style: none;
    line-height:50px;
    border-bottom: 1px solid #dbd5cd;
    color: #323232;
    font-size: 20px;
}
.neirong li>.a{
    text-decoration: none;
    color: #323232;
}
.neirong li>.a:hover{
    color: green;
}

.neirong li:nth-child(1){
    font-size: 35px;
    color: #017f41;
}
</style>
