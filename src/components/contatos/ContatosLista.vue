<template>
  <div>
    <h3 class="font-weight-light">Contatos</h3>

    <ul v-if="contatos.length > 0" class="list-group">
        <ContatosListaIten class="list-group-item" v-for="contato in contatos" :key="contato.id" :contato="contato"/>
    </ul>

    <p v-else>Nenhum contato a ser exibido!</p>

    <button class="btn btn-secondary mt-4 mb-4" @click="voltar">Voltar</button>
  </div>
</template>

<script>
import ContatosListaIten from "./ContatosListaIten";
export default {
  components: {
    ContatosListaIten
  },
  data() {
    return {
      contatos: [
        { id: 1, nome: "Joao", email: "joao@gmail.com" },
        { id: 2, nome: "Maria", email: "maria@gmail.com" },
        { id: 3, nome: "Jose", email: "jose@gmail.com" }
      ]
    };
  },
  methods: {
      voltar() {
          this.$router.back()
      }
  }
};
</script>
