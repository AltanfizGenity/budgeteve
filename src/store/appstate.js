import { writable } from "svelte/store";

export let currentRoute = writable("account");
export let isRecordFormOpen = writable(false);

// FORM
export let recordTypeValue = writable("income");
