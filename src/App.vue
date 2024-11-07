<template>
  <div id="app">
    <AppHeader />
    <router-view :cartItems="cartItems" @update-cart="updateCart" />
    <Footer />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import Footer from "./components/AppFooter.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    Footer,
  },
  data() {
    return {
      cartItems: [],
    };
  },
  methods: {
    updateCart(cartItems) {
      this.cartItems = cartItems;
    },
  },
};
</script>

<style>
html,
body,
#app {
  height: 100%;
  margin: 0;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
}
</style>
