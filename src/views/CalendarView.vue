<script>
import VueCal from "vue-cal";
import "vue-cal/dist/vuecal.css";
// import axios from "axios";

export default {
  components: { VueCal },
  data: function () {
    return {
      // events: [],
    };
  },
  created: function () {
    // this.eventsIndex();
  },
  methods: {
    // eventsIndex: function () {
    //   axios.get("/events").then((response) => {
    //     console.log("events index", response);
    //     this.events = response.data;
    //   });
    // },
  },
};
</script>

<template>
  <div class="calendar">
    <vue-cal
      :time-from="8 * 60"
      :time-to="19 * 60"
      :time-step="30"
      style="height: 600px"
      :disable-views="['years']"
      active-view="month"
      :events="events"
    />
  </div>
</template>

<style>
.vuecal--month-view .vuecal__cell {
  height: 80px;
}

.vuecal--month-view .vuecal__cell-content {
  justify-content: flex-start;
  height: 100%;
  align-items: flex-end;
}

.vuecal--month-view .vuecal__cell-date {
  padding: 4px;
}
.vuecal--month-view .vuecal__no-event {
  display: none;
}
</style>
