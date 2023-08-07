<template>
  <div class="cont">
    <div class="cont__header">
      <h2>
        Modelo de Predicción de Precio
      </h2 >
      <div>
        Como esto funcion 
        <vue-feather type="info" size="24" class="icon"/>
      </div>
    </div>
    <p>
      El siguiente modelo hace uso de las especifiaciones de los juegos, del, para predecir un precio promedio de cuanto deberia valer un juego
    </p>
    <hr>
    <form @submit.prevent="submitForm">
      <br>
      <h3>Caracteristicas Basicas</h3>
      <label for="cars">Eligue un anio:</label>
      <select id="cars" name="cars" v-model="state.releaseTime">
        <option v-for='n in 52' :key="n" :value="1970 + n">{{1970 + n}}</option>
      </select>
      <div>
        <div class="form__list">
          <div class="form__list-text">
            Especificaciones: {{checkedSpecs}}
          </div>
          <div class="form__list-checkboxs">
            <div class="form__checkbox" v-for="spec in specs" :key="spec">
              <input type="checkbox" placeholder={{spec}} :value="spec" v-model="checkedSpecs" />
              <label for={{spec}}>{{spec}}</label>
            </div>
          </div>
        </div>
        <div class="form__list">
          <div class="form__list-text">
            Etiquetas: {{ checkedTags}}
          </div>
          <div class="form__list-checkboxs">
            <div v-for="tag in tags" :key="tag">
              <input type="checkbox" placeholder={{spec}} :value="tag" v-model="checkedTags" />
              <label for={{spec}}>{{tag}}</label>
            </div>
          </div>
        </div>
        <div class="form__list">
          <div class="form__list-text">
            Generos:
          </div>
          <div class="form__list-checkboxs">
            <!-- <div v-for='(value, key) in genres_dict' :key="key">
              <input type="checkbox" v-model="state[0]" :true-value="1" :false-value="0" />
              <label for={{key}}>{{key}}</label> 
            </div> -->
          </div>
        </div>
      </div>
      <hr> 
      <h2>Scoring</h2>  
      <p>
        El precio de los videouegos puede veriar de acuerdo a si, en caso de no estimar una puntuacio ndada por metacritics, el valor de la z
      </p>
      <input type="number" max='100' min='1' placeholder="Metasocre" v-model="state.metascore" />
      <input type="text" placeholder="Reviews" v-model="state.sentiment" />
      <select name="sentiments" v-model="state.sentiment">
        <option v-for='(value, key) in sentiments_dict' :key="value" :value="value">{{key}}</option>
      </select>
      <p>En caso de no indicar estos campos, el valor de metascore sera 80 y Sentimiento, mixto</p>
      <button class="form__submit " @click="submitForm">Submit</button>
    </form>
    <hr>
    <div>
      Prediccion: {{prediction}}
    </div>
    <ApiTesting 
      :jsonResponse="{}"
      :jsonRequest="state"
      :domain="domain"
    />
  </div>
</template>

<script setup lang="ts">
import { reactive, computed, ref, onUpdated} from 'vue'
import { required, email, minLength, sameAs } from '@vuelidate/validators'
import ApiTesting from './ApiTesting.vue'
import VueFeather from 'vue-feather';
import useValidate from '@vuelidate/core'
import axios from 'axios'

const prediction = ref<number>()
const checkedSpecs = ref([])
const checkedTags = ref([])
const checkedGenres = ref([])
const domain = computed(() => window.location) 

type RequestType = {
  releaseTime: string,
  numberOfTags: number,
  numberOfSpecs: number,
  metascore: string,
  sentiment: string,
  indie: boolean, 
  casual: boolean, 
  action: boolean,
  sports:boolean,
  racing:boolean, 
  strategy:boolean,
  rpg:boolean,
  simulation: boolean
}

const state = reactive<RequestType>({
  releaseTime: '',
  numberOfTags: 0,
  numberOfSpecs: 0,
  metascore: '',
  sentiment: '',
  indie: false, 
  casual: false, 
  action: false,
  sports:false,
  racing:false, 
  strategy:false,
  rpg:false,
  simulation: false
})

const genres_dict = {
  'Indie': 'indie',
  'Casual': 'casual',
  'Accion': 'action',
  'Deportes': 'sports',
  'Carreras': 'racing',
  'Estrategia': "strategy",
  'RPG': "rpg",
  'Simulacion': 'simulation',
}


onUpdated(() => {
  state.numberOfTags = checkedTags.value.length;
  state.numberOfSpecs = checkedSpecs.value.length;
})

const genres = [
  'Indie',
  'Casual',
  'Accion',
  'Deportes',
  'Carreras',
  'Estrategia',
  'RPG',
  'Simulacion'
]

const sentiments_dict = {
  'Mayoritariamente positivo': 0,
  'Muy Positivo': 1,
  'Positivo': 2,
  'Mixto': 3,
  'Negativo': 4,
  'Muy Negativo': 5,
  'Mayoritariamente Negativo': 6
}


const specs = [
  'Single-player',
  'Multi-player', 
  'Cross-Platform Multiplayer',
  'Steam Achievements',
  'In-App Purchases',
  'Steam Leaderboards',
  'Downloadable Content',
  'Local Co-op',
  'Includes level editor',
  'Steam Cloud',
  'Steam Trading Cards',
  'Full controller support',
  'Steam Workshop',
  'Shared/Split Screen',
  'Valve Anti-Cheat enabled',
  'Virtual Game',
  'Stats'
]

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
]

const rules = computed(() => ({
  releaseTime: {required},
  numberOfTags: {required},
  numberOfSpecs:{required},
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

const v$ = useValidate(rules, state)


const submitForm = () => {
  v$.value.$validate() // checks all inputs
  if (!v$.value.$error) { 
    // axios.post('http://127.0.0.1:8000/api/predict_price', state)
    //   .then((res) => {
    //     prediction.value = res.data
    //   })
    //   .catch(function (error) {
    //     console.log(error)
    //   })


  } else {
    alert('Form failed validation')
  }
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
  }
}

.form{

  &__submit{
    margin-left:auto;
    display: block;
    
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
  }
}

</style>