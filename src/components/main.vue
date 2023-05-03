<template>
  <v-main class="content">
    <pre><code class="language-json line-numbers pa-1" style="background-color: transparent;  font-size: 10px" v-html="highlightedCode"></code></pre>
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      code: '{"name": "John Doe", "age": 30}',
    };
  },
  computed: {
    highlightedCode() {
      return Prism.highlight(
        JSON.stringify(JSON.parse(this.code), null, 4),
        Prism.languages.javascript,
        "javascript"
      );
    },
  },
};
</script>

<style scoped>
code {
  display: inline-block;
  overflow-x: auto;
  width: 100%;
}
.content {
  background-color: #24292e;
}
</style>