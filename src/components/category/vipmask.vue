<template>
  <div>
    <el-form ref="form" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="obj.username"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="sure">确定</el-button>
        <el-button @click="cancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      obj: {}
    };
  },
  created() {
    this.$http.get("/api/memberinfo?id=" + this.row).then(res => {
      // if (res.data.status == 1) {
        this.obj = res.data.data;
      // }
    });
  },
  methods: {
    sure() {
      this.$http.post("/api/memberedit", {
          id: this.obj._id,
          username: this.obj.username
        }).then(res => {
          this.$emit("hide");
          this.$emit("getList");
        });
      //  this.$emit("hide");
      //  username:this.obj.username
      //  console.log(username)
    },
    cancel() {
      this.$emit("hide");
    }
  },
  props: ["row"],
  watch: {
    row() {
      this.$http.get("/api/memberinfo?id=" + this.row).then(res => {
        if (res.data.status == 1) {
          this.obj = res.data.data;
        }
      });
    }
  }
};
</script>

<style scoped>
</style>