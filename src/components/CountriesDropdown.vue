<template>
  <v-select
    :items="countries"
    label="País"
    outlined
    prepend-icon=""
    @blur="onBlur($event)"
  >
    <template slot="item" slot-scope="data">
      <country-flag :country="data.item.value" size="normal" />
      {{ data.item.text }}
    </template>
    <template slot="selection" slot-scope="data">
      <country-flag :country="data.item.value.toLowerCase()" size="normal" />
      {{ data.item.text }}
    </template>
  </v-select>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    countries: []
  }),
  async created() {
    const {
      data: { countries }
    } = await axios.get("http://webinars-io.test/countries.php");

    Object.keys(countries).forEach(key => {
      this.countries.push({ text: countries[key], value: key });
    });
  },
  methods: {
    onBlur(e) {
      this.$emit("onBlur", { code: e });
    }
  }
};
</script>

<style></style>
