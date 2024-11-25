import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import MoviesView from '../views/MoviesView.vue'
import DetailsView from '../components/Details.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/login', component: LoginView },
  { path: '/register', component: RegisterView },
  { path: '/movies', component: MoviesView },
  { path: '/movies/:ids', component: DetailsView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;