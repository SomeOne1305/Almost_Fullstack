const fs = require('fs')
const http = require("http");
const file = 'greeting.txt'

http.get("http://localhost:8080/file/greeting.txt", response => {
    response.pipe(file);
});
fs.readFile(file,(err,data)=>{
    if (err) {
        throw err
    } else {
        console.log(data);
    }
})