<template>
  <van-tabbar v-model="active">
    <van-tabbar-item info="3">
      <span>自定义</span>
      <img
        slot="icon"
        slot-scope="props"
        :src="props.active ? icon.active : icon.inactive"
      >
    </van-tabbar-item>
    <van-tabbar-item icon="search">标签</van-tabbar-item>
    <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
    <van-tabbar-item icon="search">标签</van-tabbar-item>
    <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  name: "TabBar",
  props: {
    tabbaractive: Number
  },
  data() {
    return {
      active: 0,
      icon: {
        active: 'https://img.yzcdn.cn/vant/user-active.png',
        inactive: 'https://img.yzcdn.cn/vant/user-inactive.png'
      }
    };
  }
};
</script>

<style scoped>
.icon {
  width: 95px;
  height: 20px;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}
</style>
