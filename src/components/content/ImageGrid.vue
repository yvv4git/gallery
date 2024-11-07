<template>
  <div class="image-grid" :style="{ gridTemplateColumns: `repeat(${columns}, 1fr)` }">
    <ImageTile v-for="(image, index) in images" :key="index" :imageSrc="image" />
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
  },
};
</script>

<style scoped>
.image-grid {
  display: grid;
  gap: 1rem;
}
</style>
