<template>
  <div class="date-picker flex flex-row justify-between sm:w-8/12">
    <div class="custom-select w-full sm:w-auto">
      <select
        class="w-full bg-transparent text-light-gray border border-light-gray rounded"
        @change="editValue('day', $event)"
      >
        <option v-for="i in daysInMonths" :key="i" class="bg-black" :value="i">
          {{ i }}
        </option>
      </select>
    </div>

    <div class="custom-select w-full sm:w-auto">
      <select
        class="w-full bg-transparent text-light-gray border border-light-gray rounded"
        @change="editValue('year', $event)"
      >
        <option
          v-for="i in numberOfYears"
          :key="i"
          class="bg-black"
          :value="startingYear + (i - 1)"
        >
          {{ startingYear + (i - 1) }}
        </option>
      </select>
    </div>

    <div class="custom-select w-full sm:w-auto">
      <select
        class="w-full bg-transparent text-light-gray border border-light-gray rounded"
        @change="editValue('month', $event)"
      >
        <option
          v-for="(month, index) in months"
          :key="index"
          class="bg-black"
          :value="month"
        >
          {{ month }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import { eventBus } from '~/utils/bus'

export default {
  props: {},
  data() {
    return {
      months: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
      startingYear: 1950,
      numberOfYears: 72,
      dateValue: moment(),
      daysInMonths: moment().daysInMonth(),
    }
  },
  methods: {
    editValue(unit, event) {
      if (unit === 'month') {
        return eventBus.$emit('month', { month: event.target.value })
      }

      if (unit === 'year') {
        return eventBus.$emit('year', { year: event.target.value })
      }

      if (unit === 'day') {
        eventBus.$emit('day', { day: event.target.value })
      }
    },
  },
}
</script>

<style>
select {
  padding: 0.35rem 0;
}

select:focus {
  transition: 0.3s;
  @apply text-light-blue border-light-blue;
  border: 2px solid;
}
</style>
