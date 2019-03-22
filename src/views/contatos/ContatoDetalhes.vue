<template>
    <h3 class="font-weight-light">Detalhes sobre o contato com ID: {{ id }}</h3>
</template>

<script>
export default {
    data() {
        return {
            id: this.$route.params.id
        }
    },
    // watch: {
    //     '$route'(to, from) {
    //         this.id = to.params.id
    //     }
    // },
    beforeRouteUpdate(to, from, next) {
        this.id = to.params.id
        next()
    },
    created() {
        console.log('Parametros da rota: ', this.$route.params)
    }
}
</script>