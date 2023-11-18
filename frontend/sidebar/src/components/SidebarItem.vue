<script setup lang="ts">
import { defineProps, toRefs, computed, watch } from 'vue';
import HomeIcon from '../assets/icons/HomeIcon.vue';
import NotesIcon from '../assets/icons/NotesIcon.vue';
import CoursesIcon from '../assets/icons/CoursesIcon.vue';
import type { SidebarItemProps } from '../types/types'

const props = defineProps<SidebarItemProps>();
const { link } = toRefs(props)

const iconComponent = computed(() => {
  switch (props.link.name) {
    case 'notes':
      return NotesIcon;
    case 'courses':
      return CoursesIcon;
    case 'home':
    default:
      return HomeIcon;
  }
});

</script>

<template>
  <router-link :to="link.path" class="sidebar__links_item">
    <component :is="iconComponent" />
    <span class="sidebar__links_item_text">{{ link.name }}</span>
  </router-link>
</template>

<style scoped lang="scss">
.sidebar {
  &__links {
    &_item {
      display: flex;
      align-items: center;
      width: 100%;
      height: 3rem;
      margin-top: .5rem;
      padding-left: .75rem;
      padding-right: .75rem;
      border-radius: 5px;
      color: inherit;
      text-decoration: none;
      cursor: pointer;

      &:hover {
        background-color: rgb(209, 213, 219)
      }

      svg {
        width: 1.5rem;
        stroke: currentColor
      }

      &_text {
        font-weight: 500;
        font-size: .875rem;
        line-height: 1.25rem;
        margin-left: .5rem;
        text-transform: capitalize;
      }
    }
  }
}
</style>
