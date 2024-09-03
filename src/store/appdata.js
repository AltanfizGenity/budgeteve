import { writable } from "svelte/store";
import { defaultAccountsProto } from "../data/dataLab";

export let currentRecords = writable([]);
export let currentAccounts = writable([]);

// LAB: Mock data from data lab
currentAccounts.set(defaultAccountsProto);
