<template>
  <div class="checkout">
    <!-- <PaypalCheckout /> -->
    <!-- <div class="checkout-header">
      <img src="@/assets/images/logo_IO.jpg" alt="Logo Inteligencia Objetiva"/>
    </div> -->
    <div class="checkout-item">
      <img
        class="checkout-item__webinar-image"
        src="@/assets/images/1Fortaleza-mental_paciencia-y-creatividad_header.jpg"
        alt="Webinar title"
      />
    </div>
    <div class="checkout-item">
      <PaypalButtons />
    </div>
  </div>
</template>

<script>
// import PaypalCheckout from "@/components/PaypalCheckout";
import PaypalButtons from "@/components/PaypalButtons";

export default {
  name: "Checkout",
  components: {
    // PaypalCheckout
    PaypalButtons
  },
  computed: {}
};
</script>

<style lang="scss">
.checkout {
  display: flex;
  // flex-direction: column;
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
