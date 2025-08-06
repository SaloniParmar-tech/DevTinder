// console.log("HEllo");
const express = require("express");
const app = express();
app.use((req,res) =>{//REQUEST HANDLER
    res.send("HELLO FROM THE SERVER TO THE  USER....");
});

app.listen(3000,()=>{
    console.log("Server is Listening Successfully on port 3000........");
});