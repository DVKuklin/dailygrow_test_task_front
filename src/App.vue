<script setup>
import Navbar from './components/Navbar.vue'
import SideBar from './components/SideBar.vue'
import { RouterLink, RouterView } from 'vue-router'
</script>

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
    <a href="/" class="brand-link">
      <span class="brand-text font-weight-light font-weight-bold">SWC test task</span>
    </a>

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

<style lang="less" scoped>

</style>
