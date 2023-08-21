<template>
  <div>
    <b-form-group label-for="tags-with-dropdown">
      <b-form-tags id="tags-with-dropdown" v-model="value" no-outer-focus class="mb-2">
        <template v-slot="{ tags, disabled, addTag, removeTag }">
          <ul v-if="tags.length > 0" class="list-inline d-inline-block mb-2">
            <li v-for="tag in tags" :key="tag" class="list-inline-item">
              <b-form-tag
                @remove="onHandleRemove({removeTag, tag})"
                :title="tag"
                :disabled="disabled"
                variant="info"
              >{{ tag }}</b-form-tag>
            </li>
          </ul>

          <b-dropdown size="sm" variant="outline-secondary" block menu-class="w-100">
            <template #button-content>
              <b-icon icon="tag-fill"></b-icon> Choose tags
            </template>
            <b-dropdown-form @submit.stop.prevent="() => {}">
              <b-form-group
                label="Search tags"
                label-for="tag-search-input"
                label-cols-md="auto"
                class="mb-0"
                label-size="sm"
                :description="searchDesc"
                :disabled="disabled"
              >
                <b-form-input
                  v-model="search"
                  id="tag-search-input"
                  type="search"
                  size="sm"
                  autocomplete="off"
                 ></b-form-input>
              </b-form-group>
            </b-dropdown-form>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item-button
              v-for="option in availableOptions"
              :key="option"
              @click="onOptionClick({ option, addTag })"
            >
              {{ option }}
            </b-dropdown-item-button>
            <b-dropdown-text v-if="availableOptions.length === 0">
              No hay etiquetas para seleccionar
            </b-dropdown-text>
          </b-dropdown>
        </template>
      </b-form-tags>
    </b-form-group>
  </div>
</template>

<script setup lang="ts">
import {ref, computed} from 'vue'
import tagList from '../ts/tagsList'

const options: string[] = tagList

const search = ref<string>('')
const value = ref<string[]>([])
  
const emits = defineEmits<{
  (e: 'onAdd', option:string):void
  (e: 'onRemove', tag:string):void
}>()

const criteria = computed(() => {
  return search.value.trim().toLowerCase()
})

const availableOptions = computed<string[]>(() => {
  const criteria_avail = criteria.value   
  const options_avail = options.filter(opt => value.value.indexOf(opt) === -1)
  if (criteria_avail ) {
    return options_avail.filter(opt => opt.toLowerCase().indexOf(criteria_avail) > -1);
  }   
  return options_avail
})
    
const searchDesc = computed(() => {
  if (criteria.value && availableOptions.value.length === 0) {
    return 'There are no tags matching your search criteria'
  }
  return ''
})

const onHandleRemove = ({removeTag, tag}:{removeTag: (tag:string) => void, tag:string}) => {
  emits('onRemove', tag)
  removeTag(tag)
}


const onOptionClick = ({option, addTag}:{option:string, addTag: (option:string) => void }) => {
  emits('onAdd', option)
  addTag(option)
  search.value = '' 
}

</script>

<style lang="scss">

.b-form-tags{
 padding: 0px !important;
 border:none !important;
 background-color: transparent !important;
}

.btn-group{
  background-color: transparent;
  border: none;

  & .btn{
    border: none;
    display: flex;
    align-items: center;
    flex-direction: row;

  }
}

.b-form-tag {
  border-radius: 999px !important;
  padding: 0.5rem 1rem !important;
}

.badge{
  border-radius: 999px !important;
  padding: 0.5rem 1rem !important;


  button{
    width: 0.25rem;
    height:  0.25rem;
  }
}

.dropdown-menu{
  max-height: 500px;
  overflow-y: scroll;
}

</style>