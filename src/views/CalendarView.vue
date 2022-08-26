<script>
import VueCal from "vue-cal";
import "vue-cal/dist/vuecal.css";
// import axios from "axios";

export default {
  components: { VueCal },
  data: function () {
    return {};
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
      ref="vuecal"
      :time-from="8 * 60"
      :time-to="23 * 60"
      style="height: 600px"
      :disable-views="['years', 'day']"
      active-view="month"
      :events="events"
      events-on-month-view="short"
      :cell-click-hold="false"
      :drag-to-create-event="false"
      editable-events
      @cell-dblclick="$refs.vuecal.createEvent($event, 120, { title: 'New Event', class: 'blue-event' })"
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
.vuecal__event {
  background-color: rgba(76, 172, 175, 0.35);
}
</style>
