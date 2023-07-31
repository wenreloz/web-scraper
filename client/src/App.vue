
<template>
  <NavBarComponent @searchMovie="searchMovie"></NavBarComponent>
  <RouterView :searchTerm="state.searchTerm"/>
</template>






<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import NavBarComponent from './components/NavBarComponent.vue';
  
const state = reactive({
  searchTerm:''
})



onMounted(async ()=>{
    console.log("App View");
  })


const searchMovie = (keyword:string) => {
  state.searchTerm = keyword
}
</script>
