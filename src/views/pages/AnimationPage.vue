<template>
  <div class="content-panel">
    <div class="panel-box">
      <div class="panel-item">
        <div class="page-title">过渡</div>
        <transition></transition>
      </div>
      <div class="panel-item">
        <div class="page-title">轮播</div>
        <carousel></carousel>
      </div>
      <div class="panel-item">
        <div class="page-title">移动</div>
        <move></move>
      </div>
      <div class="panel-item">
        <div class="page-title">滚动</div>
        <list name="custom-classes-transition"
              enter-active-class="animated bounceIn"
              leave-active-class="animated bounceOutRight"></list>
      </div>
    </div>
  </div>
</template>
<script>
  import transition from '../../components/Transition.vue'
  import carousel from '../../components/Carousel.vue'
  import move from '../../components/Move.vue'
  import list from '../../components/ListScroll.vue'

  export default {
    name: 'animate',
    components: {transition, carousel, move, list}
  }
</script>
<style scoped>
  .panel-item {
    width: 100%;
    padding: 0 20px 20px 20px;

  }
</style>
