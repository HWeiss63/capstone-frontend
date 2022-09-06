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
  <div class="diabetes">
    <form action="/examples/actions/confirmation.php" method="post" class="form-horizontal">
      <div class="row">
        <div class="col-8 offset-4">
          <h2>{{ message }}</h2>
        </div>
      </div>
      <div class="form-group row">
        <!-- <p class="col-form-label">{{ gds.title }}</p> -->
        <div v-html="gds.content"></div>
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
.diabetes {
  width: 1000px;
  margin: 0 auto;
  padding: 30px 0;
}
.diabetes h2 {
  color: #333;
  margin: 0 0 30px 0;
  display: inline-block;
  padding: 0 30px 10px 0;
  border-bottom: 3px solid #ff6763;
}
.diabetes form {
  color: #333;
  border-radius: 3px;
  margin-bottom: 15px;
  background: #fff;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  padding: 30px;
}
.diabetes .form-group row {
  margin-bottom: 20px;
}
.diabetes label {
  font-weight: normal;
  font-size: 14px;
  line-height: 2;
}
</style>
