<template>
  <!-- <RouterLink to="/">Главная</RouterLink>
  <RouterLink to="/login">Вход</RouterLink>
  Main page
  <RouterView></RouterView> -->

  <div class="wrapper">

  <!-- Preloader -->
  <div class="preloader flex-column justify-content-center align-items-center">
    <img class="animation__shake" src="/dist/img/AdminLTELogo.png" alt="AdminLTELogo" height="60" width="60">
  </div>

  <!-- Navbar -->
    <Navbar></Navbar>
  <!-- /.navbar -->

  <!-- Main Sidebar Container -->
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <RouterLink to="/" class="brand-link">
      <span class="brand-text font-weight-light font-weight-bold">SWC test task</span>
    </RouterLink>

    <!-- Sidebar -->
      <SideBar></SideBar>
    <!-- /.sidebar -->
  </aside>

  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">

    <!-- Main content -->
    <section class="content">
        <RouterView></RouterView>
    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->

  </div>
  <!-- ./wrapper -->
</template>

<script>
import Navbar from './components/Navbar.vue'
import SideBar from './components/SideBar.vue'
import { RouterLink, RouterView } from 'vue-router'
import axios from 'axios';
import {baseUrlApi} from './services/config.js';

export default {
  components: {Navbar, SideBar},  
  created() {
    if (localStorage.getItem('token')) {
      axios.defaults.headers.common['Authorization'] = 'Bearer '+localStorage.getItem('token');
      
      axios
            .get(baseUrlApi+'/user')
            .then(response => { 
                if (response.data.status=='success') {
                    this.$store.commit('appState/setIsLogged',true);
                    this.$store.commit('appState/setLogin',response.data.data.name);
                    // console.log(response);
                }
            })
            .catch(error => {
                if (error.response.status === 401) {
                  this.$store.commit('appState/setIsLogged',false);
                  this.$store.commit('appState/setLogin','');
                  localStorage.removeItem('token');
                }
                // console.log(error.response);
            });
    }
  }
}
</script>

<style lang="less" scoped>

</style>
