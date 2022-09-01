<script>
import VueCal from "vue-cal";
import "vue-cal/dist/vuecal.css";
import axios from "axios";

export default {
  components: { VueCal },
  data: function () {
    return {
      events: [],
      testEvents: [
        {
          id: 1,
          title: "24w appt",
          location: "8901 Rockville Pike",
          memo: "Bring ID with Insurance card",
          user_id: 1,
          created_at: "2022-08-05T01:12:25.528Z",
          updated_at: "2022-08-31T02:29:42.928Z",
          start: "2022-09-01 12:00",
          end: "2022-09-01 13:00",
        },
        {
          id: 2,
          title: "Baby shower",
          location: "7400 Tuckerman Ln",
          memo: "",
          user_id: 1,
          created_at: "2022-08-05T01:15:16.501Z",
          updated_at: "2022-08-31T02:32:17.262Z",
          start: "2022-09-17 11:00",
          end: "2022-09-17 14:00",
        },
      ],
    };
  },
  created: function () {
    this.eventsIndex();
    // this.fetchEvents();
  },
  methods: {
    eventsIndex: function () {
      axios.get("/events").then((response) => {
        console.log("events index", response);
        this.events = response.data;
      });
    },
  },
};
</script>

<template>
  <div class="calendar">
    <vue-cal
      ref="vuecal"
      :time-from="8 * 60"
      :time-to="23 * 60"
      style="height: 600px"
      :disable-views="['years', 'day']"
      active-view="month"
      :events="testEvents"
      events-on-month-view="short"
      :cell-click-hold="false"
      :drag-to-create-event="false"
      editable-events
      @cell-dblclick="$refs.vuecal.createEvent($event, 120, { title: 'New Event', class: 'blue-event' })"
    />
    <!-- <div v-for="event in events" :key="event.id">{{ event }}</div> -->
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
.vuecal__event {
  background-color: rgba(255, 213, 0, 0.35);
}
</style>
