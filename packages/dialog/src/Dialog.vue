<template>
  <div class="pat-dialog">
    <div class="pat-dialog-center">
      <span class="pat-icon" :class="'pat-'+type" v-if="type"></span>
      <h3 v-if="title">{{title}}</h3>
      <p v-if="message">{{message}}</p>
      <div class="pat-btns" v-if="cancelButtonText || confirmButtonText">
        <a class="pat-cancel" @click="closeDialog('close')" v-if="cancelButtonText">{{cancelButtonText}}</a>
        <a class="pat-confirm" @click="closeDialog('confirm')" v-if="confirmButtonText">{{confirmButtonText}}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PuiDialog',
  data () {
    return {
      type: '',
      title: '',
      message: '',
      confirmButtonText: '',
      cancelButtonText: '',
      duration: ''
    }
  },
  methods: {
    closeDialog(type) {
      this.$patDialogs.close(type)
    }
  }
}
</script>

<style lang="less" scoped>
.pat-dialog {
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .5);
  text-align: center;
  opacity: 0;
  animation: fadeOut .4s both;
}
.pat-dialog-center {
  position: fixed;
  top: 50%;
  left: 20px;
  right: 20px;
  z-index: 1000;
  max-width: 480px;
  padding: 20px;
  transform: translateY(-65%);
  background: #fff;
  border-radius: 5px;
  opacity: 0;
  animation: dialogOut .3s both .1s;
  .pat-icon {
    display: block;
    margin: auto;
    width: 60px;
    height: 60px;
    &.pat-delete {
      background: url('../images/pop-prompt.png') no-repeat;
      background-size: 60px;
      background-position: left bottom;
    }
    &.pat-success {
      background: url('../images/pop-prompt.png') no-repeat;
      background-size: 60px;
      background-position: left -77px;
    }
    &.pat-error {
      background: url('../images/pop-prompt.png') no-repeat;
      background-size: 60px;
      background-position: left -153px;
    }
    &.pat-warning {
      background: url('../images/pop-prompt.png') no-repeat;
      background-size: 60px;
      background-position: left top;
    }
    &.pat-icon-success {
      background: url('../images/toast-icon.png') no-repeat;
      background-size: 60px;
      background-position: left top;
    }
    &.pat-icon-failure {
      background: url('../images/toast-icon.png') no-repeat;
      background-size: 60px;
      background-position: left bottom;
    }
  }
  h3 {
    font-size: 18px;
    font-weight: normal;
    padding-top: 15px;
  }
  p {
    font-size: 14px;
    padding-top: 15px;
  }
  .pat-btns {
    font-size: 0;
    padding-top: 15px;
    a {
      display: inline-block;
      margin: 0 10px;
      height: 32px;
      width: 120px;
      border-radius: 5px;
      line-height: 32px;
      font-size: 14px;
      cursor:pointer;
      &.pat-cancel {
        border: 1px solid #444;
      }
      &.pat-confirm {
        border: 1px solid #f1435a;
        background: #f1435a;
        color: #fff;
      }
    }
  }
}
@keyframes fadeOut {
  100% {
    opacity: 1;
  }
}
@keyframes dialogOut {
  100% {
    opacity: 1;
    transform: translateY(-50%);
  }
}
</style>