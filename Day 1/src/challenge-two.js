"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const expenses_1 = require("./expenses");
const getResult = (entries) => {
    entries.sort((a, b) => a - b);
    const correctEntries = [];
    for (let index1 = 0; index1 < entries.length && correctEntries.length == 0; index1++) {
        for (let index2 = index1 + 1; index2 < entries.length &&
            correctEntries.length == 0 &&
            entries[index1] + entries[index2] < 2021; index2++) {
            const index3 = entries.findIndex((n) => n === 2020 - (entries[index1] + entries[index2]) && n != index1 && n != index2);
            if (index3 > -1)
                correctEntries.push(entries[index1], entries[index2], entries[index3]);
        }
    }
    const result = correctEntries[0] * correctEntries[1] * correctEntries[2];
    console.log(result);
};
getResult(expenses_1.expenses);
