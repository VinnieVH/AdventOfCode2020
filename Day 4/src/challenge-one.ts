import fs from 'fs';

const inputs: string[] = fs.readFileSync('input.txt', 'utf8').toString().split(/\n\s*\n/);

const getValidPassports = (inputs: string[]): number => {
    return inputs.filter(x => x.includes('byr') && x.includes('iyr') && x.includes('eyr') && x.includes('hgt') && x.includes('hcl') && x.includes('ecl') && x.includes('pid')).length;
};
console.log(getValidPassports(inputs));