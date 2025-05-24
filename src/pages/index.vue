<template>
  <div class="main">
    <Header />
    <Menu />
    <Footer />
  </div>
</template>

<script>
import '~/assets/css/reset.css'

import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';

export default {
  name: 'App'
}
</script>

<style>
.main {
  min-width: 960px;
}
</style>