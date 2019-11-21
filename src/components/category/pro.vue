<template>
  <div>
    <van-popup
      class="pop"
      @close="close"
      v-model="myshow"
      position="bottom"
      :style="{ height: '70%' }"
    >
      <div class="imgs">
        <img :src="'http://localhost:3000' +images.imgurl" />
        <div>
          <p>￥1999</p>
          <p>库存199件</p>
        </div>
      </div>
      <div class="count">
        <span>购买数量</span>
        <div class="btns">
          <button @click="sub" style="width:20px;">-</button>
          <span>{{count}}</span>
          <button @click="add" style="width:20px;">+</button>
        </div>
      </div>
      <div class="color box">
        <h3>颜色</h3>
        <ul>
          <li
            v-for="(item,index) in color"
            :key="index"
            :class="{'active': item==colorTitle}"
            @click="changeColor(item)"
          >{{item}}</li>
        </ul>
      </div>
      <div class="size box">
        <h3>内存</h3>
        <ul>
          <li
            v-for="(item,index) in size"
            :key="index"
            :class="{'active': item==sizeTitle}"
            @click="changeSize(item)"
          >{{item}}</li>
        </ul>
      </div>
      <van-goods-action>
        <van-goods-action-icon :text="'总价：￥'+count*images.price" />
        <van-goods-action-button color="#be99ff" type="warning" text="加入购物车" @click="addCart" />
        <van-goods-action-button color="#7232dd" type="danger" text="立即购买" />
      </van-goods-action>
    </van-popup>
  </div>
</template>

<script>
import Vue from "vue";
import { Toast } from "vant";

Vue.use(Toast);

export default {
  data() {
    return {
      myshow: this.show,
      count: 1,
      color: ["红色", "黑色", "白色", "金色"],
      size: ["16G", "32G"],
      colorTitle: "",
      sizeTitle: ""
    };
  },
  props: ["show", "images"],
  methods: {
    close() {
      this.$emit("hide", false);
    },
    sub() {
      if (this.count == 1) return;
      this.count--;
    },
    add() {
      this.count++;
    },
    addCart() {
      if (!this.colorTitle || !this.sizeTitle) {
        Toast.fail("必须选择产品规格");
        return;
      }
      let userid = localStorage.getItem("id");
      //如果没登录
      if (!userid) {
        alert("请登录");
        this.$router.push("/deng");
        return false;
      } else {
        //登录了
        let goodsid=this.images._id;
        let goodsnum=this.count
        this.$http.post('/api/cartadd',{
          userid:userid,
          goodsid:goodsid,
          goodsnum:goodsnum
        }).then(res=>{
          if(res.data.status==1){
            this.$router.push('/index/gouwu')
          }
        })
      }
    },
    changeColor(color) {
      this.colorTitle = color;
    },
    changeSize(size) {
      this.sizeTitle = size;
    }
  },
  watch: {
    show(newVal, oldVal) {
      this.myshow = newVal;
    }
  }
};
</script>

<style lang="less" scoped>
.imgs {
  display: flex;
  img {
    width: 100px;
    height: 100px;
    margin-right: 20px;
  }
}
.count {
  display: flex;
  justify-content: space-between;
  .btns {
    display: flex;
    span {
      width: 20px;
    }
  }
}
.box {
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      padding: 10px 20px;
      background-color: #ccc;
      margin-right: 20px;
      margin-bottom: 10px;
      &.active {
        border: 1px solid red;
      }
    }
  }
}
</style>