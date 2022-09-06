<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Stay Active: Quick Tips",
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
  <div class="stayactive">
    <form action="/examples/actions/confirmation.php" method="post" class="form-horizontal">
      <div class="row">
        <div class="col-8 offset-4">
          <h2>{{ message }}</h2>
        </div>
      </div>
      <div class="form-group row">
        <div v-html="sas.content"></div>
      </div>
    </form>
  </div>
</template>

<style>
body {
  color: #999;
  background: #f3f3f3;
  font-family: "Roboto", sans-serif;
}
.stayactive {
  width: 1000px;
  margin: 0 auto;
  padding: 30px 0;
}
.stayactive h2 {
  color: #333;
  margin: 0 0 30px 0;
  display: inline-block;
  padding: 0 30px 10px 0;
  border-bottom: 3px solid #ff6763;
}
.stayactive form {
  color: #333;
  border-radius: 3px;
  margin-bottom: 15px;
  background: #fff;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  padding: 30px;
}
.stayactive .form-group row {
  margin-bottom: 20px;
}
.stayactive label {
  font-weight: normal;
  font-size: 14px;
  line-height: 2;
}
</style>
