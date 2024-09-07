import { writable } from "svelte/store";

export let currentRoute = writable("records");
export let isRecordFormOpen = writable(false);

// FORM
export let recordTypeValue = writable("income");
