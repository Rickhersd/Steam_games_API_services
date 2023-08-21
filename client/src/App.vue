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
    justify-content: center;
  }

</style>

<script setup lang="ts">
  import {  RouterView } from 'vue-router'
  import NavbarLayout from './layout/NavbarLayout.vue'
  import FooterLayout from './layout/FooterLayout.vue'

</script>
