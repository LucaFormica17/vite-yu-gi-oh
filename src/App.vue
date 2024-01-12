<script>
  import AppHeader from './components/AppHeader.vue';
  import AppMain from './components/AppMain.vue';
  import Loader from './components/Loader.vue';
  import Filter from './components/Filter.vue';
  
  import axios from 'axios';
  import { store } from './store.js';
  
  export default {
  components:{
    AppHeader,
    AppMain,
    Loader,
    Filter
  },
  data() {
        return {
            store
        }  
    },
  created(){
      this.createCard();
    },
  methods: {
      createCard(){
        if(store.search != ''){
          store.apiUrl += `&archetype=${store.search}`
        }
          axios.get(store.apiUrl).then((response) => {
              store.cardsList = response.data.data;
              store.loading = false;
          });
      },
      filterCards(){
        this.createCard();
      }
    },
  }
</script>

<template lang="">
  <div>
    <Loader v-if="store.loading"/>
    <div v-else>
      <AppHeader />
      <Filter @filter_cards="filterCards"/>
      <AppMain />
    </div>
  </div>
</template>

<style lang="scss" >
@use './styles/generals.scss';
  
</style>