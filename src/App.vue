<template>
  <div id="app">
    <div class="headermain-block">
      <Header />
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>
<script>

import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  name: 'App',
  components: {Footer, Header}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
body {
  margin: 0;
}
#app {
  font-family: 'Source Sans Pro', sans-serif;
  color: black;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.headermain-block {
  margin: 0 8%;
}
@media only screen and (max-width: 1000px) {
  .headermain-block {
    margin: 0 4%;
  }
}
</style>
