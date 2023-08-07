<template>
  <div>
    <ApiDoc />
    <!-- <ApiTesting :domain="domain" :path="api/games"/> -->
    <PredictModelForm />
  </div>
</template>


<script setup lang="ts">
import PredictModelForm from '../components/PredictModelForm.vue'
import ApiDoc from '../components/ApiDoc.vue'
</script>
