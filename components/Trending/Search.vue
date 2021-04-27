<template>
  <div class="search">
    <p>{{ search }}</p>
  </div>
</template>

<script>
export default {
  props: {
    search: {
      type: String,
      default: '',
    },
  },
}
</script>
