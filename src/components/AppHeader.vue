<template>
  <header>
    <h1>Header</h1>
    <router-link to="/" class="main-button">Main</router-link>
    <router-link to="/gallery" class="gallery-button">Gallery</router-link>
    <router-link to="/cart" class="cart-button">Cart</router-link>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style scoped>
header {
  background-color: #42b983;
  color: white;
  padding: 1rem;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.main-button,
.gallery-button,
.cart-button {
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  margin-left: 1rem;
}
</style>
