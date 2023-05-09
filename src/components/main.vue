<template>
  <v-main class="content">
    <sobre />
  </v-main>
</template>

<script>
import Sobre from "@/view/sobre.vue";

export default {
  components: {
    Sobre,
  },
};
</script>

<style scoped>
.content {
  background-color: #24292e;
}
</style>