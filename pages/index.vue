<template lang="html">
  <main class="container">
    <section class="hero">
      <header class="hero-head">
        <img class="hero-head-logo" src="/mail-the-circle-logo.svg" alt="Mail The Circle">
      </header>
      <div class="hero-opactiy">
        <appHead></appHead>
        <div class="hero-content">
          <h1 class="hero-header">The Circle Game Has Gone Postal</h1>
          <p class="hero-p">Sick of always losing at the circle game? Take it to the next level and mail the circle to your unexpecting friend or foe. For a minuscule fee of $4.99, we will print, package, and mail the circle. We deliver the circle, you deliver the hits!</p>
          <button class="hero-cta" type="button" v-on:click="goToPayments">Mail The Circle</button>
        </div>
      </div>
    </section>

    <section class="section about">
      <div class="section-wrapper">
        <h1 class="section-header">The Why</h1>
        <h2 class="section-subheader">To piss off those we hold near and dear to us.</h2>
        <div class="col-2 about-image">
          <img src="/goodjob.jpg" alt="Good Job">
        </div>
        <div class="col-2 about-text">
          <p>After being tagged in every "Circle Game" meme under the sun, we became infuriated with those we hardly consider our friends and decided it was time to get even. We devised a plan where we could anonymously win the game every time and leave our
            "friends" questioning their existence. We decided it was time to mail the circle.</p>

          <p>After a few trial runs and much laughter, we decided to take this pony on tour. Seeing our enemies (Yes you, Todd!) unexpectedly open their mail only to find the image of a thumb and index finger pressed together is the most satisfying revenge!
          </p>

          <p>Here is the deal: give us $4.99, a name, and a mailing address and we will send this day wrecker to anyone your heart desires. All you need to do is wait a few weeks in anticipation for the day when Jerry finally gets it.</p>
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
          <img class="product-image" src="/product.jpg" alt="The Product (Mail The Circle Image)">
        </div>
      </div>
    </section>

    <section class="section payment">
      <div class="section-wrapper">
        <h1 class="section-header">Are you ready to Mail The Circle?</h1>
        <h2 class="section-subheader">We thought so.</h2>
        <div class="col-2">
          <p>Alright so you've decided to Mail The Circle; we know you won't regret it. Just complete the paypal payment form with the recipient's name and address and leave the rest to us.</p>
          <p>The circle will be printed on a 4" x 6" 16PT Postcard with a UV Coated Finish, so you know the humiliation will last.</p>
          <p>Each circle is sent anonymously, so that your victim will constantly be looking over their shoulder, not knowing when or by who they will be hit. They will be living in hell.</p>
        </div>
        <div class="col-2" id="payments">
          <form class="payment-container" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
            <div class="payment-container-header">
              <h2>Send The Circle</h2>
            </div>
            <div class="payment-container-main">
            <input type="hidden" name="cmd" value="_s-xclick">
            <input type="hidden" name="hosted_button_id" value="U2TZ3HJLN2B9W">
            <input type="hidden" name="on0" value="Recipients Name">Recipients Name:
            <input type="text" name="os0" maxlength="200">
            <input type="hidden" name="on1" value="Recipients Address">Recipients Address:
            <input type="text" name="os1" maxlength="200">
              <div class="payment-group">
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_paynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
                <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
    <appFooter></appFooter>
  </main>
</template>

<script>
import appFooter from '~/components/footer.vue'

export default {
  head: {
    title: 'Mail The Circle',
    meta: [{
      hid: 'description',
      name: 'description',
      content: 'Take the circle game to the next level and mail the circle to your unexpecting friend or foe. For $4.99, we will print, package, and mail the circle.'
    }]
  },
  components: {
    appFooter
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
@import 'assets/variables.scss';
@import 'assets/base.scss';
</style>
