<template>
  <div class="luck-slider-item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'luck-slider-item',
  mounted () {
    this.$nextTick(this.$parent.init)
  }
}
</script>
