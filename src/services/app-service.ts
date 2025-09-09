import { System } from '@/constants';
import { Locales } from '@/locales/constants';

export const getLocale = (): string => {
  return localStorage.getItem(System.Locale) || Locales.EN;
};

export const setLocale = (locale: string): void => {
  localStorage.setItem(System.Locale, locale);
};
