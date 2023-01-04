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
}

.constrained {
  padding: 0 20px;

  @media @smUp{
    max-width: 1570px;
    margin: auto;
  }
}

/* Typography rules */
h1 {
  font-size: 3.5rem;
  font-weight: bold;
  line-height: 1.2;
  margin: 1.5rem 0;
}

h2 {
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 1.2;
  margin: 1.5rem 0;
}

h3 {
  font-size: 2rem;
  font-weight: bold;
  line-height: 1.2;
  margin: 1.5rem 0;
}

h4 {
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.2;
  margin: 1.5rem 0;
}

h5 {
  font-size: 1.25rem;
  font-weight: bold;
  line-height: 1.2;
  margin: 1.5rem 0;
}

h6 {
  font-size: 1rem;
  font-weight: bold;
  line-height: 1.2;
  margin: 1.5rem 0;
}

p {
  font-size: 1rem;
  line-height: 1.5;
  margin: 1.5rem 0;
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

strong {
  font-weight: bold;
}

em {
  font-style: italic;
}
</style>
