<template>
  <v-main class="content">
    <skills />
  </v-main>
</template>

<script>
import Sobre from "@/view/sobre.vue";
import Skills from "@/view/skills.vue";
import Formacao from "@/view/formacao.vue";
import Experiencia from "@/view/experiencia.vue";
import Projetos from "@/view/projetos.vue";
import Contato from "@/view/contato.vue";

export default {
  components: {
    Skills,
  },
};
</script>

<style scoped>
.content {
  background-color: #24292e;
}
</style>