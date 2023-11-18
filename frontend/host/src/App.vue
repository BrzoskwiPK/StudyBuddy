<script setup lang="ts">
import Sidebar from 'sidebar_app/Sidebar.vue'
</script>

<template>
  <div className="app__container">
    <Sidebar />
    <router-view></router-view>
  </div>
</template>

<style scoped lang="scss">
.app {
  &__container {
    display: flex;
    width: 100vw;
    background: #eee;

    .sidebar__container {
      min-width: 17rem;
      width: 15vw;
      height: 100vh;
    }

    .notes__container {
      flex-grow: 1;
    }
  }
}
</style>
