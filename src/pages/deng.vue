<template>
  <div>
    <van-nav-bar title="登录" left-arrow @click-left="back" />
    <div class="box">
      <van-cell-group>
        <van-field v-model="username" clearable label="用户名" placeholder="请输入用户名" />
        <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" />
      </van-cell-group>
      <van-button style="margin-top:30px;" type="primary" size="large" @click="login">登录</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      url: ""
    };
  },
  methods: {
    login() {
      this.$http
        .post("/api/memberlogin", {
          username: this.username,
          password: this.password
        })
        .then(res => {
          console.log(res);
          // if(res.data.status == 1){

          localStorage.setItem("id", res.data.data._id);
          this.$store.commit("changeId", res.data.data._id);
          this.$router.push(localStorage.getItem("url"));
          // }
          // this.$router.push('/index')
        });
    },
    back() {
      this.$router.go(-1);
    }
  },
  beforeRouteEnter(to, from, next) {
    localStorage.setItem("url", from.fullPath);
    next();
  }
};
</script>

<style lang='less' scoped>
.box {
  margin-top: 40%;
}
</style>