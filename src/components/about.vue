<template>
   
       <div class="time">
        <div class="timeOne">
        <p>品牌活动</p>
        <ul>
            <li>首页</li>
            <li>怡起精彩</li>
            <li>品牌活动</li>
        </ul>
    </div> 
    <div><el-progress :percentage="10"></el-progress></div>
    <div class="timeWord">
                华润怡宝饮料(中国)有限公司（下面简称"华润怡宝"）隶属华润集团旗下华润创业有限
        公司，总部位于深圳市高新技术产业园区(北区)。1990年，华润怡宝在国内率先推出纯净水，
        是国内最早专业化生产包装饮用水的企业之一，主营"怡寶"牌业化生产包装饮用水的企业之一
        ，主营"怡寶"牌系列包装饮用水。致力为每一位消费者带来优质的产品和真诚的服务，以食品安全为基础，
        以顾客满意为目标，追求卓越管时尚标，追求卓越管时尚的生活体验作为其品牌的精神内涵。时尚的生活体验作为其品牌的精神内涵。
        理，创造完美品质，奉献至诚服务。并始终。
    </div>
    <div class="timePart">
        <ul>
            <li class="timePartLi">
                <div id="larges"><img src="./img/1-6.jpg" style="width:60%"></div>
                <div>华润怡宝也是《瓶装饮用纯净水》国家标准的主要发起和起草单位之一。
                        华润怡宝始终以优于"国标"的生产标准为消费者提供健康满意的优质产品，并通过良好的服务，赢得消费者的认同
                        。多年来被认定为中国驰名商标、最具市场竞争力品牌、广东省著名商标、深圳知名品牌等。
                </div>
            </li>
                <li class="timePartLi">
                <div id="larges"><img src="./img/1-8.png" style="width:60%"></div>
                <div>华润怡宝也是《瓶装饮用纯净水》国家标准的主要发起和起草单位之一。
                        华润怡宝始终以优于"国标"的生产标准为消费者提供健康满意的优质产品，并通过良好的服务，赢得消费者的认同
                        。多年来被认定为中国驰名商标、最具市场竞争力品牌、广东省著名商标、深圳知名品牌等。
                </div>
            </li>
                <li class="timePartLi">
                <div id="larges"><img src="./img/1-7.png" style="width:60%"></div>
                <div>华润怡宝也是《瓶装饮用纯净水》国家标准的主要发起和起草单位之一。
                        华润怡宝始终以优于"国标"的生产标准为消费者提供健康满意的优质产品，并通过良好的服务，赢得消费者的认同
                        。多年来被认定为中国驰名商标、最具市场竞争力品牌、广东省著名商标、深圳知名品牌等。
                </div>
            </li>
                <li class="timePartLi">
                <div id="larges"><img src="./img/1-9.png" style="width:60%"></div>
                <div>华润怡宝也是《瓶装饮用纯净水》国家标准的主要发起和起草单位之一。
                        华润怡宝始终以优于"国标"的生产标准为消费者提供健康满意的优质产品，并通过良好的服务，赢得消费者的认同
                        。多年来被认定为中国驰名商标、最具市场竞争力品牌、广东省著名商标、深圳知名品牌等。
                </div>
            </li>
        </ul>
    </div>
    <div class="lastUl">
        <li style="margin-bottom:30px;">   
            &nbsp; &nbsp; &nbsp; &nbsp;华润怡宝作为中国包装饮用水行业的知名企业，关注社会弱势群体，积极开展"水知道幸福"、
        "水系邻里"等关爱一线送水员、构建和谐社区的公益活动，这些活动让我们的事业不仅是销售
        一瓶瓶单纯意义上的水，更是一种回馈社会的情感体验。
        </li>
        <li>
        　　发展至今，华润怡宝的销售网络已遍及全国大部分省市。未来5年，华润怡宝必将保持自身的包容性与前瞻性，
        不断以品牌创造力，给予消费者更多惊喜和体验，将更多高品质、时尚生活理念传递至广大消费者心中。
        </li>
    </div>
</div>
          
  
  
</template>
<script>
    export default{
        name:"about.vue"
    }
</script>
<style>
    .time{
    width:100%;
    
}
.timeOne p{
    float: left;
    font-size:40px;
    color:#007f41;
}
.timeOne ul{
    float: right;
    margin-top:40px;
}
.timeOne ul>li{
    float: left;
    list-style: none;
    color:black;
    padding: 0 10px;
}
.timeWord{
    width:90%;
    padding-left:20;
    font-size:18px;
    line-height:40px;
    background: linear-gradient(#d8d8d8,#fff);
    margin-top:30px;
}
.timePart li{
    list-style: none;
    height:200px;
    box-sizing: border-box;
    padding:50px 10px;;
    border-bottom: 1px solid #dddddd;
    font-size:20px;
    line-height:40px;
}
.timePartLi{
    transition: 2s;
}
.timePartLi>div:nth-child(1){
    float:left;
    width:30%;
    margin-top:15px;
}
.timePartLi>div:nth-child(2){
    text-align: left;
    float:left;
    width:60%;
}
.lastUl{
    width:90%;
    text-align: left;
    margin-top:50px;
}
.lastUl li{
    list-style: none;
    font-size:20px;
    line-height:40px;
}
#larges:hover img{
    transition: 2s;
    transform: scale(2) rotateX(360deg);
}
</style>
