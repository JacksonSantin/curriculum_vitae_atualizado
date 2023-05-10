<template>
  <div class="markdown-container">
    <div v-html="formattedMarkdown"></div>
  </div>
</template>

<script>
import MarkdownIt from 'markdown-it';

export default {
  data() {
    return {
      markdown: `
# 🎓 Formação

### UPF - Universidade de Passo Fundo - 2020
> ADS (Análise e Desenvolvimento de Sistemas)
> Formado no Curso Superior Tecnólogo em Análise e Desenvolvimento de Sistemas.

### ROCKETSEAT - 2020
> Projeto Proffy
> Projeto Proffy desenvolvido e aprendido com a equipe da Rocketseat.


`

    };
  },
  computed: {
    formattedMarkdown() {
      const md = new MarkdownIt({
        html: true,
        linkify: true,
        typographer: true,
        highlight: (code, lang) => {
          if (lang && Prism.languages[lang]) {
            const highlightedCode = Prism.highlight(
              code,
              Prism.languages[lang],
              lang
            );
            return `<pre class="language-${lang}"><code>${highlightedCode}</code></pre>`;
          }
          // fallback to default behavior
          return `<pre class="language-plaintext"><code>${md.utils.escapeHtml(
            code
          )}</code></pre>`;
        },
      });
      return md.render(this.markdown);
    },
  },
};
</script>

<style scoped>
.markdown-container {
  background-color: #24292e;
  padding: 10px;
  color: white;
}
</style>