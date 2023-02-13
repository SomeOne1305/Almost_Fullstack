const fs = require('fs')
fs.readFile(__dirname + '/greeting.txt',(err, data)=>{
    if(err) throw err
    console.log(Buffer.from(data).toString());
})