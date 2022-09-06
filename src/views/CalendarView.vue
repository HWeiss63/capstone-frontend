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
    //     .post("/events")
    //     .then((response) => {
    //       this.newEvent = {};
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
      today-button
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
  padding-bottom: 3em;
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

/* Pink-theme. */
.vuecal__menu,
.vuecal__cell-events-count {
  background-color: #ff9490;
}
.vuecal__title-bar {
  background-color: #f4e2e2;
}
.vuecal__cell--today,
.vuecal__cell--current {
  background-color: #fbeeed;
}
.vuecal:not(.vuecal--day-view) .vuecal__cell--selected {
  background-color: #fbeeed;
}
.vuecal__cell--selected:before {
  border-color: #d99d99;
}
/* Cells and buttons get highlighted when an event is dragged over it. */
.vuecal__cell--highlighted:not(.vuecal__cell--has-splits),
.vuecal__cell-split--highlighted {
  background-color: #fbeeed;
}
.vuecal__arrow.vuecal__arrow--highlighted,
.vuecal__view-btn.vuecal__view-btn--highlighted {
  background-color: #fbeeed;
}
</style>
