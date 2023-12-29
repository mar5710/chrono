import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
	resources: {
		ru: {
			translation: {
				Home: 'Главный',
				Shope: 'Продукты',
				About: "О Нас",
				EXPLORE: 'Исследовать',
				'PREMIUM MODEL': 'Премиум модель',
				'Stylish external wrist watch': 'Стильные внешние наручные часы',
				'FALL IN LOVE': '',
				'Redefining the meaning of time': 'Переосмысление значения времени',
				'SECRET NEW MODELS': 'СЕКРЕТНЫЕ НОВЫЕ МОДЕЛИ',
				'Priceless and timeless designs':
					'Бесценный и неподвластный времени дизайн',
				'Romance in the air': 'Романтика витает в воздухе',
				'WEAR YOUR STYLE WITH VERVE & ATTITUDE':
					'НОСИТЕ СВОЙ СТИЛЬ С ВООДУШЕВЛЕНИЕМ И НАСТРОЕМ',
				'Analog & Digital': 'Аналоговый и цифровой',
				'SMART WATCHES LATEST FASHION STATEMENT':
					'УМНЫЕ ЧАСЫ - ПОСЛЕДНЕЕ ЗАЯВЛЕНИЕ МОДЫ',
				'ROMAN OR NUMERAL?': 'РИМСКАЯ ИЛИ ЦИФРОВАЯ?',
				'The Watches We Sell Are Original And Vendor Certified For A Peerless Performance!':
					'Часы, Которые Мы Продаем, Являются Оригинальными И Сертифицированы Производителем Для Обеспечения Непревзойденной Производительности!',
				'uis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, uis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.uis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget':
					'юис Лео. Седмица фрингилья маурис сидит амет нибх. Донец содалес сагиттис магна. Седмица консекват, лео, например, бибендум содалес, юис Лео. Седмица фрингилья маурис сидит амет нибх. Донец содалес сагиттис великий. Сед консекват, Лео эгет. Донец содалес сагиттис великий. Сед консекват, Лео эгет, бибендум содалес, август великий курсус нунций.Это Лев. Сед фрингилья маурис сит амет нибх. Донец содалес сагиттис магна. Сед консекват, Лео эгет',
				
			},
		},
	},
	lng: 'en',
	fallbackLng: 'en',
})

export default i18n