<template>
  <div class="popup-demo">
    <p>基础用法</p>
    <PuiButton @click.native="showPopup('show')">展示弹出层</PuiButton>
    <br />
    <br />
    <p>弹出位置</p>
    <PuiButton @click.native="showPopup('showTop')">顶部弹出</PuiButton>
    <PuiButton @click.native="showPopup('showBottom')">底部弹出</PuiButton>
    <PuiButton @click.native="showPopup('showLeft')">左侧弹出</PuiButton>
    <PuiButton @click.native="showPopup('showRight')">右侧弹出</PuiButton>

    <PuiPopup :model.sync="show">内容</PuiPopup>
    <PuiPopup :model.sync="showTop" position="top" height="100px" width="100%">内容</PuiPopup>
    <PuiPopup :model.sync="showBottom" position="bottom" height="100px" width="100%">内容</PuiPopup>
    <PuiPopup :model.sync="showLeft" position="left" height="100%" width="60px">内容</PuiPopup>
    <PuiPopup :model.sync="showRight" position="right" height="100%" width="60px">内容</PuiPopup>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false,
      showTop: false,
      showBottom: false,
      showLeft: false,
      showRight: false
    }
  },
  methods: {
    showPopup (type) {
      this[type] = true;
    }
  }
}
</script>