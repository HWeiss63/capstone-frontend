<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "~What to Buy~",
      checklists: [],
    };
  },
  created: function () {
    this.checklistsIndex();
  },
  methods: {
    checklistsIndex: function () {
      axios.get("/checklists").then((response) => {
        console.log("checklists index", response);
        this.checklists = response.data;
      });
    },
  },
};
</script>

<template>
  <div id="wrapper">
    <div class="mx-auto" style="width: 700px">
      <h1>
        Custom Checkbox
        <i class="fa fa-check"></i>
      </h1>

      <div>
        <input type="checkbox" id="check1" />
        <label for="check1">
          <div><i class="fa fa-check"></i></div>
          I like Codepen!
        </label>
      </div>

      <div>
        <input type="checkbox" id="check2" />
        <label for="check2">
          <div><i class="fa fa-check"></i></div>
          I'm a designer
        </label>
      </div>

      <div>
        <input type="checkbox" id="check3" />
        <label for="check3">
          <div><i class="fa fa-check"></i></div>
          I shouldn't be looking at this right now
        </label>
      </div>

      <div>
        <input type="checkbox" id="check4" />
        <label for="check4">
          <div><i class="fa fa-check"></i></div>
          Pasta is my favourite food
        </label>
      </div>

      <div>
        <input type="checkbox" id="check5" />
        <label for="check5">
          <div><i class="fa fa-check"></i></div>
          This Pen sucks!
        </label>
      </div>

      <div>
        <input type="checkbox" id="check6" />
        <label for="check6">
          <div><i class="fa fa-check"></i></div>
          I already knew how to create custom checkboxes
        </label>
      </div>

      <div>
        <input type="checkbox" id="check7" />
        <label for="check7">
          <div><i class="fa fa-check"></i></div>
          I thought it was harder
        </label>
      </div>

      <div>
        <input type="checkbox" id="check8" />
        <label for="check8">
          <div><i class="fa fa-check"></i></div>
          I'm aware that no JavaScript is required
        </label>
      </div>
    </div>
    <!-- <div class="home">
    <h1>{{ message }}</h1>
    <div v-for="checklist in checklists" v-bind:key="checklist.id">
      <p>{{ checklist.item_name }}</p>
      <p>{{ checklist.category }}</p>
    </div> -->
  </div>
</template>

<style>
.mx-auto {
  margin-left: auto;
  margin-right: auto;
  padding: 100px;
}

/*HEADER*/
h2 {
  font-size: 20px;
  margin-bottom: 50px;
}
a {
  color: #fff;
}
a:hover {
  color: #78e7d1;
}

/*WRAPPER*/
#wrapper {
  height: 100vh;
  background: #1abc9c;
  color: #fff;
  font-family: "Gloria Hallelujah", cursive;
  font-size: 18px;
}
#wrapper > div {
  margin-bottom: 10px;
}

/*CHECKBOX*/
input {
  display: none;
}

label div {
  width: 23px;
  height: 23px;
  display: inline-block;
  border: 2px solid #fff;
  text-align: center;
  line-height: 20px;
  margin-right: 6px;
  border-radius: 3px;
  cursor: pointer;
}

label i {
  font-size: 16px;
  opacity: 0;
}
label:hover div {
  background: #16a085;
}
input:checked + label i {
  opacity: 1;
}
input:checked + label div {
  background: #16a085;
}
</style>
