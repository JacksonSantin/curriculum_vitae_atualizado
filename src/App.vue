<template>
  <v-app id="inspire">
    <system-bar />
    <app-bar />

    <v-navigation-drawer app color="#1f2428" width="300" permanent>
      <navigation-drawer />
      <side-bar />
    </v-navigation-drawer>

    <main-vue>
      <router-view></router-view>
    </main-vue>
  </v-app>
</template>

<script>
import SystemBar from "./components/system-bar.vue";
import AppBar from "./components/app-bar.vue";
import NavigationDrawer from "./components/navigation-drawer.vue";
import SideBar from "./components/side-bar.vue";
import MainVue from "./components/main.vue";

export default {
  components: {
    SystemBar,
    AppBar,
    NavigationDrawer,
    SideBar,
    MainVue,
  },
};
</script>

<style>
#inspire {
  font-family: "Fira Code", Roboto, sans-serif;
}
</style>
