<script setup>
import {
  ref, defineProps, onMounted, onUnmounted,
} from 'vue';
import { throttle } from '../functions/main';

const props = defineProps({
  title: String,
  description: String,
  image: String,
  parallax: Boolean,
});

const target = ref(null);
const backgroundPosition = ref('50% 50%');

function checkInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.bottom >= 0
  );
}

function parallax() {
  if (checkInViewport(target.value)) {
    backgroundPosition.value = `50% ${50 - (window.scrollY / 100) * 3}%`;
    console.log('test');
  }
}

const throttledScroll = throttle(parallax, 20);

onMounted(() => {
  if (props.parallax) {
    window.addEventListener('scroll', throttledScroll);
  }
});

onUnmounted(() => {
  if (props.parallax) {
    window.removeEventListener('scroll', throttledScroll);
  }
});
</script>

<template>
  <section class="hero" ref="target">
    <div
      :class="{
        'hero-image': true,
        'hero-image--parallax': props.parallax,
      }"
      :style="{
        'background-position': backgroundPosition,
        'background-image': `url(${props.image})`,
      }"
    ></div>
    <div class="hero-text-wrapper">
      <h1>{{ props.title }}</h1>
      <p>{{ props.description }}</p>
    </div>
  </section>
</template>

<style lang="less" scoped>
.hero {
  width: 100%;
  height: calc(~"100vh - 104px");
  display: flex;
  align-items: center;
  flex-flow: row wrap;

  @media @smUp {
    height: calc(~"100vh - 105px");
  }

  &-image {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-size: cover;
    background-repeat: no-repeat;

    &--parallax {
      background-attachment: fixed;
    }
  }

  &-text-wrapper {
    max-width: 600px;
    z-index: 2;
    h1,
    p {
      color: white;
    }
  }
}
</style>
