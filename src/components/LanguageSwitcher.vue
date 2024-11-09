<template>
  <div class="language-switcher">
    <button
      v-for="locale in availableLocales"
      :key="locale"
      @click="changeLocale(locale)"
      :class="{ active: locale === currentLocale }"
    >
      {{ locale.toUpperCase() }}
    </button>
  </div>
</template>

<script>
export default {
  name: "LanguageSwitcher",
  computed: {
    currentLocale() {
      return this.$i18n.locale;
    },
    availableLocales() {
      return this.$i18n.availableLocales;
    },
  },
  methods: {
    changeLocale(locale) {
      this.$i18n.locale = locale;
    },
  },
};
</script>

<style scoped>
.language-switcher {
  display: flex;
  gap: 0.5rem;
}

.language-switcher button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.language-switcher button:hover {
  background-color: #35495e;
}

.language-switcher button.active {
  background-color: #35495e;
}
</style>
