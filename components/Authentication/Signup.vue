<template>
  <div class="place-self-center login-container p-8">
    <div class="text-gray-300 tw-log flex place-content-center">
      <a href="/">
        <svg viewBox="0 0 24 24" fill="currentColor" height="44px">
          <g>
            <path
              d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"
            ></path>
          </g>
        </svg>
      </a>
    </div>

    <p class="text-3xl font-extrabold pt-8 text-gray-400 leading-10">
      Create your account
    </p>

    <div class="form mt-4">
      <form class="w-full" @submit.prevent="signup">
        <div class="name-row flex flex-col-reverse justify-evenly mb-5">
          <input
            id="name"
            v-model="name"
            required
            type="text"
            class="w-full border border-faded-gray bg-transparent email p-3 focus:outline-none"
          />
          <label for="name" class="name-label text-light-gray text-md pb-1"
            >Name</label
          >
        </div>

        <div class="email-row flex flex-col-reverse justify-evenly mb-5">
          <input
            id="email"
            v-model="email"
            type="email"
            required
            class="w-full border border-faded-gray bg-transparent email p-3 focus:outline-none"
          />
          <label for="email" class="email-label text-light-gray text-md pb-1"
            >Email</label
          >
        </div>

        <div class="dob-row flex flex-col-reverse justify-evenly mb-5">
          <datepicker />
          <label for="dob" class="dob-label text-light-gray text-md pb-1"
            >Date of birth</label
          >
        </div>

        <div class="password-row flex flex-col-reverse justify-evenly mb-6">
          <p v-if="password.length >= 1" class="pt-2 text-sm">
            Not sure what you entered?
            <span
              class="text-light-blue cursor-pointer"
              @click="showPassword"
              >{{ pwdTxt }}</span
            >
          </p>
          <input
            id="password"
            v-model="password"
            type="password"
            required
            class="w-full border border-faded-gray bg-transparent password p-3 focus:outline-none"
          />
          <label
            for="password"
            class="password-label text-light-gray text-md pb-1"
            >Password</label
          >
        </div>

        <p class="mt-8 mb-3 text-sm leading-tight">
          By signing up, you agree to the terms and conditons. Others will be
          able to find you by email or username when provided.
        </p>

        <button
          type="submit"
          :disabled="email === '' || password === ''"
          :class="
            email !== '' && password !== ''
              ? 'opacity-100 cursor-pointer hover:bg-dark-blue'
              : 'opacity-50 cursor-default'
          "
          class="w-full rounded-full bg-light-blue font-bold py-2 focus:outline-none"
        >
          Sign up
        </button>
      </form>
      <div class="form-footer text-center text-sm mt-8">
        <nuxt-link to="/auth/login" class="text-deep-blue hover:underline"
          >Log in to Twitter</nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import datepicker from '~/components/DatePicker/datepicker'
import { eventBus } from '~/utils/bus'

export default {
  components: {
    datepicker,
  },

  data() {
    return {
      name: '',
      email: '',
      password: '',
      dob: {
        month: '',
        year: 0,
        day: 0,
      },
      pwdTxt: 'Show password',
    }
  },
  computed: {
    updatemonth() {
      return eventBus.$on('month', (data) => {
        this.dob.month = data.month
      })
    },
    updateyear() {
      return eventBus.$on('year', (data) => {
        this.dob.year = data.year
      })
    },
    updateday() {
      return eventBus.$on('day', (data) => {
        this.dob.day = data.day
      })
    },
  },
  mounted() {
    this.updateMonth()
    this.updateYear()
    this.updateDay()
  },
  methods: {
    signup() {
      const newuser = {
        name: this.name,
        email: this.email,
        password: this.password,
        dob: this.dob,
      }

      alert(JSON.stringify(newuser))
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
    updateMonth() {
      return this.updatemonth
    },
    updateYear() {
      return this.updateyear
    },
    updateDay() {
      return this.updateday
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

input[type='text']:focus + .name-label {
  transition: 0.3s ease-in-out;
  @apply text-light-blue text-sm;
}

input[type='email']:focus + .email-label {
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
.password-label {
  transition: all 0.3s;
}
</style>
