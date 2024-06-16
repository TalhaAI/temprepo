const {readFileSync, writeFileSync} = require('fs');

console.log('start')
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');


// Correct usage
writeFileSync(
    './content/result-sync.txt',
    `Here is the result: ${first} ${second}`,
    {flag:'a'} //overwrite to the content
);

console.log('Done with this synchronous task')
console.log('Starting the next one asynchronous task')


const { readFile, writeFile } = require('fs');

console.log("Starting this async task")
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result;
        writeFile('./content/result-async.txt',
            `Here is the result : ${first}, ${second}`,
            (err) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log('File written successfully');
                console.log("Async task completed")
            }
        );
    });
});

console.log("Moving nexto the async task")