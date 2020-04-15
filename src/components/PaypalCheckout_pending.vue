<template>
  <div>
    <h1>Paypal Checkout</h1>
    <div id="ppplus"></div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("getApprovalUrl");

    this.unsubscribe = this.$store.subscribe((mutation, state) => {
      if (state.approvalUrl !== undefined && state.approvalUrl !== null) {
        const script = document.createElement("script");
        script.src = `https://www.paypalobjects.com/webstatic/ppplus/ppplus.min.js`;
        script.addEventListener("load", this.setLoaded);
        document.body.appendChild(script);
      }
    });
  },
  beforeDestroy() {
    this.unsubscribe();
  },
  methods: {
    setLoaded() {
      window.PAYPAL.apps.PPP({
        approvalUrl: this.$store.getters.approval_url,
        placeholder: "ppplus",
        mode: "sandbox",
        country: "MX",
        enableContinue: "continueButton"
      });
    }
  }
};
</script>
