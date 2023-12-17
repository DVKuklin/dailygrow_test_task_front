<template>
    Login
    <br>
    <p>{{ $store.getters['appState/getIsLogged'] }}</p>
    <button @click="buttonClick">ButtonClick</button>
</template>

<script>
    export default {
        methods: {
            buttonClick() {
                this.$store.commit('appState/setIsLogged','sdfsdf');
            }
        }
    }
</script>