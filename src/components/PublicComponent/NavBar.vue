<template>
    <van-nav-bar title="navtitle" left-text="返回" left-arrow>
        <van-icon name="search" slot="right" />
    </van-nav-bar>
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

</style>