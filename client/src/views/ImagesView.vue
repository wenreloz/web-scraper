

<template>
    <main>
        <div class="container mt-5 text-center">
            Search Images
        </div>
      <ResultListComponent :resultlists="state.images" />
    </main>
  </template>
  
  
  
  <script setup lang="ts">
    import { onMounted, reactive, watch } from 'vue';
    import HttpClient from '@/helpers/httpclient';
    import { apiEndpoint } from '@/stores/env';
    import { useLoading } from 'vue-loading-overlay';
    import 'vue-loading-overlay/dist/css/index.css';
    import ResultListComponent from '@/components/ResultListComponent.vue';
  
  
    const $loading = useLoading({});
    const loader = $loading;
  
  
    const httpClient = new HttpClient();
  
  
    const props = defineProps({
      searchTerm:{
        type:String,
        default: ''
      }
    })
  
  
    const state = reactive({
        images:[]
    })
  
  
    onMounted(async ()=>{
      console.log("Home View");
    })
  
    
  
    watch(() => props.searchTerm, () => {
      searchImages();
    });
  
  
    const searchImages = async () => {
      const loading = loader.show({});
      const data = await httpClient.get(`${apiEndpoint}/images?title=${props.searchTerm}`);
      state.images = data.parentLinks;
      loading.hide();
    }
  </script>