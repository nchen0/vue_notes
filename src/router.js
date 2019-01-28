import Vue from "vue";
import Router from "vue-router";
import Notes from "./views/Notes.vue";
import CreateNote from "./views/CreateNote.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "notes",
      component: Notes
    },
    {
      path: "/create",
      name: "createnote",
      component: CreateNote
    }
  ]
});
