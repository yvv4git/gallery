<template>
  <main class="main-content">
    <h2>Main Content</h2>
    <p>This is the main content of the page.</p>
    <ImageGrid :images="images" :columns="3" />
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
        require("@/assets/images/image1.jpg"),
        require("@/assets/images/image1.jpg"),
        require("@/assets/images/image1.jpg"),
        require("@/assets/images/image1.jpg"),
        require("@/assets/images/image1.jpg"),
        require("@/assets/images/image1.jpg"),
      ],
    };
  },
};
</script>

<style scoped>
.main-content {
  padding: 2rem;
  text-align: center;
}
</style>
