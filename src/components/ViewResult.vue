<script>
import { store } from '../store.js';
export default {
    data() {
        return {
            store,
        }
    },
    computed:{
        cardsFounded(){
            return store.cardsList.length;
        }
    }
}
</script>
<template lang="">
    <div class="container bg-black">
        <div class="row">
            <div class="col-12">
                <div v-if="store.cardsList.length > 0">Carte trovate {{cardsFounded}}</div>
                <div v-else>Carte trovate 0</div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .col-12{
        div{
            color: white;
            padding: 10px;
        }
    }
</style>