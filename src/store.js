import { reactive } from "vue";

export const store = reactive ({
    cardsList: [],
    apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',
    apiFilterUrl: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
    loading: true,
    search: ''
})