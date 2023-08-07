<template>
  <div class="about">
    <div class='about__title'>
      Sobre el desarrollador de esta serivico
    </div>
    <h1 class='about__photo'>
      This is an about page</h1>

    <div class="about__content">
      <p>
      Hola, mi nombre es ricardo sanchz y soy un desarolador web enfoado principalemnte en le Frontend, y anslista de Datos de De veneuzela. Comence a programar cuando tenia 15 a'o de y aqui, puedes ver una meustra de uno de los proyectos que he realizado. Este precisamente es 
      </p>
      <p>
      La idea del proyecot surgio como uno de las propeustas para graduarme del bootcamp soyHenry para la carrera de Ciencia de Datos. No representa, y mas qeu, todo representa el conocmiento sobre el menaske de modelos de machine learning, ey la integracion de un modelo de machine learning en un servicio web completamente funcional a travis de un servicio API Rest.
      </p>
      <p>
      Pata mas informacion sobre mi y mis demas proyecto, en mi github se dsipone de mas proyectos tanto de desarrollo web como de Analisis de Datos. 
      </p>
    </div>
    <div class="links">
      <div class="links__wrapper">
        <a>
          <VueFeather type='linkedin' class="custom-class"></VueFeather>
        </a>
        <a>
          <VueFeather type='github' class="custom-class"></VueFeather>

        </a>
        <a>
          <VueFeather type='mail' class="custom-class"></VueFeather>

        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss">

.links{
  width: 100%;
  display: flex;
  justify-content: flex-end;

  &__wrapper{
    display: flex;
    gap: 1rem;
    border-radius: 9999px;
    background-color: #2a2a2a;
  }

}


@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    max-width: 774px;
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