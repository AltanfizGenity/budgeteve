import { derived, writable } from "svelte/store";
import { defaultAccountsProto } from "../data/dataLab";
import { formatDateID } from "../utils/date";

export let currentRecords = writable([]);
export let currentAccounts = writable([]);

export let recordsDateSorted = derived(currentRecords, ($currentRecords) => {
  let sortedRecord = new Map();

  let unsorted = $currentRecords.reduce((total, record) => {
    let date = record.date;
    let groupID = formatDateID(date);

    if (!total[groupID]) {
      total[groupID] = [];
    }

    total[groupID].push(record);
    return total;
  }, {});

  let sortedKeys = Object.keys(unsorted).sort((a, b) => Number(b) - Number(a));
  sortedKeys.forEach((key) => {
    sortedRecord.set(key, unsorted[key]);
  });

  return sortedRecord;
});

// LAB: Mock data from data lab
currentAccounts.set(defaultAccountsProto);
