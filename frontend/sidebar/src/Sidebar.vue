<script setup lang="ts">
import AccountButton from './components/AccountButton.vue'
import Logo from './components/Logo.vue'
import SidebarSection from './components/SidebarSection.vue';
import type { Link } from './types/types'

const links: Link[] = [{
  path: '/',
  name: 'home'
}, {
  path: '/notes',
  name: 'notes'
}, {
  path: '/courses',
  name: 'courses'
}]
</script>

<template>
  <aside className="sidebar__container">
    <Logo />
    <div class="sidebar__links_wrapper">
      <SidebarSection :links="links" />
      <SidebarSection />
    </div>
    <AccountButton />
  </aside>
</template>

<style scoped lang="scss">
.sidebar {
  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    height: 100%;
    background-color: #fefefe;
    border-right: 1px solid #e5e7eb;
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;
  }

  &__links {
    &_wrapper {
      padding-left: .5rem;
      padding-right: .5rem;
      width: 100%;
    }
  }
}
</style>
