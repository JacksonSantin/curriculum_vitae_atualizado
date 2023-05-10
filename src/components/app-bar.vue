<template>
  <v-app-bar color="#1f2428" app clipped-right flat height="30">
    <v-tabs v-for="(tab, idx) in tabs" :key="idx">
      <v-tab class="d-flex align-center justify-content-between pa-2">
        <v-icon left size="14" :color="tab.colorIcon"> {{tab.icon}} </v-icon>
        <span class="tab-span">{{tab.title}}.</span> <span class="extension">md</span>
        <v-icon right size="14" color="grey"> mdi-close </v-icon>
      </v-tab>
    </v-tabs>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    tabs: [
      {colorIcon: "orange", icon: "mdi-account-details-outline", title: "sobre-mim"},
      {colorIcon: "red", icon: "mdi-star-outline", title: "skills"},
      {colorIcon: "green", icon: "mdi-school-outline", title: "formacao"},
      {colorIcon: "blue", icon: "mdi-briefcase-outline", title: "experiencia"},
      {colorIcon: "purple", icon: "mdi-code-tags", title: "projetos"},
      {colorIcon: "cyan", icon: "mdi-email-outline", title: "contato"},
    ]
  })
};
</script>

<style scoped>
.tab-span {
  color: #E1E4E8;
  text-transform: capitalize;
}
.extension {
  color: #E1E4E8;
  text-transform: lowercase;
}
</style>