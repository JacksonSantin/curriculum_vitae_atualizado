<template>
  <div class="markdown-container">
    <div v-html="formattedMarkdown"></div>
    <v-form ref="form" class="mt-5 form" @submit.prevent="sendEmail">
      <v-row>
        <v-col cols="12">
          <v-text-field
            color="white"
            label="Seu nome"
            dense
            name="name"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-text-field
            color="white"
            label="Seu e-mail"
            :rules="[rules.email]"
            dense
            name="email"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-text-field
            label="Seu telefone (opcional)"
            color="white"
            dense
            name="phone"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-text-field
            label="Empresa"
            color="white"
            dense
            name="company"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-textarea
            label="Mensagem"
            color="white"
            rows="4"
            auto-grow
            dense
            name="message"
          ></v-textarea>
        </v-col>
      </v-row>

      <v-tooltip bottom>
        <template #activator="{ on }">
          <v-btn
            color="primary"
            type="Submit"
            class="mt-5"
            small
            outlined
            v-on="on"
          >
            <v-icon left>mdi-send</v-icon>Enviar
          </v-btn>
        </template>
        <span>Enviar Lembrete</span>
      </v-tooltip>
    </v-form>
  </div>
</template>

<script>
import MarkdownIt from "markdown-it";
import emailjs from "@emailjs/browser";

export default {
  data() {
    return {
      markdown: `
# 📍 Onde me encontro?

**Endereço:** Rua Duque de Caxias, 370, Centro\n
**[Ver rota no Google Maps](https://www.google.com/maps/dir/?api=1&destination=-28.450819517910066,-52.201736659492)**

# 📧 Entre em contato


`,
      rules: {
        email: (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "E-mail inválido.";
        },
      },
    };
  },
  methods: {
    sendEmail() {
      const formElement = this.$refs.form.$el;
      emailjs
        .sendForm(
          "gmailMessage",
          "template_rdu5oja",
          formElement,
          "user_0VFYQ4JjMn4RkCcdx9GRB"
        )
        .then(
          () => {
            this.$swal(
              "Obrigado :)",
              "Mensagem enviada com sucesso!",
              "success"
            );
          },
          () => {
            this.$swal(
              "Oops :(",
              "Mensagem não enviada, tente novamente!",
              "error"
            );
          }
        );
    },
  },
  computed: {
    formattedMarkdown() {
      const md = new MarkdownIt({
        html: true,
        linkify: true,
        typographer: true,
        highlight: (code, lang) => {
          if (lang && Prism.languages[lang]) {
            const highlightedCode = Prism.highlight(
              code,
              Prism.languages[lang],
              lang
            );
            return `<pre class="language-${lang}"><code>${highlightedCode}</code></pre>`;
          }
          // fallback to default behavior
          return `<pre class="language-plaintext"><code>${md.utils.escapeHtml(
            code
          )}</code></pre>`;
        },
      });
      return md.render(this.markdown);
    },
  },
};
</script>

<style scoped>
.markdown-container {
  background-color: #24292e;
  padding: 10px;
  color: white;
}
.form :deep(label) {
  color: white !important;
}
:deep(input),
:deep(textarea) {
  color: white !important;
}
:deep(.theme--light.v-text-field > .v-input__control > .v-input__slot:before),
:deep(
    .theme--light.v-text-field:not(.v-input--has-state):hover
      > .v-input__control
      > .v-input__slot:before
  ) {
  border-color: white;
}
</style>