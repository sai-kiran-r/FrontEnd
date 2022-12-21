const express = require('express')
const app = express()


const port = 8000
//This is body parser
const bodyParser = require('body-parser');
const routes = require('/Users/kiranreddy/app/routes/routes')

//This will connect the datavbase
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://sai-kiran-r:password123p@cluster0.4pctp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});


mongoose.connection.on("connected", function(){
console.log('DB connected')
})

//routing
routes(app);

// app.get('/', function (req, res) {
//   res.send('This is final test ')
  
// })
// app.listen(3000)


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


