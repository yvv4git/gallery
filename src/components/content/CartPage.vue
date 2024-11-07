<template>
  <div class="cart-page main-content">
    <h2>Cart Page</h2>
    <p>This is the cart page.</p>
    <ul>
      <li v-for="item in cartItems" :key="item.id">
        <img :src="item.src" alt="Cart Image" class="cart-image" />
        <span>{{ item.id }}</span>
        <span> Price: ${{ item.price }}</span>
        <button @click="removeFromCart(item.id)" class="remove-button">Удалить</button>
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
  methods: {
    removeFromCart(imageId) {
      this.$emit("remove-from-cart", imageId);
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
  width: 100px;
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

.remove-button {
  background-color: #ff4d4d;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  margin-left: 10px;
}
</style>
