<template>
  <div class="homepage">
    <div class="create-sidebar">
      <router-link to="/">
        <button>View Notes</button>
      </router-link>
    </div>
    <form class="form">
      <input v-model="inputTitle" placeholder="Note Title">
      <input v-model="inputText" placeholder="Note Body">
      <button v-on:click="submitNote">Create</button>
    </form>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue";
import "../../css/CreateNote.css";
export default {
  components: {
    Sidebar
  },
  data() {
    return {
      inputTitle: "",
      inputText: ""
    };
  },

  methods: {
    submitNote: function() {
      this.$store.dispatch("postNote", {
        title: this.inputTitle,
        textBody: this.inputText
      });
      (this.inputTitle = ""), (this.inputText = "");
    }
  }
};
</script>

<style>
</style>
