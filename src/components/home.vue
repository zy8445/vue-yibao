<template>
    <div class="shouye">
        <div>
            <div>
                <img src="./img/2.png" style="width:100%;height:350px">
            </div>
            <div>
                <img src="./img/1-1.jpg" style="width:100%">
            </div>
            <div>
                 <img src="./img/1-1.jpg" style="width:100%">
            </div>
        </div>
        <router-view/>
    </div>
  
</template>
<script>
    export default{
        name:"home.vue"
    }
</script>
<style>
    .shouye{
        font-size: 30px;
        color: red;
        padding:50px;
    }
</style>
