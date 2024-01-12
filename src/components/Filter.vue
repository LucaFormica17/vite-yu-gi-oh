<script>
import {store} from '../store.js';
import axios from 'axios';
export default {
    data() {
        return {
            store,
            filterList: []
        }
    },
    created() {
        this.getFilterList();
    },
    methods: {
        getFilterList(){
            axios.get(store.apiFilterUrl).then((response) => {
                this.filterList = response.data.slice(0, 20);
                
            });
        }
    }
}
</script>
<template lang="">
    <div class="container mt-5">
        <div class="row">
            <select class="form-select" v-model="store.search" @change="$emit('filter_cards')">
                <option selected>Tutti</option>
                <option :value="archetype.archetype_name" v-for="(archetype, index) in filterList" :key="index">{{archetype.archetype_name}}</option>
            </select>
        </div>
    </div>
</template>
<style lang="">
    
</style>