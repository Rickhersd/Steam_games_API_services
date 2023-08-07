<template>
  <header class="navbar">
  	<div class="navbar__logotipe">
  		AllSteam
  	</div>
    <nav class="navbar__links">
      <RouterLink class="navbar__link" to="/">Inicio</RouterLink>
      <RouterLink class="navbar__link" to="/api">Api</RouterLink>
      <RouterLink class="navbar__link" to="/about">Sobre mi</RouterLink>
    </nav>
  </header>
</template>

<script setup lang="ts"></script>
<style scoped lang='scss'>

header{
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.navbar{

  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: flex-row;
  background-color: #2a2a2a;
  border-bottom: 1px solid gray;


	&__link{
    display: inline-block;
    padding: 1rem;
	}

	&__links{

	}
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}
</style>


