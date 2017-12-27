<template>
<main>
  <section class="hero">
    <appHead></appHead>
  </section>

  <section class="section about">
    <h1 class="section-header">The Why</h1>
    <h2 class="section-subheader">Some sort of sentance</h2>
    <div class="col-2 about-video">
    </div>
    <div class="col-2 about-text">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere dolor ducimus, sed sunt nesciunt excepturi eveniet voluptates, quos, aperiam, dicta autem in facilis esse at adipisci harum rem hic? Nostrum cumque animi qui vitae, sed harum quam ex ipsum blanditiis amet asperiores veniam esse placeat, doloremque alias, ducimus omnis. Facilis ipsum sunt mollitia odit labore voluptatum temporibus ab perferendis error explicabo, pariatur. Non beatae, nihil amet. Maiores tempora, quasi et facere consequuntur, autem! Nihil vitae omnis dolore, fugit! Neque expedita sed possimus vitae, iure harum enim commodi similique ipsa perferendis, aperiam cupiditate delectus itaque sunt quas maxime quis magnam.</p>
    </div>
  </section>

  <section class="section timeline background-medium">
    <h1 class="section-header">Celebrity Circle Meter</h1>
  </section>

  <section class="section payment">
    <h1 class="section-header">Are you ready to Mail The Circle?</h1>
    <h2 class="section-subheader">Some sort of sentance</h2>
    <div class="col-2">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt minima accusamus, aperiam esse iusto unde corrupti animi beatae consequatur, vitae, soluta molestiae harum illo ad quidem enim. Temporibus optio accusantium dolorem. Consequuntur esse inventore repudiandae tenetur quod perspiciatis provident deserunt explicabo incidunt sed aspernatur possimus voluptatem optio rem nam, adipisci, ducimus, deleniti. Omnis provident sunt laborum adipisci enim consequatur, in ipsum eum maxime, d</p>
    </div>
    <div class="col-2">
      <payment></payment>
    </div>
  </section>
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

.hero {
  width: 100%;
  height: 100vh;
  background: url('~/assets/hero.jpg');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}

.about-video {
  background-color: #dadada;
  height: 300px;
}

.about-text {
  p {
    margin: 0;
  }
}

</style>
