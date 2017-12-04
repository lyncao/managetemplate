<template>
  <div class="error404">
    <div class="errorFont">404</div>
    <div class="errorDesc">您访问的页面不存在，请重新加载......</div>
    <div class="errorAction">
      <button class="y-btn y-btn-text"><span class="el-icon-d-arrow-left"> </span> <span>返回首页</span></button>
    </div>
  </div>
</template>
<script>
  export default {
    name: '404page'
  }
</script>
<style scoped>
  .error404 {
    width: 500px;
    margin: 100px auto;
    color: #66b1ff;;
  }

  .errorAction {
    margin: 20px 0
  }

  .errorFont {
    -webkit-box-reflect: below 0 -webkit-linear-gradient(transparent, transparent 50%, rgba(255, 255, 255, 0.4));
    line-height: 1;
    font-size: 80px;
    font-weight: 600;
    color: #66b1ff;
    margin-bottom: 60px;
    text-shadow: 0 7px 10px #999;
  }
</style>
