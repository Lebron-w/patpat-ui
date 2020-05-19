<template>
  <div class="input-form">
    <h3>表单验证组件</h3>
    <ul>
      <li>
        <strong>电话 : </strong>
        <input type="tel" v-model="validatorData.tel.text" />
        <p v-if="validatorData.tel.error">{{validatorData.tel.error}}</p>
      </li>
      <li>
        <strong>邮箱 : </strong>
        <input type="email" v-model="validatorData.email.text" />
        <p v-if="validatorData.email.error">{{validatorData.email.error}}</p>
      </li>
      <li>
        <strong>密码 : </strong>
        <input type="password" v-model="validatorData.password.text" />
        <p v-if="validatorData.password.error">{{validatorData.password.error}}</p>
      </li>
    </ul>
    <button @click="formSubmit">提交</button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      validatorData: {
        clostTips: 3000,
        tel: {
          text: '',
          required: true,
          number: true
        },
        email: {
          text: '',
          required: true
        },
        password: {
          text: '',
          required: true,
          length: 6
        }
      }
    }
  },
  methods: {
    formSubmit () {
      this.$patValidate(this.validatorData).then((success) => {
        if (success) {
          // alert('验证成功')
        } else {
          // alert('验证失败')
        }
      })
    }
  },
  mounted () {
    console.log(this)
  }
}
</script>
<style lang="less" scoped>
h3 {
  margin-bottom: 20px;
}
strong {
  display: inline-block;
  width: 60px;
  padding-right: 10px;
  text-align: right;
}
ul li{
  padding: 10px 0;
}
input {
  padding: 2px 5px;
}
</style>