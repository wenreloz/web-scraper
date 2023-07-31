<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand" href="/">GDorks</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-link active" aria-current="page" :to="{name:'movies'}">Movies</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" :to="{name:'books'}">Documents</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" :to="{name:'images'}">Images</RouterLink>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
         
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" v-model="state.searchTerm" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="button" @click="searchMovie">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>


<script lang="ts" setup>
import { reactive } from 'vue';


const emits = defineEmits(['searchMovie'])

const state = reactive({
    searchTerm:''
})

const searchMovie = () => {
    emits('searchMovie',state.searchTerm)
}


</script>