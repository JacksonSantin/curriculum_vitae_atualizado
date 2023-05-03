<template>
  <v-system-bar app color="#1f2428">
    <v-icon v-for="(button, idx) in buttons" :key="idx" size="13" :color="button.color"
      >mdi-circle</v-icon
    >

    <v-spacer></v-spacer>
    <v-flex class="file-title"
      >Jackson Dhanyel Santin - Curriculum Vitae</v-flex
    >
  </v-system-bar>
</template>

<script>
export default {
  data: () => ({
    buttons: [
      {color: "red"},
      {color: "yellow"},
      {color: "green"},
    ]
  })
};
</script>

<style scoped>
.file-title {
  color: grey;
  font-size: 12px;
}
</style>