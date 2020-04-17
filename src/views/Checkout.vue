<template>
  <v-container fluid>
    <HeaderRow />
    <v-row>
      <v-col class="d-flex justify-center" cols="12" sm="6">
        <div style="width: 100%">
          <v-img :src="banner" alt="Webinar title" />
        </div>
      </v-col>
      <v-col class="d-flex align-start" cols="12" sm="6">
        <PaypalButtons style="width: 100%" />
      </v-col>
    </v-row>
    <FooterRow />
  </v-container>
</template>

<script>
import HeaderRow from "@/components/HeaderRow";
import FooterRow from "@/components/FooterRow";
import PaypalButtons from "@/components/PaypalButtons";

export default {
  name: "Checkout",
  components: {
    HeaderRow,
    PaypalButtons,
    FooterRow
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
  align-items: flex-start;
}
.checkout-item {
  width: 50%;
}
.checkout-item__webinar-image {
  width: 100%;
  height: fit-content;
}
</style>
