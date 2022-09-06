<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Eat Healthy: Quick Tips",
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
  <!-- <div class="home">
    <h1>{{ message }}</h1>
    <h3>{{ ehs.title }}</h3>
    <div v-html="ehs.content"></div>
  </div> -->
  <div class="eathealthy">
    <form action="/examples/actions/confirmation.php" method="post" class="form-horizontal">
      <div class="row">
        <div class="col-8 offset-4">
          <h2>{{ message }}</h2>
        </div>
      </div>
      <div class="form-group row">
        <div v-html="ehs.content"></div>
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
.eathealthy {
  width: 1000px;
  margin: 0 auto;
  padding: 30px 0;
}
.eathealthy h2 {
  color: #333;
  margin: 0 0 30px 0;
  display: inline-block;
  padding: 0 30px 10px 0;
  border-bottom: 3px solid #ff6763;
}
.eathealthy form {
  color: #333;
  border-radius: 3px;
  margin-bottom: 15px;
  background: #fff;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  padding: 30px;
}
.eathealthy .form-group row {
  margin-bottom: 20px;
}
.eathealthy label {
  font-weight: normal;
  font-size: 14px;
  line-height: 2;
}
</style>
