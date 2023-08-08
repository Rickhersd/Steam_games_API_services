<template>
  <div class="about">
    <div class="about__content">
      <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      </p>
      <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      </p>
  
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