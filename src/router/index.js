import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CalendarView from "../views/CalendarView.vue";
import ChecklistView from "../views/ChecklistView.vue";
import GestationaldiabetesView from "../views/GestationaldiabetesView.vue";
import EathealthyView from "../views/EathealthyView.vue";
import PreeclampsiaView from "../views/PreeclampsiaView.vue";
import StayactiveView from "../views/StayactiveView.vue";
import SignupView from "../views/SignupView.vue";
import LoginView from "../views/LoginView";
import LogoutView from "../views/LogoutView";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/calendar",
    name: "calendar",
    component: CalendarView,
  },
  {
    path: "/checklist",
    name: "checklist",
    component: ChecklistView,
  },
  {
    path: "/gestationaldiabetes",
    name: "gestationaldiabetes",
    component: GestationaldiabetesView,
  },
  {
    path: "/eathealthy",
    name: "eathealthy",
    component: EathealthyView,
  },
  {
    path: "/preeclampsia",
    name: "preeclampsia",
    component: PreeclampsiaView,
  },
  {
    path: "/stayactive",
    name: "stayactive",
    component: StayactiveView,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignupView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/logout",
    name: "logout",
    component: LogoutView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
