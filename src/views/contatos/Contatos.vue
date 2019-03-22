<template>
  <div>
    <ContatosLista/>
    <router-view></router-view>
  </div>
</template>


<script>
import ContatosLista from "../../components/contatos/ContatosLista";

export default {
  components: {
    ContatosLista
  },
  methods: {
    voltar(event) {
      //   this.$router.push("/")
      // this.$router.replace('/')
      // this.$router.go(-3)
      // this.$router.forward()
      this.$router.back(); //Forma correta pra voltar
    }
  }
};
</script>