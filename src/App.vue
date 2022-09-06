<template>
  <nav class="navbar navbar-expand-lg" style="background-color: #ff6763">
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
          <!-- <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/tip">Tips</a>
          </li> -->
          <li class="nav-item dropdown">
            <a
              class="nav-link active dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Tips
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="/gestationaldiabetes">Gestational Diabetes</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="/eathealthy">Eat Healthy</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="/preeclampsia">Preeclampsia</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="/stayactive">Stay Active</a></li>
            </ul>
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
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

nav {
  padding: 30px;
}

.nav-link {
  font-weight: bold;
  color: #fff !important;
}

.navbar-brand {
  font-weight: bold;
  color: white !important;
}
</style>
