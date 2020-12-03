import fs from 'fs';
import { DbObject } from './DbObject';
import { PartTwoPolicy as Policy } from './Policy';

const inputs: string[] = fs.readFileSync('input.txt', 'utf8').toString().split("\n");

// split policy and password
const getDbObject = (dbLine: string): DbObject => {
    const result = dbLine.split(':');

    return { policy: result[0].trim(), password: result[1].trim() };
};

// function to find out policy for specific item
const getPolicy = (policyString: string): Policy => {
    // split the policy into letter and amount
    const letter = policyString.split(" ")[1];
    const amount = policyString.split(" ")[0].split("-");
    const firstPosition = parseInt(amount[0]);
    const secondPosition = parseInt(amount[1]);

    return { letter, firstPosition, secondPosition };
};

// function to check if password matches policy
const comparePwToPolicy = (policy: Policy, password: string): boolean => {
    //check on what positions the letter is present
    const ocurrences = [];
    for (let i = 0; i < password.length; i++) {
        if(password[i] === policy.letter) ocurrences.push(i+1);
    }

    if(ocurrences.length > 0) {
        if(ocurrences.includes(policy.firstPosition) && ocurrences.includes(policy.secondPosition)) return false;
        if(ocurrences.includes(policy.firstPosition) || ocurrences.includes(policy.secondPosition)) return true;
        return false;
    }
    return false;
};

// loop over all inputs and find out if pw is valid or not and return amount of valid pws
const getValidPasswords = (inputs: string[]): number => {
    let valid = 0;
    inputs.forEach(str => {
        const DbObject = getDbObject(str);
        const policy = getPolicy(DbObject.policy);
        const isValidPw = comparePwToPolicy(policy, DbObject.password);

        // if password matches the policy increase numberOfValidPasswords by 1
        if (isValidPw) valid++;
    })

    return valid;
};

const ValidPasswords = getValidPasswords(inputs);
console.log(ValidPasswords);