
const path = require('path')
const express = require('express')

const app = express()
const port = process.env.PORT || 3000

// //Data parsing
// app.use(express.urlencoded({
//     extended:false
// }));
// app.use(express.json());

// app.post('/email',(req,res)=> {
//     //TODO:
//     //send email here
//     res.json({message:'Message Receives!'})
// });

const publicDirectoryPath = path.join(__dirname, '../public')
console.log(publicDirectoryPath)

app.use(express.static(publicDirectoryPath))

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})