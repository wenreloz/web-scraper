<template>
    <div class="container mt-5">
        <div class="row">
            <div class="list-group" style="overflow-wrap: break-word;">
                <div class="" v-for="(result, index) in props.resultlists" :key="index">
                  <a :href="result.link" target="_blank" class="list-group-item list-group-item-action" >
                      <span class="text-primary">{{ result.link }}</span>
                      <br>
                      <!-- <img :src="result.img" alt=""> -->
                  </a>
                  
                </div>
            </div>
        </div>
    </div>
  </template>
  
  
  
  <script lang="ts" setup>
  
  import { onMounted } from 'vue';
  import type { PropType } from 'vue/dist/vue.js';

  
  interface ResultItem {
    link: string;
    img: string;
    // Other properties if available
  }
  

  const props = defineProps({
    resultlists: {
      type: Array as PropType<ResultItem[]>,
      required: true,
    }
  });
  
  
  onMounted(async() => {
    console.log("ResultListComponent");
    
  });
  
  
  
  
  </script>
  
  
  
  <style scoped>
  
  .card-video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  </style>