<template>
    <div>
        <NavBar :navbartitle="title"></NavBar>
        <TabBar :tabbaractive="0"></TabBar>
    </div>
    
</template>
<script>
import NavBar from "../../components/PublicComponent/NavBar";
import TabBar from "../../components/PublicComponent/TabBar";
export default {
    name:'Reimbursement',
    data(){
        return{
            title: "我要还款"
        }
    },
    components: {
        NavBar,
        TabBar
    },
}
</script>
<style scoped>

</style>