<template>
  <header>
    <div class="logo"></div>
    <div class="header-content">后台管理系统模板</div>
    <div class="userinfo">
      欢迎你，<span>{{username}} </span> <span class="logout">退出</span>
    </div>
    <div class="theme">
      <el-dropdown @command="changeTheme">
        <span class="el-dropdown-link">
         主题 <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="">默认</el-dropdown-item>
          <el-dropdown-item command="black">黑色</el-dropdown-item>
          <el-dropdown-item command="white">白色</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>

  </header>
</template>
<script>
  export default {
    name: 'Navbar',
    data () {
      return {
        username: 'admin'
      }
    },
    methods: {
      changeTheme (theme) {
        document.body.className = theme
      }
    }
  }
</script>
<style scoped>
</style>
