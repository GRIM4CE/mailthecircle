<template lang="html">
  <section>
    <form class="payment-container" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
      <div class="payment-container-header">
        <h2>Send The Circle</h2>
      </div>
      <div class="payment-container-main">
      <input type="hidden" name="cmd" value="_s-xclick">
      <input type="hidden" name="hosted_button_id" value="U2TZ3HJLN2B9W">
      <input type="hidden" name="on0" value="Recipients Name:">Recipients Name:
      <input type="text" name="os0" maxlength="200">
      <input type="hidden" name="on1" value="Recipients Address:">Recipients Address:
      <input type="text" name="os1" maxlength="200">
        <div class="payment-group">
          <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_paynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
          <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
        </div>
      </div>
    </form>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
</style>
