<script setup lang="ts">
import Sidebar from 'sidebar_app/Sidebar.vue'
import NotesApp from 'notes_app/Notes.vue'
</script>

<template>
  <div className="app__container">
    <Sidebar />
    <NotesApp></NotesApp>
  </div>
</template>

<style scoped lang="scss">
.app {
  &__container {
    display: flex;

    .sidebar__container {
      width: 15vw;
      height: 100vh;
    }

    .notes__container {
      flex-grow: 1;
    }
  }
}
</style>
