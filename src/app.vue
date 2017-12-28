<template>
<main>
  <section class="hero">
    <header class="hero-head">
      <h1 class="hero-head-logo">Mail A Circle</h1>
    </header>
    <div class="hero-opactiy">
      <appHead></appHead>
      <div class="hero-content">
        <h1 class="hero-header">Hey Internets The 90’s Wetdream Has Arrived</h1>
        <p class="hero-p">We’ve spent a few hours scheming and what we’ve decided to commit our free time to offering you a service to send a friend or foe “The Circle” by mail for a phenomenal fee of $2.99. And because our commitment and love of the sport we’ve decided
          to mail bonus circles to top celebs based on your feedback. Check our meter to see who's gonna get it next.</p>
        <button class="hero-cta" type="button" v-on:click="goToPayments">Send The Circle</button>
      </div>
    </div>
    </div>
  </section>

  <section class="section about">
    <div class="section-wrapper">
      <h1 class="section-header">The Why</h1>
      <h2 class="section-subheader">Some sort of sentance</h2>
      <div class="col-2 about-video">
      </div>
      <div class="col-2 about-text">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere dolor ducimus, sed sunt nesciunt excepturi eveniet voluptates, quos, aperiam, dicta autem in facilis esse at adipisci harum rem hic? Nostrum cumque animi qui vitae, sed harum quam
          ex ipsum blanditiis amet asperiores veniam esse placeat, doloremque alias, ducimus omnis. Facilis ipsum sunt mollitia odit labore voluptatum temporibus ab perferendis error explicabo, pariatur. Non beatae, nihil amet. Maiores tempora, quasi
          et facere consequuntur, autem! Nihil vitae omnis dolore, fugit! Neque expedita sed possimus vitae, iure harum enim commodi similique ipsa perferendis, aperiam cupiditate delectus itaque sunt quas maxime quis magnam.</p>
      </div>
    </div>
  </section>

  <section class="section timeline background-medium">
    <div class="section-wrapper">
      <h1 class="section-header">The Circle Gallery</h1>
    </div>
  </section>

  <section class="section payment">
    <div class="section-wrapper">
      <h1 class="section-header">Are you ready to Mail The Circle?</h1>
      <h2 class="section-subheader">Some sort of sentance</h2>
      <div class="col-2">
        <p class="payment-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt minima accusamus, aperiam esse iusto unde corrupti animi beatae consequatur, vitae, soluta molestiae harum illo ad quidem enim. Temporibus optio accusantium dolorem. Consequuntur
          esse inventore repudiandae tenetur quod perspiciatis provident deserunt explicabo incidunt sed aspernatur possimus voluptatem optio rem nam, adipisci, ducimus, deleniti. Omnis provident sunt laborum adipisci enim consequatur, in ipsum eum maxime,
          d
        </p>
      </div>
      <div class="col-2" id="payments">
        <payment></payment>
      </div>
    </div>
  </section>

  <footer class="footer">
    <div class="footer-wrapper">
      <h6 class="footer-text copywrite">© {{ year.getFullYear() }} MilkBomb</h6>
      <h6 class="footer-text credit">A MilkBomb Production</h6>
    </div>
  </footer>
</main>
</template>

<script>
import payment from './components/payment.vue'

export default {
  data: function() {
    return {
      year: new Date
    }
  },
  components: {
    payment
  },
  methods: {
    goToPayments() {
      document.getElementById('payments').scrollIntoView({behavior: "smooth", block: "start"})
    }
  }
}
</script>

<style lang="scss">
@import './assets/variables.scss';
@import './assets/base.scss';
</style>
