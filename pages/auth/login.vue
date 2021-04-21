<template>
  <div class="bg-black text-gray-300 h-screen">
    <Login />
  </div>
</template>

<script>
import Login from '~/components/Authentication/Login'
export default {
  components: {
    Login,
  },
  transition: 'home',
  mode: 'out-in',
}
</script>

<style scoped>
.home-enter-active,
.home-leave-active {
  transition: opacity 0.5s;
}
.home-enter,
.home-leave-active {
  opacity: 0;
}
</style>
