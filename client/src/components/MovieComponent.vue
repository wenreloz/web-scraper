<template>
  <div class="container mt-5">
    <div class="row g-2">
      <div class="col-md-3 mb-3" v-for="(link, index) in props.movies" :key="index">
        <div class="card">
          <video controls :src="link" class="card-video" style="height: 300px;"></video>
        </div>
      </div>
    </div>
  </div>
</template>





<script lang="ts" setup>

import { onMounted  } from 'vue';
import type { PropType } from 'vue/dist/vue.js';

const props = defineProps({
  movies: {
    type: Array as PropType<string[]>,
    required: true
  }
});


onMounted(async() => {
  console.log("MovieComponent");
});




</script>



<style scoped>

/* .card-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
} */


.link-overflow {
  display: block;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}


</style>