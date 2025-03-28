console.log("we can .");

const fs = require("fs");
fs.writeFile("output,txt","writing file that we can",(err)=> {if (err) console.log("Error occured");
    else console.log('File written successfully');
});

