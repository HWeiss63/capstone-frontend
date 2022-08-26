<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">Forty Weeks</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/calendar">Calendar</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/checklist">Checklist</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/tip">Tips</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" v-if="!isLoggedIn" aria-current="page" href="/signup">Signup</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" v-if="!isLoggedIn" aria-current="page" href="/login">Login</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" v-if="isLoggedIn" aria-current="page" href="/logout">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <router-view />
</template>

<script>
export default {
  data: function () {
    return {
      isLoggedIn: !!localStorage.jwt,
    };
  },
  watch: {
    $route: function () {
      this.isLoggedIn = !!localStorage.jwt;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.navbar {
  background-color: #ff8d5c;
  color: white;
}
</style>
