<template>
  <div style="padding: 20px">
    <div class="line">
      <div class="move"></div>
    </div>

  </div>
</template>
<style scoped>
  .line {
    width: 500px;
    height: 2px;
    background: red;
    position: relative;
  }

  .line:before, .line:after {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #fff;
    border: 2px solid red;
    position: absolute;
    content: '';
    top: -8px;
  }

  .line:before {
    left: 0;
  }

  .line:after {
    right: 0;
  }

  .move {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: yellow;
    box-shadow: 0 0 10px #ccc;
    top: -8px;
    animation: move 5s linear 2s infinite alternate;
    position: absolute;
  }

  @keyframes move {
    from {
      left: -8px;
    }
    to {
      left: calc(100% - 8px);
    }
  }
</style>
