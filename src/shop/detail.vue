<template>
  <div class="detail">
    <div class="detailImg"><img :src="detailData[getId - 1].goodsImg" alt=""></div>
    <div class="detailCon">
      <div class="name">{{detailData[getId - 1].goodsName}}</div>
      <div class="price">￥<span>{{detailData[getId - 1].goodsPrice}}</span></div>
      <div class="yunfei">运费: <span>{{detailData[getId - 1].goodsYunfei}}</span></div>
      <div class="ems">{{detailData[getId - 1].goodsEms}}</div>
    </div>
    <div class="detailImgInfo"><img :src="detailData[getId - 1].goodsDetailImg" alt=""></div>
    <!--nav-->
    <div class="goBuy setNav">
      <a href="javascript:;" class="shoping">加入购物车</a>
      <a href="javascript:;" class="buy" @click="$router.push(`/order/${getId}`)">立即购买</a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // TODO
      getId: this.$route.query.id,
      detailData: [
        {
          goodsImg: require('./images/product_A_1.jpg'),
          goodsName: '甜橙第一代 清口雾化弹 1杆2弹随心组合',
          goodsPrice: '299',
          goodsYunfei: '免运费',
          goodsEms: '满1件送【赠品】甜橙第一代 座充移动电源赠品 满99元部分地区包邮',
          goodsDetailImg: require('./images/detail_1.jpg')
        },
        {
          goodsImg: require('./images/product_B_1.jpg'),
          goodsName: '甜橙灵点 智能雾化烟 1杆4弹【全新上市】',
          goodsPrice: '399',
          goodsYunfei: '免运费',
          goodsEms: '满1件送【赠品】甜橙第一代 座充移动电源赠品 满99元部分地区包邮',
          goodsDetailImg: require('./images/detail_2.jpg')
        },
        {
          goodsImg: require('./images/product_B_1.jpg'),
          goodsName: '甜橙阿尔法 换弹雾化烟 1杆2弹套装',
          goodsPrice: '299',
          goodsYunfei: '免运费',
          goodsEms: '满1件送【赠品】甜橙第一代 座充移动电源赠品 满99元部分地区包邮',
          goodsDetailImg: require('./images/detail_3.jpg')
        },
        {
          goodsImg: require('./images/product_D_1.jpg'),
          goodsName: '【免费兑换】甜橙第一代 补充烟弹 盒装3枚装',
          goodsPrice: '399',
          goodsYunfei: '免运费',
          goodsEms: '满1件送【赠品】甜橙第一代 座充移动电源赠品 满99元部分地区包邮',
          goodsDetailImg: require('./images/detail_1.jpg')
        }
      ]
    }
  },
  methods: {}
}
</script>

<style lang="less" scoped>
.detail{
  background-color: #f5f5f5;
  padding-bottom: 1rem;
  .detailImg{
    width: 100%;
    height: 7.5rem;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .detailImgInfo{
    height: 100%;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .detailCon{
    position: relative;
    margin-bottom: 10px;
    background-color: #fff;
    text-align: left;
    font-size: .3rem;
    padding: 10px;
    .name{
      padding-bottom:.1rem;
    }
    .price{
      padding-bottom:.2rem;
      color: #f44;
    }
    .yunfei{
      padding-bottom:.2rem;
      font-size: .2rem;
      color: #999;
    }
    .ems{
      font-size: .2rem;
      color: #38f;
    }
  }
  .goBuy{
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #fff;
    &.setNav{
      width: 100%;
      display: flex;
      /*align-items: center;*/
      /*justify-content: center;*/
      a{
        height: 1rem;
        line-height: 1rem;
        font-size: .3rem;
        flex: 1;
        color: #fff!important;
      }
      .shoping{
        background: #f85!important;
      }
      .buy{
        background: #f44!important;
      }
    }
  }
}
</style>
