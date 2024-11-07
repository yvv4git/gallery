<template>
  <main class="main-content">
    <h2>Main Content</h2>
    <p>This is the main content of the page.</p>
    <ImageGrid :images="images" :columns="3" @add-to-cart="addToCart" />
  </main>
</template>

<script>
import ImageGrid from "./ImageGrid.vue";

export default {
  name: "GalleryPage",
  components: {
    ImageGrid,
  },
  data() {
    return {
      images: [
        { id: 1, src: require("@/assets/images/image1.jpg"), price: 10.99 },
        { id: 2, src: require("@/assets/images/image1.jpg"), price: 15.99 },
        { id: 3, src: require("@/assets/images/image1.jpg"), price: 12.99 },
        { id: 4, src: require("@/assets/images/image1.jpg"), price: 9.99 },
        { id: 5, src: require("@/assets/images/image1.jpg"), price: 14.99 },
        { id: 6, src: require("@/assets/images/image1.jpg"), price: 11.99 },
      ],
      cartItems: [],
    };
  },
  methods: {
    addToCart(imageId) {
      const image = this.images.find((img) => img.id === imageId);
      if (image) {
        this.cartItems.push(image);
        this.$emit("update-cart", this.cartItems);
      }
    },
  },
};
</script>

<style scoped>
.main-content {
  padding: 2rem;
  text-align: center;
}
</style>