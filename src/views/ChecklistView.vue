<script>
import axios from "axios";

export default {
  data: function () {
    return {
      checklists: [],
      formattedChecklist: {},
      responses: [],
    };
  },
  created: function () {
    this.checklistsIndex();
  },
  methods: {
    checklistsIndex: function () {
      axios.get("/checklists").then((response) => {
        // console.log("checklists index", response);
        this.formattedChecklist = {};
        for (let i = 0; i < response.data.length; i++) {
          // console.log(response.data[i]);
          if (this.formattedChecklist[response.data[i]["checklist"]["category"]]) {
            this.formattedChecklist[response.data[i]["checklist"]["category"]].push(response.data[i]);
          } else {
            this.formattedChecklist[response.data[i]["checklist"]["category"]] = [];
            this.formattedChecklist[response.data[i]["checklist"]["category"]].push(response.data[i]);
          }
        }
        // console.log(this.formattedChecklist);
      });
    },
    test: function (item) {
      console.log("test", item);
    },
    submit: function () {
      axios.post("/responses", { data: this.formattedChecklist }).then((response) => {
        console.log(response.data);
        this.checklistsIndex();
      });
      console.log(this.formattedChecklist);
    },
  },
};
</script>

<template>
  <div id="wrapper">
    <div class="mx-auto" style="width: 800px">
      <h1>
        Did you buy this yet?
        <i class="fa fa-check"></i>
      </h1>
      <br />
      <br />
      <div class="row row-cols-1 row-cols-md-2 g-4">
        <div v-for="(value, name, index) in formattedChecklist" v-bind:key="index">
          {{ name }}
          <hr />
          <div v-for="itemname in value" :key="itemname.checklist.id">
            <div>
              <input type="checkbox" v-model="itemname.answer" v-bind:id="itemname.checklist.id" />
              <label v-bind:for="itemname.checklist.id">
                <div><i class="fa fa-check"></i></div>
                {{ itemname.checklist.item_name }}
              </label>
            </div>
          </div>
        </div>
      </div>
      <br />
      <a v-on:click="submit" type="submit" class="btn">Save</a>
    </div>
  </div>
</template>

<style scoped>
.btn {
  color: #0e1111;
  background-color: #ff6763;
}
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
  color: #0e1111;
}
a:hover {
  color: #ff6763;
}

/*WRAPPER*/
#wrapper {
  height: 100vh;
  background: #fff;
  color: #0e1111;
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
  border: 2px solid #0e1111;
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
  background: #ff6763;
}
input:checked + label i {
  opacity: 1;
}

input:checked + label div {
  background: #ff6763;
}
</style>
