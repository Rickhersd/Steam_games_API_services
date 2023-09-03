<template>
  <header class="header">
    <div class="header__cont">
      <h1 class="header__title">The dev-frie API</h1>
      <h2 class="header__subtitle">RESTful. Reliable. Free to use. Easy to integrate</h2> 
      <p class="header__text">Este projecto es , en donde puedes acceder a una gran cantidad de contenido de 20000 videojugos de Steam. El proojecto es un creacion perso</p>   
      <p class="header__text">Abajo puedes ver una muestra de la API</p>   
    </div>
  </header>
  <div className="home__content">
    <section class="home__top-games">
      <TopGamesSection /> 
    </section>
    <section>
      <CarruselComp />
    </section>
  </div>
</template>

<script setup lang="ts">

import TopGamesSection from '../components/TopGamesSection.vue'
import CarruselComp from '../components/CarruselComp.vue'

</script>

<style scope lang='scss'>

.header{
  background-color: #0078f2;
  width: 100%;
  display: block;
  text-align: center;
  padding: 5rem;
  color:rgb(252, 252, 252);

  &__cont{
    max-width: 756px;
    margin: auto;
  }

  &__title{
    font-size: 4rem;
    font-weight: 500;
  }

  &__subtitle{
    font-size: 1.825rem;
    font-weight: 400;
  }

  &__text{
    
  }
}

.home__content{
  max-width: 1024px;
  margin: auto;
}

.home__top-games{
  padding: 3rem 0rem;
}

</style>