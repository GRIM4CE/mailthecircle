<template lang="html">
  <footer>
    <div class="footer-clearspace"></div>
    <div class="footer">
      <div class="footer-wrapper">
        <h6 class="footer-text copywrite">© {{ year.getFullYear() }} MilkBomb</h6>
        <h6 class="footer-text credit">A MilkBomb Production</h6>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data: function() {
    return {
      year: new Date
    }
  }
}
</script>

<style lang="scss">
@import 'assets/variables.scss';
@import 'assets/components/footer.scss';
</style>
