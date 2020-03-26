<template>
  <div class="productList">
    <div class="productBaner"><img src="./images/banner.jpeg" alt=""></div>
    <ul>
      <router-link tag="li" :to="{path:'/detail', query:{id: item.id}}"  v-for="(item, index) in productList" :key="index">
        <div class="left"><img :src="item.imgUrl" alt=""></div>
        <div class="right">
          <div class="con">{{item.briefly}}</div>
          <div class="price">￥<span>{{item.price}}</span></div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // TODO
      productList: [
        {
          id: 1,
          imgUrl: require('./images/product_A.jpg'),
          briefly: '甜橙第一代 清口雾化弹 1杆2弹随心组合',
          price: '299'
        },
        {
          id: 2,
          imgUrl: require('./images/product_B.jpg'),
          briefly: '甜橙灵点 智能雾化烟 1杆4弹【全新上市】',
          price: '399'
        },
        {
          id: 3,
          imgUrl: require('./images/product_C.jpg'),
          briefly: '甜橙阿尔法 换弹雾化烟 1杆2弹套装',
          price: '299'
        },
        {
          id: 4,
          imgUrl: require('./images/product_D.jpg'),
          briefly: '【免费兑换】甜橙第一代 补充烟弹 盒装3枚装',
          price: '399'
        }
      ]
    }
  },
  methods: {}
}
</script>

<style lang="less" scoped>
.productList{
  background: #fff;
  overflow: hidden;
  .productBaner{
    width: 100%;
    height: 2.5rem;
    img{
      width: 100%;
      height: 100%;
    }
  }
  ul{
    display: flex;
    flex-direction: column;
    li{
      flex: 1;
      margin: 10px;
      .left{
        width: 1.88rem;
        height: 1.88rem;
        float: left;
        min-height: auto;
        position: relative;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .right{
        margin-left: 1.88rem;
        padding-left: .2rem;
        height: 1.88rem;
        text-align: left;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .con{
          font-size: .3rem;
        }
        .price{
          font-size: .3rem;
          color: #f44;
        }
      }
    }
  }
}
</style>
