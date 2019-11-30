<template>
<<<<<<< HEAD
    <div>
        <van-nav-bar class="title" :title="navbartitle"  left-arrow></van-nav-bar>
        <div class="shadow"></div>
    </div>
   
=======
    <van-nav-bar title="navtitle" left-text="返回" left-arrow>
        <van-icon name="search" slot="right" />
    </van-nav-bar>
>>>>>>> parent of 49f77d5... TabBer
</template>
<script>
export default {
    name:"NavBar",
    prop: {
        navbartitle: String
    },
    data(){
        return{
            navtitle: this.navbartitle, //currentIndex接收父组件传来的activeIndex值；
        }
    },
    created(){
        console.log(this.navbartitle)
    }
}
</script>
<style scoped>
<<<<<<< HEAD
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
=======

>>>>>>> parent of 49f77d5... TabBer
</style>