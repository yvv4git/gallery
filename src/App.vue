<template>
  <div id="app">
    <AppHeader />
    <router-view
      :cartItems="cartItems"
      @update-cart="updateCart"
      @remove-from-cart="removeFromCart"
    />
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
      localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
    },
    removeFromCart(imageId) {
      this.cartItems = this.cartItems.filter((item) => item.id !== imageId);
      localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
    },
    loadCartItems() {
      const cartItems = localStorage.getItem("cartItems");
      if (cartItems) {
        this.cartItems = JSON.parse(cartItems);
      }
    },
  },
  created() {
    this.loadCartItems();
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
