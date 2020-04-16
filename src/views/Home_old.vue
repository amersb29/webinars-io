<template>
  <div class="home">
    <div class="home-flags_container">
      <h1 class="home-header">Elige tu país</h1>
      <div class="home-flags">
        <div class="home-flags__image_container">
          <img
            class="home-flags__image"
            src="@/assets/images/flag_mexico.png"
            alt="Bandera México"
            @click="setCheckoutInfo('MXN')"
          />
        </div>
        <div class="home-flags__image_container">
          <img
            class="home-flags__image"
            src="@/assets/images/flag_usa.png"
            alt="Bandera USA"
            @click="setCheckoutInfo('USD')"
          />
        </div>
        <div class="home-flags__image_container">
          <img
            class="home-flags__image"
            src="@/assets/images/flag_union.png"
            alt="Bandera USA"
            @click="setCheckoutInfo('EUR')"
          />
        </div>
      </div>
    </div>
    <div class="contact">
      <p class="contact-mail">
        Tienes alguna duda o pregunta
        <a href="mailto:contacto@iobjetiva.com">contacto@iobjetiva.com</a>
      </p>
      <p class="contact-phone">Whatsapp 55 19 51 44 12</p>
      <p class="contact-webpage">
        <a href="https://www.inteligenciaobjetiva.com"
          >www.inteligenciaobjetiva.com</a
        >
      </p>
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
  align-items: center;
  height: 95vh;
  position: relative;
}
.home-flags_container {
  border-radius: 10px;
  -webkit-box-shadow: 0px 10px 30px -6px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 10px 30px -6px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 10px 30px -6px rgba(0, 0, 0, 0.75);
  height: fit-content;
  padding: 20px;
  width: 90%;
}
.home-header {
  text-align: center;
}
.home-flags {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
}
.home-flags__image_container {
  /* max-height: 350px; */
  max-width: 400px;
  padding: 20px;
}
.home-flags__image_container:hover {
  background-color: rgb(197, 197, 197);
}
.home-flags__image {
  cursor: pointer;
  width: 100%;
}
.contact {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0px;
}
.contact p {
  margin: 5px 0;
}
.contact-mail a,
.contact-webpage a {
  color: red;
}
</style>
