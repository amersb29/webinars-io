<template>
  <div class="checkout">
    <div class="checkout-item">
      <img
        class="checkout-item__webinar-image"
        :src="banner"
        alt="Webinar title"
      />
    </div>
    <div class="checkout-item">
      <PaypalButtons />
    </div>
  </div>
</template>

<script>
import PaypalButtons from "@/components/PaypalButtons";

export default {
  name: "Checkout",
  components: {
    PaypalButtons
  },
  computed: {
    banner() {
      return this.$store.getters.checkoutBanner;
    }
  }
};
</script>

<style lang="scss">
.checkout {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.checkout-item {
  width: 50%;
}
.checkout-item__webinar-image {
  width: 100%;
}
</style>
