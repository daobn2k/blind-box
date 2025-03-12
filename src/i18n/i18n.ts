// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

// You can use your custom language resources instead of backend if preferred
// Example:
// import translationEN from './locales/en/translation.json';
// import translationFR from './locales/fr/translation.json';

i18n
	.use(initReactI18next) // Passes i18n down to react-i18next
	.use(LanguageDetector) // Detects user language
	.use(HttpApi) // Loads translations from your server
	.init({
		// Fallback language if the user language is not available
		fallbackLng: 'en-US',
		// Debugging
		debug: true,
		// Loading path for translations
		backend: {
			loadPath: '/locales/{{lng}}/{{ns}}.json', // Path to your translation files
		},
		interpolation: {
			escapeValue: false, // React already escapes values
		},
	});

export default i18n;
