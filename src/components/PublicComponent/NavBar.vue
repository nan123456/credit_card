<template>
    <van-nav-bar class="title" :title="navbartitle"  left-arrow>
    </van-nav-bar>
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
</style>