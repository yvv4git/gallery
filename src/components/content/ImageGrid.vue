<template>
  <div class="image-grid" :style="{ gridTemplateColumns: `repeat(${columns}, 1fr)` }">
    <ImageTile
      v-for="image in images"
      :key="image.id"
      :imageSrc="image.src"
      :imageId="image.id"
      :price="image.price"
      :isInCart="isInCart(image.id)"
      @add-to-cart="handleAddToCart"
    />
  </div>
</template>

<script>
import ImageTile from "./ImageTile.vue";

export default {
  name: "ImageGrid",
  components: {
    ImageTile,
  },
  props: {
    images: {
      type: Array,
      required: true,
    },
    columns: {
      type: Number,
      default: 3,
    },
    cartItems: {
      type: Array,
      required: true,
    },
  },
  methods: {
    handleAddToCart(imageId) {
      this.$emit("add-to-cart", imageId);
    },
    isInCart(imageId) {
      return this.cartItems.some((item) => item.id === imageId);
    },
  },
};
</script>

<style scoped>
.image-grid {
  display: grid;
  gap: 1rem;
}
</style>
