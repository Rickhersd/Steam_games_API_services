<template>
  <NavbarLayout />
  <main>
    <RouterView />
  </main>
  <FooterLayout />
</template>

<style scoped lang='scss'>
  
  main{
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 20vh;
  }

</style>

<script setup lang="ts">
  import {  RouterView } from 'vue-router'
  import NavbarLayout from './layout/NavbarLayout.vue'
  import FooterLayout from './layout/FooterLayout.vue'

</script>
