<template>
    <h1>Pokemon: <span>#{{ id }}</span></h1>
    <div v-if="pokemon">
        <span>{{ pokemon.name }}</span>
        <br>
        <img :src="pokemon.sprites.front_default" :alt="pokemon.name">
    </div>
</template>

<script>
    export default{

        props: {
            id: {
                type: Number,
                required: true
            }
        },
        data() {
            return {
                pokemon: null
            }
        },
        created(){
            this.getPokemon()
        },

        methods: {
            async getPokemon() {
                try {
                    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${ this.id }`).then( r => r.json())              
                    console.log("🚀 ~ file: PokemonPage.vue:30 ~ getPokemon ~ pokemon:", pokemon)
                    this.pokemon = pokemon
                } catch (error) {
                    this.$router.push('/')
                    console.log("no hay nada que hacer aqui");
                }
            }
        },

        watch: {
            id() {
                this.getPokemon()
            }
        }
    }
</script>