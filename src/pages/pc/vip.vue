<template>
  <div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column type="index" label="编号" width="180"></el-table-column>
      <el-table-column prop="username" label="用户名" width="180"></el-table-column>
      <el-table-column prop="address" label="操作" width="180">
        <template slot-scope="scope">
          <el-button type="success" size="small" @click="edit(scope.row)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
      <vipmask :row="row._id" @hide="hide" @getList="getList"></vipmask>
    </el-dialog>
  </div>
</template>

<script>
import vipmask from "../../components/category/vipmask.vue";
export default {
  data() {
    return {
      tableData: [],
      dialogVisible: false,
      row: {}
      //username: ""
    };
  },
  components: {
    vipmask
  },
  methods: {
    edit(row) {
      this.row = row;
      this.dialogVisible = true;
    },
    hide() {
      this.dialogVisible = false;
    },
    getList() {
      this.$http.get("/api/memberlist").then(res => {
        this.tableData = res.data.data;
      });
    }
  },
  created() {
    //this.$http.get("/api/memberlist").then(res => {
    // console.log(res)
    // this.tableData = res.data.data;
    //});
    this.getList();
  }
};
</script>

<style scoped>
</style>