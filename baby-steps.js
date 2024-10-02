console.log(
    process.argv.slice(2).map(x => Number(x)).reduce((accumalator, currentValue) => accumalator + currentValue)
);