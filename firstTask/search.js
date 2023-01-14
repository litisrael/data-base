
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import {getUserById}  from './data.js'
// const input = process.stdin;
// const output = process.stdout;


const rlSearch = readline.createInterface({
    input,
    output,
    terminal: true
  });
console.log("welcome to seach user by id!!!\n");

const askForId = async () => {
  const answer = await   rlSearch.question("write the id of the user you are looking for!\n")
  return getUserById(answer);

};


 const search = await askForId()

rlSearch.close();