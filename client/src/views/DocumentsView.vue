

<template>
    <main>
        <div class="container mt-5 text-center">
            Search Documents
        </div>
      <DocumentsComponent :resultlists="state.documents" />
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
        documents:[]
    })
  
  
    onMounted(async ()=>{
      console.log("Home View");
    })
  
    
  
    watch(() => props.searchTerm, () => {
      searchMovies();
    });
  
  
    const searchMovies = async () => {
      const loading = loader.show({});
      const data = await httpClient.get(`${apiEndpoint}/books?title=${props.searchTerm}`);
      state.documents = data.parentLinks;
      loading.hide();
    }
  </script>