<template>
  <v-row class="d-flex justify-center">
    <v-col class="d-flex justify-center" cols="4">
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
</template>

<style>
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
.contact-mail {
  text-align: center;
}
.contact-mail a,
.contact-webpage a {
  text-decoration: none;
  color: red !important;
}
</style>
