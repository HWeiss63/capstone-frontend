<script>
export default {
  data: function () {
    return {
      message: "Please login first -> email: baby@test.com // password: password",
    };
  },
  created: function () {},
  methods: {},
};
</script>

<template>
  <div class="home">
    <div class="text-center">
      <p>{{ message }}</p>
      <img src="https://res.cloudinary.com/hweiss/image/upload/v1662315354/main_image_w417by.jpg" class="img-fluid" />
    </div>
  </div>
</template>

<style>
.home {
  background: #fcfcfb;
  padding: 0.5em;
}
</style>
