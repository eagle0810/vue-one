<template>
  <div>
    <div>
      <el-button type="success" @click="add">添加</el-button>
    </div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column type="index" label="编号" width="180"></el-table-column>
      <el-table-column prop="title" label="名称" width="180"></el-table-column>
      <el-table-column prop="address" label="操作" width="180">
        <template slot-scope="scope">
          <el-button type="success" size="small" @click="edit(scope.row)">编辑</el-button>
          <el-button type="danger" size="small" @click="del(scope.row, scope)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
      <fenmask :type="type" :cateId="cateId" @hide="hide" @getList="getList"></fenmask>
    </el-dialog>
  </div>
</template>

<script>
import fenmask from "../../components/category/fenmask";
export default {
  data() {
    return {
      tableData: [],
      dialogVisible: false,
      type: "",
      cateId:''
    };
  },
  methods: {
    hide() {
      this.dialogVisible=false
    },
    getList() {
      this.$http.get("/api/catelist").then(res=>{
        if(res.data.status==1){
          this.tableData=res.data.data
        }
      })
    },
    add() {
      this.type = "添加";
      this.dialogVisible = true;
    },
    edit(row) {
      this.type='编辑'
      this.dialogVisible=true
      this.cateId=row._id
    },
    del(row,scope) {
      this.$confirm("此操作将永久删除该管理员?", "提示",{
        confirmButtonText:'确定',
        cancelButtonText:'取消',
        type:'warning'
      }).then(()=>{
        this.$http.post("/api/catedel",{
          id:row._id
        }).then(res=>{
          if(res.data.status==1){
            this.tableData.splice(scope.$index,1)
            this.$message({
              type:'success',
              message:'删除成功！'
            })
          }
        })
      })
      .catch(()=>{
        this.$message({
          type:'info',
          message:'已取消删除'
        })
      })
    },
  },
  created() {
    this.getList()
  },
  components: {
    fenmask
  }
};
</script>

<style scoped>
</style>