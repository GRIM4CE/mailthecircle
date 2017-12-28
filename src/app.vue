<template>
<main>
  <section class="hero">
    <header class="hero-head">
      <img class="hero-head-logo" src="assets/mail-the-circle-logo.svg" alt="Mail The Circle">
    </header>
    <div class="hero-opactiy">
      <appHead></appHead>
      <div class="hero-content">
        <h1 class="hero-header">The Circle Game Has Gone Postal</h1>
        <p class="hero-p">Sick of always losing at the circle game? Take it to the next level and mail the circle to your unexpecting friend or foe. For a minuscule fee of $4.99, we will print, package, and mail the circle. We deliver the circle, you deliver the hits!</p>
        <button class="hero-cta" type="button" v-on:click="goToPayments">Mail The Circle</button>
      </div>
    </div>
    </div>
  </section>

  <!-- We’ve spent a few hours scheming and what we’ve decided to commit our free time to offering you a service to send a friend or foe “The Circle” by mail for a phenomenal fee of $2.99. And because our commitment and love of the sport we’ve decided
  to mail bonus circles to top celebs based on your feedback. Check our meter to see who's gonna get it next -->

  <!-- "the circle will be printed on a 4'' x 6'' 16PT Postcard with a UV Coated Finish
the price includes double sided. So we can do the congratulations note on the backside -->

  <!-- "congratulations! You have just been mailed the Circle. Now get ready to receive two hits from one of your friends. We can't tell you who sent it so don't forget to always be looking over your shoulder and get ready for hell on earth" -->

  <section class="section about">
    <div class="section-wrapper">
      <h1 class="section-header">The Why</h1>
      <h2 class="section-subheader">To piss off those we hold near and dear to us.</h2>
      <div class="col-2 about-video">
      </div>
      <div class="col-2 about-text">
        <p>After being tagged in every "Circle Game" meme under the sun, we became infuriated with those we hardly consider our friends and decided it was time to get even. We devised a plan where we could anonymously win the game every time and leave our
          "friends" questioning their existence. We decided it was time to mail the circle.</p>

        <p>After a few trial runs and much laughter, we decided to take this pony on tour. Seeing our enemies (Yes you, Todd!) unexpectedly open their mail only to find the image of a thumb and index finger pressed together is the most satisfying revenge!
        </p>

        <p>Here is the deal: give us $3.99, a name, and a mailing address and we will send this day wrecker to anyone your heart desires. All you need to do is wait a few weeks in anticipation for the day when Jerry finally gets it.</p>
      </div>
    </div>
  </section>

  <section class="section timeline background-medium">
    <div class="section-wrapper">
      <h1 class="section-header">The Product</h1>
      <div class="product">
        <div class="product-overlay" v-on:click="goToPayments">
          <span class="product-text">Mail The Circle</span>
        </div>
        <img class="product-image" src="assets/product.jpg" alt="The Product (Mail The Circle Image)">
      </div>
    </div>
  </section>

  <section class="section payment">
    <div class="section-wrapper">
      <h1 class="section-header">Are you ready to Mail The Circle?</h1>
      <h2 class="section-subheader">We thought so.</h2>
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
      document.getElementById('payments').scrollIntoView({
        behavior: "smooth",
        block: "start"
      })
    }
  }
}
</script>

<style lang="scss">
@import './assets/variables.scss';
@import './assets/base.scss';
</style>
