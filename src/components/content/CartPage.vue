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
    <div class="total-price">Общая сумма: ${{ totalPrice }}</div>
    <router-link to="/checkout" class="checkout-button">Оформить заказ</router-link>
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
  computed: {
    totalPrice() {
      return this.cartItems.reduce((total, item) => total + item.price, 0);
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
  width: 200px;
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

.total-price {
  margin-top: 20px;
  font-size: 1.2rem;
  font-weight: bold;
}

.checkout-button {
  display: inline-block;
  margin-top: 20px;
  background-color: #42b983;
  color: white;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.checkout-button:hover {
  background-color: #35495e;
}
</style>
