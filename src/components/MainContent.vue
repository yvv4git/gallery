<template>
    <main class="main-content">
      <h2>Main Content</h2>
      <p>This is the main content of the page.</p>
      <ImageGrid :images="images" :columns="3" />
    </main>
  </template>
  
  <script>
  import ImageGrid from './ImageGrid.vue';
  
  export default {
    name: 'MainContent',
    components: {
      ImageGrid
    },
    data() {
      return {
        images: [
          'https://via.placeholder.com/150',
          'https://via.placeholder.com/150',
          'https://via.placeholder.com/150',
          'https://via.placeholder.com/150',
          'https://via.placeholder.com/150',
          'https://via.placeholder.com/150'
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .main-content {
    padding: 2rem;
    text-align: center;
  }
  </style>