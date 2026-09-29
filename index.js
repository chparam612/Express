const express = require("express");

const app = express();

// console.dir(app); 

let port = 3000;
app.listen(port, ()=>{
    console.log(`App is listening on port: ${port}`);
} )

// app.use((req,res) =>{
//     // console.log(res);
//     console.log("new response received");
//      res.send("this is a basic response");
// })

// app.use((req,res) =>{ 
//     console.log("new response received");
//      res.send({
//         name:"apple",
//         color:"red"
//      });
// })

// app.use((req,res) =>{ 
//     console.log("new response received");
//      res.send(
//        "<h1> Fruits </h1> <ul><li>orange</li><li>orange</li></ul>"
//      );
// })

app.get("/",(req,res)=>{
    res.send("Home page");
});

// app.get("/apple",(req,res)=>{
//     res.send({
//         name:"Apple",
//         color:"Red"
//     });
// });

// app.get("/orange",(req,res)=>{
//     res.send({ 
//         name:"Orange",
//         color:"orange"
//     });
// });

// app.get('/{*splat}',(req,res)=>{
//     res.send("This page have no entry point to aany path");
// });

// app.post('/',(req,res)=>{
//     res.send("This page contactacted using the post method");
// });

// app.get("/:username/:id",(req,res) => {
//     console.log(req.params);
//     res.send("Hello i am root");
// })

// app.get("/:username/:id",(req,res) => {
//    let {username, id} = req.params;
//    let str = `Hello i am root, welcome@${username}!`;
//     res.send(str);
// })

// app.get("/search",(req,res)=>{
//     console.log(req.query);
//     res.send("No results");
// })

// app.get("/search",(req,res)=>{
//    let {q} = (req.query);
//     res.send(`These are the search resultsfor query :${q}.`);
// })

app.get("/search",(req,res)=>{
   let {q} = (req.query);
   if(!q){
    res.send("<h1>Nothing Searched</h1>");
   }
    res.send(`<h1>These are the search resultsfor query :${q}.</h1>`);
})