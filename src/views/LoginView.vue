<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newSessionParams: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/sessions", this.newSessionParams)
        .then((response) => {
          axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error.response);
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    },
  },
};
</script>

<template>
  <div class="signin-form">
    <form
      v-on:submit.prevent="submit()"
      action="/examples/actions/confirmation.php"
      method="post"
      class="form-horizontal"
    >
      <div class="row">
        <div class="col-8 offset-4">
          <h2>Log In</h2>
        </div>
      </div>
      <div class="form-group row">
        <label class="col-form-label col-4">Email Address</label>
        <div class="col-8">
          <input type="email" v-model="newSessionParams.email" class="form-control" name="email" required="required" />
        </div>
      </div>
      <div class="form-group row">
        <label class="col-form-label col-4">Password</label>
        <div class="col-8">
          <input
            type="password"
            v-model="newSessionParams.password"
            class="form-control"
            name="password"
            required="required"
          />
        </div>
      </div>
      <div class="form-group row">
        <div class="col-8 offset-4">
          <button type="submit" class="btn btn-primary btn-lg">Sign In</button>
        </div>
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
  border-color: #ff6763;
}
.form-control,
.btn {
  border-radius: 3px;
}
.signin-form {
  width: 500px;
  margin: 0 auto;
  padding: 30px 0;
  padding-top: 5em;
}
.signin-form h2 {
  color: #333;
  margin: 0 0 30px 0;
  display: inline-block;
  padding: 0 30px 10px 0;
  border-bottom: 3px solid #ff6763;
}
.signin-form form {
  color: #999;
  border-radius: 3px;
  margin-bottom: 15px;
  background: #fff;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  padding: 30px;
}
.signin-form .form-group row {
  margin-bottom: 20px;
}
.signin-form label {
  font-weight: normal;
  font-size: 14px;
  line-height: 2;
}
.signin-form input[type="checkbox"] {
  position: relative;
  top: 1px;
}
.signin-form .btn {
  font-size: 16px;
  font-weight: bold;
  background: #ff6763;
  border: none;
  margin-top: 20px;
  min-width: 140px;
}
.signin-form .btn:hover,
.signin-form .btn:focus {
  background: #c24e4a;
  outline: none !important;
}
.signin-form a {
  color: #ff6763;
  text-decoration: underline;
}
.signin-form a:hover {
  text-decoration: none;
}
.signin-form form a {
  color: #ff6763;
  text-decoration: none;
}
.signin-form form a:hover {
  text-decoration: underline;
}
</style>
