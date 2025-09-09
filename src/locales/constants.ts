interface LanguageType {
  value: string;
  label: string;
  icon?: string;
}

export enum Locales {
  EN = 'en',
  KM = 'km'
}

export const LOCALE_KEYS = [Locales.EN, Locales.KM];

export const LANGUAGES: LanguageType[] = [
  {
    value: Locales.EN,
    label: 'English'
  },
  {
    value: Locales.KM,
    label: 'ភាសាខ្មែរ'
  }
];
