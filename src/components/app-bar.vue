<template>
  <div>
    <v-app-bar color="#1f2428" app clipped-right flat height="30">
      <v-tabs v-model="tabTop" v-for="(tab, idx) in tabs" :key="idx">
        <v-tab class="d-flex align-center justify-content-between pa-2">
          <v-icon left size="14" :color="tab.colorIcon">
            {{ tab.icon }}
          </v-icon>
          <span class="tab-span">{{ tab.title }}.</span>
          <span class="extension">md</span>
          <v-icon right size="14" color="grey" @click="closeTab(idx)">
            mdi-close
          </v-icon>
        </v-tab>
      </v-tabs>
    </v-app-bar>

    <main class="content">
      <v-tabs-items v-model="tabTop">
        <v-tab-item v-for="(tab, idx) in tabs" :key="idx">
          <component :is="tab.component" />
        </v-tab-item>
      </v-tabs-items>
    </main>
  </div>
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
    Sobre,
    Skills,
    Formacao,
    Experiencia,
    Projetos,
    Contato,
  },
  data: () => ({
    tabTop: null,
    tabs: [
      {
        colorIcon: "orange",
        icon: "mdi-account-details-outline",
        title: "sobre-mim",
        component: Sobre
      },
      { colorIcon: "red", icon: "mdi-star-outline", title: "skills", component: Skills },
      { colorIcon: "green", icon: "mdi-school-outline", title: "formacao", component: Formacao },
      {
        colorIcon: "blue",
        icon: "mdi-briefcase-outline",
        title: "experiencia",
        component: Experiencia
      },
      { colorIcon: "purple", icon: "mdi-code-tags", title: "projetos", component: Projetos },
      { colorIcon: "cyan", icon: "mdi-email-outline", title: "contato", component: Contato },
    ],
  }),
  methods: {
    closeTab(index) {
      this.tabs.splice(index, 1);
      if (this.activeTab === index) {
        this.activeTab = null;
      }
    },
  },
};
</script>

<style scoped>
.tab-span {
  color: #e1e4e8;
  text-transform: capitalize;
}
.extension {
  color: #e1e4e8;
  text-transform: lowercase;
}
.content {
  background-color: #24292e;
}
</style>