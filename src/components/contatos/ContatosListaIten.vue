<template>
  <li>
    <span>{{ contato.nome }}</span>
    <!-- <router-link :to="{ name: 'contato', params: { id: contato.id } }" class="btn btn-info btn-sm float-right">Detalhes</router-link> -->    
    <router-link class="btn btn-info btn-sm float-right" :to="{ name: 'contato', params: { id: this.contato.id } }">Detalhes</router-link>
   
  </li>
</template>

<script>
export default {
  props: {
    contato: {
      type: Object,
      required: true
    }
  },
  methods: {
    verDetalhes(event) {
      // this.$router.push(`/contatos/${this.contato.id}`) Wrong 
      // this.$router.push({ path: `/contatos/${this.contato.id}` }) Wrong
      this.$router.push({ name: "contato", params: { id: this.contato.id } }) //Correct
      //this.$router.replace({ name: "contato", params: { id: this.contato.id } }) //Wrong
    }
  }
};
</script>

