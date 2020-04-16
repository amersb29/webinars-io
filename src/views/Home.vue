<template>
  <v-container fluid>
    <v-row>
      <v-col class="d-flex justify-center" cols="12" sm="12">
        <img src="@/assets/images/logo2.jpg" alt="Logo Inteligencia Objetiva" />
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex justify-center mt-12" cols="12" sm="12">
        <h1>Elige tu país</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6" offset-md="3" class="d-flex justify-end flex-column">
        <countries-dropdown @onBlur="countryChanged"></countries-dropdown>
        <v-btn
          depressed
          large
          color="error"
          style="margin: 0 auto"
          @click="goToCheckout"
          >Siguiente</v-btn
        >
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex justify-center" cols="4" offset-md="4">
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
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CountriesDropdown from "@/components/CountriesDropdown";

export default {
  components: { CountriesDropdown },
  methods: {
    countryChanged({ code }) {
      this.$store.dispatch("getCheckoutInfo", code);
    },
    goToCheckout() {
      this.$router.push({ name: "Checkout" });
    }
  }
};
</script>

<style>
h1 {
  font-family: "Montserrat", sans-serif;
}
.contact {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 20px;
}
.contact p {
  margin: 3px 0 !important;
}
.contact-mail a,
.contact-webpage a {
  text-decoration: none;
  color: red !important;
}
</style>
