<template>
  <div class="content-panel">
    <div class="page-title">布局</div>
    <div style="width: 100%;height: 500px">
      <div class="header"></div>
      <div class="wapper">
        <div class="side"></div>
        <div class="content"></div>
      </div>

    </div>
  </div>
</template>
<script>
  export default {
    name: 'layoutpage'
  }
</script>
<style scoped>
.header{
  height: 60px;
  width: 100%;
  background: #d3dce6;
}
  .wapper{
    position: relative;
  }
  .side{
    position: absolute;
    top: 0;
    left: 0px;
    width: 200px;
    bottom: 0;
    background: #99a9bf;
  }
  .content{
    position: absolute;
    left: 200px;
    top: 0;
    right: 0px;
    bottom: 0px;
    background: #e5e9f2;
  }
</style>
