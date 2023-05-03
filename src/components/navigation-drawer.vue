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
          v-for="(item, idx) in iconesTopo"
          :key="idx"
          class="d-block text-center mx-auto mb-4"
          color="grey"
          size="24"
          >{{ item.icone }}</v-icon
        >
      </div>
      <div class="icones-bottom">
        <v-icon
          v-for="(item, idx) in iconesBottom"
          :key="idx"
          class="d-block text-center mx-auto mb-4"
          color="grey"
          size="24"
          >{{ item.icone }}</v-icon
        >
      </div>
    </div>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    iconesTopo: [
      { icone: "mdi-file-multiple-outline" },
      { icone: "mdi-magnify" },
      { icone: "mdi-source-branch" },
      { icone: "mdi-play-outline" },
      { icone: "mdi-grid-large" },
      { icone: "mdi-dots-horizontal" },
    ],
     iconesBottom: [
      { icone: "mdi-account-circle-outline" },
      { icone: "mdi-cog-outline" },
    ],
  }),
};
</script>

<style scoped>
:deep(.v-navigation-drawer__border) {
  background: #1b1f23 !important;
}
.icones-bottom {
  position: absolute;
  bottom: 0px;
  margin-left: 15px;
}
</style>