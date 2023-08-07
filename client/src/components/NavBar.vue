<template>
  <header>
    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Inicio</RouterLink>
         <RouterLink to="/api">Api</RouterLink>
        <RouterLink to="/about">Sobre mi</RouterLink>
      </nav>
    </div>

  </header>
</template>

<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<style scoped>

</style>