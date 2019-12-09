<template>
  <div id="app" class="d-flex flex-column h-100">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <!-- <button class="btn btn-primary">eeee</button> -->

    <Header />

    <main role="main" class="flex-shrink-0">

      <router-view />

    </main>

    <Footer />
  </div>
</template>

<script>

import Header from './components/layouts/Header.vue'
import Footer from './components/layouts/Footer.vue'

export default {
  name: 'app',
  components: {
   Header,
   Footer
  }
}
</script>

