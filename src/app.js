// console.log("HEllo");
const express = require("express");
const app = express();
// app.use((req,res) =>{//REQUEST HANDLER
//     res.send("HELLO FROM THE SERVER TO THE  USER....");
// });

//this will excutes first and matches with all the api so for every api it excutes
// app.use("/hello",(req,res) =>{//REQUEST HANDLER
//     res.send("HELLO and Namaste");
// });

// app.get("/user",(req,res) =>{//REQUEST HANDLER
//     console.log(req.query)
//     res.send({firstname:"Saloni", lastname:"Parmar"});
// }); => in postman use /user?userId=101

app.get("/user/:userId/:name/:password",(req,res) =>{//REQUEST HANDLER
    console.log(req.params)
    res.send({firstname:"Saloni", lastname:"Parmar"});
});

app.listen(3000,()=>{
    console.log("Server is Listening Successfully on port 3000........");
});