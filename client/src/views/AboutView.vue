<template>
  <div class="about">
    <div class="about__content">
      <p>
        Mi nombre es Ricardo Sanchez y soy un programador web y analista de de Datos de Venezuela. Desde mu joven ocomen
      </p>
      <p>
        El desarrollo de este proyecto fue una de las propuestas dadas por el bootcamp para la carrera de DataScientis. Fue una elaboracion de solo una semana, tanto el servicio API REst y el modelo de MAchine LEarnign, y el sitio web que fue un toque peronal mio para mejorar la calidad del proyecto.
      </p>
  
    </div>
    <div class='links'>
      <div class='links__wrapper'>
        <a class='links__link'>
          <vue-feather type="linkedin" size="24" class="icon"/>
        </a>
        <a class='links__link'>
          <vue-feather type="github" size="24" class="icon"/>
        </a>
        <a class='links__link'>
          <vue-feather type="mail" size="24" class="icon"/>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

.links{
  width: 100%;
  display: flex;
  justify-content: flex-end;

  &__link{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    border-radius: 9999px;

  }

  &__wrapper{
    display: flex;
    gap: 0.25 rem;
    border-radius: 9999px;
    background-color: #2a2a2a;
    padding: 0.5rem;
  }

}

.about{
  margin-top: 5rem;
}

p{
  margin-top: 1rem;
}


@media (min-width: 1024px) {
  .about {
    min-height: 70vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    max-width: 500px;
  }
  
  .hola {
    &hola{
      flex-direction: flex-row;
    }
  }
}
</style>

<script setup lang='ts'>
import VueFeather from 'vue-feather';


</script>