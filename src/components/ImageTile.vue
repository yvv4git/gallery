<template>
  <div class="image-tile" @click="toggleFullscreen">
    <img :src="imageSrc" alt="Image" />
    <div v-if="isFullscreen" class="fullscreen-overlay" @click="toggleFullscreen">
      <img :src="imageSrc" alt="Fullscreen Image" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageTile",
  props: {
    imageSrc: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isFullscreen: false,
    };
  },
  methods: {
    toggleFullscreen() {
      this.isFullscreen = !this.isFullscreen;
      if (this.isFullscreen) {
        document.addEventListener("keydown", this.handleKeydown);
      } else {
        document.removeEventListener("keydown", this.handleKeydown);
      }
    },
    handleKeydown(event) {
      if (event.key === "Escape") {
        this.toggleFullscreen();
      }
    },
  },
};
</script>

<style scoped>
.image-tile {
  cursor: pointer;
}

.image-tile img {
  width: 100%;
  height: auto;
  display: block;
}

.fullscreen-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.fullscreen-overlay img {
  max-width: 90%;
  max-height: 90%;
}
</style>
