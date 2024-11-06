<template>
  <div id="app">
    <Header />
    <MainContent />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import MainContent from "./components/MainContent.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    MainContent,
    Footer,
  },
};
</script>

<style>
html,
body,
#app {
  height: 100%;
  margin: 0;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
}
</style>
