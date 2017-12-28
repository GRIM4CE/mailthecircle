<template lang="html">
  <div class="container">
    <header class="success-header">
      <img class="success-logo" src="assets/mail-the-circle-logo.svg" alt="Mail The Circle">
    </header>
    <div class="content-container">
      <div class="success-image-container">
        <img class="success-image" src="assets/loser.jpg">
      </div>
      <h2>Congratulations! You have just mailed the Circle.</h2>
      <p>Now next time you see the friend you sent it to, be sure to give them two hits!</p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.success-header {
  width: 100%;
  padding: 1rem;
  text-align: center;
}

.success-logo {
  width: 100%;
  max-width: 150px;
}

.content-container {
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    align-items: flex-start;
    justify-content: center;
    min-height: 60vh;
    width: 100%;
}

h2,
p {
    width: 100%;
    margin: 0 auto;
    padding: 0 1.5rem;
    text-align: center;
    max-width: 800px;
}

h2 {
  margin-bottom: 1rem;
}

.success-image-container {
  width: 100%;
  text-align: center;
  margin-bottom: 1rem;
}

.success-image {
  max-width: 200px;
  border-radius: 100%;
}

@media all and (min-width: 37.5rem) {
  .success-header {
    padding: .5rem 1rem;
    text-align: left;
  }
}
</style>
