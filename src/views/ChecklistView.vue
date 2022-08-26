<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "~What to Buy~",
      checklists: [],
    };
  },
  created: function () {
    this.checklistsIndex();
  },
  methods: {
    checklistsIndex: function () {
      axios.get("/checklists").then((response) => {
        console.log("checklists index", response);
        this.checklists = response.data;
      });
    },
  },
};
</script>

<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div v-for="checklist in checklists" v-bind:key="checklist.id">
      <p>{{ checklist.item_name }}</p>
      <p>{{ checklist.category }}</p>
    </div>
  </div>
</template>

<style></style>
