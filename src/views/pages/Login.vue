<template>
  <div class="login-box">
    <div class="login-info">
      <el-form autoComplete="on" :model="loginForm" :rules="loginRules" ref="loginForm"
               label-position="left">
        <h3 class="title">系统登录</h3>

        <el-form-item prop="username">
          <el-input name="username" type="text" v-model="loginForm.username" autoComplete="on" placeholder="邮箱"/>
        </el-form-item>

        <el-form-item prop="password">
          <el-input name="password" type="password" @keyup.enter.native="handleLogin" v-model="loginForm.password"
                    autoComplete="on"
                    placeholder="密码"/>
        </el-form-item>

        <el-button type="primary" style="width:100%;margin-bottom:30px;" :loading="loading"
                   @click.native.prevent="handleLogin">登录
        </el-button>


      </el-form>
    </div>
  </div>
</template>
<script>
  import { isvalidUsername } from '@/utils/validate'

  export default {
    name: 'login',
    data () {
      const validateUsername = (rule, value, callback) => {
        if (!isvalidUsername(value)) {
          callback(new Error('请输入正确的用户名'))
        } else {
          callback()
        }
      }
      const validatePassword = (rule, value, callback) => {
        if (value.length < 6) {
          callback(new Error('密码不能小于6位'))
        } else {
          callback()
        }
      }
      return {
        loginForm: {
          username: 'admin',
          password: '1111111'
        },
        loginRules: {
          username: [{required: true, trigger: 'blur', validator: validateUsername}],
          password: [{required: true, trigger: 'blur', validator: validatePassword}]
        },
        pwdType: 'password',
        loading: false,
        showDialog: false
      }
    },
    methods: {
      handleLogin () {
        this.$refs.loginForm.validate(valid => {
          if (valid) {
            this.loading = true
            this.$router.push({path: '/'})
          } else {
            console.log('error submit!!')
            return false
          }
        })
      }
    },
    created () {
      // window.addEventListener('hashchange', this.afterQRScan)
    },
    destroyed () {
      // window.removeEventListener('hashchange', this.afterQRScan)
    }
  }
</script>
<style scoped>
  .login-box {
    position: absolute;
    top: 0;
    left: 0px;
    bottom: 0px;
    right: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .title {
    margin-bottom: 20px;
  }

  .login-info {
    width: 500px;
    padding: 20px;
    text-align: center;
  }
</style>
