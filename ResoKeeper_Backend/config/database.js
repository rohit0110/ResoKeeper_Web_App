const mysql=require('mysql');

//CREATE CONNECTION
const db=mysql.createConnection({
  host:'localhost',
  user:'resokeeper',
  password:'kz28DMv/5DW/-GW',
  database: 'ResoKeeper_Database'
});

//CONNECT
db.connect((err)=>{
    if(err){
      throw err;
    }
    console.log("MySQL connected");
  });
  
module.exports=db;