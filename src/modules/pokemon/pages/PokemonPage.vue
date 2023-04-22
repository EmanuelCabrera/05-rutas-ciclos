<template>
    <h1>Pokemon: <span>#{{ id }}</span></h1>
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
                // id: null
            }
        },
        created(){
            // console.log( this.$route );
            const { id } = this.$route.params
            console.log("🚀 ~ file: PokemonPage.vue:10 ~ created ~ id:", id)
            // this.id = id
        }
    }
</script>