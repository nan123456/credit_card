<template>
<<<<<<< HEAD
    <div>
        <NavBar :navbartitle="title"></NavBar>
        
        <div class="item">
            <div class="img">
                <img src="@/assets/cmb.png"/>
            </div>
            <div class="center">
                <div class="center_top">
                    <div class="bank_name">招商银行</div>
                    <div class="bank_num">尾号:7856</div>
                </div>
                <div class="center_bottom">
                    5,000额度
                </div>
            </div>
            <div class="right">

            </div>
        </div>
        <!-- <TabBar :tabbaractive="0"></TabBar> -->
    </div>
    
</template>
<script>
import NavBar from "../../components/PublicComponent/NavBar";
// import TabBar from "../../components/PublicComponent/TabBar";
export default {
    name:'Reimbursement',
    data(){
        return{
            title: "个人收款"
        }
    },
=======
    <NavBar :navbartitle="我要还款"></NavBar>
</template>
<script>
import NavBar from "../../components/PublicComponent/NavBar";
export default {
    name:'Reimbursement',
>>>>>>> parent of 49f77d5... TabBer
    components: {
        NavBar
    },
}
</script>
<style scoped>
.item{
    display: flex;
    flex-direction: row;
    width:345px;
    height:81px;
    margin-left: 15px;
    background:rgba(255,255,255,1);
    box-shadow:0px 0px 5px 0px rgba(0, 0, 0, 0.2);
    border-radius:5px;
}
.img img{
    width: 50px;
    height: 50px;
    margin: 15px;
}
.center{
    display: flex;
    flex-direction: column;
    
}
.center_top{
    display: flex;
    flex-direction: row;
}
.bank_name{
    height:12px;
    font-size:12px;
    margin-top: 20px;
    font-family:PingFang SC;
    font-weight:bold;
    color:rgba(51,51,51,1);
}
.bank_num{
    height:12px;
    font-size:10px;
    margin-left: 15px;
    margin-top: 22px;
    font-family:PingFang SC;
    font-weight:500;
    color:rgba(153,153,153,1);
}
.center_bottom{
    display: flex;
    margin-top: 10px;
    height: 15px;
    font-size: 14px;
    font-family: PingFang SC;
    font-weight: bold;
    color:rgba(44,178,252,1);
}
.right{
    width:79px;
    height:19px;
    margin-top: 51px;
    background:linear-gradient(90deg,rgba(35,134,255,1),rgba(44,178,252,1));
    border-radius:10px;
    
}
</style>