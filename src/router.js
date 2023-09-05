import { createRouter, createWebHistory } from 'vue-router'
import Welcome from "./views/Welcome";
import SearchHeroes from "./views/character/SearchHeroes";
import ProfileHero from "./views/character/ProfileHero";



const routes = [
    {
        path: "/",
        name: 'welcome',
        component: Welcome,
        props: true,
    },
    {
        path: "/heroes",
        name: 'heroes.search',
        component: SearchHeroes,
        props: true,
    },
    {
        path: "/heroes/profile",
        name: 'heroes.profile',
        component: ProfileHero,
        props: true,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })

export default router;