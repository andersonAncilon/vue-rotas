<template>
  <div id="app">
    <div class="jumbotron">
      <h1 class="display4">Vue Router</h1>
      <p class="lead">Adicionando rotas a Single Page Application no Vue</p>
    </div>

    <div class="container">
      <router-link to="/" class="btn btn-info mb-4 mr-4" exact>Home</router-link>
      <router-link
        :to="{ path: '/contatos' }"
        class="btn btn-info mb-4 mr-4"
      >Contatos</router-link>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>
