<template>
  <header>
    <h1>Header</h1>
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

.cart-button {
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
}
</style>
