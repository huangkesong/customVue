<template>
  <div class="order">
    <router-link :to="{path: '/address', query:{id: curId}}" >
      <div class="orderAddress" v-if='getAddress'>
        <div class="info">
          <div class="consignee">
            <div class="left">收货人：{{getAddress.name}}</div>
            <div class="right">{{getAddress.tel}}</div>
          </div>
          <div class="receivingAddress">收货地址：<span>{{getAddress.address}}</span></div>
        </div>
        <div class="jiantou"></div>
      </div>
      <div class="orderAddress" v-else>
        <div class="info">
          <div class="consignee">
            <div class="left">收货人：甜橙电子烟</div>
            <div class="right">15858585858</div>
          </div>
          <div class="receivingAddress">收货地址：<span>北京市东城区中粮广场C座3层</span></div>
        </div>
        <div class="jiantou"></div>
      </div>
    </router-link>
    <!--产品-->
    <div class="orderInfo">
      <ul>
        <li>
          <div class="left"><img :src="orderInfo[curId - 1].goodsImg" alt=""></div>
          <div class="center">
            <div class="con">{{orderInfo[curId - 1].goodsName}}</div>
            <div class="con">{{orderInfo[curId - 1].goodsType}}</div>
            <div class="price">￥<span>{{orderInfo[curId - 1].goodsPrice}}</span></div>
          </div>
          <div class="right">x 1</div>
        </li>
      </ul>
    </div>
    <div class="orderMoney">
      <ul>
        <li>
          <span>配送方式</span>
          <span>快递&nbsp;免运费</span>
        </li>
      </ul>
    </div>
    <div class="orderMoney">
      <ul>
        <li class="addline">
          <span>商品金额</span>
          <span>￥&nbsp;{{orderInfo[curId - 1].goodsPrice}}</span>
        </li>
        <li>
          <span></span>
          <span>合计：<em>￥{{orderInfo[curId - 1].goodsPrice}}</em></span>
        </li>
      </ul>
    </div>
    <!--底部-->
    <div class="goPay">
      <div class="left">合计：<span>¥ {{orderInfo[curId - 1].goodsPrice}}</span></div>
      <div class="right" @click="goPay">提交订单</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // TODO
      curId: this.$route.params.id,
      getAddress: JSON.parse(localStorage.getItem('address')),
      orderInfo: [
        {
          goodsImg: require('./images/product_A_2.jpg'),
          goodsName: '甜橙第一代 清口雾化弹 1杆2弹随心组合',
          goodsType: '单杆 经典黑 黑色, 劲爽薄荷, 冰镇西瓜',
          goodsPrice: '299.00'
        },
        {
          goodsImg: require('./images/product_B_2.jpg'),
          goodsName: '甜橙灵点 智能雾化烟 1杆4弹【全新上市】',
          goodsType: '经典红',
          goodsPrice: '399.00'
        },
        {
          goodsImg: require('./images/product_B_2.jpg'),
          goodsName: '甜橙阿尔法 换弹雾化烟 1杆2弹套装',
          goodsType: '经典红金套装-1杆2弹',
          goodsPrice: '299.00'
        },
        {
          goodsImg: require('./images/product_D_2.jpg'),
          goodsName: '【免费兑换】甜橙第一代 补充烟弹 盒装3枚装',
          goodsType: '经典黑+单颗西柚',
          goodsPrice: '399.00'
        }
      ]
    }
  },
  methods: {
    goPay () {
      // this.$loading('支付中...')
      setTimeout(() => {
        // this.$loading.close()
        this.$router.push(`/success/${this.orderInfo[this.curId - 1].goodsPrice}`)
      }, 3000)
    }
  }
}
</script>

<style lang="less" scoped>
html,bodu{
  height: 100%;
}
.order{
  background-color: #fafafa;
  padding-bottom: 5rem;
  .orderAddress{
    display: flex;
    position: relative;
    text-align: left;
    padding: .3rem;
    background: #fff;
    margin-bottom: .1rem;
    &:before{
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      text-align: left;
      height: .04rem;
      background: repeating-linear-gradient(-45deg,#ff6d6d,#ff6d6d 20%,transparent 0,transparent 25%,#3283fa 0,#3283fa 45%,transparent 0,transparent 50%);
      background-size: 80px;
    }
    .name{
      width: .6rem;
      height: .5rem;
      background: url(./images/dingwei.png) no-repeat;
      background-size: cover;
    }
    .info{
      width: 100%;
      padding-right: .2rem;
    }
    .jiantou{
      width: .2rem;
      height: 1.3rem;
      background: url(./images/jiantou.png) no-repeat center center;
      background-size: 100%;
    }
    .consignee{
      display: flex;
      justify-content: space-between;
      font-size: .3rem;
      font-weight: 500;
      padding-bottom: .2rem;
      color: #323233;
      .left{
        flex: 1;
        text-align: left;
        float: left;
        padding-top: .04rem;
      }
      .right{
        flex: 1;
        text-align: right;
        float: right;
      }
    }
    .receivingAddress{
      color: #666;
    }
  }
  .orderInfo{
    ul{
      display: flex;
      flex-direction: column;
      li{
        flex: 1;
        padding: 5px 15px;
        display: flex;
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
        .center{
          flex:1;
          padding-left: .2rem;
          height: 1.88rem;
          text-align: left;
          display: flex;
          flex-direction: column;
          .con{
            font-size: .2rem;
            padding-bottom: .1rem;
          }
          .price{
            font-size: .2rem;
            color: #f44;
          }
        }
        .right{
          width: .5rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
  .orderMoney{
    text-align: left;
    margin-top: .2rem;
    background: #fff;
    overflow: hidden;
    ul{
      li{
        display: flex;
        justify-content: space-between;
        margin: .2rem .3rem;
        padding: .2rem 0;
        &.addline{
          position: relative;
          &:before{
            content: "";
            position: absolute;
            pointer-events: none;
            box-sizing: border-box;
            left: 0;
            right: 0;
            bottom: 0;
            -webkit-transform: scaleY(.5);
            transform: scaleY(.5);
            border-bottom: 1px solid #ebedf0;
          }
        }
        span{
          color: #111;
          font-size: .25rem;
          em{
            color: #f44 !important;
            font-weight: 700;
          }
        }
      }
    }
  }
  .goPay{
    position: fixed;
    bottom: 0;
    left: 0;
    height: 1rem;
    width: 100%;
    display: flex;
    align-items: center;
    background: #fff;
    .left{
      color: #323233;
      font-size: .3rem;
      text-align: right;
      padding-right: .2rem;
      flex: 1;
      span{
        font-weight: 700;
        color: #f44 !important;
      }
    }
    .right{
      line-height: 1rem;
      width: 2.2rem !important;
      color: #fff;
      font-size: .3rem;
      border-color: #f44 !important;
      background: #f44 !important;
    }
  }
}
</style>
