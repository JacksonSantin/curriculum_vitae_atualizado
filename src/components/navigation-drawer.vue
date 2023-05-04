<template>
  <v-navigation-drawer
    absolute
    color="#24292e"
    class="justify-space-between"
    mini-variant
    permanent
  >
    <div class="icones my-2">
      <div class="icones-top">
        <v-icon
          v-for="(item, idx) in iconesTop"
          :key="idx"
          class="d-block text-center mx-auto mb-4"
          color="grey"
          size="24"
          >{{ item.icon }}</v-icon
        >
      </div>
      <div class="icones-bottom">
        <v-menu top open-on-hover :offset-x="true">
          <template v-slot:activator="{ on, attrs }">
            <v-icon
              v-bind="attrs"
              v-on="on"
              class="d-block text-center mx-auto mb-4"
              color="grey"
              size="24"
              >mdi-account-circle-outline</v-icon
            >
          </template>

          <v-list>
            <v-list-item v-for="(item, index) in socialNetworks" :key="index">
              <v-list-item-action>
                <v-btn
                  fab
                  icon
                  x-small
                  :elevation="0"
                  class="white--text font-weight-bold"
                  @click="window.open(item.link)"
                >
                  <v-icon small> {{ item.icon }} </v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-icon class="d-block text-center mx-auto mb-4" color="grey" size="24"
          >mdi-cog-outline</v-icon
        >
      </div>
    </div>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    iconesTop: [
      { icon: "mdi-file-multiple-outline" },
      { icon: "mdi-magnify" },
      { icon: "mdi-source-branch" },
      { icon: "mdi-play-outline" },
      { icon: "mdi-grid-large" },
      { icon: "mdi-dots-horizontal" },
    ],
    socialNetworks: [
      {
        icon: "mdi-linkedin",
        link: "https://www.linkedin.com/in/jackson-dhanyel-santin",
      },
      { icon: "mdi-github", link: "https://github.com/JacksonSantin" },
      {
        icon: "mdi-instagram",
        link: "https://www.instagram.com/jackson_santin",
      },
      {
        icon: "mdi-facebook",
        link: "https://www.facebook.com/jackson.santin.52",
      },
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