<template>
  <div class="cont">
    <div class="cont__header">
      <h2>
        Modelo de Predicción de Precio
      </h2 >
      <div class="cont__header-how-its-works">
        ¿Cómo funciona?
        <vue-feather style='color: rgb(250 250 250)' type="info" size="24" class="icon"/>
      </div>
    </div>
    <p class="form__text">
      El siguiente modelo hace uso de las especifiaciones de los juegos, del, para predecir un precio promedio de cuanto deberia valer un juego
    </p>
    <form @submit.prevent="submitForm">
      <br>
      <h3 class="form__title">Características Básicas</h3>
      <label for="cars">Año de Publicación: </label>
      <select id="cars" name="cars" v-model="state.release_date">
        <option v-for='n in 52' :key="n" :value="1970 + n">{{1970 + n}}</option>
      </select>
      <div>
        <div class="form__list">
          <div class="form__list-text">
            Especificaciones
          </div>
          <div class="form__list-checkboxs">
            <div class="form__checkbox" v-for="spec in specs" :key="spec">
              <input class="form__checkbox-input" type="checkbox" placeholder={{spec}} :value="spec" v-model="checkedSpecs" />
              <label for={{spec}}>{{spec}}</label>
            </div>
          </div>
        </div>
        <div class="form__list">
          <div class="form__list-text">
            Etiquetas
          </div>
        </div>
        <TagSelector 
          @onAdd="onOptionClick"
          @onRemove="onHandleRemove"  
        />
        <div class="form__list">
          <div class="form__list-text">
            Genero
          </div>
          <div class="form__list-checkboxs">
            <div class="form__checkbox" >
              <input type="checkbox" v-model="state.indie" :true-value="1" :false-value="0" />
              <label for='indie'>Indie</label> 
            </div>
            <div class="form__checkbox">
              <input type="checkbox" v-model="state.casual" :true-value="1" :false-value="0" />
              <label for='casual'>Casual</label> 
            </div>
            <div class="form__checkbox">
              <input type="checkbox" v-model="state.simulation" :true-value="1" :false-value="0" />
              <label for='simulation'>Simulación</label> 
            </div>
            <div class="form__checkbox" >
              <input type="checkbox" v-model="state.action" :true-value="1" :false-value="0" />
              <label for='action'>Acción</label> 
            </div>
            <div class="form__checkbox">
              <input type="checkbox" v-model="state.sports" :true-value="1" :false-value="0" />
              <label for='sports'>Deportes</label> 
            </div>
            <div class="form__checkbox">
              <input type="checkbox" v-model="state.racing" :true-value="1" :false-value="0" />
              <label for='racing'>Carreras</label> 
            </div>
            <div class="form__checkbox">
              <input type="checkbox" v-model="state.strategy" :true-value="1" :false-value="0" />
              <label for='strategy'>Estrategia</label> 
            </div>
            <div class="form__checkbox">
              <input type="checkbox" v-model="state.rpg" :true-value="1" :false-value="0" />
              <label for='rpg'>RPG</label> 
            </div>
          </div>
        </div>
      </div>
      <h3 class='form__title'>Valoración del juego</h3>  
      <p>
        El precio de los videojuegos puede variar de acuerdo a la valoración que ha tenido, tanto por la crítica como por el público en general. No son requeridos, pero en caso de no indicarlos, el valor de Metascore por defecto será "80" y el Sentimiento: "mixto".
      </p>
      <div>
        <label for='metascore'>Metascore</label> 
        <input name="metascore" type="number" max='100' min='1' placeholder="Metasocre" v-model="state.metascore" />
      </div>
      <div>
        <label for='sentiments'>Sentimiento</label> 
        <select name="sentiments" v-model="state.sentiment">
          <option v-for='(value, key) in sentiments_dict' :key="value" :value="value">{{key}}</option>
        </select>
      </div>
      <div class="form__submit-cont">
        <button class="form__submit" @click="submitForm">Submit</button>
      </div>
    </form>
    <hr />
    <h3 class='form__title'>Predicción</h3>
    <ApiTesting 
      :jsonResponse="prediction == 0 ? {'response': 0} : prediction"
      :jsonRequest="state"
      :domain="domain"
    />
  </div>
</template>

<script setup lang="ts">
import { reactive, computed, ref, onUpdated} from 'vue'
import { required, email, minLength, sameAs } from '@vuelidate/validators'
import ApiTesting from './ApiTesting.vue'
import TagSelector from './TagSelector.vue'
import VueFeather from 'vue-feather';
import useValidate from '@vuelidate/core'
import axios from 'axios'

const prediction = ref<number>(0)
const checkedSpecs = ref<string[]>([])
const checkedTags = ref<string[]>([])
const domain = computed(() => window.location) 

type RequestType = {
  release_date: number,
  number_of_tags: number,
  number_of_specs: number,
  metascore: number,
  sentiment: number,
  indie: number, 
  casual: number, 
  action: number,
  sports:number,
  racing:number, 
  strategy:number,
  rpg:number,
  simulation: number
}

const state = reactive<RequestType>({
  release_date: 2010,
  number_of_tags: 0,
  number_of_specs: 0,
  metascore: 80,
  sentiment: 0,
  indie: 0, 
  casual: 0, 
  action: 0,
  sports:0,
  racing:0, 
  strategy:0,
  rpg:0,
  simulation:0
})

onUpdated(() => {
  state.number_of_tags = checkedTags.value.length;
  state.number_of_specs = checkedSpecs.value.length;
})

const sentiments_dict = {
  'Abrumadoramente positivo': 5,
  'Mayoritariamente positivo': 2,
  'Muy Positivo': 8,
  'Positivo': 6,
  'Mixto': 0,
  'Negativo': 3,
  'Muy Negativo': 8,
  'Mayoritariamente Negativo': 1,
  'Abrumadoramente Negativo': 4  
}


const specs = [
  'un solo jugador',
  'Multijugador', 
  'Multiugador multiplaforma',
  'Logros de Steam',
  'Microtransacciones',
  'Leaderboards de Steam',
  'Contenido Descargable',
  'Cooperativo local',
  'Editor de niveles',
  'Steam Cloud',
  'Cromos de Steam',
  'Soporte de multiple constroles',
  'Tienda de Steam',
  'Pantalla dividida',
  'Sorporte Valve Anti-Cheat',
  'Juegos virtual',
  'Estadísticas',
  'Mods',
  'MMO',
  'Gamepad',
  'SteamVR Collectibles',
  'Demo',
  "Subtitulos disponibles"
]

const onHandleRemove = (option:string) => {
  console.log('gola');
  checkedTags.value = checkedTags.value.filter(tag => tag != option); 
}

const onOptionClick = (option:string) => {
  checkedTags.value.push(option) 
}

const tags = [
  'Single-player',
  'Multi-player', 
  'Cross-Platform Multiplayer',
  'Steam Achievements',
  'Mundo Abierto',
  'Multijugador',
  'Coperativo',
  'Juegos Online',
  'Contenido Sexual',
  '2D',
  'Competitivo',
  'Customizacion de Personajes',
  'Protagonista Mujer',
  'Díficil',
  'Diseño e ilustración',
  'Deportes',
  'Multijugador',
  'Aventura',
  'Shooter en primera Persona',
  'Shooter',
  'Shooter en tercera Persona',
  'Francotiradores',
  'Tercera Persona',
  'Carreras',
  'Acceso Anticipado',
  'Supervivencia',
  'Graficos Pixeleados',
  'Adorable',
  'Fisicas',
  'Ciencia',
  'VR',
  'Tutorial',
  'Clásico',
  'Gore',
  "1990's",
  'Un solo jugador',
  'Ciencia Ficción',
  'Aliens',
  'Primera Persona',
  'Horror Psicológico',
  'Sandbox',
  'Mod',
  'Animación y Modelado',
  'Rompecabezas',
  'Horror',
  'Futurístico',
  'Ciberpunk',
  'Destrucción',
  'Música',
  'Conduciendo',
  'Arcano',
  'Mecas',
  'Robots',
  'Subterraneo',
  'Exploración'
]

const rules = computed(() => ({
  release_date: {required},
  number_of_tags: {required},
  number_Of_specs:{required},
  metascore: {required},
  sentiment: {required},
  indie: {required}, 
  casual: {required}, 
  action: {required},
  sports:{required},
  racing:{required},	
  strategy:{required},
  rpg:{required},
  simulation:{required}
}))


const submitForm = () => {
  
  axios
    .post('https://steam-games-api-services.onrender.com/api/predict_price', state).then((res) => {
      prediction.value = res.data
    })
    .catch(function (error) {
      console.log(error)
    })
}

</script>

<style lang='scss' scoped>
.cont{
  background-color: #2a2a2a;
  border-radius: 2px;
  padding: 1rem;
  max-width: 1024px;

  &__header{
    display: flex;
    width:100%;
    padding-bottom: 1rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    items-align: center;

    &-how-its-works{
      display: flex;
      gap: 0.5rem;
      font-size: 1rem;
      justify-content: center;
      align-items: center;
    }
  }
}

.form{

  &__submit{
    margin-left:auto;
    display: block;
    background-color:  #0078f2;
    border: none;
    color: white;
    font-weight: 600;
    font-size: 1rem;
    border-radius: 2px;
    padding: 0.75rem 4rem;

    &-cont{
      margin-top: 2rem;
      margin-bottom: 2rem;
    }
  }

  &__text{
    margin-top: 1rem;
  }

  &__title{
    font-size: 1.25rem;
    margin-top: 1rem;
  }

  &__list{

    display: flex;
    flex-direction: column;

    &-text{
      margin-top: 1.5rem;
      margin-bottom: 0.5rem;
      font-size: 18px;
      color: rgb(245 245 245);
      font-weight: 500
    }

    &-checkboxs{
      display: flex;
      flex-wrap: wrap;
      gap: 0.25rem 1rem;
    }

  }


  &__checkbox{
    display: flex;
    flex-direction: row;
    gap: 0.5rem ;
    
  }
}

</style>