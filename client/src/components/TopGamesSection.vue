<template>
	<section>
		<div class="top-games">
      <h2 class="top-games__title">Juegos Mejor valorados</h2>
      <div :if='top_games.lenght' class="top-games__cont">
        <GameFlashcard v-for="game in top_games" :data="new GameType(game.id, game.price, game.metascore, game.app_name)"></GameFlashcard>
      </div>
    </div>

						
	</section>
</template>

<script setup lang='ts'>
import { ref } from 'vue'

const loading = ref<boolean>(false)
const loading = ref<boolean>(false)
const loading = ref<boolean>(false)
	


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