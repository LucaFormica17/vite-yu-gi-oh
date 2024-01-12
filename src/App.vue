<script>
  import AppHeader from './components/AppHeader.vue';
  import AppMain from './components/AppMain.vue';
  import Loader from './components/Loader.vue';
  
  import axios from 'axios';
  import { store } from './store.js';
  
  export default {
  components:{
    AppHeader,
    AppMain,
    Loader
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
          axios.get(store.apiUrl).then((response) => {
              store.cardsList = response.data.data;
              store.loading = false;
          });
      }
    },
  }
</script>

<template lang="">
  <div>
    <Loader v-if="store.loading"/>
    <div v-else>
      <AppHeader />
      <AppMain />
    </div>
  </div>
</template>

<style lang="scss" >
@use './styles/generals.scss';
  
</style>