<template>
  <div class="bg-black text-gray-300 signup-page">
    <Signup />
  </div>
</template>

<script>
import Signup from '~/components/Authentication/Signup.vue'
export default {
  components: {
    Signup,
  },
  transition: 'home',
  mode: 'out-in',
}
</script>

<style>
.home-enter-active,
.home-leave-active {
  transition: opacity 0.5s;
}
.home-enter,
.home-leave-active {
  opacity: 0;
}
</style>
