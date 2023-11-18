import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import './style.css';
import App from './App.vue';
import HomePage from './components/HomePage.vue';
import MockCourses from './components/MockCourses.vue';
import NotesApp from 'notes_app/Notes.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/notes', component: NotesApp },
    { path: '/courses', component: MockCourses },
  ],
});

createApp(App).use(router).mount('#app');
