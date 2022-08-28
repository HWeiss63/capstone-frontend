<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Preeclampsia",
      preeclampsias: {
        title: "",
        content: "",
      },
    };
  },
  created: function () {
    this.preeclampsiaIndex();
  },
  methods: {
    preeclampsiaIndex: function () {
      axios.get("https://health.gov/myhealthfinder/api/v3/topicsearch.json?TopicId=30600").then((response) => {
        // console.log(response.data.Result.Resources.Resource[0]);
        this.preeclampsias.title = response.data.Result.Resources.Resource[0].Title;
        console.log(this.preeclampsias);
        this.preeclampsias.content = response.data.Result.Resources.Resource[0].Sections.section[0].Content;
        console.log(this.preeclampsias);
      });
    },
  },
};
</script>

<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <h3>{{ preeclampsias.title }}</h3>
    <div v-html="preeclampsias.content"></div>
  </div>
</template>

<style></style>
