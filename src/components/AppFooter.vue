<template>
  <footer class="footer">
    <div class="support-button">
      <router-link to="/donate" class="support-link">Поддержать автора</router-link>
    </div>
    <div class="developer-info">
      by <a href="https://example.com" target="_blank">Eliseev V.V.</a> ©
      2024
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>

<style scoped>
.footer {
  background-color: #35495e;
  color: white;
  padding: 1rem;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.support-button {
  margin-right: 1rem;
}

.support-link {
  background-color: #ff7f50;
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.support-link:hover {
  background-color: #ff6347;
}

.developer-info {
  font-size: 0.9rem;
}

.developer-info a {
  color: #42b983;
  text-decoration: none;
}

.developer-info a:hover {
  text-decoration: underline;
}
</style>
