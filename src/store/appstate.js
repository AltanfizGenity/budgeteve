import { writable } from "svelte/store";

export let currentRoute = writable("records");
export let isRecordFormOpen = writable(false);
