import { createRouter, createWebHistory } from "vue-router";
import MainLayout from "../components/MainLayout.vue";
import HomeView from "../views/HomeView.vue";
import DepartmentView from "../views/DepartmentView.vue";
import CoursesView from "../views/CoursesView.vue";
import SubjectsView from "../views/SubjectsView.vue";
import AboutView from "../views/AboutView.vue";
import StaffView from "@/views/StaffView.vue";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: MainLayout,
      children: [
        {
          path: "",
          name: "home",
          component: HomeView,
        },
        {
          path: "department",
          name: "department",
          component: DepartmentView,
        },
        {
          path: "courses",
          name: "courses",
          component: CoursesView,
        },
        {
          path: "subjects",
          name: "subjects",
          component: SubjectsView,
        },
        {
          path: "about",
          name: "about",
          component: AboutView,
        },
        {
          path: "/staff",
          name: "Staff",
          component: StaffView,
        },
      ],
    },
  ],
});

export default router;
