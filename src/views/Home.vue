<template>
  <v-container fluid>
    <HeaderRow />
    <v-row>
      <v-col class="d-flex justify-center mt-12" cols="12" sm="12">
        <h1>Elige tu país</h1>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center">
      <v-col cols="6" class="d-flex justify-center flex-column">
        <countries-dropdown @onBlur="countryChanged"></countries-dropdown>
        <v-btn
          :disabled="countrySelected"
          depressed
          large
          color="error"
          style="margin: 0 auto"
          @click="goToCheckout"
          >Siguiente</v-btn
        >
      </v-col>
    </v-row>
    <FooterRow />
  </v-container>
</template>

<script>
import HeaderRow from "@/components/HeaderRow";
import FooterRow from "@/components/FooterRow";
import CountriesDropdown from "@/components/CountriesDropdown";

export default {
  components: { HeaderRow, FooterRow, CountriesDropdown },
  computed: {
    countrySelected() {
      return this.$store.getters.currency === undefined;
    }
  },
  methods: {
    countryChanged({ code }) {
      this.$store.dispatch("getCheckoutInfo", code);
    },
    goToCheckout() {
      this.$router.push({ name: "checkout" });
    }
  }
};
</script>

<style>
h1 {
  font-family: "Montserrat", sans-serif;
}
</style>
