<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Gestational Diabetes",
      gds: {
        title: "",
        content: "",
      },
    };
  },
  created: function () {
    this.gdIndex();
  },
  methods: {
    gdIndex: function () {
      axios.get("https://health.gov/myhealthfinder/api/v3/topicsearch.json?TopicId=30600").then((response) => {
        console.log(response.data.Result.Resources.Resource[0]);
        this.gds.title = response.data.Result.Resources.Resource[0].Title;
        console.log(this.gds);
      });
    },
  },
};
</script>

<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <h3>{{ gds.title }}</h3>
    <!-- <div v-for="gd in gds" v-bind:key="gd.total"></div> -->
  </div>
</template>

<style></style>
