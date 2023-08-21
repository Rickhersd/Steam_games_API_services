<template>
	<div>
		<img class="game-flashcard__img" :src="`https://cdn.cloudflare.steamstatic.com/steam/apps/${props.data.id}/header.jpg?t=1515115732`"/>
		<div class="game-flashcard__details">
			<div class="game-flashcard__details-name">
				{{props.data.name}}
			</div>
			<h3 class="game-flashcard__details-price">
				{{props.data.price}}
			</h3>
		</div>
	</div>
</template>

<script setup lang='ts'>
import Game from '../models/game'

const props = defineProps<{
 	data: Game
}>()

</script>

<style scoped lang='scss'>
	
.game-flashcard{

	&__img{
		border-radius: 1rem;
		width: 100%;
		aspect-ratio: 19/10;
		box-shadow: 0px 0px 5px #00000022;
	}

	&__details{
		padding: 0.5rem 1rem;

		&-name{
			font-size: 1.25rem;
		}

		&-price{
			font-size:1rem;
		}

		&-valoration{
			font-size: 2rem;
		}

	}
}

	
</style>

