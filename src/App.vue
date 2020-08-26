<template>
  <div id="app">
    <div id="nav">
      <Header />
    </div>
    <transition name="fade" mode="out-in">
        <router-view/>
    </transition>

    <div id="footer">
      <Footer />
    </div>
  </div>
</template>

<script>
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

UIkit.use(Icons);

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    'Header': Header,
    'Footer': Footer,
  },
  data: () => {
    return {
      
    };
  }
}
</script>

<style lang="scss">
@import "uikit/src/scss/variables-theme.scss";
@import "uikit/src/scss/mixins-theme.scss";
@import "uikit/src/scss/uikit.scss";

@import url('https://fonts.googleapis.com/css2?family=Lexend+Deca&display=swap');

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

#app {
  font-family: 'Lexend Deca', sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;
}
</style>
