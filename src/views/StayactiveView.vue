<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Stay Active",
      sas: {
        title: "",
        content: "",
      },
    };
  },
  created: function () {
    this.saIndex();
  },
  methods: {
    saIndex: function () {
      axios.get("https://health.gov/myhealthfinder/api/v3/topicsearch.json?TopicId=30617").then((response) => {
        // console.log(response.data.Result.Resources.Resource[0]);
        this.sas.title = response.data.Result.Resources.Resource[0].Title;
        console.log(this.sas);
        this.sas.content = response.data.Result.Resources.Resource[0].Sections.section[0].Content;
        console.log(this.sas);
      });
    },
  },
};
</script>

<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <h3>{{ sas.title }}</h3>
    <div v-html="sas.content"></div>
  </div>
</template>

<style></style>
