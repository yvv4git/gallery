<template>
  <div class="main-page">
    <div class="image-circle">
      <img :src="imageSrc" alt="Main Image" />
    </div>
  </div>
</template>

<script>
export default {
  name: "MainPage",
  data() {
    return {
      imageSrc: require("@/assets/images/main-image.jpg"),
    };
  },
};
</script>

<style scoped>
.main-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 2rem;
}

.image-circle {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 2rem;
}

.image-circle img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
