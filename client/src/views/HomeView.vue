<template>
  <div style='margin-top: 2rem; margin: 4rem auto; max-width: 1000px;'>
        <div class="home__top-games">
      <h2 class="home__top-games-title">Juegos Mejor valorados</h2>
      <div :if='top_games.lenght' class="home__top-games-cont">
        <GameFlashcard v-for="game in top_games" :data="new GameType(game.id, game.price, game.metascore, game.app_name)"></GameFlashcard>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import GameFlashcard from '../components/GameFlashcard.vue'
import GameType from '../models/game'
import { ref } from 'vue'

const game = new GameType(761140, 123, 123, 'gola')
const top_games = ref([])


</script>

<style scope lang='scss'>



</style>