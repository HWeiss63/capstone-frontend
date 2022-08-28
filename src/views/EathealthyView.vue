<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Eat Healthy",
      ehs: {
        title: "",
        content: "",
      },
    };
  },
  created: function () {
    this.ehIndex();
  },
  methods: {
    ehIndex: function () {
      axios.get("https://health.gov/myhealthfinder/api/v3/topicsearch.json?TopicId=30583").then((response) => {
        // console.log(response.data.Result.Resources.Resource[0]);
        this.ehs.title = response.data.Result.Resources.Resource[0].Title;
        console.log(this.ehs);
        this.ehs.content = response.data.Result.Resources.Resource[0].Sections.section[0].Content;
        console.log(this.ehs);
      });
    },
  },
};
</script>

<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <h3>{{ ehs.title }}</h3>
    <div v-html="ehs.content"></div>
  </div>
</template>

<style></style>
