// template.js
module.exports = {
  vueTemplate: compoenntName => {
    return `<template>
  <section class="${compoenntName}">
    ${compoenntName}组件
  </section>
</template>

<script>
export default {
  name: 'luck-${compoenntName}'
}
</script>

<style lang="less" scoped>
.${compoenntName} {

}
</style>
`
  },
  entryTemplate: compoenntName => {
    return `import ${compoenntName} from './main/${compoenntName}.vue'\nexport { ${compoenntName} }`
  }
}
