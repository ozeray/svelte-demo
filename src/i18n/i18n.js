import { derived, writable } from 'svelte/store';
import translations from '../i18n/translations';

export const dict = writable();

let storedLocale = localStorage.getItem('locale');

export const locale = writable(storedLocale || navigator.language);
locale.subscribe(l => {
    localStorage.setItem('locale', l);
});

$: dict.set(translations);

const localizedDict = derived([dict, locale], ([$dict, $locale]) => {
    if (!$dict || !$locale) return;
    return $dict[$locale];
});
  
const getMessageFromLocalizedDict = (id, ld) => {
    const splitId = id.split('.');
    let message = {...ld};
    splitId.forEach(partialId => {
        message = message[partialId];
    });
    return message;
};

const createMessageFormatter = (ld) => (id) => getMessageFromLocalizedDict(id, ld);

export const t = derived(localizedDict, ($localizedDict) => {
    return createMessageFormatter($localizedDict);
});

