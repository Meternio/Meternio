<script setup></script>

<template>
  <footer>
    <div class="constrained">
      <p>Copyright 2023 Meternio</p>
      <div>
        <a href="https://www.instagram.com/meternio/" target="_blank"
          ><font-awesome-icon icon="fa-brands fa-instagram"
        /></a>
        <a href="/kontakt"><font-awesome-icon icon="fa-regular fa-envelope" /></a>
        <a href="https://wa.me/41762047832" target="_blank"
          ><font-awesome-icon icon="fa-brands fa-whatsapp"
        /></a>
        <a href="https://github.com/meternios" target="_blank"
          ><font-awesome-icon icon="fa-brands fa-github"
        /></a>
      </div>
    </div>
  </footer>
</template>

<style lang="less">
footer {
  background-color: #333;
  color: #fff;

  .constrained {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
  }

  p {
    margin: 0;
  }

  div {
    display: flex;
  }

  a {
    color: #fff;
    text-decoration: none;
    margin-right: 10px;
  }

  i {
    font-size: 24px;
  }
}
</style>
