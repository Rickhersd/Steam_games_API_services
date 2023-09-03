<template>
  <footer class="footer">
    <div class="footer__cont">
      <div class="footer__grid">
        <div class="footer__grid-right">
          <a href="/" class="footer__logo">
            <img src="/logo.png" alt="Logo de la página">
          </a>
          <ul class="footer__social-cont">
            <li>
              <a class="footer__social-link" href="https://www.facebook.com/mypage" target="_blank">
                <vue-feather style='color: rgb(250 250 250)' type="github" size="24" class="icon"/>
              </a>
            </li>
            <li>
              <a class="footer__social-link" href="https://twitter.com/mypage" target="_blank">
                <vue-feather style='color: rgb(250 250 250)' type="linkedin" size="24" class="icon"/>
              </a>
            </li>
            <li>
              <a class="footer__social-link" href="https://www.instagram.com/mypage" target="_blank">
                <vue-feather style='color: rgb(250 250 250)' type="mail" size="24" class="icon"/>
              </a>
            </li>
          </ul>
          <ul class="footer__nav">
            <li><RouterLink class="footer__nav" to="/home">Inicio</RouterLink></li>
            <li><RouterLink class="footer__nav" to="/api-docs">Documentación</RouterLink></li>
            <li><RouterLink class="footer__nav" to="/about">Contacto</RouterLink></li>
          </ul>
        </div>
        <div class="footer__grid-left">
          <button class="footer__top-btn" @click="scrollToTop">
            <vue-feather style='color: rgb(250 250 250)' type="arrow-up" size="24" class="icon"/>
          </button>
        </div>
      </div>
      <div class="footer__copyright">
        <span>© 2023 My Company.</span>  
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import VueFeather from 'vue-feather';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

</script>

<style  lang='scss'>
.footer{
  padding-top: 1rem;
  background-color: #202020;

  &__logo{

  }

  &__cont{
    max-width: 1280px;
    margin: auto;
    padding: 0rem 1rem;
  }

  &__grid{
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));


    &-right{

    }

    &-left{
      display: flex;
      align-items: flex-start;
      justify-content:flex-end;
    }
  }

  &__top-btn{
    background-color:#3f3f3f;
    display: flex;
    align-items: center;
    justify-content: center;
    aspect-ratio: 1/1;
    border:none;
    border-radius: 9999px;
    padding: 0.5rem;

    svg{
      color: #0078f2;
    }
  }

  &__social{

    &-cont{
      display: flex;
      align-items: center;
      justify-content: center;
      gap:1rem;

      :hover{
        cursor:pointer;
      }
    }
  }

  &__copyright{
    text-align: center;
    padding: 1rem;
    border-top: #3f3f3f 1px solid;
  }

}

  

</style>
