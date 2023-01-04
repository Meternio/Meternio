<template>
  <Header/>
  <main>
    <router-view/>
  </main>
  <Footer/>
</template>

<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
</script>

<style lang="less">
body {
  margin: 0;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;

  @media @smUp {
      font-size: 18px;
  }
  @media @mdUp {
      font-size: 20px;
  }
}

.constrained {
  padding: 0 20px;

  @media @smUp{
    max-width: 1570px;
    margin: auto;
  }
}

/* Typography rules */
h1, h2, h3, h4, h5, h6 {
  font-weight: 600;
  margin: 0 0 0.5em;
}

h1 {
  font-size: 2.5em;
}
h2 {
  font-size: 2em;
}
h3 {
  font-size: 1.75em;
}
h4 {
  font-size: 1.5em;
}
h5 {
  font-size: 1.25em;
}
h6 {
  font-size: 1em;
}

/* Set the font size for paragraphs */
p {
  font-size: 1em;
  line-height: 1.5em;
  margin: 0;
}

ul, ol {
  font-size: 1rem;
  line-height: 1.5;
  margin: 1.5rem 0;
  padding-left: 1.5rem;
}

li {
  margin: 0.75rem 0;
}

a {
  text-decoration: none;
}

a:hover {
  color: @primary;
}
</style>
