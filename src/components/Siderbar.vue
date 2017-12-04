<template>
  <div>
    <div class="icon-container">
      <div class="icon-handle-side" @click="handleShow"></div>
    </div>


    <el-menu default-active="1-4-1" class="sidebar"
             :collapse="isCollapse">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">UI组件</span>

        </template>
        <router-link to="/icon">
          <el-menu-item index="1-1">ICON</el-menu-item>
        </router-link>
        <router-link to="/button">
          <el-menu-item index="1-2">按钮</el-menu-item>
        </router-link>
        <router-link to="/layout">
          <el-menu-item index="1-13">布局</el-menu-item>
        </router-link>
        <!-- <router-link to="/upload">
           <el-menu-item index="1-8">上传</el-menu-item>
         </router-link>-->
        <router-link to="/tree">
          <el-menu-item index="1-9">树</el-menu-item>
        </router-link>

      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-goods"></i>
          <span slot="title">综合实例</span>
        </template>
        <router-link to="/listpage">
          <el-menu-item index="2-1">列表页</el-menu-item>
        </router-link>
        <router-link to="/formpage">
          <el-menu-item index="2-2">表单页</el-menu-item>
        </router-link>
        <router-link to="/tab">
          <el-menu-item index="2-3">TAB</el-menu-item>
        </router-link>
        <router-link to="/dialog">
          <el-menu-item index="2-3">对话框</el-menu-item>
        </router-link>
      </el-submenu>
      <el-menu-item index="3">
        <i class="el-icon-menu"></i>
        <span slot="title">
          <router-link to="/">
          图表控件
        </router-link></span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-error"></i>
        <span slot="title">
          <router-link to="/404">
         错误页
        </router-link></span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">
          <router-link to="/login">
         登录
        </router-link></span>
      </el-menu-item>
      <el-menu-item index="5">
        <i class="el-icon-more"></i>
        <span slot="title">
          <router-link to="/message">
         消息提醒
        </router-link></span>
      </el-menu-item>
      <el-menu-item index="7">
        <template slot="title">
          <i class="el-icon-picture-outline"></i>
          <span slot="title">  <router-link to="/animate">
         动画
        </router-link></span>
        </template>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
  export default {
    name: 'Siderbar',
    data () {
      return {}
    },
    methods: {
      handleShow () {
        this.isCollapse = !this.isCollapse
        this.$store.dispatch('ToggleSideBar')
      }
    },
    computed: {
      isCollapse () {
        return !this.$store.state.sidebar.sidebar.opened
      }
    }
  }
</script>
<style scoped>

</style>
