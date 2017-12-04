<template>
  <div class="scroll-wrap">
    <ul class="scroll-content" :style="{ top }">
      <li v-for="item in prizeList">{{item.name}}</li>
    </ul>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        prizeList: [
          {name: '1.11111111111111'},
          {name: '2.222222222222'},
          {name: '3.33333333333'},
          {name: '4.444444444444'},
          {name: '5.555555555555'}
        ],
        activeIndex: 0
      }
    },

    computed: {
      top () {
        return -this.activeIndex * 50 + 'px'
      }
    },

    mounted () {
      setInterval(async () => {
        let first = this.prizeList.splice(0, 1)
        this.prizeList.push(...first)
      }, 1000)
      /* setInterval(_ => {
         if (this.activeIndex < this.prizeList.length) {
           this.activeIndex += 1
         } else {
           this.activeIndex = 0
         }
       }, 1000) */
    }
  }
</script>
<style scoped>
  .scroll-wrap {
    width: 200px;
    height: 100px;
    overflow: hidden;
  }

  .scroll-content {
    position: relative;
    transition: top 1s ease;
  }

  li {
    line-height: 50px;
    text-align: center;
  }

</style>
