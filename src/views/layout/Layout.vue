<template>
  <div class="wapper">
    <navbar></navbar>
    <div class="main" :class="{hidebar:!sidebar.opened}">
      <siderbar class="siderbar-box"></siderbar>
      <section>
        <router-view :key="key"></router-view>
      </section>
    </div>
  </div>
</template>
<script>
  import Navbar from '../../components/Navbar.vue'
  import Siderbar from '../../components/Siderbar.vue'
  import '../../assets/theme/white.scss'
  import '../../assets/theme/black.scss'
  import '../../assets/theme/default.scss'

  export default {
    name: 'layout',
    components: {
      Navbar,
      Siderbar
    },
    computed: {
      sidebar () {
        return this.$store.state.sidebar.sidebar
      },
      key () {
        return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
      }
    },
    methods: {}
  }
</script>
<style scoped>
  @import "../../assets/css/common.scss";

</style>
