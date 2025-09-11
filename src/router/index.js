import { createRouter, createWebHistory } from "vue-router";
import Questionnaire from "../views/Questionnaire.vue";

const routes = [
  {
    path: "/",
    name: "questionnaire",
    component: Questionnaire
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;