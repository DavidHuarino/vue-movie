import { createRouter, createWebHistory } from "vue-router";
// import Home from "../views/Home.vue";
import Home from "../views/Home/Home.vue";
import Movies from "../views/Movies/Movies.vue";
import MovieSingle from "../views/MovieSingle/MovieSingle.vue";
const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/movie", name: "Movie", component: Movies },
  { path: "/movie/:id", name: "MovieSingle", component: MovieSingle },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
