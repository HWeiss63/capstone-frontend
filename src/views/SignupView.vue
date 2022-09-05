<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newUserParams: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/users", this.newUserParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/login");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>

<template>
  <div class="signup-form">
    <form
      v-on:submit.prevent="submit()"
      action="/examples/actions/confirmation.php"
      method="post"
      class="form-horizontal"
    >
      <div class="row">
        <div class="col-8 offset-4">
          <h2>Sign Up</h2>
        </div>
      </div>
      <div class="form-group row">
        <label class="col-form-label col-4">Username</label>
        <div class="col-8">
          <input type="text" class="form-control" v-model="newUserParams.name" name="username" required="required" />
        </div>
      </div>
      <div class="form-group row">
        <label class="col-form-label col-4">Email Address</label>
        <div class="col-8">
          <input type="email" class="form-control" v-model="newUserParams.email" name="email" required="required" />
        </div>
      </div>
      <div class="form-group row">
        <label class="col-form-label col-4">Password</label>
        <div class="col-8">
          <input
            type="password"
            class="form-control"
            v-model="newUserParams.password"
            name="password"
            required="required"
          />
        </div>
      </div>
      <div class="form-group row">
        <label class="col-form-label col-4">Confirm Password</label>
        <div class="col-8">
          <input
            type="password"
            class="form-control"
            v-model="newUserParams.password_confirmation"
            name="confirm_password"
            required="required"
          />
        </div>
      </div>
      <div class="form-group row">
        <div class="col-8 offset-4">
          <button type="submit" class="btn btn-primary btn-lg">Sign Up</button>
        </div>
      </div>
    </form>
    <div class="text-center">
      Already have an account?
      <a href="/login">Login here</a>
    </div>
  </div>
  <!-- <div class="signup">
    <form v-on:submit.prevent="submit()">
      <br />
      <h1>Sign up</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Name:</label>
        <input type="text" v-model="newUserParams.name" />
      </div>
      <br />
      <div>
        <label>Email:</label>
        <input type="email" v-model="newUserParams.email" />
      </div>
      <br />
      <div>
        <label>Password:</label>
        <input type="password" v-model="newUserParams.password" />
      </div>
      <br />
      <div>
        <label>Password confirmation:</label>
        <input type="password" v-model="newUserParams.password_confirmation" />
      </div>
      <br />
      <input type="submit" class="btn btn-warning" value="Submit" />
    </form>
  </div> -->
</template>

<style scoped>
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
.signup-form {
  width: 500px;
  margin: 0 auto;
  padding: 30px 0;
  padding-top: 5em;
}
.signup-form h2 {
  color: #333;
  margin: 0 0 30px 0;
  display: inline-block;
  padding: 0 30px 10px 0;
  border-bottom: 3px solid #ff6763;
}
.signup-form form {
  color: #999;
  border-radius: 3px;
  margin-bottom: 15px;
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
.signup-form input[type="checkbox"] {
  position: relative;
  top: 1px;
}
.signup-form .btn {
  font-size: 16px;
  font-weight: bold;
  background: #ff6763;
  border: none;
  margin-top: 20px;
  min-width: 140px;
}
.signup-form .btn:hover,
.signup-form .btn:focus {
  background: #c24e4a;
  outline: none !important;
}
.signup-form a {
  color: #ff6763;
  text-decoration: underline;
}
.signup-form a:hover {
  text-decoration: none;
}
.signup-form form a {
  color: #ff6763;
  text-decoration: none;
}
.signup-form form a:hover {
  text-decoration: underline;
}
</style>
