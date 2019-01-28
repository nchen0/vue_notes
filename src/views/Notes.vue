<template>
  <div class="homepage">
    <Sidebar/>
    <div class="grid">
      <div class="notes" v-for="note in notes">
        <h2>{{note.title}}</h2>
        <p>{{note.textBody}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
import "../../css/Notes.css";
import Sidebar from "../components/Sidebar.vue";
export default {
  computed: mapState({
    notes: state => state.notes
  }),
  created: function() {
    this.$store.dispatch("getNotes");
  },
  components: {
    Sidebar
  }
};
</script>
  
<style>
</style>
