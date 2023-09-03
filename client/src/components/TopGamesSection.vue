<template>
	<section>
		<div class="top-games">
      <h2 class="top-games__title">Juegos Mejor valorados</h2>
      <div :if='top_games.length' class="top-games__cont">
        <GameFlashcard v-for="game in top_games" :key="game.id" :data="new GameType(game.id, game.price, game.valoration, game.app_name, game.metascore)"></GameFlashcard>
      </div>
    </div>

						
	</section>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import GameFlashcard from './GameFlashcard.vue'
import GameType from '../models/game'

const top_games = ref<GameType[]>([])

const fetchData = () => {
  fetch('https://steam-games-api-services.onrender.com/api/metascore/2015?limit=3', {
    method: "GET",
    })
    .then((response) => {
      response.json().then((data) => {
        top_games.value = data['2015'];
      });
    })
    .catch((err) => {
      console.error(err);
    });
}

fetchData()


</script>

<style scoped lang='scss'>

.top-games{

  &__title{
    font-size: 32px;
    margin-bottom: 1rem;
  }

  &__cont{
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    flex-direction: row;
    gap: 1rem;
    flex-wrap: wrap;
  }
}

</style>