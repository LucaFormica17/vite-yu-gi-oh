<script>

export default {
    name: 'singleCard',
    props: {
        card: Object
    }
}
</script>
<template lang="">
    <div class="user-col">
        <div class="user-card">
            <img :src="card.card_images[0].image_url_small" alt="image">
            <p>{{card.name}}</p>
            <span>{{card.archetype}}</span>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../styles/partials/variables' as*;

    .user-col{
        width: calc(100% / 5 - 10px);
        margin: 5px;
        .user-card{
            background-color: $main_color;
            width: 100%;
            height: 320px;

            img{
                width: 100%;
            }

            p{
                text-transform: uppercase;
                color: white;
                text-align: center;
                font-size: 12px ;
                margin: 10px 0 5px 0;
            }
        }
    }
    
</style>