import React from "react";
import "../css/youtube.css";
import axios from 'axios'
// import prevalPlugin from "babel-plugin-preval";

const Youtube = () => {
  //   const greetingContent = prevalPlugin(`
  //   const fs = require('fs')
  //   module.exports = fs.readFile('../greeting.txt', ()=>{

  //   })
  // `);
  // prevalPlugin()
  //   console.log(greetingContent);
  const [files, setFiles] = React.useState([])
  React.useEffect(()=>{
    (async function (){
      let file = await axios.get('http://localhost:8080/api/files')
      setFiles(file.data)
    })()
  },[])
  console.log(files);
  return (
    <section>
      <div className="container">
        <div className="video">
          <div className="heading">
          <h3 className="content-title">Test file</h3>
          <div className="showInNewPage">
            <a href='/g'>
              SHOW
            </a>
          </div>
          </div>
          <iframe
            width="853"
            height="480"
            src="https://www.youtube.com/embed/jI6wcuY8p2Y"
            title="Storing and Retrieving files in IPFS using NodeJS | ADITYA JOSHI |"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="right-content"></div>
      </div>
      <>{files[0].fileUrl}</>
    </section>
  );
};

export default Youtube;
