<template>
  <nav class="main-header navbar navbar-expand navbar-white navbar-light">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
      </li>
      <li v-if="$store.getters['appState/getIsLogged']" class="nav-item d-none d-sm-inline-block">
        <a class="nav-link button-logout" @click="logoutClick">Выйти</a>
      </li>
      <li v-if="!$store.getters['appState/getIsLogged']" class="nav-item d-none d-sm-inline-block">
        <RouterLink to="/login" class="nav-link">Войти</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script>

export default {
  name: 'NavBar',
  methods: {
    logoutClick() {
        this.$store.commit('appState/setIsLogged',false);
        localStorage.removeItem('token');
        this.$store.commit('appState/setLogin','');
      }
    }
}
</script>

<style lang="less">
    .button-logout {
        cursor: pointer;
    }
</style>