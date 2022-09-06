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
  <!-- <div class="main">
    <div class="overlay">
      <h1>{{ message }}</h1>
      <h3>{{ gds.title }}</h3>
      <div v-html="gds.content"></div>
    </div>
  </div> -->
  <div class="signup-form">
    <form action="/examples/actions/confirmation.php" method="post" class="form-horizontal">
      <div class="row">
        <div class="col-8 offset-4">
          <h2>{{ message }}</h2>
        </div>
      </div>
      <div class="form-group row">
        <h3 class="col-form-label col-4">{{ gds.title }}</h3>
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
.form-control {
  border-color: #eee;
  min-height: 41px;
  box-shadow: none !important;
}
.form-control:focus {
  border-color: #5cd3b4;
}
/* .form-control,
.btn {
  border-radius: 3px;
} */
.signup-form {
  width: 1000px;
  margin: 0 auto;
  padding: 30px 0;
}
.signup-form h2 {
  color: #333;
  margin: 0 0 30px 0;
  display: inline-block;
  padding: 0 30px 10px 0;
  border-bottom: 3px solid #ff6763;
}
.signup-form form {
  color: #333;
  /* border-radius: 3px; */
  /* margin-bottom: 15px; */
  background: #fff;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  padding: 30px;
}
.signup-form .form-group row {
  margin-bottom: 20px;
}
.signup-form label {
  font-weight: normal;
  font-size: 14px;
  line-height: 2;
}
/* .signup-form .btn:hover,
.signup-form .btn:focus {
  background: #41cba9;
  outline: none !important;
}
.signup-form a {
  color: #5cd3b4;
  text-decoration: underline;
}
.signup-form a:hover {
  text-decoration: none;
}
.signup-form form a {
  color: #5cd3b4;
  text-decoration: none;
}
.signup-form form a:hover {
  text-decoration: underline;
} */
</style>
