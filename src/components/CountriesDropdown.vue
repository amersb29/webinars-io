<template>
  <v-select
    :items="countries"
    label="País"
    outlined
    prepend-icon=""
    @change="onChange($event)"
    @blur="onBlur"
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
    code: undefined,
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
    onChange(e) {
      this.code = e;
    },
    onBlur() {
      this.$emit("onBlur", { code: this.code });
    }
  }
};
</script>

<style></style>
