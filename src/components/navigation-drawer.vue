<template>
  <v-navigation-drawer
    absolute
    color="#24292e"
    class="justify-space-between"
    mini-variant
    permanent
  >
    <div class="icones my-2">
      <div class="icones-topo">
        <v-icon
          v-for="(item, idx) in icones"
          :key="idx"
          class="d-block text-center mx-auto mb-4"
          color="white"
          size="24"
          >{{ item.icone }}</v-icon
        >
      </div>
      <div class="icones-baixo">
        <v-icon class="d-block text-center mx-auto mb-4" color="white" size="24"
          >mdi-account-circle-outline</v-icon
        >
        <v-icon class="d-block text-center mx-auto mb-4" color="white" size="24"
          >mdi-cog-outline</v-icon
        >
      </div>
    </div>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    icones: [
      { icone: "mdi-file-multiple-outline" },
      { icone: "mdi-magnify" },
      { icone: "mdi-source-branch" },
      { icone: "mdi-play-outline" },
      { icone: "mdi-grid-large" },
      { icone: "mdi-dots-horizontal" },
    ],
  }),
};
</script>

<style scoped>
:deep(.v-navigation-drawer__border) {
  background: #1b1f23 !important;
}
.icones-baixo {
  position: absolute;
  bottom: 0px;
  margin-left: 15px;
}
</style>