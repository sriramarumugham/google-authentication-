require('dotenv').config();

const express=require('express');
const cors=require('cors');
const PORT=process.env.PORT || 8000;
const app=express();
app.use(cors());



app.listen(PORT, (err)=>{if(!err){console.log("App runnig on port", PORT)}});


