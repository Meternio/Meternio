<script setup>
import { ref } from 'vue';

const showDrawer = ref(false);

function toggleDrawer() {
  showDrawer.value = !showDrawer.value;
}
</script>

<template>
  <header :class="{ 'drawer-shown': showDrawer }">
    <div class="constrained">
      <a href="/" class="logo" aria-label="Home">
        <img src="@/assets/logo_white.webp" height="40" alt="Logo" />
      </a>
      <nav class="main-navigation" role="navigation">
        <a href="#" role="menuitem">Home</a>
        <a href="#" role="menuitem">Experience</a>
        <a href="#" role="menuitem">Portfolio</a>
        <a href="#" role="menuitem">Contact</a>
        <a href="#" role="menuitem">Blog</a>
      </nav>
      <button
        class="drawer-toggle"
        @click="toggleDrawer"
        aria-expanded="false"
        aria-controls="drawer"
      >
        <font-awesome-icon icon="fa-solid fa-bars" />
        <span class="sr-only">Toggle mobile drawer</span>
      </button>
      <nav
        id="drawer"
        class="drawer"
        tabindex="-1"
        role="menu"
        aria-hidden="true"
      >
        <a href="#" role="menuitem">Home</a>
        <a href="#" role="menuitem">Experience</a>
        <a href="#" role="menuitem">Portfolio</a>
        <a href="#" role="menuitem">Contact</a>
        <a href="#" role="menuitem">Blog</a>
      </nav>
      <div class="drawer-background" @click="toggleDrawer"></div>
    </div>
  </header>
</template>

<style lang="less">
header {
  position: sticky;
  background-color: transparent;
  box-sizing: border-box;
  left: 0;
  top: 0;
  z-index: 10;
  width: 100%;
  color: #fff;
  margin-top: 20px;

  &.drawer-shown {
    .drawer {
      right: 0;

      &-background {
        display: block;

        @media @mdUp {
          display: none;
        }
      }
    }
  }

  .constrained {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
  }

  nav a {
    color: #fff;
    text-decoration: none;
    margin-right: 20px;
    font-weight: bold;
  }

  .main-navigation {
    display: none;

    @media @mdUp {
      display: block;
    }
  }

  .drawer-toggle {
    background-color: transparent;
    border: 0;
    color: white;
    cursor: pointer;

    @media @mdUp {
      display: none;
    }
  }

  .drawer {
    position: fixed;
    top: 0;
    right: -320px;
    bottom: 0;
    background-color: #333;
    width: 320px;
    overflow: auto;
    z-index: 10;
    transition: right 0.4s ease-in-out;

    @media @mdUp {
      display: none;
    }

    &-background {
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      position: fixed;
      background-color: @black;
      opacity: 0.6;
      z-index: 9;
      display: none;
    }
  }

  .drawer a {
    display: block;
    color: white;
    text-decoration: none;
    padding: 10px;
    border-bottom: 1px solid white;
  }

  .drawer a:last-child {
    border-bottom: 0;
  }
}
</style>
