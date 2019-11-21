<template>
  <div>
    轮播
    <div class="a" ref="echart"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lis: [],
      arr: []
    };
  },
  created() {
    this.$http.get("/api/goodslist").then(res => {
      console.log(res);
      this.lis = res.data.data;

      let arr = [];
      this.lis.forEach(item => {
        arr.push(item.price);
      });
      this.arr = arr;

      this.$nextTick(() => {
        var my = this.$echarts.init(this.$refs.echart);
        //var my = this.$echarts.init(document.getElementsByClassName("a")[0]);
        my.setOption({
          title: {
            text: "价格图"
          },
          tooltip: {},
          legend: {
            data: ["价格"]
          },
          xAxis: {
            data: ["小米", "红米", "联想"]
          },
          yAxis: {},
          series: [
            {
              name: "价格",
              type: "bar",
              data: this.arr
            }
          ]
        });
      });
    });
  }
};
</script>

<style scoped>
.a {
  width: 500px;
  height: 500px;
  border: 1px solid;
}
</style>