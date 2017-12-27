<template>
<header>
  <h1>Mail A Circle</h1>
</header>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '../assets/variables.scss';

header {
  position: absolute;
  width: 100%;
  height: 100px;
  border-bottom-left-radius: 75% 10%;
  border-bottom-right-radius: 75% 10%;
  background: $white;
  z-index: 2;
}

h1 {
    margin: 0;
    padding: 1rem;
}
</style>
