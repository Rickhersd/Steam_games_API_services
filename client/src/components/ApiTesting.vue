<template>
  <div class="api">
    <div class="api__views">
      <div class="api__views-json">
        <div class="api__views-subtitle">
          Cuerpo de la Request
        </div>
        <pre id="json">{{props.jsonRequest}}</pre>
      </div>

      <div class="api__arrow">
        <vue-feather type="arrow-right" size="24" class="icon"/>
      </div>

      <div class="api__views-json">
        <div class="api__views-subtitle">
          Response
        </div>
        <pre id="json">{{props.jsonResponse}}</pre>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import VueFeather from 'vue-feather';

const props = defineProps<{
  domain: Location,
  jsonResponse: any,
  jsonRequest: any,
}>()


// fetch('http://127.0.0.1:8000/api/games_list/2018')
//   .then(response => response.json())
//   .then(data => games.value = data);

</script>

<style scoped lang='scss'>

.api{
  background-color: #2a2a2a;
  border-radius: 2px;
  max-width: 1024px;
  margin-bottom: 1.5rem;

  &__views{
    display: flex;
    flex-direction: row;
    gap: 2rem;

    &-json{
      width: 50%;
    }

    &-subtitle{
      margin-bottom: 0.25rem;
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

.form{

  &__submit{
    margin-left:auto;
    display: block;
    
  }
}

pre{
  background-color: #101010;
  color: white;
  padding: 1rem;
  height: 100%;
  border-radius: 2px;
}

  

</style>
