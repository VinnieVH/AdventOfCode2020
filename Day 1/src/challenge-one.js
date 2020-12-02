"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const expenses_1 = require("./expenses");
const getResult = (entries) => {
    entries.sort((a, b) => a - b);
    const correctEntries = [];
    for (let index1 = 0; index1 < entries.length && correctEntries.length == 0; index1++) {
        for (let index2 = index1 + 1; index2 < entries.length &&
            correctEntries.length == 0 &&
            entries[index1] + entries[index2] < 2021; index2++)
            if (entries[index1] + entries[index2] === 2020)
                correctEntries.push(entries[index1], entries[index2]);
    }
    const result = correctEntries[0] * correctEntries[1];
    console.log(result);
};
getResult(expenses_1.expenses);
