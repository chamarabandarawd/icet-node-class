
const fs =require('fs');

const log = (message)=>{
    fs.appendFile("samle.log","\n"+message,(err)=>err? console.log(err) : null);
}

module.exports.info=log;