<template>
  <div class="twitter-container">
    <div class="flex flex-col lg:flex-row-reverse tw-container">
      <div class="happening sm:mx-auto lg:w-2/5">
        <div class="w-full happening-row">
          <div class="logo">
            <svg
              viewBox="0 0 24 24"
              height="44px"
              width="44px"
              fill="currentColor"
            >
              <g>
                <path
                  d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"
                ></path>
              </g>
            </svg>
          </div>

          <div class="text-gray-300">
            <h1 class="text-5xl font-extrabold break-words tracking-tight">
              Happening now
            </h1>
            <p class="mt-12 mb-4 text-3xl font-bold break-words tracking-tight">
              Join Twitter today.
            </p>
            <div
              class="buttons w-full flex flex-col sm:flex-none sm:grid sm:grid-cols-2 lg:grid-cols-1 sm:gap-4"
            >
              <nuxt-link
                to="/auth/signup"
                class="text-center bg-light-blue hover:bg-dark-blue font-bold rounded-full py-3 mb-4 sm:mb-0 focus:outline-none"
              >
                Sign up
              </nuxt-link>

              <nuxt-link
                to="/auth/login"
                class="text-center text-light-blue border border-light-blue hover:text-dark-blue hover:bg-faded-blue font-bold w-full rounded-full py-3 focus:outline-none"
              >
                Log in
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>

      <div class="lg:w-full hero px-3 text-white flex place-content-center">
        <div class="text-white hero-vg place-self-center w-full p-8">
          <svg viewBox="0 0 24 24" fill="currentColor" class="hero-svg">
            <g>
              <path
                d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"
              ></path>
            </g>
          </svg>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/Footer/Footer.vue'
export default {
  components: { Footer },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Mukta:wght@800&family=Open+Sans:wght@800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@700&family=Mukta:wght@200&family=Open+Sans:wght@300&display=swap');

h1,
p {
  font-family: 'Mukta', sans-serif;
}

h1 {
  line-height: 65px;
}

p {
  line-height: 50px;
}

.twitter-container {
  @apply bg-black;
}

.hero {
  background: url('~/assets/img/twbg.png');
  min-height: 45vh;
  background-size: cover;
  background-position: center;
  background-repeat: repeat;
}

.hero-svg {
  height: fit-content;
  margin: 0 auto;
}

.logo {
  @apply text-white mb-10;
}

.happening {
  min-width: 70vw;
  max-width: 600px;
  @apply px-3 py-10;
}

.happening-row {
  margin: auto;
  width: 100%;
  @apply px-6;
}

@media only screen and (min-width: 450px) and (max-width: 648px) {
  .happening {
    @apply mx-auto;
  }

  h1 {
    font-size: 82px !important;
    @apply tracking-wide leading-tight;
  }

  .happening-row {
    @apply px-8 mx-auto;
  }

  .buttons {
    @apply flex-none grid grid-cols-2 gap-4;
  }

  .buttons a {
    @apply w-full mb-0;
  }
}

@screen sm {
  h1 {
    font-size: 100px !important;
    @apply tracking-wide leading-tight;
  }
}

@screen lg {
  .tw-container {
    height: 91vh;
  }

  .happening {
    min-width: 45%;
    width: 1450px;
    display: flex;
  }

  .buttons {
    width: 60%;
  }

  h1 {
    font-size: 72px !important;
  }

  .hero-svg {
    height: 45vh !important;
  }
}
</style>
