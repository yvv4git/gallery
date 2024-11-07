<template>
  <div class="cart-page">
    <h2>Cart Page</h2>
    <p>This is the cart page.</p>
    <ul>
      <li v-for="item in cartItems" :key="item.id">
        <img :src="item.src" alt="Cart Image" class="cart-image" />
        <span>{{ item.id }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CartPage",
  props: {
    cartItems: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.cart-page {
  padding: 2rem;
  text-align: center;
}

.cart-image {
  width: 50px;
  height: auto;
  margin-right: 10px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
</style>
