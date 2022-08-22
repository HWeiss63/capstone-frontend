<template>
  <nav class="navbar navbar-expand-lg bg-orange">
    <div class="container-fluid">
      <a class="navbar-brand mb-0 h1">Forty Weeks</a>
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
            <a class="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/calendar">Calendar</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/checklist">Registry Checklist</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/tip">Tips</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" v-if="!isLoggedIn" href="/signup">Signup</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" v-if="!isLoggedIn" href="/login">Login</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" v-if="isLoggedIn" href="/logout">Logout</a>
          </li>
          <!-- <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li> -->
          <!-- <li class="nav-item">
            <a class="nav-link disabled">Disabled</a>
          </li> -->
        </ul>
        <!-- <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form> -->
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
</style>
