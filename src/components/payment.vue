<template lang="html">
  <section>
    <form class="payment-container" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
      <div class="payment-container-header">
        <h2>Mail a circle to a friend or foe.</h2>
      </div>
      <div class="payment-container-main">
        <input type="hidden" name="cmd" value="_s-xclick">
        <input type="hidden" name="hosted_button_id" value="LVMKNFD2HCPF4">
        <input type="hidden" name="on0" value="Recipients Name">Recipients Name
        <input type="text" name="os0" maxlength="200">
        <input type="hidden" name="on1" value="Recipients Address">Recipients Address
        <input type="text" name="os1" maxlength="200"></td>
        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_paynow_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
        <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
      </div>
    </form>
  </section>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  @import '../assets/variables';

  .payment-container {
    width: 400px;
    margin: 2rem auto;
    border: 1px solid $black;
    border-radius: 8px;
    overflow: hidden;
  }

  .payment-container-header {
    background-color: $black;
    padding: 1rem 2rem;
  }

  h2 {
    margin: 0;
    color: $white;
  }

  .payment-container-main {
    padding: 1rem 2rem;
  }

  input[type='text'] {
    width: 100%;
    margin-bottom: 1rem;
  }
</style>
