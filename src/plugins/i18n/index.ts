import Vue from 'vue';
import VueI18n from 'vue-i18n';
import en from './en';
import ja from './ja';

Vue.use(VueI18n);

const messages = { en, ja };

const i18n = new VueI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages,
});

export default i18n;
