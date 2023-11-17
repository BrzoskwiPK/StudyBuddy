<script setup lang="ts">
import AccountButton from './components/AccountButton.vue'
import Logo from './components/Logo.vue'
</script>

<template>
  <aside className="sidebar__container">
    <Logo />
    <div class="sidebar__links_wrapper">
      <div class="sidebar__links_section">
        <a href="#" class="sidebar__links_item">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6">
            </path>
          </svg>
          <span class="sidebar__links_item_text">Dashboard</span>
        </a>
        <a href="#" class="sidebar__links_item">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
          <span class="sidebar__links_item_text">Search</span>
        </a>
        <a href="#" class="sidebar__links_item">
          <svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
          </svg>
          <span class="sidebar__links_item_text">Insights</span>
        </a>
        <a href="#" class="sidebar__links_item">
          <svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2">
            </path>
          </svg>
          <span class="sidebar__links_item_text">Docs</span>
        </a>
      </div>

      <div class="sidebar__links_section">
        <a href="#" class="sidebar__links_item">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6">
            </path>
          </svg>
          <span class="sidebar__links_item_text">Dashboard</span>
        </a>
        <a href="#" class="sidebar__links_item">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
          <span class="sidebar__links_item_text">Search</span>
        </a>
        <a href="#" class="sidebar__links_item">
          <svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
          </svg>
          <span class="sidebar__links_item_text">Insights</span>
        </a>
        <a href="#" class="sidebar__links_item">
          <svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2">
            </path>
          </svg>
          <span class="sidebar__links_item_text">Docs</span>
        </a>
      </div>
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

    &_section {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      border-top: 1px solid rgb(209, 213, 219);
      margin-top: .75rem;
      color: rgb(55, 65, 81);
    }

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
      }
    }
  }
}
</style>
