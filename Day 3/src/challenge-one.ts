import fs from 'fs';
import { RidePattern } from './RidePattern';

const inputs: string[] = fs.readFileSync('input.txt', 'utf8').toString().split("\n");
const ridePattern: RidePattern = {xStepValue: 3, yStepValue: 1};

const getTreesOnPath = (inputs: string[]) : number => {
    return inputs.filter((input, index) => (inputs[index * ridePattern.yStepValue] || "")[(index * ridePattern.xStepValue) % input.length] === "#").length;
};

const result = getTreesOnPath(inputs);
console.log(result);