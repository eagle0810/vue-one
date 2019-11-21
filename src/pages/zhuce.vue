<template>
  <div>
    <van-nav-bar title="注册" left-arrow @click-left="back" />
    <div class="box">
      <van-cell-group>
        <van-field v-model="username" clearable label="用户名" placeholder="请输入用户名" />
        <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" />
      </van-cell-group>
      <van-button style="margin-top:30px;" type="primary" size="large" @click="zhuce">注册</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    zhuce() {
      if (!this.username || !this.password) {
        return false;
      }
      this.$http
        .post("/api/memberadd", {
          username: this.username,
          password: this.password
        })
        .then(res => {
          if (res.data.status == 1) {
            this.$router.push("/deng");
          }
        });
    },
    back() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="less" scoped>
.box {
  margin-top: 40%;
}
</style>