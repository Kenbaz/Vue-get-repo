import { createRouter, createWebHistory } from "vue-router";
import RepoDetails from "./components/RepoDetails.vue";
import NotFoundPage from "./components/NotFoundPage.vue";
import HomeComp from "./components/HomeComp.vue";

const routes = [
    { path: '/', name: 'Home', component: HomeComp, meta: {title: "Home page", description: "This is the page containing all the repositiories"} },
    { path: '/repo-details/:id', name: 'RepoDetails', component: RepoDetails, meta: {title: "Repository details", description: "This page holds the details of a repository"} },
    { path: '/:pathMatch(.*)*', name: '404-Page', component: NotFoundPage, meta: { title: "404 page", description: "This is the 404 error page" } },
]

const router = createRouter({
    history: createWebHistory(), routes
})

router.beforeEach((to, from, next) => {
    //update the document title
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    //update the meta description
    //check if the route being navigated 'to' has 'description' in its meta field, if it does, set its content attribute to meta.description.
    if (to.meta.description) {
        let metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', to.meta.description)
        }
    }
    next();
})

export default router;