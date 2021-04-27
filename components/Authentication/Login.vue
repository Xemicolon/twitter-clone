<template>
  <div class="text-white place-self-center login-container p-8">
    <div class="text-gray-300 tw-logo">
      <a href="/"
        ><svg viewBox="0 0 24 24" fill="currentColor" height="44px">
          <g>
            <path
              d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"
            ></path>
          </g></svg
      ></a>
    </div>

    <p class="text-3xl font-extrabold pt-8 text-gray-300 leading-10">
      Log in to Twitter
    </p>

    <div class="form mt-4">
      <form class="w-full" @submit.prevent="login">
        <div class="email-row flex flex-col-reverse mb-5">
          <p
            class="text-light-blue text-sm cursor-pointer pt-2 font-semibold"
            @click="show = !show"
          >
            {{ show ? 'Use username' : 'Use email' }}
          </p>
          <input
            v-if="show"
            id="email"
            v-model="email"
            type="email"
            class="w-full border border-faded-gray bg-transparent email p-3 focus:outline-none"
          />
          <input
            v-if="!show"
            id="username"
            v-model="username"
            type="text"
            class="w-full border border-faded-gray bg-transparent email p-3 focus:outline-none"
          />
          <label
            for="username"
            class="username-label text-light-gray text-md pb-1"
            >{{ show ? 'Email' : 'Username' }}
          </label>
        </div>

        <div class="password-row flex flex-col-reverse mb-6">
          <p v-if="password.length >= 1" class="pt-2 text-sm">
            Not sure what you entered?
            <span
              class="text-light-blue font-semibold cursor-pointer"
              @click="showPassword"
              >{{ pwdTxt }}</span
            >
          </p>
          <input
            id="password"
            v-model="password"
            type="password"
            class="w-full border border-faded-gray bg-transparent password p-3 focus:outline-none"
          />
          <label
            for="password"
            class="password-label text-light-gray text-md pb-1"
            >Password</label
          >
        </div>

        <button
          type="submit"
          :disabled="emailorusername === '' || password === ''"
          :class="
            emailorusername !== '' && password !== ''
              ? 'opacity-100 cursor-pointer hover:bg-dark-blue'
              : 'opacity-50 cursor-default'
          "
          class="w-full rounded-full bg-light-blue font-bold py-2 focus:outline-none"
        >
          Login
        </button>
      </form>
      <div
        class="form-footer flex flex-row justify-between w-10/12 mx-auto place-items-center text-center text-sm mt-8"
      >
        <nuxt-link to="/forgot-password" class="text-deep-blue hover:underline"
          >Forgot password?</nuxt-link
        >
        <span class="text-light-gray">•</span>
        <nuxt-link to="/auth/signup" class="text-deep-blue hover:underline"
          >Sign up for Twitter</nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      email: '',
      username: '',
      password: '',
      logininfo: 'Use username instead',
      pwdTxt: 'Show password',
    }
  },
  methods: {
    login() {
      this.$router.push('/home')
    },
    showPassword() {
      const pwd = document.getElementById('password')
      if (pwd.type === 'password') {
        pwd.type = 'text'
        this.pwdTxt = 'Hide password'
      } else {
        pwd.type = 'password'
        this.pwdTxt = 'Show password'
      }
    },
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Mukta:wght@800&family=Open+Sans:wght@800&display=swap');

h1 {
  font-family: 'Mukta', sans-serif;
}

.login-container {
  max-width: 400px;
  margin: 0 auto;
}

input[type='text']:focus + .email-label {
  transition: 0.3s ease-in-out;
  @apply text-light-blue text-sm;
}

input[type='text']:focus + .username-label {
  transition: 0.3s ease-in-out;
  @apply text-light-blue text-sm;
}

input[type='password']:focus + .password-label {
  transition: 0.3s ease-in-out;
  @apply text-light-blue text-sm;
}

input:focus:not([readonly]) {
  @apply border-light-blue;
  border-color: #1da1f2;
  transition: border-color 0.5s;
}

.email-label,
.password-label,
.username-label {
  transition: all 0.3s;
}
</style>
