<template>
  <div>
		<!-- Toggle Button -->  	
    <b-button  @click="showModal=true" variant="info">Mostrar</b-button>
    <!-- Modal -->
    <div v-if="showModal" class="modal__container">
      <div class="modal__background" @click="hideModal"></div>
      <div class="modal__content">
      	<div class='modal__content-header'>
      		<h1 class="modal__title">{{props.title}}</h1>  
      		<button class="modal__back-btn" @click="hideModal">
      			<vue-feather type="x" size="24" class="icon"/>
      		</button>
      	</div>
      	<div class='modal__content-body'>           
	        <h2 class="modal__subtitle">Request</h2>   
	        <pre class="modal__request">{{props.domain + props.request}}</pre>
	        <h2 class="modal__subtitle">Response</h2>   
	        <HighCode
				    class='code'
				    :lang='"json"'
				    :theme='"dark"'
            :scrollStyleBool='false'
				    :height='"50vh"'
            :maxHeight='"1000px"'
				    :langName='" "'
				    :fontSize="'12px'"   
				    :borderRadius="'2px'"
				    :copy='false'
				    :width="'100%'"
				    :codeValue="JSON.stringify(props.response, undefined, 2)"
				  />
      	</div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';
import VueFeather from 'vue-feather';
// @ts-expect-error
import { HighCode } from 'vue-highlight-code';
import 'vue-highlight-code/dist/style.css';
   
const showModal = ref(false);

const props = defineProps<{
  request: any,
  response: any,
  title: string,
  domain: Location,
}>()

const hideModal = () => {
	showModal.value = false;
};

</script>

<style lang='scss'>

.modal{
  &__title{
    font-size: 1.3rem;
    font-weight: 500;
  }

  &__subtitle{
    font-size: 1.1rem;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    font-weight: 500;
  }

  &__container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  }

  &__request{
    background-color: #151515;
    padding: 1rem 1.25rem;
    border-radius: 0.15rem;
  }

  &__background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  &__back-btn{
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    aspect-ratio: 1/1;
    border-radius: 9999px;
    color: white;
    border: none;
    transition: ease-in-out 0.2s background-color;

    &:hover{
      background-color: rgba(0, 0, 0, 0.2);
    }

    svg{
      width: 2rem;
      height: 2rem;
    }
  }

  &__content {
    width: 720px;
    background-color: #2a2a2a;
    border-radius: 5px;
    overflow: hidden;

    &-header{
      background-color: #0078f2;
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 0.75rem 1rem;
      align-items: center;

      h1{
        margin-top: auto;
        margin-bottom: auto;
      }
    }

    &-body{
      width: 100%;
      padding: 1rem;
    }
  }
}

.code_header{
  display: none !important;
}

.code{
  padding-top: 1rem;
  padding-bottom: 1rem;
  max-height: 500px;
  overflow: scroll;
}

.code_area{
  overflow: scroll !important;

  pre {
    overflow: scroll !important;
  }
}

.atom_one_dark.hljs, .atom_one_dark .hljs{
	background-color: #151515;
}

</style>