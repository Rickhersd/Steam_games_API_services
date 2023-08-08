<template>
  <div class="api">
    <div class="api">
    	<h2>Recursos Disponibles</h2>
    	<p style="margin-top: 0.5rem">Mira todos los endpoints disponibles en la tabla de abajo. Cada endpoint tiene diferentes filtros para hacer las consultas y se disponible de un ejemplo de la Request y de las Respuestas.</p>
      	<div>
	      <table border="1">
      		<tr>
            <th>Recurso</th>
            <th>Descripción</th>
            <th>URI</th>
            <th>Filtro</th>
            <th>Muestra</th>
         	</tr>
          <tr v-for="(doc, index) in ApiDocData" :key="index">
            <td class="api-doc__table-col-1">{{doc.resource}}</td>
            <td class="api-doc__table-col-2">{{doc.description}}</td>
            <td class="api-doc__table-col-3">{{doc.URI}}</td>
            <td class="api-doc__table-col-4">{{doc.filter}}</td>
            <td class="api-doc__table-col-5">
            	<SampleModal
            		:title='doc.title' 
            		:response='doc.responseSample'
            		:request='doc.requestSample'
                :domain='domain'
            	/>
            </td>
	         </tr>
	      </table>
    	</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed} from 'vue'
import { ref } from 'vue';
import VueFeather from 'vue-feather';
import SampleModal from './SampleModal.vue'
import ApiDocData from '../ts/apiDocsData'
  

const domain = computed(() =>window.location)

// fetch('http://127.0.0.1:8000/api/games_list/2018')
//   .then(response => response.json())
//   .then(data => games.value = data);



</script>

<style scoped lang='scss'>

.api{
  background-color: #2a2a2a;
  border-radius: 2px;
  padding: 1rem;
  max-width: 1024px;
  margin-bottom: 1.5rem;
  margin-top: 2rem;

  &__views{
    display: flex;
    flex-direction: row;
    gap: 2rem;

    &-json{
      width: 50%;
    }
  }

  &__header{
    display: flex;
    width:100%;
    padding-bottom: 1rem;
    flex-direction: row;
    justify-content: space-between;
  }

  &__arrow{
    position: absolute;
    left: 50%;
    top: 50%;
    translate: -50% 0%;
    color:white;
  }

}

.api-doc__table-col-1{
	width: 12%
}

.api-doc__table-col-2{
	width: 30%
}

.api-doc__table-col-3{
	width: 20%;
	padding: 1rem
}

.api-doc__table-col-4{
	width: 30%;
}

.api-doc__table-col-5{
	width: 8%
}


table {
  border-collapse: collapse;
  width: 100%;
  color: #fff;
  border: 1px solid rgb(240 240 240);
  font-size: 14px;
  border-radius: 10px;
  overflow: hidden;
  margin: auto;
  margin-top: 50px;
  margin-bottom: 50px;
} 

td{
	padding: 0.5rem;
}

th{
	padding: 0.5rem;
}


table tr:hover td {
  background-color: #3a3a3a;
}



.form{

  &__submit{
    margin-left:auto;
    display: block;
  }
}

pre{
  background-color: #151515;
  color: white
}

  

</style>
