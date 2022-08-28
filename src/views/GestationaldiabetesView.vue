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
      axios.get("https://health.gov/myhealthfinder/api/v3/topicsearch.json?TopicId=30574").then((response) => {
        // console.log(response.data.Result.Resources.Resource[0]);
        this.gds.title = response.data.Result.Resources.Resource[0].Title;
        console.log(this.gds);
        this.gds.content = response.data.Result.Resources.Resource[0].Sections.section[0].Content;
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
    <p>{{ gds.content }}</p>
    <!-- <div v-for="gd in gds" v-bind:key="gd.total"></div> -->
  </div>
</template>

<style></style>
