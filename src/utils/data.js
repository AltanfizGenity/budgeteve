import { currentAccounts, currentRecords } from "../store/appdata";

export function updateRecordData(newRecord) {
  updateRecordsHistory(newRecord);
  updateAccounts(newRecord);
}

function updateRecordsHistory(newRecord) {
  currentRecords.update((current) => [...current, newRecord]);
}

function updateAccounts(newRecord) {
  currentAccounts.update((current) => {
    current.forEach((account) => {
      if (account.name === newRecord.account) {
        account.amount += Number(newRecord.amount);
        return;
      }
    });
    return current;
  });
}
