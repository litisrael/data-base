import * as readline from 'node:readline/promises';
import { writeFile } from 'node:fs';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

const answer = await rl.question('What do you think of Node.js? ');

console.log(`Thank you for your valuable feedback: ${answer}`);

rl.close();

writeFile('./info.txt',answer + "\n",{
flag: 'a'
},(err)=>{
    if(err){
        console.log(err)
        exit(1) 
    }})