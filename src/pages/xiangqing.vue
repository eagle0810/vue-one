<template>
  <div>
    <van-nav-bar left-text="返回" left-arrow @click-left="back"/>
    <div>
      <img :src="'http://localhost:3000' +images.imgurl" />
      <p>{{title}}</p>
      <p>{{pric}}</p>
    </div>
    <van-tabs v-model="active">
      <van-tab title="商品详情">内容 1</van-tab>
      <van-tab title="买家口碑">内容 2</van-tab>
    </van-tabs>
    <van-goods-action>
      <van-goods-action-icon text="总价：￥1999" />
      <van-goods-action-button color="#be99ff" type="warning" text="加入购物车" @click="prop"/>
      <van-goods-action-button color="#7232dd" type="danger" text="立即购买" />
    </van-goods-action>
    <pro :show='show' @hide='hide' :images='images'></pro>
  </div>
</template>

<script>
 import pro from '../components/category/pro.vue'
export default {
  data() {
    return {
      active: 0,
      images: "",
      title: "",
      pric: "",
      // detail:'',
      show:false
    };
  },
  created() {
    // console.log(this)
    let id = this.$route.query.id;
    console.log(id)
    this.$http.get("/api/goodsinfo?id=" + id).then(res => {
       console.log(res);
      this.images = res.data.data;
      this.pric = res.data.data.price;
      this.title = res.data.data.title;
    });
  },
  components:{
    pro
  },
  methods:{
    back(){
      this.$router.back()
    },
    prop(){
       this.show=true
    },
    hide(bol){
      this.show=bol
    },
  },
};
</script>

<style scoped>
</style>