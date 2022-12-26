<template>
  <footer>
    <p>Copyright 2023 Meternio</p>
    <div>
      <a href="#"><i class="fab fa-instagram"></i></a>
      <a href="#"><i class="fab fa-mail"></i></a>
      <a href="#"><i class="fab fa-whatsapp"></i></a>
      <a href="#"><i class="fab fa-github"></i></a>
    </div>
  </footer>
</template>

<style>
  footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    background-color: #333;
    color: #fff;
  }
  footer p {
    margin: 0;
  }
  footer div {
    display: flex;
  }
  footer a {
    color: #fff;
    text-decoration: none;
    margin-right: 10px;
  }
  footer i {
    font-size: 24px;
  }
</style>
