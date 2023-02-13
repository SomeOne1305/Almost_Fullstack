const express = require("express");
const app = express();
const fs = require("fs");
const port = 8080;
const path = require("path");
const cors = require('cors')


app.use(cors({origin:"*"}))


app.get("/", (req, res) => {
  res.send("hello world");
});
const json = [
  {
    fileName:"Youtubeda video",
    fileUrl:'/file/greeting.txt'
  },
  {
    fileName:"Ingliz tilida kitob",
    fileUrl:"/file/book.pdf"
  }
]
app.get("/file/:name", (req, res) => {
  const file = req.params.name;
  fs.existsSync(path.join(__dirname, file))
    ? res.sendFile(
        file,
        {
          root: path.join(__dirname),
        },
        (err) => {
          if (err) {
            throw err;
          } else {
            console.log("Sent:", file);
          }
        }
      )
    : res.send(
        '<div style="width:100%;display:flex; justify-content:flex-start; flex-direction:column; align-items:center"><img style="max-width:400px; max-height:400px; margin:10px auto;" src="/file/not-found.avif" alt="not-found" /><h1 style="font-size:45px;font-family:"Arial",sans-serif;">404 NOT FOUND</h1></div>'
      );
});
app.get('/api/files',(req,res)=>{
  res.send(json)
})

app.listen(port, () => console.log(`App listening on port ${port}`));
