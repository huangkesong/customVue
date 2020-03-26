<template>
  <div class="successPage">
    <div class="icon"><img src="./images/successIcon.jpg" alt=""></div>
    <div class="text">支付成功</div>
    <div class="money">￥{{curId}}</div>
    <div class="btn">
      <a href="javascript:;" @click="$router.push('/productlist')">返回商家</a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // TODO
      curId: this.$route.params.id
    }
  },
  methods: {}
}
</script>

<style lang="less" scoped>
.successPage{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .icon{
    width: 1.2rem;
    height: 1.2rem;
    margin-top: 1rem;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .text{
    padding-top: .3rem;
    font-size: .3rem;
    color: #04be02;
  }
  .money{
    padding-top: 1.5rem;
    color: #333;
    font-size: .8rem;
  }
  .btn{
    display: flex;
    padding-top: 4rem;
    a{
      flex: 1;
      padding: .15rem 1rem;
      border: .02rem solid #04be02;
      border-radius: .1rem;
      background: #fff;
      color: #04be02;
    }
  }
}
</style>
