<template>
  <div>
    <v-toolbar flat color="#1f2428" dark height="30">
      <v-toolbar-title class="pl-15 toolbar-title">EXPLORER</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-icon>mdi-dots-horizontal</v-icon>
    </v-toolbar>
    <v-divider class="divider"></v-divider>
    <v-tabs vertical v-model="activeTab" background-color="#1f2428" v-for="(tab, idx) in tabs" :key="idx">
      <v-tab class="justify-start pl-15 tabs">
        <v-icon left size="14" :color="tab.colorIcon"> {{tab.icon}} </v-icon>
        <span class="tab-span">{{tab.title}}</span>
      </v-tab>
    </v-tabs>
  </div>
</template>

<script>
export default {
  data: () => ({
    activeTab: null,
    tabs: [
      {colorIcon: "orange", icon: "mdi-account-details-outline", title: "sobre-mim.js"},
      {colorIcon: "red", icon: "mdi-star-outline", title: "skills.js"},
      {colorIcon: "green", icon: "mdi-school-outline", title: "formacao.js"},
      {colorIcon: "blue", icon: "mdi-briefcase-outline", title: "experiencia.js"},
      {colorIcon: "purple", icon: "mdi-code-tags", title: "projetos.js"},
      {colorIcon: "cyan", icon: "mdi-email-outline", title: "contato.js"},
    ]
  })
};
</script>

<style scoped>
.toolbar-title {
  font-size: 11px;
}
.divider {
  background-color: #1b1f23;
}
.tabs {
  height: 30px !important;
  padding-left: 5rem !important;
}
.tab-span {
  font-size: 12px;
  text-transform: lowercase;
  color: white;
}
:deep(.v-tab--active) {
  background-color: #282e34;
}
</style>