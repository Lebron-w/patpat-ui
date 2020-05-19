<template>
  <div class="popup-demo">
    <p>提示弹窗</p>
    <PuiButton @click="clickDialog('提示弹窗')">提示弹窗</PuiButton>
    <PuiButton @click="clickDialog('无标题，无图标')">提示弹窗（无标题，无图标）</PuiButton>
    <br />
    <br />
    <p>确认弹窗</p>
    <PuiButton @click="clickDialog('确认弹窗')">确认弹窗</PuiButton>
  </div>
</template>
<script>
export default {
  data () {
    return {
      messages: {}
    }
  },
  methods: {
    clickDialog (type) {
      if (type === '提示弹窗') {
        this.$patDialogs({
          type: 'delete',
          title: '这里是标题',
          message: '代码是写出来给人看的，附带能在机器上运行',
          cancelButtonText: '关闭'
        }).catch(e => {
          console.log('点击了关闭')
        })
      } else if (type === '无标题，无图标') {
        this.$patDialogs({
          message: '代码是写出来给人看的，附带能在机器上运行',
          cancelButtonText: '关闭'
        }).catch(e => {
          console.log('点击了关闭')
        })
      } else if (type === '确认弹窗') {
        this.$patDialogs({
          type: 'delete',
          title: '这里是标题',
          message: '代码是写出来给人看的，附带能在机器上运行',
          cancelButtonText: '关闭',
          confirmButtonText: '确认'
        }).then(e => {
          console.log('点击了确认')
        }).catch(e => {
          console.log('点击了关闭')
        })
      }
    }
    
  },
  mounted () {
    
  }
}
</script>