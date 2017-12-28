<template>
<main>
  <router-view></router-view>

  <div class="footer-clearspace"></div>
  <footer class="footer">
    <div class="footer-wrapper">
      <h6 class="footer-text copywrite">© {{ year.getFullYear() }} MilkBomb</h6>
      <h6 class="footer-text credit">A MilkBomb Production</h6>
    </div>
  </footer>
</main>
</template>

<script>
import router from './router'

export default {
  router,
  data: function() {
    return {
      year: new Date
    }
  }
}
</script>

<style lang="scss">
@import './assets/variables.scss';
@import './assets/base.scss';
</style>
