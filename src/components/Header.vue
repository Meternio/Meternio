<template>
  <header>
    <div class="logo">
      <img src="/path/to/logo.png" alt="Logo" />
    </div>
    <nav>
      <a href="#">Home</a>
      <a href="#">Experience</a>
      <a href="#">Portfolio</a>
      <a href="#">Contact</a>
      <a href="#">Blog</a>
    </nav>
  </header>
</template>

<style>
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    background-color: #333;
    color: #fff;
  }
  .logo img {
    height: 40px;
  }
  nav a {
    color: #fff;
    text-decoration: none;
    margin-right: 20px;
  }
</style>
