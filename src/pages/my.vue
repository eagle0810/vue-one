<template>
  <div>
    <van-button class="btn" type="primary" @click="d">登录</van-button>
    <br />
    <van-button class="btn" type="info" @click="z">注册</van-button>
  </div>
</template>

<script>
export default {
  methods: {
    d() {
      this.$router.push("/deng");
    },
    z() {
      this.$router.push("/zhuce");
    }
  }
};
</script>

<style lang='less' scoped>
.btn {
  width: 100%;
  margin-top: 30px;
}
</style>