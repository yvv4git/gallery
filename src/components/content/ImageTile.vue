<template>
  <div class="image-tile" @click="toggleFullscreen">
    <img :src="imageSrc" alt="Image" />
    <div v-if="isFullscreen" class="fullscreen-overlay" @click="toggleFullscreen">
      <img :src="imageSrc" alt="Fullscreen Image" />
    </div>
    <div class="price">Price: ${{ price }}</div>
    <button @click.stop="addToCart" class="add-to-cart-button" :disabled="isInCart">
      {{ isInCart ? "В корзине" : "Добавить в корзину" }}
    </button>
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
    imageId: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    isInCart: {
      type: Boolean,
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
    addToCart() {
      if (!this.isInCart) {
        this.$emit("add-to-cart", this.imageId);
      }
    },
  },
};
</script>

<style scoped>
.image-tile {
  cursor: pointer;
  position: relative;
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

.price {
  text-align: center;
  margin-top: 5px;
  font-size: 1rem;
  color: #333;
}

.add-to-cart-button {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #42b983;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}

.add-to-cart-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
