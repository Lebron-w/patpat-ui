<template>
  <div class="tiast-demo">
    <PuiButton @click="clickToast('成功提示')">成功提示</PuiButton>
    <PuiButton @click="clickToast('错误提示')">错误提示</PuiButton>
  </div>
</template>
<script>
export default {
  methods: {
    clickToast (type) {
      if (type === '成功提示') {
        this.Toast({
          type: 'icon-success',
          title: 'Success',
          message: '代码是写出来给人看的，附带能在机器上运行',
          duration: 3000
        })
      } else if (type === '错误提示') {
        this.Toast({
          type: 'icon-failure',
          message: '代码是写出来给人看的，附带能在机器上运行'
        })
      }
    }
  }
}
</script>