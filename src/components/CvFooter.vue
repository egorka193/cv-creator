<template>
  <div class="footer">
    <h1 class="footer__title">
      Copyright © 2025 Egor Kondratev
    </h1>
    <a
      href="https://github.com/egorka193/cv-creator"
      target="_blank"
    >
      <img
        class="footer__img"
        src="/src/img/github.png"
      >
    </a>
  </div>
</template>

<script setup>

</script>

<style scoped>
.footer{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: #1f2937;
  padding: 24px;
  margin: 0px 35px 0px 35px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  text-align: center;
  box-shadow: 0px 8px 48px -9px rgba(0,0,0,0.75);
  -webkit-box-shadow: 0px 8px 48px -9px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 8px 48px -9px rgba(0,0,0,0.75);
}
.footer__img{
  width: 32px;
  height: 32px;
}
.footer__title{
  color: white;
  font-size: 18px;
}
</style>
