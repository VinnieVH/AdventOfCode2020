import fs from 'fs';
import { RidePattern } from './RidePattern';

const inputs: string[] = fs.readFileSync('input.txt', 'utf8').toString().split("\n");

const patternOne: RidePattern = { xStepValue: 1, yStepValue: 1 };
const patternTwo: RidePattern = { xStepValue: 3, yStepValue: 1 };
const patternThree: RidePattern = { xStepValue: 5, yStepValue: 1 };
const patternFour: RidePattern = { xStepValue: 7, yStepValue: 1 };
const patternFive: RidePattern = { xStepValue: 1, yStepValue: 2 };

const getTreesOnPath = (inputs: string[], pattern: RidePattern): number => {
    const trees = inputs.filter((input, index) => (
        inputs[index * pattern.yStepValue] || "")[(index * pattern.xStepValue) % input.length] === "#").length;
    return trees;
};

console.log(getTreesOnPath(inputs, patternOne) * getTreesOnPath(inputs, patternTwo) * getTreesOnPath(inputs, patternThree) * getTreesOnPath(inputs, patternFour) * getTreesOnPath(inputs, patternFive));