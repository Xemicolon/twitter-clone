<template>
  <div class="date-picker grid grid-cols-3 gap-3">
    <div class="custom-select w-full">
      <select
        class="w-full bg-transparent text-light-gray border border-light-gray rounded py-3 px-1"
      >
        <option
          v-for="(month, index) in months"
          :key="month"
          class="bg-black"
          :value="index"
        >
          {{ month }}
        </option>
      </select>
    </div>
    <div class="custom-select w-full">
      <select
        class="w-full bg-transparent text-light-gray border border-light-gray rounded py-3"
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

    <div class="custom-select w-full">
      <select
        class="w-full bg-transparent text-light-gray border border-light-gray rounded py-3"
      >
        <option v-for="i in daysInMonths" :key="i" class="bg-black" :value="i">
          {{ i }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

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
  methods: {},
}
</script>

<style>
select:focus {
  transition: 0.3s;
  @apply text-light-blue border-light-blue;
  border: 2px solid;
}
</style>
