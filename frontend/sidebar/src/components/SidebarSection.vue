<script setup lang="ts">
import { defineProps } from 'vue';
import SidebarItem from './SidebarItem.vue';
import type { SidebarSectionProps } from '../types/types'

const props = defineProps<SidebarSectionProps>();

</script>

<template>
  <div class="sidebar__links_section">
    <SidebarItem v-for="(link, index) in props.links" :key="index" :link="link" />
  </div>
</template>

<style scoped lang="scss">
.sidebar {
  &__links {
    &_section {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      border-top: 1px solid rgb(209, 213, 219);
      margin-top: .75rem;
      color: rgb(55, 65, 81);
    }
  }
}
</style>
