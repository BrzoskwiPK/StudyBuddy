<script setup lang="ts"></script>

<template>
  <a className="button__account" href="#">
    <svg xmlns="http: //www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z">
      </path>
    </svg>
    <span classList="button__account_text">Account</span>
  </a>
</template>

<style scoped lang="scss">
.button {
  &__account {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4rem;
    width: 100%;
    margin-top: auto;
    background-color: $main-color;
    color: #222;
    text-decoration: none;

    &:hover {
      background-color: $main-dark-color;
    }

    svg {
      display: block;
      height: 1.5rem;
      stroke: currentColor;
      width: 1.5rem;
    }

    &_text {
      font-weight: 500;
      font-size: .875rem;
      line-height: 1.25rem;
      margin-left: .5rem;
    }
  }
}
</style>
