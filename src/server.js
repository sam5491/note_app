// importing
const exp = require('express')
 require('dotenv').config()
const cors = require('cors')
const noteRoute=require("./routes/notesRoutes")
const helmet=require('helmet')
//2.Initializing/invoking/calling express object/function
const app=exp();

//use of cors
app.use(cors())
// use of helmet
app.use(helmet())
//All routes
//app.use("/notes",noteRouter)
//3.define port and host
const port = process.env.port
const host = process.env.host

// 4. root endpoint
// app which is the invocation of expess() has a properties of all methods
//(get,post,put/patch and delete)
app.get('/',(req,res) => {
    //return res.send('you have hit that root endpoint')
    return res.status(200).json({
        message:'Welcome to the Note App Project APIS'
    })

});
//All notes
app.use("/notes",noteRoute);

app.use(ex)
// when a request not found
app.get("*",(req,res) => {
 
    return res.status(404).json({
        message:'Not Found!'
    })

});
//5. listening to server
app.listen(port,host, () => {
    console.log(`Server is running at ${host}:${port}`)
})

