<script>

import singleCard from './singleCard.vue';
import { store } from '../store.js';

export default {
    name:'AppMain',
    components:{
        singleCard,
    },
    data() {
        return {
            store
        }
    },
}
</script>
<template lang="">
   <main>
        <div class="container my-5">
            <div class="row flex-wrap">
                <singleCard v-for="(card, index) in store.cardsList" :key="index" :card="card"/>
            </div>
        </div>
   </main>
</template>
<style lang="scss" scoped>
    @use '../styles/partials/variables' as*;

    .container{
        background-color: white;

    }
</style>