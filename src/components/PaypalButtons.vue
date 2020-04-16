<template>
  <div>
    <div ref="paypal" class="paypal-buttons"></div>
  </div>
</template>

<script>
export default {
  // data: () => ({
  // }),
  mounted() {
    const script = document.createElement("script");
    // script.src = `https://www.paypal.com/sdk/js?currency=${this.$store.getters.currency}&client-id=${process.env.PAYPAL_ID}`;
    script.src = `https://www.paypal.com/sdk/js?currency=${this.$store.getters.currency}&client-id=AarZrHtmROoX2eFevQDbPKWGiWKR9ehONIK6JuQaCYBk-zT9G_mFWK3yYnkPtsYKEiYOowF0-cgNbcNC`;
    script.addEventListener("load", this.setLoaded);
    document.body.appendChild(script);
  },
  methods: {
    setLoaded() {
      // https://developer.paypal.com/docs/checkout/best-practices/smart-payment-buttons/
      this.$store.commit("updateState", { key: "loading", value: true });

      window.paypal
        .Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  description: this.$store.getters.checkoutDescription,
                  amount: { value: this.$store.getters.checkoutPrice }
                }
              ]
            });
          },
          onApprove: function(data, actions) {
            return actions.order.capture().then(function(details) {
              alert(
                "Transaction completed by " + details.payer.name.given_name
              );
              this.$store.commit("updateState", {
                key: "loading",
                value: false
              });

              window.location = this.$store.getters.checkoutReturnUrl;
            });
          }
        })
        .render(this.$refs.paypal);
    }
  }
};
</script>

<style>
.paypal-buttons {
  margin-top: 10px;
}
</style>
