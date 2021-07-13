import { persist, cookieStorage } from "@macfja/svelte-persistent-store"
import { writable } from 'svelte/store';

export const showImageModal = writable(false);
export const indexLoaded = writable(false);
export const cookieModalClosed = persist(writable(false), cookieStorage(), 'cookieModalClosed');