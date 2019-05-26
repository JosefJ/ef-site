<template>
  <div id="app">
    <Nav/>
    <div class="container">
      <router-view/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Nav from './components/Nav.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'app',
  components: {
    Nav,
    Footer,
  },
};
</script>

<style>
@import "styles/normalize.css";
@import "styles/skeleton.css";

@font-face {
  font-family: 'TTCommons';
  src: url('./assets/font/TTCommons-Light.eot'); /* IE9 Compat Modes */
  src: url('./assets/font/TTCommons-Light.woff') format('woff'), /* Pretty Modern Browsers */
       url('./assets/font/TTCommons-Light.ttf')  format('truetype'); /* Safari, Android, iOS */
}

#app {
  font-family: 'TTCommons';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}
</style>
