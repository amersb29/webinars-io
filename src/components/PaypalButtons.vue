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
    script.src = `https://www.paypal.com/sdk/js?currency=${this.$store.getters.currency}&client-id=${process.env.VUE_APP_PAYPAL_ID}`;
    script.addEventListener("load", this.setLoaded);
    document.body.appendChild(script);
  },
  methods: {
    setLoaded() {
      this.$store.commit("updateState", { key: "loading", value: true });
      const return_url = this.$store.getters.checkoutReturnUrl;

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

              window.location = return_url;
            });
          }
        })
        .render(this.$refs.paypal);
    }
  }
};
</script>
