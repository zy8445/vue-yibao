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
                            >>怡起精彩
                        </li>
                        <li>
                            <router-link class="a" to="">品牌活动</router-link>                            
                        </li>
                        <li>
                            <router-link class="a" to="/jingcai/gongyi">公益活动</router-link>                           
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
        name:"jingcai.vue"
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
