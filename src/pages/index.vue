<template>
  <div class="box">
    <div class="main">
      <router-view></router-view>
    </div>
    <div class="foot">
      <van-tabbar v-model="active" route>
        <van-tabbar-item to="/index/home" icon="wap-home-o">首页</van-tabbar-item>
        <van-tabbar-item to="/index/fenlei" icon="apps-o">分类</van-tabbar-item>
        <van-tabbar-item to="/index/gouwu" icon="cart-o">购物车</van-tabbar-item>
        <van-tabbar-item to="/index/my" icon="manager-o">我的</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            active:0
        }
    }
};
</script>

<style lang='less' scoped>
.box{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .main{
        flex: 1;
    }
    .foot{
        width: 100%;
        height: 50px;
    }
}
</style>