<template>
    <div>
        <!-- <router-link :to="{ name: 'home' }">Pokemon List</router-link>
        <router-link :to="{ name: 'pokemon-id', params: { id: 4} }">Pokemon por id</router-link>
        <router-link :to="{ name: 'about' }">About</router-link> -->
        <CustomLink
            v-for="link in links" :key="link.to" :link="link"
        />
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
    export default{

        data() {
            return {
                links: [
                    { to: { name: 'dbz-characters' }, name: 'Dbz Personajes'},
                    { to: { name: 'dbz-about' }, name: 'Dbz About'},
                    { to: { name: 'pokemon-home' }, name: 'Pokemons'},
                    { to: { name: 'pokemon-id', params: { id: 4} }, name: 'Pokemon por ID'},
                    { to: { name: 'pokemon-about' }, name: 'Pokemon About'},
                    { to: { name: 'https://google.com' }, name: 'Google'},
                ]
            }
        },


        components: {
            CustomLink : defineAsyncComponent(() => import('./CustomLink.vue'))
        }
    }
</script>
<style scoped>
    div {
        padding: 0 30px;
    }

    div a{
        font-weight: bold;
        color: #2c3e50;
        margin: 0 10px;
    }
</style>