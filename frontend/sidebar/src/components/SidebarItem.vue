<script setup lang="ts">
import { defineProps, toRefs, computed } from 'vue';
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
      height: 3.5em;
      font-size: 1.4rem;
      line-height: 2rem;
      margin-top: 0.7em;
      padding: 0 0.6em;
      border-radius: 0.5rem;
      color: inherit;
      text-decoration: none;
      cursor: pointer;
      transition: .1s;

      &:hover {
        background-color: #eee
      }

      &.router-link-active {
        background-color: #ddd
      }

      svg {
        width: 2.4rem;
        stroke: currentColor
      }

      &_text {
        font-weight: 500;
        margin-left: .8rem;
        text-transform: capitalize;
      }
    }
  }
}
</style>
