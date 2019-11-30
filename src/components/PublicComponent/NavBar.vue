<template>
    <div>
        <van-nav-bar class="title" :title="navbartitle"  left-arrow></van-nav-bar>
        <div class="shadow"></div>
    </div>
   
</template>
<script>
export default {
    name:"NavBar",
    props:['navbartitle'],
    data(){
        return{
           
        }
    },
    created(){
        // console.log(this.navbartitle)
    }
}
</script>
<style scoped>
.van-nav-bar__title{
    font-size:17px;
    font-family:PingFang SC;
    font-weight:500;
    color:rgba(51,51,51,1);
}
.van-nav-bar .van-icon {
    color: rgba(153,153,153,1);
    vertical-align: middle;
}
.shadow{
    width:375px;
    height:30px;
    background-image: linear-gradient(#F1F1F1, #ffffff);
}
</style>