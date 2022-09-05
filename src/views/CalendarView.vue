<script>
import VueCal from "vue-cal";
import "vue-cal/dist/vuecal.css";
import axios from "axios";
var moment = require("moment");

export default {
  components: { VueCal },
  data: function () {
    return {
      events: [],
      formattedEvents: [],
      newEvent: {},
    };
  },
  created: function () {
    this.eventsIndex();
  },
  methods: {
    eventsIndex: function () {
      axios.get("/events").then((response) => {
        console.log("events index", response);
        this.events = response.data;
        for (let i = 0; i < response.data.length; i++) {
          // console.log(response.data[i]);
          let event = {
            title: response.data[i].title,
            start: moment.utc(response.data[i].start).format("YYYY-MM-DD H:mm"),
            end: moment.utc(response.data[i].end).format("YYYY-MM-DD H:mm"),
          };
          console.log(event);
          this.formattedEvents.push(event);
        }
      });
    },
    // eventCreate: function () {
    //   axios
    //     .post("/events", this.newEvent)
    //     .then((response) => {
    //       console.log("event create", response);
    //       this.$router.push("/events");
    //     })
    //     .catch((error) => {
    //       console.log("event create error", error.response);
    //       this.errors = error.response.data.errors;
    //     });
    // },
  },
};
</script>

<template>
  <div class="calendar">
    <vue-cal
      ref="vuecal"
      :time-from="1 * 60"
      :time-to="23 * 60"
      style="height: 600px"
      :disable-views="['years', 'day']"
      active-view="month"
      :events="formattedEvents"
      events-on-month-view="short"
      :cell-click-hold="false"
      :drag-to-create-event="false"
      editable-events
      @cell-dblclick="$refs.vuecal.createEvent($event, 120, { title: 'New Event', class: 'blue-event' })"
    />
  </div>
</template>

<style>
.calendar {
  padding-top: 3em;
  padding-left: 6em;
  padding-right: 6em;
}
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
.vuecal__event {
  background-color: #fad3d2;
}
</style>
