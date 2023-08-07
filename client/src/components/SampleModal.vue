<template>
  <div>
		<!-- Toggle Button -->  	
    <button @click="showModal=true">Mostrar</button>

    <!-- Modal -->
    <div v-if="showModal" class="modal-container">
      <div class="modal-background" @click="hideModal"></div>
      <div class="modal-content">
      	<div class='modal-content__header'>
      		<div>{{props.title}}</div>  
      		<button @click="hideModal">
      			<vue-feather type="x" size="24" class="icon"/>
      		</button>
      	</div>
      	<div class='modal-content__body'>           
	        <h3>Request</h3>   
	        <pre>{{props.domain + props.request}}</pre>
	        <h3>Request</h3>   
	        <HighCode
				    class='code'
				    :lang='"json"'
				    :theme='"dark"'
            :scrollStyleBool='false'
				    :height='"50vh"'
            :maxHeight='"1000px"'
				    :langName='" "'
				    :fontSize="'16px'"   
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
/* Estilos para el modal */
.modal-container {
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

.modal-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
	width: 720px;
  background-color: #2a2a2a;
  border-radius: 5px;
  overflow: hidden;

  &__header{
  	background-color: #0078f2;
  	width: 100%;
  	display: flex;
  	justify-content: space-between;
  	padding: 1rem;
  }

  &__body{
  	width: 100%;
  	padding: 1rem;

  }
}

.code{
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