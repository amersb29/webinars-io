<template>
  <div class="home">
    <h1 class="home-header">Selecciona tu país</h1>
    <div class="home-flags">
      <img
        class="home-flags__image"
        src="@/assets/images/flag_mexico.png"
        alt="Bandera México"
        @click="setCheckoutInfo('MXN')"
      />
      <img
        class="home-flags__image"
        src="@/assets/images/flag_usa.png"
        alt="Bandera USA"
        @click="setCheckoutInfo('USD')"
      />
      <img
        class="home-flags__image"
        src="@/assets/images/flag_union.png"
        alt="Bandera USA"
        @click="setCheckoutInfo('EUR')"
      />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    async setCheckoutInfo(currency) {
      this.$store.dispatch("getCheckoutInfo", currency);
      this.$router.push({ name: "Checkout" });
    }
  }
};
</script>

<style>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
}
.home-header {
  text-align: center;
}
.home-flags {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.home-flags__image {
  cursor: pointer;
  width: 100%;
}
</style>
