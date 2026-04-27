<template>
  <div class="ml-15">
    <v-toolbar flat color="#1f2428" dark height="30">
      <v-toolbar-title class="toolbar-title">EXPLORER</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-icon>mdi-dots-horizontal</v-icon>
    </v-toolbar>
    <v-divider class="divider"></v-divider>
    <v-tabs vertical v-model="activeTab" background-color="#1f2428">
      <router-link
        v-for="tab in tabs"
        :key="tab.title"
        :to="tab.path"
        :class="['router-link', { active: isActiveRoute(tab.path) }]"
      >
        <v-icon left size="14" :color="tab.colorIcon">
          {{ tab.icon }}
        </v-icon>
        <span class="tab-span">{{ tab.title }}</span>
      </router-link>
    </v-tabs>
  </div>
</template>

<script>
export default {
  data: () => ({
    activeTab: null,
    tabs: [
      {
        colorIcon: "orange",
        icon: "mdi-account-details-outline",
        title: "sobre-mim.md",
        path: "/sobre",
      },
      {
        colorIcon: "red",
        icon: "mdi-star-outline",
        title: "skills.md",
        path: "/skills",
      },
      {
        colorIcon: "green",
        icon: "mdi-school-outline",
        title: "formacao.md",
        path: "/formacao",
      },
      {
        colorIcon: "blue",
        icon: "mdi-briefcase-outline",
        title: "experiencia.md",
        path: "/experiencia",
      },
      {
        colorIcon: "purple",
        icon: "mdi-code-tags",
        title: "projetos.md",
        path: "/projetos",
      },
      {
        colorIcon: "cyan",
        icon: "mdi-email-outline",
        title: "contato.md",
        path: "/contato",
      },
    ],
  }),
  methods: {
    isActiveRoute(path) {
      return this.$route.path === path;
    },
  },
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
}
.tab-span {
  font-size: 12px;
  text-transform: lowercase;
  color: white;
}
.router-link {
  text-decoration: none;
  color: inherit;
}

.router-link.active {
  font-weight: bold;
  background-color: #282e34;
}
</style>
