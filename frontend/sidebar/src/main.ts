import { createApp } from 'vue';
import './style.css';
//import { createRouter, createWebHistory } from 'vue-router';
import Sidebar from './Sidebar.vue';

// const router = createRouter({
//   history: createWebHistory(),
//   routes: [], //provides routes options in an array
// });

createApp(Sidebar).mount('#sidebar');
