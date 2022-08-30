<script>
import axios from "axios";

export default {
  data: function () {
    return {
      checklists: [],
      formattedChecklist: {},
    };
  },
  created: function () {
    this.checklistsIndex();
  },
  methods: {
    checklistsIndex: function () {
      axios.get("/checklists").then((response) => {
        console.log("checklists index", response);
        for (let i = 0; i < response.data.length; i++) {
          if (this.formattedChecklist[response.data[i]["category"]]) {
            this.formattedChecklist[response.data[i]["category"]].push(response.data[i]);
          } else {
            this.formattedChecklist[response.data[i]["category"]] = [];
          }
        }
        this.checklists = response.data;
      });
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
      <h3 class="category">Nursery</h3>
      <br />
      <div class="row row-cols-1 row-cols-md-2 g-4">
        <div v-for="(value, name, index) in formattedChecklist" v-bind:key="index">{{ name }}</div>
        <div class="col" v-for="checklist in checklists" v-bind:key="checklist.id">
          <div>
            <input type="checkbox" v-bind:id="checklist.id" />
            <label v-bind:for="checklist.id">
              <div><i class="fa fa-check"></i></div>
              {{ checklist.item_name }}
            </label>
          </div>
        </div>
      </div>
      <br />
    </div>
  </div>
</template>

<style scoped>
.category {
  color: #ffbb33;
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
  color: #000000;
}
a:hover {
  color: #ff8800;
}

/*WRAPPER*/
#wrapper {
  height: 100vh;
  background: #fff;
  color: #000000;
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
  border: 2px solid #000000;
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
  background: #ffbb33;
}
input:checked + label i {
  opacity: 1;
}

input:checked + label div {
  background: #ffbb33;
}
</style>
