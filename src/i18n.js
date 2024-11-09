import { createI18n } from 'vue-i18n';
import en from './locales/en.json';
import ru from './locales/ru.json';

const messages = {
    en,
    ru
};

const i18n = createI18n({
    locale: 'ru', // установите язык по умолчанию
    fallbackLocale: 'en', // установите резервный язык
    messages
});

export default i18n;