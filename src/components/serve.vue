<template>
    
       <div class="lMain"> 
            <div style="margin-top:30px;">
                <el-tabs :tab-position="tabPosition">

                    
                        <div class="serve">
                            <el-form ref="form" :model="sizeForm" label-width="120px">
                                <el-form-item label="活动名称">
                                    <el-input ></el-input>
                                </el-form-item>
                                <el-form-item label="活动区域" style="text-align:left">
                                    <el-select  placeholder="请选择活动区域">
                                        <el-option label="区域一"></el-option>
                                        <el-option label="区域二"></el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="活动时间">
                                    <el-col :span="11">
                                            <el-date-picker type="date" placeholder="选择日期" style="width: 100%;"></el-date-picker>
                                    </el-col>
                                    <el-col class="line" :span="2">-</el-col>
                                    <el-col :span="11">
                                            <el-time-picker placeholder="选择时间" style="width: 100%;"></el-time-picker>
                                    </el-col>
                                </el-form-item>
                                <el-form-item label="活动性质">
                                    <el-checkbox-group style="text-align:left">
                                        <el-checkbox-button label="美食/餐厅线上活动" name="type"></el-checkbox-button>
                                        <el-checkbox-button label="地推活动" name="type"></el-checkbox-button>
                                        <el-checkbox-button label="线下主题活动" name="type"></el-checkbox-button>
                                    </el-checkbox-group>
                                </el-form-item>
                                <el-form-item label="特殊资源"  style="text-align:left">
                                    <el-radio-group size="medium">
                                        <el-radio border label="线上品牌商赞助"></el-radio>
                                        <el-radio border label="线下场地免费"></el-radio>
                                    </el-radio-group>
                                </el-form-item>
                                <el-form-item size="large">
                                    <el-button type="primary" @click="onSubmit">提交</el-button>
                                    <el-button>取消</el-button>
                                </el-form-item>      
                            </el-form>
                        </div>
                   
                   
                    
                  
                        <div>
                            <div class="erweima">
                                <ul>
                                    <li>
                                        <p>怡宝官方微信</p>
                                        <img src="./img/8.jpg">
                                    </li>
                                    <li>
                                        <p>华润怡宝官方微博</p>
                                        <img src="./img/8.jpg">
                                    </li>
                                    <li>
                                        <p>华润怡宝官方微信</p>
                                        <img src="./img/8.jpg">
                                    </li>
                                    <li>
                                        <p>华润怡宝官方微博</p>
                                        <img src="./img/8.jpg">
                                    </li>
                                </ul>
                            </div>
                        </div>
                   
                </el-tabs>
            </div>
        </div> 
 
  
</template>
<script>
    export default{
        name:"serve.vue"
    }
</script>
<style>
   
.serve{
    width: 80%;
}
.lMain{
    width: 100%;
}
.erweima{
    height:100%;
}
.erweima p{
    font-size:22px;
}
.erweima>ul{
    display: flex;
    margin-left:200px;
     /* perspective: 200px; */
}
.erweima>ul>li{
    list-style: none;
    padding:0px 80px;
    font-size: 23px;  
}
.erweima>ul>li:hover img{
    transform: rotateY(720deg) scale(1.5);
     transition: 2s;
}
.erweima>ul>li img{
    width:150px;
}

</style>
