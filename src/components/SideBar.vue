<template>
    <div class="sidebar">
        <!-- Sidebar user panel (optional) -->
        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
            <div class="info">
                <div class="d-block text-white" id="user" v-if="$store.getters['appState/getIsLogged']"><img class="person-icon" src="/icons/person.svg">{{ $store.getters['appState/getLogin'] }}</div>
            </div>
        </div>

        <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->

          <li class="nav-item" v-if="$store.getters['appState/getIsLogged']">
            <RouterLink to="/b24-analitics" class="nav-link">
              <p>
                Bitrix analitics
              </p>
            </RouterLink>
          </li>
        </ul>

        </nav>
    </div>
</template>

<script>
</script>

<style lang="less" scoped>
.person-icon {
    height: 1rem;
}
</style>