<template>
  <div class="orderAddress">
    <ul>
      <li class="addline">
        <div class="left">姓名</div>
        <div class="right"><input type="text" v-model="addressInfo.name" class="input" placeholder="收货人姓名"></div>
      </li>
      <li class="addline">
        <div class="left">电话</div>
        <div class="right"><input type="tel" v-model="addressInfo.tel" maxlength="11"  class="input" placeholder="收货人电话"></div>
      </li>
      <li class="addline textarea">
        <div class="left">详细地址</div>
        <div class="right"><textarea name="textarea" v-model="addressInfo.address" class="textarea" rows="2" maxlength="200" placeholder="街道门牌、楼层房间号等信息"></textarea></div>
      </li>
    </ul>
    <div class="btn">
      <a href="javascript:;" @click="saveUser">保存并使用</a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // TODO
      orderId: this.$route.query.id,
      addressInfo: {
        name: '',
        tel: '',
        address: ''
      }
    }
  },
  methods: {
    saveUser () {
      const {addressInfo} = this
      if (addressInfo.name === '') {
        alert('请输入收货人姓名')
        return
      } else if (addressInfo.tel === '') {
        alert('请输入收货人电话')
        return
      } else if (addressInfo.address === '') {
        alert('请输入收货人详细地址')
        return
      }
      // 存储数据
      localStorage.setItem('address', JSON.stringify(addressInfo))
      // 跳转至 order订单页
      this.$router.push(`/order/${this.orderId}`)
    }
  }
}
</script>

<style lang="less" scoped>
input::-webkit-input-placeholder, textarea::-webkit-input-placeholder{
  color: #969799;
  letter-spacing: 0rem;
}
.orderAddress{
  min-height: 12rem;
  background-color: #f8f8f8;
  ul{
    background: #fff;
    li{
      display: flex;
      align-items: center;
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
      &.textarea{
        align-items: flex-start;
      }
      .left{
        width: 2rem;
        text-align: left;
        color: #323233;
        font-size: .3rem;
      }
      .right{
        flex: 1;
        .textarea{
          height: 1.4rem;
          width: 100%;
          border: 0;
          font-size: .3rem;
        }
      }
      .input{
        border: 0;
        margin: 0;
        padding: 0;
        width: 100%;
        resize: none;
        display: block;
        font-size: .3rem;
        color: #323233;
        box-sizing: border-box;
        background-color: transparent;
      }
    }
  }
  .btn{
    padding: .6rem .3rem;
    a{
      width: 100%;
      height: .8rem;
      line-height: .8rem;
      font-size: .25rem;
      color: #fff;
      display: inline-block;
      border-color: #f44 !important;
      background: #f44 !important;
    }
  }
}
</style>
