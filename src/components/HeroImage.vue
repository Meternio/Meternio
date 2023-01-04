<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  title: String,
  description: String,
  image: String,
});
</script>

<template>
  <section class="hero">
    <img :src="props.image" alt="Hero image" />
    <div class="hero-text-wrapper">
      <h1>{{ props.title }}</h1>
      <p>{{ props.description }}</p>
    </div>
  </section>
</template>

<style lang="less" scoped>
.hero {
  width: 100%;
  height: calc(~'100vh - 104px');
  display: flex;
  align-items: center;
  flex-flow: row wrap;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }

  &-text-wrapper {
    max-width: 30%;
    h1, p {
      color: white;
    }
  }
}
</style>
