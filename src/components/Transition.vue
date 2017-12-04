<template>
  <div>
    <div class="card">

    </div>
    <div class="box">
      <div class="box-info">hello world</div>
      <div class="box-cover"></div>
    </div>
  </div>
</template>
<style scoped>
  .card {
    width: 200px;
    height: 100px;
    background: #E65D6E;
    transition: 600ms ease all;
    position: relative;
    float: left;
  }

  .card:hover {
    background: #fff;
  }

  .card:before, .card:after {
    content: '';
    position: absolute;

    height: 2px;
    width: 0;
    -webkit-transition: 400ms ease all;
    transition: 400ms ease all
  }

  .card:before {
    top: 0;
    right: 0;
  }

  .card:after {
    bottom: 0;
    left: 0;
  }

  .card:hover:before, .card:hover:after {
    width: 100%;
    -webkit-transition: 600ms ease all;
    transition: 600ms ease all;
  }

  .card:hover:before, .card:hover:after {
    background: #E65D6E;
  }

  .box {
    margin:0 20px;
    position: relative;
    float: left;
    width: 100px;
    height: 100px;
  }

  .box-info {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 2px solid #ccc;
    line-height: 100px;
    text-align: center;
    position: absolute;
    top: 0;
    left: 0;
  }

  .box-cover {
    width: 100px;
    height: 100px;
    background: #64d9d6;
    border: 2px solid #ccc;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
    transform-origin: 100% 50%;
    transition: all 0.6s ease-in-out;
  }
  .box:hover .box-cover {
    transform: rotate(180deg);
  }
</style>
