<template>
<main>
  <appHead></appHead>
  <payment></payment>
</main>
</template>

<script>
import appHead from './components/header.vue'
import payment from './components/payment.vue'

export default {
  components: {
    appHead,
    payment
  }
}
</script>

<style lang="scss">
@import './assets/variables.scss';
@import './assets/base.scss';
</style>
