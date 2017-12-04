<template>
  <div class="content-panel">
    <div class="page-title">按钮</div>
    <div>
      <button class="y-btn y-btn-default" ><span class="el-icon-error"></span> <span>按钮</span> </button>
      <button class="y-btn y-btn-normal" > <span>按钮</span> </button>
      <button class="y-btn" ><span class="glyphicon glyphicon-plus"></span></button>
      <button class="y-btn y-btn-text" ><span>文字按钮</span></button>
      <button class="y-btn y-btn-text" disabled><span>禁用</span></button>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'buttons'
  }
</script>
<style scoped>
  div {
    margin: 20px;
  }
</style>
