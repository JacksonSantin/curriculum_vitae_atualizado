<template>
  <div class="markdown-container">
    <div v-html="formattedMarkdown"></div>
  </div>
</template>

<script>
import MarkdownIt from "markdown-it";

export default {
  data() {
    return {
      markdown: `
# 📝 Sobre Mim

Dedicação. Essa palavra me difine bem. Procuro sempre fazer tudo do jeito mais correto possível, sempre pensando no próximo.
Pratico programação sempre que tenho um tempo sobrando, procuro estar sempre por dentro das notícias que mais me interessam, tecnologia, é claro.
Gosto de uma boa música, trabalhar ouvindo um som, bons amigos e principalmente, uma boa equipe com quem possa dividir e aperfeiçoar meus conhecimentos.

## 🎮 Hobbies

- Jogar
- Passear/Viajar
- Assistir filmes e séries
- Programar
- Brincar com meu filho
<br />
## 🔖 Minhas Stacks

- PHP
- HTML5
- CSS3
- React
- Javascript
- Java
- Typescript
- VueJs
<br />
# 👨 Dados Gerais
**Nome:** Jackson Dhanyel Santin\n
**Data de Nascimento:** 09/09/1999\n
**Nacionalidade:** Brasileiro\n
**Estado Civil:** União Estável\n
[![Instagram](https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white)]([removido])
[![Facebook](https://img.shields.io/badge/Facebook-1877f2?style=for-the-badge&logo=facebook&logoColor=white)]([removido])
[![Twitter](https://img.shields.io/badge/Twitter-1d9bf0?style=for-the-badge&logo=twitter&logoColor=white)]([removido])
[![Linkedin](https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white)]([removido])
[![Github](https://img.shields.io/badge/-Github-%23333F?style=for-the-badge&logo=github&logoColor=white)](https://github.com/JacksonSantin)
[![Gmail](https://img.shields.io/badge/-Gmail-c71610?style=for-the-badge&logo=gmail&logoColor=white&link=mailto:[removido])](mailto:[removido])
[![Whatsapp](https://img.shields.io/badge/-Whatsapp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://api.whatsapp.com/send?phone=54996262629)
[![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/jackdhanyels)


`,
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